// Copyright Epic Games, Inc. All Rights Reserved.

#include "SlateViewerApp.h"
#include "RequiredProgramMainCPPInclude.h"
#include "Framework/Application/SlateApplication.h"
#include "SConstraintCanvas.h"
#include "SImage.h"


IMPLEMENT_APPLICATION(GameLauncher, "GameLauncher");

#define LOCTEXT_NAMESPACE "GameLauncher"

int RunSlateViewer( const TCHAR* CommandLine )
{

	FTaskTagScope TaskTagScope(ETaskTag::EGameThread);	

	// start up the main loop
	GEngineLoop.PreInit(CommandLine);

	// Make sure all UObject classes are registered and default properties have been initialized
	ProcessNewlyLoadedUObjects();
	
	// Tell the module manager it may now process newly-loaded UObjects when new C++ modules are loaded
	FModuleManager::Get().StartProcessingNewlyLoadedObjects();


	// crank up a normal Slate application using the platform's standalone renderer
	FSlateApplication::InitializeAsStandaloneApplication(GetStandardStandaloneRenderer());

	FSlateApplication::InitHighDPI(true);

	TSharedPtr<SWindow> MainWindow = SNew(SWindow)
		.Title(FText::FromString("GameLauncher"))
		.SizingRule(ESizingRule::FixedSize)
		.ClientSize(FVector2D(1920, 1080.f))
		.AutoCenter(EAutoCenter::PreferredWorkArea)
		.ShouldPreserveAspectRatio(true)
		.UseOSWindowBorder(true)
		.SupportsMinimize(false);

	TSharedPtr<SImage> WindowBG = SNew(SImage);
	WindowBG->SetColorAndOpacity(FLinearColor::Gray);

	TSharedPtr<SConstraintCanvas> MainCanvas = SNew(SConstraintCanvas)
		+ SConstraintCanvas::Slot()
		.Anchors(FAnchors(0.f, 0.f, 1.f, 1.f))
		.Offset(FMargin())
		.AutoSize(true)
		[
			WindowBG.ToSharedRef()
		];

	MainWindow->SetContent(MainCanvas.ToSharedRef());


	FSlateApplication::Get().AddWindow(MainWindow.ToSharedRef());

	// loop while the server does the rest
	while (!IsEngineExitRequested())
	{
		BeginExitIfRequested();

		FTaskGraphInterface::Get().ProcessThreadUntilIdle(ENamedThreads::GameThread);
		FStats::AdvanceFrame(false);
		FTSTicker::GetCoreTicker().Tick(FApp::GetDeltaTime());
		FSlateApplication::Get().PumpMessages();
		FSlateApplication::Get().Tick();		
		FPlatformProcess::Sleep(0.01);
	
		GFrameCounter++;
	}

	FCoreDelegates::OnExit.Broadcast();
	FSlateApplication::Shutdown();
	FModuleManager::Get().UnloadModulesAtShutdown();

	GEngineLoop.AppPreExit();
	GEngineLoop.AppExit();

	return 0;
}


#undef LOCTEXT_NAMESPACE

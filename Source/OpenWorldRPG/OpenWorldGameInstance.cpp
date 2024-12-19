// Fill out your copyright notice in the Description page of Project Settings.


#include "OpenWorldGameInstance.h"

using namespace PUERTS_NAMESPACE;

void UOpenWorldGameInstance::OnStart()
{
	Super::OnStart();

    JsEnvInstance = MakeShared<puerts::FJsEnv>(std::make_unique<puerts::DefaultJSModuleLoader>(TEXT("JavaScript")), std::make_shared<puerts::FDefaultLogger>(), 8080);
    if (bWaitForDebugger)
    {
        JsEnvInstance->WaitDebugger();
    }

    TArray<TPair<FString, UObject*>> Arguments;
    Arguments.Add(TPair<FString, UObject*>(TEXT("GameInstance"), this));
    JsEnvInstance->Start("QuickStart", Arguments);

}

void UOpenWorldGameInstance::Shutdown()
{
    Super::Shutdown();

    JsEnvInstance.Reset();
}

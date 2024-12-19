// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "Kismet/BlueprintPlatformLibrary.h"
#include "JsEnv.h"

#include "OpenWorldGameInstance.generated.h"

/**
 * 
 */
UCLASS()
class OPENWORLDRPG_API UOpenWorldGameInstance : public UPlatformGameInstance
{
	GENERATED_BODY()
	
public:

	virtual void OnStart() override;	

	virtual void Shutdown() override;
	
protected:

	TSharedPtr<PUERTS_NAMESPACE::FJsEnv> JsEnvInstance;

	UPROPERTY(EditAnywhere)
	bool bWaitForDebugger = false;
};

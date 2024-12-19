// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "Kismet/BlueprintFunctionLibrary.h"
#include "GameUtilsLibrary.generated.h"

/**
 * 
 */
UCLASS()
class UGameUtilsLibrary : public UBlueprintFunctionLibrary
{
	GENERATED_BODY()
	
public:

	UFUNCTION(BlueprintCallable)
	static int32 DoesPackageExist(const FString& InPackageName);
	
	UFUNCTION(BlueprintCallable)
	static int32 QueryAssetRegidtry(const FString& InPackageName);
};

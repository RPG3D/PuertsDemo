// Fill out your copyright notice in the Description page of Project Settings.


#include "GameUtilsLibrary.h"
#include "AssetRegistry/IAssetRegistry.h"


int32 UGameUtilsLibrary::DoesPackageExist(const FString& InPackageName)
{
	return FPackageName::DoesPackageExist(InPackageName);
}

int32 UGameUtilsLibrary::QueryAssetRegidtry(const FString& InPackageName)
{
	TArray<FAssetData> OutAssetData;
	IAssetRegistry::Get()->GetAssetsByPackageName(FName(*InPackageName), OutAssetData);
	return OutAssetData.Num();
}

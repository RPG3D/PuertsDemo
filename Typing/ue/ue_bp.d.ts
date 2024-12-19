/// <reference path="puerts.d.ts" />
declare module "ue" {
    import {$Ref, $Nullable} from "puerts"

    import * as cpp from "cpp"

    import * as UE from "ue"

// __TYPE_DECL_START: 8D68E3444C3222F12CEC52B6683C7758
    namespace Game.Startup.BP_StartupMode {
        class BP_StartupMode_C extends UE.GameModeBase {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            DefaultSceneRoot: UE.SceneComponent;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): BP_StartupMode_C;
            static Load(InName: string): BP_StartupMode_C;
        
            __tid_BP_StartupMode_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 7039B05849D8251246A631AD3182E7FD
    namespace Game.Patch.BP_NewCharacter {
        class BP_NewCharacter_C extends UE.Character {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): BP_NewCharacter_C;
            static Load(InName: string): BP_NewCharacter_C;
        
            __tid_BP_NewCharacter_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 36AB8BA24C466BDD1445B69BB887D089
    namespace Game.ParagonShinbi.Characters.Heroes.Shinbi.Shinbi_AnimBlueprint {
        class AnimBlueprintGeneratedMutableData extends UE.AnimBlueprintMutableData {
            constructor();
            constructor(__FloatProperty: number, __BoolProperty_0: boolean, __FloatProperty_1: number, __FloatProperty_2: number);
            __FloatProperty: number;
            __BoolProperty_0: boolean;
            __FloatProperty_1: number;
            __FloatProperty_2: number;
            /**
             * @deprecated use StaticStruct instead.
             */
            static StaticClass(): ScriptStruct;
            static StaticStruct(): ScriptStruct;
            __tid_AnimBlueprintGeneratedMutableData_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 36AB8BA24C466BDD1445B69BB887D089
    namespace Game.ParagonShinbi.Characters.Heroes.Shinbi.Shinbi_AnimBlueprint {
        class Shinbi_AnimBlueprint_C extends UE.AnimInstance {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            __AnimBlueprintMutables: UE.Game.ParagonShinbi.Characters.Heroes.Shinbi.Shinbi_AnimBlueprint.AnimBlueprintGeneratedMutableData;
            AnimBlueprintExtension_PropertyAccess: UE.AnimSubsystemInstance;
            AnimBlueprintExtension_Base: UE.AnimSubsystemInstance;
            AnimGraphNode_Root: UE.AnimNode_Root;
            AnimGraphNode_TransitionResult_10: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_9: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_8: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_7: UE.AnimNode_TransitionResult;
            AnimGraphNode_SequencePlayer_6: UE.AnimNode_SequencePlayer;
            AnimGraphNode_UseCachedPose_6: UE.AnimNode_UseCachedPose;
            AnimGraphNode_ApplyAdditive: UE.AnimNode_ApplyAdditive;
            AnimGraphNode_StateResult_9: UE.AnimNode_StateResult;
            AnimGraphNode_TransitionResult_6: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_5: UE.AnimNode_TransitionResult;
            AnimGraphNode_SequencePlayer_5: UE.AnimNode_SequencePlayer;
            AnimGraphNode_StateResult_8: UE.AnimNode_StateResult;
            AnimGraphNode_SequencePlayer_4: UE.AnimNode_SequencePlayer;
            AnimGraphNode_StateResult_7: UE.AnimNode_StateResult;
            AnimGraphNode_SequencePlayer_3: UE.AnimNode_SequencePlayer;
            AnimGraphNode_StateResult_6: UE.AnimNode_StateResult;
            AnimGraphNode_StateMachine_2: UE.AnimNode_StateMachine;
            AnimGraphNode_StateResult_5: UE.AnimNode_StateResult;
            AnimGraphNode_UseCachedPose_5: UE.AnimNode_UseCachedPose;
            AnimGraphNode_StateResult_4: UE.AnimNode_StateResult;
            AnimGraphNode_StateMachine_1: UE.AnimNode_StateMachine;
            AnimGraphNode_Slot: UE.AnimNode_Slot;
            AnimGraphNode_SaveCachedPose_3: UE.AnimNode_SaveCachedPose;
            AnimGraphNode_UseCachedPose_4: UE.AnimNode_UseCachedPose;
            AnimGraphNode_TransitionResult_4: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_3: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_2: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_1: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult: UE.AnimNode_TransitionResult;
            AnimGraphNode_SequencePlayer_2: UE.AnimNode_SequencePlayer;
            AnimGraphNode_StateResult_3: UE.AnimNode_StateResult;
            AnimGraphNode_SequencePlayer_1: UE.AnimNode_SequencePlayer;
            AnimGraphNode_StateResult_2: UE.AnimNode_StateResult;
            AnimGraphNode_BlendSpacePlayer: UE.AnimNode_BlendSpacePlayer;
            AnimGraphNode_StateResult_1: UE.AnimNode_StateResult;
            AnimGraphNode_SequencePlayer: UE.AnimNode_SequencePlayer;
            AnimGraphNode_StateResult: UE.AnimNode_StateResult;
            AnimGraphNode_StateMachine: UE.AnimNode_StateMachine;
            AnimGraphNode_SaveCachedPose_2: UE.AnimNode_SaveCachedPose;
            AnimGraphNode_SaveCachedPose_1: UE.AnimNode_SaveCachedPose;
            AnimGraphNode_LayeredBoneBlend: UE.AnimNode_LayeredBoneBlend;
            AnimGraphNode_UseCachedPose_3: UE.AnimNode_UseCachedPose;
            AnimGraphNode_UseCachedPose_2: UE.AnimNode_UseCachedPose;
            AnimGraphNode_BlendListByBool: UE.AnimNode_BlendListByBool;
            AnimGraphNode_UseCachedPose_1: UE.AnimNode_UseCachedPose;
            AnimGraphNode_SaveCachedPose: UE.AnimNode_SaveCachedPose;
            AnimGraphNode_LocalToComponentSpace: UE.AnimNode_ConvertLocalToComponentSpace;
            AnimGraphNode_LegIK: UE.AnimNode_LegIK;
            AnimGraphNode_ComponentToLocalSpace: UE.AnimNode_ConvertComponentToLocalSpace;
            AnimGraphNode_RotationOffsetBlendSpace: UE.AnimNode_RotationOffsetBlendSpace;
            AnimGraphNode_UseCachedPose: UE.AnimNode_UseCachedPose;
            Speed: number;
            IsInAir: boolean;
            Pitch: number;
            Roll: number;
            Yaw: number;
            RotationLastTick: UE.Rotator;
            YawDelta: number;
            IsAccelerating: boolean;
            Character: UE.Object;
            isAttacking: boolean;
            CurrentAttack: number;
            FullBody: boolean;
            AnimGraph(AnimGraph: $Ref<UE.PoseLink>) : void;
            AnimNotify_ResetCombo() : void;
            AnimNotify_SaveAttack() : void;
            Attacking_Event_0() : void;
            /*
             *Executed when begin play is called on the owning component
             */
            BlueprintBeginPlay() : void;
            /*
             *Executed when the Animation is initialized
             */
            BlueprintInitializeAnimation() : void;
            /*
             *Executed when the Animation is updated
             */
            BlueprintUpdateAnimation(DeltaTimeX: number) : void;
            EvaluateGraphExposedInputs_ExecuteUbergraph_Shinbi_AnimBlueprint_AnimGraphNode_BlendListByBool_AADA097749B3F5C14440468E0CAC7DB5() : void;
            EvaluateGraphExposedInputs_ExecuteUbergraph_Shinbi_AnimBlueprint_AnimGraphNode_BlendSpacePlayer_2FB5B9014818369DCF7914A3B0192D60() : void;
            EvaluateGraphExposedInputs_ExecuteUbergraph_Shinbi_AnimBlueprint_AnimGraphNode_TransitionResult_11349F5F446BFB5AD96066BC3B5996E4() : void;
            ExecuteUbergraph_Shinbi_AnimBlueprint(EntryPoint: number) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Shinbi_AnimBlueprint_C;
            static Load(InName: string): Shinbi_AnimBlueprint_C;
        
            __tid_Shinbi_AnimBlueprint_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: C6733CEC4DC45877D15551BFCDFDF163
    namespace Game.ParagonShinbi.Characters.Heroes.Shinbi.ShinbiPlayerCharacter {
        class ShinbiPlayerCharacter_C extends UE.Character {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            FollowCamera: UE.CameraComponent;
            CameraBoom: UE.SpringArmComponent;
            BaseTurnRate: number;
            BaseLookUpRate: number;
            Attacking: $MulticastDelegate<() => void>;
            SaveAttack: boolean;
            IsAttacking: boolean;
            AttackCount: number;
            Attacking__DelegateSignature() : void;
            ComboAttackSave() : void;
            ExecuteUbergraph_ShinbiPlayerCharacter(EntryPoint: number) : void;
            InpActEvt_Gamepad_FaceButton_Left_K2Node_InputKeyEvent_0(Key: UE.Key) : void;
            InpActEvt_Jump_K2Node_InputActionEvent_0(Key: UE.Key) : void;
            InpActEvt_Jump_K2Node_InputActionEvent_1(Key: UE.Key) : void;
            InpActEvt_LeftMouseButton_K2Node_InputKeyEvent_1(Key: UE.Key) : void;
            InpAxisEvt_LookUp_K2Node_InputAxisEvent_40(AxisValue: number) : void;
            InpAxisEvt_LookUpRate_K2Node_InputAxisEvent_53(AxisValue: number) : void;
            InpAxisEvt_MoveForward_K2Node_InputAxisEvent_79(AxisValue: number) : void;
            InpAxisEvt_MoveRight_K2Node_InputAxisEvent_90(AxisValue: number) : void;
            InpAxisEvt_Turn_K2Node_InputAxisEvent_47(AxisValue: number) : void;
            InpAxisEvt_TurnRate_K2Node_InputAxisEvent_38(AxisValue: number) : void;
            InpTchEvt_Pressed(FingerIndex: UE.ETouchIndex, Location: UE.Vector) : void;
            InpTchEvt_Released(FingerIndex: UE.ETouchIndex, Location: UE.Vector) : void;
            ResetCombo() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ShinbiPlayerCharacter_C;
            static Load(InName: string): ShinbiPlayerCharacter_C;
        
            __tid_ShinbiPlayerCharacter_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
}

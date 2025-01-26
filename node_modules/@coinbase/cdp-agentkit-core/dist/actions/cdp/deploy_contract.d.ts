import { CdpAction } from "./cdp_action";
import { Wallet } from "@coinbase/coinbase-sdk";
import { z } from "zod";
/**
 * Input schema for deploy contract action.
 */
export declare const DeployContractInput: z.ZodObject<{
    solidityVersion: z.ZodEnum<[string, ...string[]]>;
    solidityInputJson: z.ZodString;
    contractName: z.ZodString;
    constructorArgs: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, "strip", z.ZodTypeAny, {
    solidityVersion: string;
    solidityInputJson: string;
    contractName: string;
    constructorArgs?: Record<string, any> | undefined;
}, {
    solidityVersion: string;
    solidityInputJson: string;
    contractName: string;
    constructorArgs?: Record<string, any> | undefined;
}>;
/**
 * Deploys an arbitrary contract.
 *
 * @param wallet - The wallet to deploy the contract from.
 * @param args - The input arguments for the action. The three required fields are solidityVersion, solidityInputJson, and contractName. The constructorArgs field is only required if the contract has a constructor.
 * @returns A message containing the deployed contract address and details.
 */
export declare function deployContract(wallet: Wallet, args: z.infer<typeof DeployContractInput>): Promise<string>;
/**
 * Deploy contract action.
 */
export declare class DeployContractAction implements CdpAction<typeof DeployContractInput> {
    name: string;
    description: string;
    argsSchema: z.ZodObject<{
        solidityVersion: z.ZodEnum<[string, ...string[]]>;
        solidityInputJson: z.ZodString;
        contractName: z.ZodString;
        constructorArgs: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, "strip", z.ZodTypeAny, {
        solidityVersion: string;
        solidityInputJson: string;
        contractName: string;
        constructorArgs?: Record<string, any> | undefined;
    }, {
        solidityVersion: string;
        solidityInputJson: string;
        contractName: string;
        constructorArgs?: Record<string, any> | undefined;
    }>;
    func: typeof deployContract;
}

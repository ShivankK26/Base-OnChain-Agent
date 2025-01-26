import { Wallet } from "@coinbase/coinbase-sdk";
import { z } from "zod";
import { CdpAction } from "../../cdp_action";
/**
 * Input schema for Morpho Vault deposit action.
 */
export declare const MorphoDepositInput: z.ZodObject<{
    assets: z.ZodString;
    receiver: z.ZodString;
    tokenAddress: z.ZodString;
    vaultAddress: z.ZodString;
}, "strip", z.ZodTypeAny, {
    assets: string;
    receiver: string;
    tokenAddress: string;
    vaultAddress: string;
}, {
    assets: string;
    receiver: string;
    tokenAddress: string;
    vaultAddress: string;
}>;
/**
 * Deposits assets into a Morpho Vault
 * @param Wallet - The wallet instance to execute the transaction
 * @param args - The input arguments for the action
 * @returns A success message with transaction details or an error message
 */
export declare function depositToMorpho(wallet: Wallet, args: z.infer<typeof MorphoDepositInput>): Promise<string>;
/**
 * Morpho Vault deposit action.
 */
export declare class MorphoDepositAction implements CdpAction<typeof MorphoDepositInput> {
    name: string;
    description: string;
    argsSchema: z.ZodObject<{
        assets: z.ZodString;
        receiver: z.ZodString;
        tokenAddress: z.ZodString;
        vaultAddress: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        assets: string;
        receiver: string;
        tokenAddress: string;
        vaultAddress: string;
    }, {
        assets: string;
        receiver: string;
        tokenAddress: string;
        vaultAddress: string;
    }>;
    func: typeof depositToMorpho;
}

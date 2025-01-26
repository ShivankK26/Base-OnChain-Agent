import { Wallet } from "@coinbase/coinbase-sdk";
import { z } from "zod";
import { CdpAction } from "../../cdp_action";
/**
 * Input schema for Morpho Vault withdraw action.
 */
export declare const MorphoWithdrawInput: z.ZodObject<{
    vaultAddress: z.ZodString;
    assets: z.ZodString;
    receiver: z.ZodString;
}, "strip", z.ZodTypeAny, {
    assets: string;
    receiver: string;
    vaultAddress: string;
}, {
    assets: string;
    receiver: string;
    vaultAddress: string;
}>;
/**
 * Withdraw assets from a Morpho Vault.
 *
 * @param wallet - The wallet to execute the withdrawal from
 * @param args - The input arguments for the action
 * @returns A success message with transaction details or error message
 */
export declare function withdrawFromMorpho(wallet: Wallet, args: z.infer<typeof MorphoWithdrawInput>): Promise<string>;
/**
 * Morpho Vault withdraw action.
 */
export declare class MorphoWithdrawAction implements CdpAction<typeof MorphoWithdrawInput> {
    name: string;
    description: string;
    argsSchema: z.ZodObject<{
        vaultAddress: z.ZodString;
        assets: z.ZodString;
        receiver: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        assets: string;
        receiver: string;
        vaultAddress: string;
    }, {
        assets: string;
        receiver: string;
        vaultAddress: string;
    }>;
    func: typeof withdrawFromMorpho;
}

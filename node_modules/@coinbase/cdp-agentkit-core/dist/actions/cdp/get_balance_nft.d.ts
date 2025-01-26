import { CdpAction } from "./cdp_action";
import { Wallet } from "@coinbase/coinbase-sdk";
import { z } from "zod";
/**
 * Input schema for get NFT balance action.
 */
export declare const GetBalanceNftInput: z.ZodObject<{
    contractAddress: z.ZodString;
    address: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    contractAddress: string;
    address?: string | undefined;
}, {
    contractAddress: string;
    address?: string | undefined;
}>;
/**
 * Gets NFT balance for a specific contract.
 *
 * @param wallet - The wallet to check balance from.
 * @param args - The input arguments for the action.
 * @returns A message containing the NFT balance details.
 */
export declare function getBalanceNft(wallet: Wallet, args: z.infer<typeof GetBalanceNftInput>): Promise<string>;
/**
 * Get NFT balance action.
 */
export declare class GetBalanceNftAction implements CdpAction<typeof GetBalanceNftInput> {
    name: string;
    description: string;
    argsSchema: z.ZodObject<{
        contractAddress: z.ZodString;
        address: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        contractAddress: string;
        address?: string | undefined;
    }, {
        contractAddress: string;
        address?: string | undefined;
    }>;
    func: typeof getBalanceNft;
}

import { CdpAction } from "./cdp_action";
import { Wallet } from "@coinbase/coinbase-sdk";
import { z } from "zod";
/**
 * Input schema for NFT transfer action.
 */
export declare const TransferNftInput: z.ZodObject<{
    contractAddress: z.ZodString;
    tokenId: z.ZodString;
    destination: z.ZodString;
    fromAddress: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    contractAddress: string;
    destination: string;
    tokenId: string;
    fromAddress?: string | undefined;
}, {
    contractAddress: string;
    destination: string;
    tokenId: string;
    fromAddress?: string | undefined;
}>;
/**
 * Transfers an NFT (ERC721 token) to a destination address.
 *
 * @param wallet - The wallet to transfer the NFT from.
 * @param args - The input arguments for the action.
 * @returns A message containing the transfer details.
 */
export declare function transferNft(wallet: Wallet, args: z.infer<typeof TransferNftInput>): Promise<string>;
/**
 * Transfer NFT action.
 */
export declare class TransferNftAction implements CdpAction<typeof TransferNftInput> {
    name: string;
    description: string;
    argsSchema: z.ZodObject<{
        contractAddress: z.ZodString;
        tokenId: z.ZodString;
        destination: z.ZodString;
        fromAddress: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        contractAddress: string;
        destination: string;
        tokenId: string;
        fromAddress?: string | undefined;
    }, {
        contractAddress: string;
        destination: string;
        tokenId: string;
        fromAddress?: string | undefined;
    }>;
    func: typeof transferNft;
}

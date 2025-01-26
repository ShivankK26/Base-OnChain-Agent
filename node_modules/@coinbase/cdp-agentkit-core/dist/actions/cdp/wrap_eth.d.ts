import { CdpAction } from "./cdp_action";
import { Wallet } from "@coinbase/coinbase-sdk";
import { z } from "zod";
export declare const WETH_ADDRESS = "0x4200000000000000000000000000000000000006";
export declare const WETH_ABI: {
    inputs: {
        name: string;
        type: string;
    }[];
    name: string;
    outputs: {
        type: string;
    }[];
    stateMutability: string;
    type: string;
}[];
export declare const WrapEthInput: z.ZodObject<{
    amountToWrap: z.ZodString;
}, "strip", z.ZodTypeAny, {
    amountToWrap: string;
}, {
    amountToWrap: string;
}>;
/**
 * Wraps ETH to WETH
 *
 * @param wallet - The wallet to create the token from.
 * @param args - The input arguments for the action.
 * @returns A message containing the wrapped ETH details.
 */
export declare function wrapEth(wallet: Wallet, args: z.infer<typeof WrapEthInput>): Promise<string>;
/**
 * Wrap ETH to WETH on Base action.
 */
export declare class WrapEthAction implements CdpAction<typeof WrapEthInput> {
    name: string;
    description: string;
    argsSchema: z.ZodObject<{
        amountToWrap: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        amountToWrap: string;
    }, {
        amountToWrap: string;
    }>;
    func: typeof wrapEth;
}

import { CdpAction } from "../../cdp_action";
import { z } from "zod";
/**
 * Input schema for Pyth fetch price feed ID action.
 */
export declare const PythFetchPriceFeedIDInput: z.ZodObject<{
    tokenSymbol: z.ZodString;
}, "strip", z.ZodTypeAny, {
    tokenSymbol: string;
}, {
    tokenSymbol: string;
}>;
/**
 * Fetches the price feed ID from Pyth given a ticker symbol.
 *
 * @param args - The input arguments for the action.
 * @returns A message containing the price feed ID corresponding to the given ticker symbol.
 */
export declare function pythFetchPriceFeedID(args: z.infer<typeof PythFetchPriceFeedIDInput>): Promise<string>;
/**
 * Pyth fetch price feed ID action.
 */
export declare class PythFetchPriceFeedIDAction implements CdpAction<typeof PythFetchPriceFeedIDInput> {
    name: string;
    description: string;
    argsSchema: z.ZodObject<{
        tokenSymbol: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        tokenSymbol: string;
    }, {
        tokenSymbol: string;
    }>;
    func: typeof pythFetchPriceFeedID;
}

import { CdpAction } from "../../cdp_action";
import { z } from "zod";
/**
 * Input schema for Pyth fetch price action.
 */
export declare const PythFetchPriceInput: z.ZodObject<{
    priceFeedID: z.ZodString;
}, "strip", z.ZodTypeAny, {
    priceFeedID: string;
}, {
    priceFeedID: string;
}>;
/**
 * Fetches the price from Pyth given a Pyth price feed ID.
 *
 * @param args - The input arguments for the action.
 * @returns A message containing the price from the given price feed.
 */
export declare function pythFetchPrice(args: z.infer<typeof PythFetchPriceInput>): Promise<string>;
/**
 * Pyth fetch price action.
 */
export declare class PythFetchPriceAction implements CdpAction<typeof PythFetchPriceInput> {
    name: string;
    description: string;
    argsSchema: z.ZodObject<{
        priceFeedID: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        priceFeedID: string;
    }, {
        priceFeedID: string;
    }>;
    func: typeof pythFetchPrice;
}

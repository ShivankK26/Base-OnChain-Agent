import { z } from "zod";
import { CdpAction } from "./cdp_action";
/**
 * Input schema for address reputation check.
 */
export declare const AddressReputationInput: z.ZodObject<{
    address: z.ZodString;
    network: z.ZodString;
}, "strip", z.ZodTypeAny, {
    address: string;
    network: string;
}, {
    address: string;
    network: string;
}>;
/**
 * Check the reputation of an address.
 *
 * @param wallet - The wallet instance
 * @param args - The input arguments for the action
 * @returns A string containing reputation data or error message
 */
export declare function checkAddressReputation(args: z.infer<typeof AddressReputationInput>): Promise<string>;
/**
 * Address reputation check action.
 */
export declare class AddressReputationAction implements CdpAction<typeof AddressReputationInput> {
    name: string;
    description: string;
    argsSchema: z.ZodObject<{
        address: z.ZodString;
        network: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        address: string;
        network: string;
    }, {
        address: string;
        network: string;
    }>;
    func: typeof checkAddressReputation;
}

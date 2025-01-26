/**
 * This module provides functionality to retrieve Farcaster account details.
 */
import { z } from "zod";
import { FarcasterAction } from "./farcaster_action";
/**
 * Input argument schema for the account_details action.
 */
export declare const AccountDetailsInput: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
/**
 * Retrieves agent's Farcaster account details.
 *
 * @param _ The input arguments for the action.
 * @returns A message containing account details for the agent's Farcaster account.
 */
export declare function accountDetails(_: z.infer<typeof AccountDetailsInput>): Promise<string>;
/**
 * Account Details Action
 */
export declare class FarcasterAccountDetailsAction implements FarcasterAction<typeof AccountDetailsInput> {
    name: string;
    description: string;
    argsSchema: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
    func: typeof accountDetails;
}

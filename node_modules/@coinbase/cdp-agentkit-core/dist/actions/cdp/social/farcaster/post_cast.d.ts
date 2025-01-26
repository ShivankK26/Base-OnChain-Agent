/**
 * This module provides functionality to post a cast on Farcaster.
 */
import { z } from "zod";
import { FarcasterAction } from "./farcaster_action";
/**
 * Input argument schema for the post cast action.
 */
export declare const PostCastInput: z.ZodObject<{
    castText: z.ZodString;
}, "strip", z.ZodTypeAny, {
    castText: string;
}, {
    castText: string;
}>;
/**
 * Posts a cast on Farcaster.
 *
 * @param args - The input arguments for the action.
 * @returns A message indicating the success or failure of the cast posting.
 */
export declare function postCast(args: z.infer<typeof PostCastInput>): Promise<string>;
/**
 * Post Cast Action
 */
export declare class FarcasterPostCastAction implements FarcasterAction<typeof PostCastInput> {
    name: string;
    description: string;
    argsSchema: z.ZodObject<{
        castText: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        castText: string;
    }, {
        castText: string;
    }>;
    func: typeof postCast;
}

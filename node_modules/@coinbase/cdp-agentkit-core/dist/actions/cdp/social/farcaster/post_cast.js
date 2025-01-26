"use strict";
/**
 * This module provides functionality to post a cast on Farcaster.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FarcasterPostCastAction = exports.PostCastInput = void 0;
exports.postCast = postCast;
const zod_1 = require("zod");
/**
 * Prompt message describing the post cast tool.
 * A successful response will return a message with the API response in JSON format,
 * while a failure response will indicate an error from the Farcaster API.
 */
const POST_CAST_PROMPT = `
This tool will post a cast to Farcaster. The tool takes the text of the cast as input. Casts can be maximum 280 characters.

A successful response will return a message with the API response as a JSON payload:
    {}

A failure response will return a message with the Farcaster API request error:
    You are not allowed to post a cast with duplicate content.
`;
/**
 * Input argument schema for the post cast action.
 */
exports.PostCastInput = zod_1.z
    .object({
    castText: zod_1.z.string().max(280, "Cast text must be a maximum of 280 characters."),
})
    .strip()
    .describe("Input schema for posting a text-based cast");
/**
 * Posts a cast on Farcaster.
 *
 * @param args - The input arguments for the action.
 * @returns A message indicating the success or failure of the cast posting.
 */
async function postCast(args) {
    try {
        const NEYNAR_API_KEY = process.env.NEYNAR_API_KEY;
        const SIGNER_UUID = process.env.NEYNAR_MANAGED_SIGNER;
        const headers = {
            api_key: NEYNAR_API_KEY,
            "Content-Type": "application/json",
        };
        const response = await fetch("https://api.neynar.com/v2/farcaster/cast", {
            method: "POST",
            headers,
            body: JSON.stringify({
                signer_uuid: SIGNER_UUID,
                text: args.castText,
            }),
        });
        const data = await response.json();
        return `Successfully posted cast to Farcaster:\n${JSON.stringify(data)}`;
    }
    catch (error) {
        return `Error posting to Farcaster:\n${error}`;
    }
}
/**
 * Post Cast Action
 */
class FarcasterPostCastAction {
    constructor() {
        this.name = "farcaster_post_cast";
        this.description = POST_CAST_PROMPT;
        this.argsSchema = exports.PostCastInput;
        this.func = postCast;
    }
}
exports.FarcasterPostCastAction = FarcasterPostCastAction;

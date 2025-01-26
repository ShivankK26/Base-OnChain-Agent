"use strict";
/**
 * This module provides functionality to retrieve Farcaster account details.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FarcasterAccountDetailsAction = exports.AccountDetailsInput = void 0;
exports.accountDetails = accountDetails;
const zod_1 = require("zod");
/**
 * Prompt message describing the account details tool.
 * A successful response will return a message with the API response in JSON format,
 * while a failure response will indicate an error from the Farcaster API.
 */
const ACCOUNT_DETAILS_PROMPT = `
This tool will retrieve the account details for the agent's Farcaster account.
The tool takes the FID of the agent's account.

A successful response will return a message with the API response as a JSON payload:
    { "object": "user", "fid": 193," username": "derek", "display_name": "Derek", ... }

A failure response will return a message with the Farcaster API request error:
    Unable to retrieve account details.
`;
/**
 * Input argument schema for the account_details action.
 */
exports.AccountDetailsInput = zod_1.z
    .object({})
    .strip()
    .describe("Input schema for retrieving account details");
/**
 * Retrieves agent's Farcaster account details.
 *
 * @param _ The input arguments for the action.
 * @returns A message containing account details for the agent's Farcaster account.
 */
async function accountDetails(_) {
    try {
        const AGENT_FID = process.env.AGENT_FID;
        const NEYNAR_API_KEY = process.env.NEYNAR_API_KEY;
        const headers = {
            accept: "application/json",
            "x-api-key": NEYNAR_API_KEY,
            "x-neynar-experimental": "true",
        };
        const response = await fetch(`https://api.neynar.com/v2/farcaster/user/bulk?fids=${AGENT_FID}`, {
            method: "GET",
            headers,
        });
        const { users } = await response.json();
        return `Successfully retrieved Farcaster account details:\n${JSON.stringify(users[0])}`;
    }
    catch (error) {
        return `Error retrieving Farcaster account details:\n${error}`;
    }
}
/**
 * Account Details Action
 */
class FarcasterAccountDetailsAction {
    constructor() {
        this.name = "farcaster_account_details";
        this.description = ACCOUNT_DETAILS_PROMPT;
        this.argsSchema = exports.AccountDetailsInput;
        this.func = accountDetails;
    }
}
exports.FarcasterAccountDetailsAction = FarcasterAccountDetailsAction;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressReputationAction = exports.AddressReputationInput = void 0;
exports.checkAddressReputation = checkAddressReputation;
const coinbase_sdk_1 = require("@coinbase/coinbase-sdk");
const zod_1 = require("zod");
const ADDRESS_REPUTATION_PROMPT = `
This tool checks the reputation of an address on a given network. It takes:

- network: The network to check the address on (e.g. "base-mainnet")
- address: The Ethereum address to check

Important notes:
- This tool will not work on base-sepolia, you can default to using base-mainnet instead
- The wallet's default address and its network may be used if not provided
`;
/**
 * Input schema for address reputation check.
 */
exports.AddressReputationInput = zod_1.z
    .object({
    address: zod_1.z
        .string()
        .regex(/^0x[a-fA-F0-9]{40}$/, "Invalid Ethereum address format")
        .describe("The Ethereum address to check"),
    network: zod_1.z.string().describe("The network to check the address on"),
})
    .strip()
    .describe("Input schema for address reputation check");
/**
 * Check the reputation of an address.
 *
 * @param wallet - The wallet instance
 * @param args - The input arguments for the action
 * @returns A string containing reputation data or error message
 */
async function checkAddressReputation(args) {
    try {
        const address = new coinbase_sdk_1.Address(args.network, args.address);
        const reputation = await address.reputation();
        return reputation.toString();
    }
    catch (error) {
        return `Error checking address reputation: ${error}`;
    }
}
/**
 * Address reputation check action.
 */
class AddressReputationAction {
    constructor() {
        this.name = "address_reputation";
        this.description = ADDRESS_REPUTATION_PROMPT;
        this.argsSchema = exports.AddressReputationInput;
        this.func = checkAddressReputation;
    }
}
exports.AddressReputationAction = AddressReputationAction;

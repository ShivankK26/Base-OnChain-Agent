"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetBalanceNftAction = exports.GetBalanceNftInput = void 0;
exports.getBalanceNft = getBalanceNft;
const coinbase_sdk_1 = require("@coinbase/coinbase-sdk");
const zod_1 = require("zod");
const GET_BALANCE_NFT_PROMPT = `
This tool will get the NFTs (ERC721 tokens) owned by the wallet for a specific NFT contract.

It takes the following inputs:
- contractAddress: The NFT contract address to check
- address: (Optional) The address to check NFT balance for. If not provided, uses the wallet's default address
`;
/**
 * Input schema for get NFT balance action.
 */
exports.GetBalanceNftInput = zod_1.z
    .object({
    contractAddress: zod_1.z.string().describe("The NFT contract address to check balance for"),
    address: zod_1.z
        .string()
        .optional()
        .describe("The address to check NFT balance for. If not provided, uses the wallet's default address"),
})
    .strip()
    .describe("Instructions for getting NFT balance");
/**
 * Gets NFT balance for a specific contract.
 *
 * @param wallet - The wallet to check balance from.
 * @param args - The input arguments for the action.
 * @returns A message containing the NFT balance details.
 */
async function getBalanceNft(wallet, args) {
    try {
        const checkAddress = args.address || (await wallet.getDefaultAddress()).getId();
        const ownedTokens = await (0, coinbase_sdk_1.readContract)({
            contractAddress: args.contractAddress,
            networkId: wallet.getNetworkId(),
            method: "tokensOfOwner",
            args: { owner: checkAddress },
        });
        if (!ownedTokens || ownedTokens.length === 0) {
            return `Address ${checkAddress} owns no NFTs in contract ${args.contractAddress}`;
        }
        const tokenList = ownedTokens.map(String).join(", ");
        return `Address ${checkAddress} owns ${ownedTokens.length} NFTs in contract ${args.contractAddress}.\nToken IDs: ${tokenList}`;
    }
    catch (error) {
        return `Error getting NFT balance for address ${args.address} in contract ${args.contractAddress}: ${error}`;
    }
}
/**
 * Get NFT balance action.
 */
class GetBalanceNftAction {
    constructor() {
        this.name = "get_balance_nft";
        this.description = GET_BALANCE_NFT_PROMPT;
        this.argsSchema = exports.GetBalanceNftInput;
        this.func = getBalanceNft;
    }
}
exports.GetBalanceNftAction = GetBalanceNftAction;

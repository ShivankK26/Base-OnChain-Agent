"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PythFetchPriceFeedIDAction = exports.PythFetchPriceFeedIDInput = void 0;
exports.pythFetchPriceFeedID = pythFetchPriceFeedID;
const zod_1 = require("zod");
const PYTH_FETCH_PRICE_FEED_ID_PROMPT = `
Fetch the price feed ID for a given token symbol from Pyth.
`;
/**
 * Input schema for Pyth fetch price feed ID action.
 */
exports.PythFetchPriceFeedIDInput = zod_1.z.object({
    tokenSymbol: zod_1.z.string().describe("The token symbol to fetch the price feed ID for"),
});
/**
 * Fetches the price feed ID from Pyth given a ticker symbol.
 *
 * @param args - The input arguments for the action.
 * @returns A message containing the price feed ID corresponding to the given ticker symbol.
 */
async function pythFetchPriceFeedID(args) {
    const url = `https://hermes.pyth.network/v2/price_feeds?query=${args.tokenSymbol}&asset_type=crypto`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    if (data.length === 0) {
        throw new Error(`No price feed found for ${args.tokenSymbol}`);
    }
    const filteredData = data.filter((item) => item.attributes.base.toLowerCase() === args.tokenSymbol.toLowerCase());
    if (filteredData.length === 0) {
        throw new Error(`No price feed found for ${args.tokenSymbol}`);
    }
    return filteredData[0].id;
}
/**
 * Pyth fetch price feed ID action.
 */
class PythFetchPriceFeedIDAction {
    constructor() {
        this.name = "pyth_fetch_price_feed_id";
        this.description = PYTH_FETCH_PRICE_FEED_ID_PROMPT;
        this.argsSchema = exports.PythFetchPriceFeedIDInput;
        this.func = pythFetchPriceFeedID;
    }
}
exports.PythFetchPriceFeedIDAction = PythFetchPriceFeedIDAction;

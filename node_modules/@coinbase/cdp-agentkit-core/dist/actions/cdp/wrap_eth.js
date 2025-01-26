"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WrapEthAction = exports.WrapEthInput = exports.WETH_ABI = exports.WETH_ADDRESS = void 0;
exports.wrapEth = wrapEth;
const zod_1 = require("zod");
exports.WETH_ADDRESS = "0x4200000000000000000000000000000000000006";
exports.WETH_ABI = [
    {
        inputs: [],
        name: "deposit",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                name: "account",
                type: "address",
            },
        ],
        name: "balanceOf",
        outputs: [
            {
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
const WRAP_ETH_PROMPT = `
This tool can only be used to wrap ETH to WETH.
Do not use this tool for any other purpose, or trading other assets.

Inputs:
- Amount of ETH to wrap.

Important notes:
- The amount is a string and cannot have any decimal points, since the unit of measurement is wei.
- Make sure to use the exact amount provided, and if there's any doubt, check by getting more information before continuing with the action.
- 1 wei = 0.000000000000000001 WETH
- Minimum purchase amount is 100000000000000 wei (0.0000001 WETH)
- Only supported on the following networks:
  - Base Sepolia (ie, 'base-sepolia')
  - Base Mainnet (ie, 'base', 'base-mainnet')
`;
exports.WrapEthInput = zod_1.z
    .object({
    amountToWrap: zod_1.z.string().describe("Amount of ETH to wrap in wei"),
})
    .strip()
    .describe("Instructions for wrapping ETH to WETH");
/**
 * Wraps ETH to WETH
 *
 * @param wallet - The wallet to create the token from.
 * @param args - The input arguments for the action.
 * @returns A message containing the wrapped ETH details.
 */
async function wrapEth(wallet, args) {
    try {
        const invocation = await wallet.invokeContract({
            contractAddress: exports.WETH_ADDRESS,
            method: "deposit",
            abi: exports.WETH_ABI,
            args: {},
            amount: BigInt(args.amountToWrap),
            assetId: "wei",
        });
        const result = await invocation.wait();
        return `Wrapped ETH with transaction hash: ${result.getTransaction().getTransactionHash()}`;
    }
    catch (error) {
        return `Error wrapping ETH: ${error}`;
    }
}
/**
 * Wrap ETH to WETH on Base action.
 */
class WrapEthAction {
    constructor() {
        this.name = "wrap_eth";
        this.description = WRAP_ETH_PROMPT;
        this.argsSchema = exports.WrapEthInput;
        this.func = wrapEth;
    }
}
exports.WrapEthAction = WrapEthAction;

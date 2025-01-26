"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.approve = approve;
const constants_1 = require("./constants");
/**
 * Approve a spender to spend a specified amount of tokens.
 * @param wallet - The wallet to execute the approval from
 * @param tokenAddress - The address of the token contract
 * @param spender - The address of the spender
 * @param amount - The amount of tokens to approve
 * @returns A success message with transaction hash or error message
 */
async function approve(wallet, tokenAddress, spender, amount) {
    try {
        const invocation = await wallet.invokeContract({
            contractAddress: tokenAddress,
            method: "approve",
            abi: constants_1.ERC20_APPROVE_ABI,
            args: {
                spender: spender,
                value: amount.toString(),
            },
        });
        const result = await invocation.wait();
        return `Approved ${amount} tokens for ${spender} with transaction hash: ${result.getTransactionHash()}`;
    }
    catch (error) {
        return `Error approving tokens: ${error}`;
    }
}

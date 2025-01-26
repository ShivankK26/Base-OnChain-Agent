import { Wallet } from "@coinbase/coinbase-sdk";
/**
 * Approve a spender to spend a specified amount of tokens.
 * @param wallet - The wallet to execute the approval from
 * @param tokenAddress - The address of the token contract
 * @param spender - The address of the spender
 * @param amount - The amount of tokens to approve
 * @returns A success message with transaction hash or error message
 */
export declare function approve(wallet: Wallet, tokenAddress: string, spender: string, amount: bigint): Promise<string>;

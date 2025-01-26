import { z } from "zod";
import { FarcasterAction, FarcasterActionSchemaAny } from "./actions/cdp/social/farcaster";
/**
 * Schema for the options required to initialize the FarcasterAgentkit.
 */
export declare const FarcasterAgentkitOptions: z.ZodObject<{
    apiKey: z.ZodString;
    managedSigner: z.ZodString;
}, "strip", z.ZodTypeAny, {
    apiKey: string;
    managedSigner: string;
}, {
    apiKey: string;
    managedSigner: string;
}>;
/**
 * Farcaster Agentkit
 */
export declare class FarcasterAgentkit {
    private config;
    /**
     * Initializes a new instance of FarcasterAgentkit with the provided options.
     * If no options are provided, it attempts to load the required environment variables.
     *
     * @param options - Optional. The configuration options for the FarcasterAgentkit.
     * @throws An error if the provided options are invalid or if the environment variables cannot be loaded.
     */
    constructor(options?: z.infer<typeof FarcasterAgentkitOptions>);
    /**
     * Validates the provided options for the FarcasterAgentkit.
     *
     * @param options - The options to validate.
     * @returns True if the options are valid, otherwise false.
     */
    validateOptions(options: z.infer<typeof FarcasterAgentkitOptions>): boolean;
    /**
     * Executes a Farcaster action.
     *
     * @param action - The Farcaster action to execute.
     * @param args - The arguments for the action.
     * @returns The result of the execution.
     */
    run<TActionSchema extends FarcasterActionSchemaAny>(action: FarcasterAction<TActionSchema>, args: TActionSchema): Promise<string>;
}

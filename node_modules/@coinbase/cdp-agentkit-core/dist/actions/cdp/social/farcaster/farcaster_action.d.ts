import { z } from "zod";
export type FarcasterActionSchemaAny = z.ZodObject<any, any, any, any>;
/**
 * Represents the base structure for Farcaster Actions.
 */
export interface FarcasterAction<TActionSchema extends FarcasterActionSchemaAny> {
    /**
     * The name of the action.
     */
    name: string;
    /**
     * A description of what the action does
     */
    description: string;
    /**
     * Schema for validating action arguments
     */
    argsSchema: TActionSchema;
    /**
     * The function to execute for this action
     */
    func: (args: z.infer<TActionSchema>) => Promise<string>;
}

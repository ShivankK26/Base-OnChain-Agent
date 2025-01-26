/**
 * This module exports various Farcaster action instances and their associated types.
 */
import { FarcasterAction, FarcasterActionSchemaAny } from "./farcaster_action";
import { FarcasterAccountDetailsAction } from "./account_details";
import { FarcasterPostCastAction } from "./post_cast";
/**
 * Retrieve an array of Farcaster action instances.
 *
 * @returns {FarcasterAction<FarcasterActionSchemaAny>[]} An array of Farcaster action instances.
 */
export declare function getAllFarcasterActions(): FarcasterAction<FarcasterActionSchemaAny>[];
/**
 * All available Farcaster actions.
 */
export declare const FARCASTER_ACTIONS: FarcasterAction<FarcasterActionSchemaAny>[];
/**
 * All Farcaster action types.
 */
export { FarcasterAction, FarcasterActionSchemaAny, FarcasterAccountDetailsAction, FarcasterPostCastAction, };

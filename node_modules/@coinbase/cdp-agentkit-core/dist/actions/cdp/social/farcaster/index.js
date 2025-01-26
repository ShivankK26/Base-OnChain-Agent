"use strict";
/**
 * This module exports various Farcaster action instances and their associated types.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FarcasterPostCastAction = exports.FarcasterAccountDetailsAction = exports.FARCASTER_ACTIONS = void 0;
exports.getAllFarcasterActions = getAllFarcasterActions;
const account_details_1 = require("./account_details");
Object.defineProperty(exports, "FarcasterAccountDetailsAction", { enumerable: true, get: function () { return account_details_1.FarcasterAccountDetailsAction; } });
const post_cast_1 = require("./post_cast");
Object.defineProperty(exports, "FarcasterPostCastAction", { enumerable: true, get: function () { return post_cast_1.FarcasterPostCastAction; } });
/**
 * Retrieve an array of Farcaster action instances.
 *
 * @returns {FarcasterAction<FarcasterActionSchemaAny>[]} An array of Farcaster action instances.
 */
function getAllFarcasterActions() {
    return [new account_details_1.FarcasterAccountDetailsAction(), new post_cast_1.FarcasterPostCastAction()];
}
/**
 * All available Farcaster actions.
 */
exports.FARCASTER_ACTIONS = getAllFarcasterActions();

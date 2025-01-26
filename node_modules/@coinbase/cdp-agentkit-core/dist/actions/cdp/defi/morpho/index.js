"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MorphoWithdrawAction = exports.MorphoDepositAction = exports.MORPHO_ACTIONS = void 0;
exports.getAllMorphoActions = getAllMorphoActions;
const deposit_1 = require("./deposit");
Object.defineProperty(exports, "MorphoDepositAction", { enumerable: true, get: function () { return deposit_1.MorphoDepositAction; } });
const withdraw_1 = require("./withdraw");
Object.defineProperty(exports, "MorphoWithdrawAction", { enumerable: true, get: function () { return withdraw_1.MorphoWithdrawAction; } });
/**
 * Retrieves all Morpho action instances.
 * WARNING: All new Morpho action classes must be instantiated here to be discovered.
 *
 * @returns - Array of Morpho action instances
 */
function getAllMorphoActions() {
    return [new deposit_1.MorphoDepositAction(), new withdraw_1.MorphoWithdrawAction()];
}
exports.MORPHO_ACTIONS = getAllMorphoActions();

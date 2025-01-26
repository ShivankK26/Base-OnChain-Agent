"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PythFetchPriceAction = exports.PythFetchPriceFeedIDAction = exports.PYTH_ACTIONS = void 0;
exports.getAllPythActions = getAllPythActions;
const fetch_price_1 = require("./fetch_price");
Object.defineProperty(exports, "PythFetchPriceAction", { enumerable: true, get: function () { return fetch_price_1.PythFetchPriceAction; } });
const fetch_price_feed_id_1 = require("./fetch_price_feed_id");
Object.defineProperty(exports, "PythFetchPriceFeedIDAction", { enumerable: true, get: function () { return fetch_price_feed_id_1.PythFetchPriceFeedIDAction; } });
__exportStar(require("./fetch_price_feed_id"), exports);
__exportStar(require("./fetch_price"), exports);
/**
 * Retrieves all Pyth Network action instances.
 * WARNING: All new Pyth action classes must be instantiated here to be discovered.
 *
 * @returns Array of Pyth Network action instances
 */
function getAllPythActions() {
    // eslint-disable-next-line prettier/prettier
    return [new fetch_price_feed_id_1.PythFetchPriceFeedIDAction(), new fetch_price_1.PythFetchPriceAction()];
}
exports.PYTH_ACTIONS = getAllPythActions();

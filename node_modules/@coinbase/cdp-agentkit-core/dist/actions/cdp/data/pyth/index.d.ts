import { CdpAction, CdpActionSchemaAny } from "../../cdp_action";
import { PythFetchPriceAction } from "./fetch_price";
import { PythFetchPriceFeedIDAction } from "./fetch_price_feed_id";
export * from "./fetch_price_feed_id";
export * from "./fetch_price";
/**
 * Retrieves all Pyth Network action instances.
 * WARNING: All new Pyth action classes must be instantiated here to be discovered.
 *
 * @returns Array of Pyth Network action instances
 */
export declare function getAllPythActions(): CdpAction<CdpActionSchemaAny>[];
export declare const PYTH_ACTIONS: CdpAction<CdpActionSchemaAny>[];
export { PythFetchPriceFeedIDAction, PythFetchPriceAction };

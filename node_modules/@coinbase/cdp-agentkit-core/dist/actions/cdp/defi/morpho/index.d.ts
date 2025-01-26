import { CdpAction, CdpActionSchemaAny } from "../../cdp_action";
import { MorphoDepositAction } from "./deposit";
import { MorphoWithdrawAction } from "./withdraw";
/**
 * Retrieves all Morpho action instances.
 * WARNING: All new Morpho action classes must be instantiated here to be discovered.
 *
 * @returns - Array of Morpho action instances
 */
export declare function getAllMorphoActions(): CdpAction<CdpActionSchemaAny>[];
export declare const MORPHO_ACTIONS: CdpAction<CdpActionSchemaAny>[];
export { MorphoDepositAction, MorphoWithdrawAction };

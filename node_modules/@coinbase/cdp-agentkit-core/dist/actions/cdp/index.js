"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WrapEthAction = exports.TransferNftAction = exports.TransferAction = exports.TradeAction = exports.RequestFaucetFundsAction = exports.RegisterBasenameAction = exports.MintNftAction = exports.GetBalanceNftAction = exports.GetBalanceAction = exports.DeployContractAction = exports.DeployTokenAction = exports.DeployNftAction = exports.GetWalletDetailsAction = exports.AddressReputationAction = exports.CDP_ACTIONS = void 0;
exports.getAllCdpActions = getAllCdpActions;
const address_reputation_1 = require("./address_reputation");
Object.defineProperty(exports, "AddressReputationAction", { enumerable: true, get: function () { return address_reputation_1.AddressReputationAction; } });
const deploy_nft_1 = require("./deploy_nft");
Object.defineProperty(exports, "DeployNftAction", { enumerable: true, get: function () { return deploy_nft_1.DeployNftAction; } });
const deploy_token_1 = require("./deploy_token");
Object.defineProperty(exports, "DeployTokenAction", { enumerable: true, get: function () { return deploy_token_1.DeployTokenAction; } });
const deploy_contract_1 = require("./deploy_contract");
Object.defineProperty(exports, "DeployContractAction", { enumerable: true, get: function () { return deploy_contract_1.DeployContractAction; } });
const get_balance_1 = require("./get_balance");
Object.defineProperty(exports, "GetBalanceAction", { enumerable: true, get: function () { return get_balance_1.GetBalanceAction; } });
const get_balance_nft_1 = require("./get_balance_nft");
Object.defineProperty(exports, "GetBalanceNftAction", { enumerable: true, get: function () { return get_balance_nft_1.GetBalanceNftAction; } });
const get_wallet_details_1 = require("./get_wallet_details");
Object.defineProperty(exports, "GetWalletDetailsAction", { enumerable: true, get: function () { return get_wallet_details_1.GetWalletDetailsAction; } });
const mint_nft_1 = require("./mint_nft");
Object.defineProperty(exports, "MintNftAction", { enumerable: true, get: function () { return mint_nft_1.MintNftAction; } });
const register_basename_1 = require("./register_basename");
Object.defineProperty(exports, "RegisterBasenameAction", { enumerable: true, get: function () { return register_basename_1.RegisterBasenameAction; } });
const request_faucet_funds_1 = require("./request_faucet_funds");
Object.defineProperty(exports, "RequestFaucetFundsAction", { enumerable: true, get: function () { return request_faucet_funds_1.RequestFaucetFundsAction; } });
const trade_1 = require("./trade");
Object.defineProperty(exports, "TradeAction", { enumerable: true, get: function () { return trade_1.TradeAction; } });
const transfer_1 = require("./transfer");
Object.defineProperty(exports, "TransferAction", { enumerable: true, get: function () { return transfer_1.TransferAction; } });
const transfer_nft_1 = require("./transfer_nft");
Object.defineProperty(exports, "TransferNftAction", { enumerable: true, get: function () { return transfer_nft_1.TransferNftAction; } });
const wrap_eth_1 = require("./wrap_eth");
Object.defineProperty(exports, "WrapEthAction", { enumerable: true, get: function () { return wrap_eth_1.WrapEthAction; } });
const morpho_1 = require("./defi/morpho");
const pyth_1 = require("./data/pyth");
const wow_1 = require("./defi/wow");
/**
 * Retrieves all CDP action instances.
 * WARNING: All new CdpAction classes must be instantiated here to be discovered.
 *
 * @returns - Array of CDP action instances
 */
function getAllCdpActions() {
    return [
        new address_reputation_1.AddressReputationAction(),
        new get_wallet_details_1.GetWalletDetailsAction(),
        new deploy_nft_1.DeployNftAction(),
        new deploy_token_1.DeployTokenAction(),
        new deploy_contract_1.DeployContractAction(),
        new get_balance_1.GetBalanceAction(),
        new get_balance_nft_1.GetBalanceNftAction(),
        new mint_nft_1.MintNftAction(),
        new register_basename_1.RegisterBasenameAction(),
        new request_faucet_funds_1.RequestFaucetFundsAction(),
        new trade_1.TradeAction(),
        new transfer_1.TransferAction(),
        new transfer_nft_1.TransferNftAction(),
        new wrap_eth_1.WrapEthAction(),
    ];
}
exports.CDP_ACTIONS = getAllCdpActions()
    .concat(morpho_1.MORPHO_ACTIONS)
    .concat(pyth_1.PYTH_ACTIONS)
    .concat(wow_1.WOW_ACTIONS);

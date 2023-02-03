import { Addresses, SupportedChainId } from "../types";

const fujiAddresses: Addresses = {
  EXCHANGE: "0xe06ebcd0430dc346c20981120258d7abf65b7fa4",
};

const mumbaiAddresses: Addresses = {
  EXCHANGE: "0xe06ebcd0430dc346c20981120258d7abf65b7fa4",
};

export const addressesByNetwork: { [chainId in SupportedChainId]: Addresses } = {
  [SupportedChainId.FUJI]: fujiAddresses,
  [SupportedChainId.MUMBAI]: mumbaiAddresses,
};

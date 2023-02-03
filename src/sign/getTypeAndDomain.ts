import { TypedDataDomain, TypedDataField } from "@ethersproject/abstract-signer";
import { SupportedChainId } from "../types";
import { addressesByNetwork } from "../constants";

const version = 1;

/**
 * Get typed data for creating seller orders.
 * Use with a signTypedData function.
 * @see https://eips.ethereum.org/EIPS/eip-712
 * @param chainId Current chain id
 * @param verifyingContract Exchange contract address
 * @returns { type: Record<string, TypedDataField[]>, domain: TypedDataDomain }
 */
export const getTypeAndDomain = (
  chainId: SupportedChainId,
  verifyingContract?: string
): {
  type: Record<string, TypedDataField[]>;
  domain: TypedDataDomain;
} => {
  const domain: TypedDataDomain = {
    name: "Exchange",
    version: version.toString(),
    chainId,
    verifyingContract: verifyingContract ? verifyingContract : addressesByNetwork[chainId].EXCHANGE,
  };

  const type: Record<string, Array<TypedDataField>> = {
    SellerOrder: [
      { name: "signer", type: "address" },
      { name: "collection", type: "address" },
      { name: "price", type: "uint256" },
      { name: "tokenId", type: "uint256" },
      { name: "currency", type: "address" },
      { name: "nonce", type: "uint256" },
      { name: "startTime", type: "uint256" },
      { name: "endTime", type: "uint256" },
      { name: "bytes", type: "permit" },
    ],
  };

  return {
    type,
    domain,
  };
};

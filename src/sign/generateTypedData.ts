import { TypedDataDomain, TypedDataField } from "@ethersproject/abstract-signer";
import { SupportedChainId } from "../types";
import { getTypeAndDomain } from "./getTypeAndDomain";

export const generateTypedData = (
  chainId: SupportedChainId,
  verifyingContractAddress?: string
): {
  type: Record<string, TypedDataField[]>;
  domain: TypedDataDomain;
} => {
  const { domain, type } = getTypeAndDomain(chainId, verifyingContractAddress);
  return { domain, type };
};

import { providers } from "ethers";
import { SupportedChainId, SellerOrder } from "../types";
import { etherSignTypedData } from "./etherSignTypedData";
import { generateTypedData } from "./generateTypedData";

/**
 * Create a signature for a maker order
 * @param signer user signer
 * @param chainId  chain id
 * @param verifyingContractAddress Star exchange contract address
 * @param order see SellerOr
 * @returns String signature
 */
export const signSellerOrder = async (
  signer: providers.JsonRpcSigner,
  chainId: SupportedChainId,
  order: SellerOrder,
  verifyingContractAddress?: string
): Promise<string> => {
  const signerAddress = await signer.getAddress();
  const { domain, type } = generateTypedData(chainId, verifyingContractAddress);
  const signatureHash = await etherSignTypedData(signer.provider, signerAddress, domain, type, order);
  return signatureHash;
};

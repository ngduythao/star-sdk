import { providers } from 'ethers';
import { SupportedChainId, SellerOrder, PermitName, TypeName } from '../types';
import { etherSignTypedData } from './etherSignTypedData';
import { getTypeAndDomain } from './getTypeAndDomain';

/**
 * Create a signature for a maker order
 * @param signer user signer
 * @param chainId chain id
 * @param order see SellerOr
 * @param contractName eip712 name
 * @param verifyingContractAddress Star exchange contract address
 * @returns String signature
 */
export const signSellerOrder = async (
  signer: providers.JsonRpcSigner,
  chainId: SupportedChainId,
  order: SellerOrder,
  contractName: PermitName,
  verifyingContractAddress?: string,
): Promise<string> => {
  const signerAddress = await signer.getAddress();
  const { domain, type } = getTypeAndDomain(
    chainId,
    TypeName.SELLER_ORDER,
    contractName,
    verifyingContractAddress,
  );
  const signatureHash = await etherSignTypedData(
    signer.provider,
    signerAddress,
    domain,
    type,
    order,
  );
  return signatureHash;
};

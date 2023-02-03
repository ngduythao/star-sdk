import {
  TypedDataDomain,
  TypedDataField,
} from '@ethersproject/abstract-signer';
import { SupportedChainId, TypeName } from '../types';
import { typedByName } from '../constants';

const version = 1;
/**
 * Get typed data for creating seller orders.
 * Use with a signTypedData function.
 * @see https://eips.ethereum.org/EIPS/eip-712
 * @param chainId Current chain id
 * @param typeName type name
 * @param contractName contract name
 * @param verifyingContract contract address
 * @returns { type: Record<string, TypedDataField[]>, domain: TypedDataDomain }
 */
export const getTypeAndDomain = (
  chainId: SupportedChainId,
  typeName: TypeName,
  contractName?: string,
  verifyingContract?: string,
): {
  type: Record<string, TypedDataField[]>;
  domain: TypedDataDomain;
} => {
  const domain: TypedDataDomain = {
    name: contractName,
    version: version.toString(),
    chainId,
    verifyingContract,
  };

  const type: Record<string, TypedDataField[]> = typedByName[typeName];

  return {
    type,
    domain,
  };
};

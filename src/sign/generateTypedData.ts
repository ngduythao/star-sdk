import {
  TypedDataDomain,
  TypedDataField,
} from '@ethersproject/abstract-signer';
import { SupportedChainId, PermitName, TypeName } from '../types';
import { getTypeAndDomain } from './getTypeAndDomain';

export const generateTypedData = (
  chainId: SupportedChainId,
  typedName: TypeName,
  contractName?: PermitName,
  verifyingContractAddress?: string,
): {
  type: Record<string, TypedDataField[]>;
  domain: TypedDataDomain;
} => {
  const { domain, type } = getTypeAndDomain(
    chainId,
    typedName,
    contractName,
    verifyingContractAddress,
  );
  return { domain, type };
};

import { ethers } from 'ethers';
import {
  TypedDataDomain,
  TypedDataField,
} from '@ethersproject/abstract-signer';
import { _TypedDataEncoder } from '@ethersproject/hash';

enum Wallet {
  METAMASK,
  OTHER,
}

/**
 * Return the user wallet
 * Never use server side
 * @returns Wallet
 */
const getCurrentWallet = async (
  provider: ethers.providers.JsonRpcProvider,
): Promise<Wallet> => {
  const isMetaMask = provider.connection.url === 'metamask';

  if (isMetaMask) {
    return Wallet.METAMASK;
  }

  return Wallet.OTHER;
};

/**
 * Copy of ethers '_signTypedData' helper, modified to support EIP-712 typed signatures with different call names
 * https://github.com/ethers-io/ethers.js/blob/73a46efea32c3f9a4833ed77896a216e3d3752a0/packages/providers/src.ts/json-rpc-provider.ts#L263
 */

export const etherSignTypedData = async (
  provider: ethers.providers.JsonRpcProvider,
  address: string,
  domain: TypedDataDomain,
  types: Record<string, Array<TypedDataField>>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: Record<string, any>,
): Promise<string> => {
  const populated = await _TypedDataEncoder.resolveNames(
    domain,
    types,
    value,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    (name: string) => {
      return provider.resolveName(name);
    },
  );
  const rpcData = _TypedDataEncoder.getPayload(
    populated.domain,
    types,
    populated.value,
  );

  const wallet = await getCurrentWallet(provider);

  if (wallet === Wallet.METAMASK) {
    return await provider.send('eth_signTypedData_v4', [
      address,
      JSON.stringify(rpcData),
    ]); // MetaMask
  }
  return await provider.send('eth_signTypedData', [
    address,
    JSON.stringify(rpcData),
  ]);
};

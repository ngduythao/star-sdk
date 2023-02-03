import { TypedDataField } from '@ethersproject/abstract-signer';
import { TypeName } from '../types';

const orderType: Record<string, Array<TypedDataField>> = {
  SellerOrder: [
    { name: 'signer', type: 'address' },
    { name: 'collection', type: 'address' },
    { name: 'price', type: 'uint256' },
    { name: 'tokenId', type: 'uint256' },
    { name: 'currency', type: 'address' },
    { name: 'nonce', type: 'uint256' },
    { name: 'startTime', type: 'uint256' },
    { name: 'endTime', type: 'uint256' },
    { name: 'permit', type: 'bytes' },
  ],
};

const permitType: Record<string, Array<TypedDataField>> = {
  Permit: [
    { name: 'spender', type: 'address' },
    { name: 'tokenId', type: 'uint256' },
    { name: 'nonce', type: 'uint256' },
    { name: 'deadline', type: 'uint256' },
  ],
};

const createStoreType: Record<string, Array<TypedDataField>> = {
  Metadata: [{ name: 'name', type: 'string' }],
  CreateStore: [
    { name: 'uid', type: 'uint256' },
    { name: 'account', type: 'address' },
    { name: 'metadata', type: 'Metadata' },
  ],
};

export const typedByName: {
  [name in TypeName]: Record<string, Array<TypedDataField>>;
} = {
  [TypeName.SELLER_ORDER]: orderType,
  [TypeName.PERMIT]: permitType,
  [TypeName.CREATE_STORE]: createStoreType,
};

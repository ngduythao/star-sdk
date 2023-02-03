import { BigNumberish } from 'ethers';

/**
 * Do not update unless the contract has been updated
 */

export interface Metadata {
  name: string; // Store name
}

export interface Store {
  uid: BigNumberish;
  account: string;
  metadata: Metadata;
}

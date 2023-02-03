import { BigNumberish, BytesLike } from "ethers";

/**
 * Do not update unless the contract has been updated
 */
export interface SellerOrder {
  signer: string; // signer address of the maker order
  collection: string; // collection address
  price: BigNumberish;
  tokenId: BigNumberish; // id of the token
  currency: string; // currency address
  nonce: BigNumberish; // order nonce (must be unique)
  startTime: BigNumberish; // startTime in timestamp
  endTime: BigNumberish; // endTime in timestamp
  permit: BytesLike; // ERC721 permit signature
}
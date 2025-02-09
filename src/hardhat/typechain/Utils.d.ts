/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface UtilsInterface extends ethers.utils.Interface {
  functions: {
    "_unpackPrice(bytes4,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "_unpackPrice",
    values: [BytesLike, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "_unpackPrice",
    data: BytesLike
  ): Result;

  events: {};
}

export class Utils extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: UtilsInterface;

  functions: {
    _unpackPrice(
      _price: BytesLike,
      _scale: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "_unpackPrice(bytes4,uint256)"(
      _price: BytesLike,
      _scale: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  _unpackPrice(
    _price: BytesLike,
    _scale: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "_unpackPrice(bytes4,uint256)"(
    _price: BytesLike,
    _scale: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    _unpackPrice(
      _price: BytesLike,
      _scale: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "_unpackPrice(bytes4,uint256)"(
      _price: BytesLike,
      _scale: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    _unpackPrice(
      _price: BytesLike,
      _scale: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "_unpackPrice(bytes4,uint256)"(
      _price: BytesLike,
      _scale: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    _unpackPrice(
      _price: BytesLike,
      _scale: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "_unpackPrice(bytes4,uint256)"(
      _price: BytesLike,
      _scale: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}

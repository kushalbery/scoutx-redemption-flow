// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  Address,
  DataSourceTemplate,
  DataSourceContext
} from "@graphprotocol/graph-ts";

export class FixedProductMarketMaker extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("FixedProductMarketMaker", [address.toHex()]);
  }

  static createWithContext(address: Address, context: DataSourceContext): void {
    DataSourceTemplate.createWithContext(
      "FixedProductMarketMaker",
      [address.toHex()],
      context
    );
  }
}

export class ERC20Detailed extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("ERC20Detailed", [address.toHex()]);
  }

  static createWithContext(address: Address, context: DataSourceContext): void {
    DataSourceTemplate.createWithContext(
      "ERC20Detailed",
      [address.toHex()],
      context
    );
  }
}
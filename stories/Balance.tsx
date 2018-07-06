import React from "react"
import { storiesOf } from "@storybook/react"
import { AccountBalance } from "../src/components/Balance"

storiesOf("Balance", module)
  .add("AccountBalance activated", () => (
    <div>
      Current balance:{" "}
      <AccountBalance
        publicKey="GBPBFWVBADSESGADWEGC7SGTHE3535FWK4BS6UW3WMHX26PHGIH5NF4W"
        testnet
      />
    </div>
  ))
  .add("AccountBalance unactivated", () => (
    <div>
      Current balance:{" "}
      <AccountBalance
        publicKey="GD52DFJ57XWSBCN3MZQ4Z2TO4TCVVP2UXVWCBSTCKDUYXVPGMSVKS4M5"
        testnet
      />
    </div>
  ))

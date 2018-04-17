
import React from 'react'

// Example of using paths alias via tsconfig.json to easily re-use legacy code
// Also, use TypeScript and JavaScript interchangeably.
import aliasExample from "@myPathAlias/component";
//

export default () => (
  <div>
      <h1>MARKET Protocol.</h1>
      <p>Open Source Building Blocks Powering Decentralized Derivative Trading And Exchanges</p>
    { aliasExample }
  </div>
)

---
title: SatoriCyber
meta_desc: Provides an overview of the SatoriCyber Provider for Pulumi.
layout: package
---

The Satori provider for Pulumi can be used to provision any of the satori resources available in [Satori](https://app.satoricyber.com).

To be able to manage Satori resources using Pulumi, you first need a Satori service account to allow Pulumi to authenticate to Satori. Satori service account credentials can be obtained from the [Satori Management Console](https://app.satoricyber.com/account/user-management?tab=service-accounts).

Currently, Satori pulumi provider is available only for JavaScript/TypeScript.

## Example

```typescript
import * as satori from "@satoricyber/pulumi-satori";

const dataset = new satori.Dataset("sample-dataset", {
  definition: {
    name: "sample-dataset",
  },
  accessControlSettings: {}
});
```
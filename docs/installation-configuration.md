---
title: Satori Installation & Configuration
meta_desc: Information on how to install the Satori provider.
layout: package
---

## Installation

The Pulumi Satori provider is currently available as a package in javascript/typescript:

* JavaScript/TypeScript: [`@satoricyber/pulumi-satori`](https://www.npmjs.com/package/@satoricyber/pulumi-satori)

    ```bash
    npm install @satoricyber/pulumi-satori
    ```

## Setup

To provision resources with the Pulumi Satori provider, you need a Satori `Account ID` & `Service Account ID` & `Service Account KEY` to allow Pulumi to authenticate to Satori. Satori Service Account can be created in the Satori Management console [`here`](https://app.satoricyber.com/account/user-management?tab=service-accounts) by users that as the appropriate permission.

### Set environment variables

Once the credentials are obtained, there are two ways to communicate your authorization tokens to Pulumi:

Set the following environment variables:

    ```bash
    $ export SATORI_SA=serviceAccountID
    $ export SATORI_SA_KEY=serviceAccountKey
    $ export SATORI_ACCOUNT_ID=satoriAccountId
    $ export SATORI_URL=satoriApiURL
    ```

### Set Pulumi Config variables
Configuring the configuration variables is available using each of these command lines.
After each line a prompt will ask you to enter the value for the key.

    ```
    pulumi config set satori:serviceAccount
    pulumi config set satori:serviceAccountKey
    pulumi config set satori:satoriAccount
    pulumi config set satori:url
    pulumi config set satori:verifyTls
    ```
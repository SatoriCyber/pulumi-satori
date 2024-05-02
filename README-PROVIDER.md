# Satori Pulumi Provider

The Satori Resource Provider lets you manage [Satori](http://app.satoricyber.com) resources.

## Installing

This package is currently available only for Javascript / Typescript:

### Node.js (JavaScript/TypeScript)

To use from JavaScript or TypeScript in Node.js, install using either `npm`:

```bash
npm install @satoricyber/pulumi-satori
```

or `yarn`:

```bash
yarn add @satoricyber/pulumi-satori
```

[//]: # (### Python)

[//]: # ()
[//]: # (To use from Python, install using `pip`:)

[//]: # ()
[//]: # (```bash)

[//]: # (pip install pulumi_satori)

[//]: # (```)

[//]: # ()
[//]: # (### Go)

[//]: # ()
[//]: # (To use from Go, use `go get` to grab the latest version of the library:)

[//]: # ()
[//]: # (```bash)

[//]: # (go get github.com/satoricyber/pulumi-satori/sdk/go/...)

[//]: # (```)

## Configuration

The following configuration points are available for the `satori` provider:

- `satori:satoriAccount` (environment: `SATORI_ACCOUNT_ID`) - the Satori account ID to manage configuration for.
- `satori:serviceAccount` (environment: `SATORI_SA`) - the service account identifier for Satori
- `satori:serviceAccountKey` (environment: `SATORI_SA_KEY`) - the service account key for Satori
- `satori:url` (environment: `SATORI_URL`) - the base URL for the Satori API
- `satori:verifyTls` (environment: `SATORI_VERIFY_TLS`) - whether to verify the TLS connection to Satori

## Reference

For detailed reference documentation, please visit [the Pulumi registry](https://www.pulumi.com/registry/packages/satori/api-docs/).

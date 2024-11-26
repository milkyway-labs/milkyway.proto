# @milkywaylabs/milkyway.proto

JavaScript/TypeScript MilkyWay Protobuf Definitions

## Generate

To generate the Protobuf definitions, first ensure that the `proto` folder contains the correct definitions.

### Install Dependencies

Install the required dependencies:

```bash
yarn install
```

### Login to Buf

Create an account on [buf.build](https://buf.build) and log in using the following command:  

```bash
yarn buf registry login
```

> **Note:** Logging in is necessary to avoid being rate-limited by buf.build during the generation process.

### Generate Definitions

Run the following command to generate the Protobuf definitions:

```bash
yarn run build
```

---

## Deploy on npm

After generating the definitions, you may want to publish them to npm.

### Update Version

Update the `version` field in the `package.json` file to reflect the new release.

### Prepare for Publishing

Prepare the files for publishing by running:

```bash
yarn run prepare-publish
```

### Publish

Once prepared, publish the package with:

```bash
yarn publish
```
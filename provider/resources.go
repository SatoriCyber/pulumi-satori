// Copyright 2016-2024, Pulumi Corporation.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package satori

import (
	"path"

	// Allow embedding bridge-metadata.json in the provider.
	_ "embed"

	"github.com/pulumi/pulumi-terraform-bridge/v3/pkg/tfbridge"
	"github.com/pulumi/pulumi-terraform-bridge/v3/pkg/tfbridge/tokens"
	shimv2 "github.com/pulumi/pulumi-terraform-bridge/v3/pkg/tfshim/sdk-v2"

	// Replace this provider with the provider you are bridging.
	satori "github.com/satoricyber/terraform-provider-satori/satori"

	"github.com/SatoriCyber/pulumi-satori/provider/pkg/version"
)

// all of the token components used below.
const (
	// This variable controls the default name of the package in the package
	// registries for nodejs and python:
	mainPkg = "satori"
	// modules:
	mainMod = "index" // the satori module
)

//go:embed cmd/pulumi-resource-satori/bridge-metadata.json
var metadata []byte

// Provider returns additional overlaid schema and metadata associated with the provider.
func Provider() tfbridge.ProviderInfo {
	// Create a Pulumi provider mapping
	prov := tfbridge.ProviderInfo{
		// Instantiate the Terraform provider
		//
		// The [pulumi-terraform-bridge](https://github.com/pulumi/pulumi-terraform-bridge) supports 3
		// types of Terraform providers:
		//
		// 1. Providers written with the terraform-plugin-sdk/v1:
		//
		//    If the provider you are bridging is written with the terraform-plugin-sdk/v1, then you
		//    will need to adapt the boilerplate:
		//
		//    - Change the import "shimv2" to "shimv1" and change the associated import to
		//      "github.com/pulumi/pulumi-terraform-bridge/v3/pkg/tfshim/sdk-v1".
		//
		//    You can then proceed as normal.
		//
		// 2. Providers written with terraform-plugin-sdk/v2:
		//
		//    This boilerplate is already geared towards providers written with the
		//    terraform-plugin-sdk/v2, since it is the most common provider framework used. No
		//    adaptions are needed.
		//
		// 3. Providers written with terraform-plugin-framework:
		//
		//    If the provider you are bridging is written with the terraform-plugin-framework, then
		//    you will need to adapt the boilerplate:
		//
		//    - Remove the `shimv2` import and add:
		//
		//      	pfbridge "github.com/pulumi/pulumi-terraform-bridge/pf/tfbridge"
		//
		//    - Replace `shimv2.NewProvider` with `pfbridge.ShimProvider`.
		//
		//    - In provider/cmd/pulumi-tfgen-satori/main.go, replace the
		//      "github.com/pulumi/pulumi-terraform-bridge/v3/pkg/tfgen" import with
		//      "github.com/pulumi/pulumi-terraform-bridge/pf/tfgen". Remove the `version.Version`
		//      argument to `tfgen.Main`.
		//
		//    - In provider/cmd/pulumi-resource-satori/main.go, replace the
		//      "github.com/pulumi/pulumi-terraform-bridge/v3/pkg/tfbridge" import with
		//      "github.com/pulumi/pulumi-terraform-bridge/pf/tfbridge". Replace the arguments to the
		//      `tfbridge.Main` so it looks like this:
		//
		//      	tfbridge.Main(context.Background(), "satori", satori.Provider(),
		//			tfbridge.ProviderMetadata{PulumiSchema: pulumiSchema})
		//
		//   Detailed instructions can be found at
		//   https://github.com/pulumi/pulumi-terraform-bridge/blob/master/pf/README.md#how-to-upgrade-a-bridged-provider-to-plugin-framework.
		//   After that, you can proceed as normal.
		//
		// This is where you give the bridge a handle to the upstream terraform provider. SDKv2
		// convention is to have a function at "github.com/iwahbe/terraform-provider-satori/provider".New
		// which takes a version and produces a factory function. The provider you are bridging may
		// not do that. You will need to find the function (generally called in upstream's main.go)
		// that produces a:
		//
		// - *"github.com/hashicorp/terraform-plugin-sdk/v2/helper/schema".Provider (for SDKv2)
		// - *"github.com/hashicorp/terraform-plugin-sdk/v1/helper/schema".Provider (for SDKv1)
		// - "github.com/hashicorp/terraform-plugin-framework/provider".Provider (for plugin-framework)
		//
		//nolint:lll
		P: shimv2.NewProvider(satori.NewProvider(version.Version)),

		Name:    "satori",
		Version: version.Version,
		// DisplayName is a way to be able to change the casing of the provider name when being
		// displayed on the Pulumi registry
		DisplayName: "SatoriCyber",
		// Change this to your personal name (or a company name) that you would like to be shown in
		// the Pulumi Registry if this package is published there.
		Publisher: "SatoriCyber",
		// LogoURL is optional but useful to help identify your package in the Pulumi Registry
		// if this package is published there.
		//
		// You may host a logo on a domain you control or add an SVG logo for your package
		// in your repository and use the raw content URL for that file as your logo URL.
		LogoURL: "https://avatars.githubusercontent.com/u/59790990?s=200&v=4",
		// PluginDownloadURL is an optional URL used to download the Provider
		// for use in Pulumi programs
		// e.g https://github.com/org/pulumi-provider-name/releases/
		PluginDownloadURL: "https://github.com/SatoriCyber/pulumi-satori/releases/download/v${VERSION}",
		Description:       "A Pulumi package for creating and managing satori cloud resources.",
		// category/cloud tag helps with categorizing the package in the Pulumi Registry.
		// For all available categories, see `Keywords` in
		// https://www.pulumi.com/docs/guides/pulumi-packages/schema/#package.
		Keywords:   []string{"SatoriCyber", "satori", "category/utilities"},
		License:    "Apache-2.0",
		Homepage:   "https://www.satoricyber.com",
		Repository: "https://github.com/satoricyber/pulumi-satori",
		// The GitHub Org for the provider - defaults to `terraform-providers`. Note that this should
		// match the TF provider modules require directive, not any replace directives.
		GitHubOrg:    "satoricyber",
		MetadataInfo: tfbridge.NewProviderMetadata(metadata),
		Config: map[string]*tfbridge.SchemaInfo{
			"serviceAccount": {
				Default: &tfbridge.DefaultInfo{
					EnvVars: []string{"SATORI_SA"},
				},
			},
			"serviceAccountKey": {
				Default: &tfbridge.DefaultInfo{
					EnvVars: []string{"SATORI_SA_KEY"},
				},
			},
			"satoriAccount": {
				Default: &tfbridge.DefaultInfo{
					EnvVars: []string{"SATORI_ACCOUNT_ID"},
				},
			},
			"url": {
				Default: &tfbridge.DefaultInfo{
					Value:   "https://app.satoricyber.com",
					EnvVars: []string{"SATORI_URL"},
				},
			},
			"verifyTls": {
				Default: &tfbridge.DefaultInfo{
					Value:   false,
					EnvVars: []string{"SATORI_VERIFY_TLS"},
				},
			},
		},
		Resources: map[string]*tfbridge.ResourceInfo{
			"satori_access_rule": {
				Tok: tfbridge.MakeResource(mainPkg, mainMod, "AccessRule"),
			},
			"satori_custom_taxonomy_category": {
				Tok: tfbridge.MakeResource(mainPkg, mainMod, "CustomTaxonomyCategory"),
			},
			"satori_custom_taxonomy_classifier": {
				Tok: tfbridge.MakeResource(mainPkg, mainMod, "CustomTaxonomyClassifier"),
			},
			"satori_dataset": {
				Tok: tfbridge.MakeResource(mainPkg, mainMod, "Dataset"),
			},
			"satori_datastore": {
				Tok: tfbridge.MakeResource(mainPkg, mainMod, "Datastore"),
			},
			"satori_directory_group": {
				Tok: tfbridge.MakeResource(mainPkg, mainMod, "DirectoryGroup"),
			},
			"satori_masking_profile": {
				Tok: tfbridge.MakeResource(mainPkg, mainMod, "MaskingProfile"),
			},
			"satori_request_access_rule": {
				Tok: tfbridge.MakeResource(mainPkg, mainMod, "RequestAccessRule"),
			},
			"satori_security_policy": {
				Tok: tfbridge.MakeResource(mainPkg, mainMod, "SecurityPolicy"),
			},
			"satori_self_service_access_rule": {
				Tok: tfbridge.MakeResource(mainPkg, mainMod, "SelfServiceAccessRule"),
			},
			"satori_user_settings": {
				Tok: tfbridge.MakeResource(mainPkg, mainMod, "UserSettings"),
			},
		},
		DataSources: map[string]*tfbridge.DataSourceInfo{
			"satori_dac_deployment_settings": {
				Tok: tfbridge.MakeDataSource(mainPkg, mainMod, "getDacDeploymentSettings"),
			},
			"satori_data_access_controller": {
				Tok: tfbridge.MakeDataSource(mainPkg, mainMod, "getDataAccessController"),
			},
			"satori_user": {
				Tok: tfbridge.MakeDataSource(mainPkg, mainMod, "getUser"),
			},
		},
		JavaScript: &tfbridge.JavaScriptInfo{
			PackageName: "@satoricyber/pulumi-satori",
			// List any npm dependencies and their versions
			Dependencies: map[string]string{
				"@pulumi/pulumi": "^3.0.0",
			},
			DevDependencies: map[string]string{
				"@types/node": "^10.0.0", // so we can access strongly typed node definitions.
				"@types/mime": "^2.0.0",
			},
		},
		Python: &tfbridge.PythonInfo{
			PackageName: "satori_resources_config",
			// List any Python dependencies and their version ranges
			Requires: map[string]string{
				"pulumi": ">=3.0.0,<4.0.0",
			},
		},
		Golang: &tfbridge.GolangInfo{
			ImportBasePath: path.Join(
				"github.com/SatoriCyber/pulumi-satori/sdk/",
				tfbridge.GetModuleMajorVersion(version.Version),
				"go",
				mainPkg,
			),
			GenerateResourceContainerTypes: true,
		},
		CSharp: &tfbridge.CSharpInfo{
			RootNamespace: "Satoricyber",
			PackageReferences: map[string]string{
				"Pulumi": "3.*",
			},
		},
	}

	// MustComputeTokens maps all resources and datasources from the upstream provider into Pulumi.
	//
	// tokens.SingleModule puts every upstream item into your provider's main module.
	//
	// You shouldn't need to override anything, but if you do, use the [tfbridge.ProviderInfo.Resources]
	// and [tfbridge.ProviderInfo.DataSources].
	prov.MustComputeTokens(tokens.SingleModule("satori_", mainMod,
		tokens.MakeStandard(mainPkg)))

	prov.MustApplyAutoAliases()
	prov.SetAutonaming(255, "-")

	return prov
}

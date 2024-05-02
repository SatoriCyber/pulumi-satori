// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

/**
 * Custom taxonomy classifier.
 */
export class CustomTaxonomyClassifier extends pulumi.CustomResource {
    /**
     * Get an existing CustomTaxonomyClassifier resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CustomTaxonomyClassifierState, opts?: pulumi.CustomResourceOptions): CustomTaxonomyClassifier {
        return new CustomTaxonomyClassifier(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'satori:index/customTaxonomyClassifier:CustomTaxonomyClassifier';

    /**
     * Returns true if the given object is an instance of CustomTaxonomyClassifier.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CustomTaxonomyClassifier {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CustomTaxonomyClassifier.__pulumiType;
    }

    /**
     * List of additional Satori taxonomy category IDs.
     * See https://satoricyber.com/docs/taxonomy/standard-categories for a list of possible values.
     */
    public readonly additionalSatoriCategories!: pulumi.Output<string[] | undefined>;
    /**
     * Configuration for CUSTOM classifier type.
     */
    public readonly customConfig!: pulumi.Output<outputs.CustomTaxonomyClassifierCustomConfig | undefined>;
    /**
     * Classifier description.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Classifier name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Parent category ID.
     */
    public readonly parentCategory!: pulumi.Output<string | undefined>;
    /**
     * Configuration for SATORI*BASED classifier type.
     */
    public readonly satoriBasedConfig!: pulumi.Output<outputs.CustomTaxonomyClassifierSatoriBasedConfig | undefined>;
    /**
     * Scope of relevant locations.
     */
    public readonly scope!: pulumi.Output<outputs.CustomTaxonomyClassifierScope | undefined>;
    /**
     * Classifier tag.
     */
    public /*out*/ readonly tag!: pulumi.Output<string>;
    /**
     * Classifier type, valid types are: NON*AUTOMATIC, CUSTOM, SATORI*BASED.
     */
    public readonly type!: pulumi.Output<string>;

    /**
     * Create a CustomTaxonomyClassifier resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CustomTaxonomyClassifierArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CustomTaxonomyClassifierArgs | CustomTaxonomyClassifierState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CustomTaxonomyClassifierState | undefined;
            resourceInputs["additionalSatoriCategories"] = state ? state.additionalSatoriCategories : undefined;
            resourceInputs["customConfig"] = state ? state.customConfig : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["parentCategory"] = state ? state.parentCategory : undefined;
            resourceInputs["satoriBasedConfig"] = state ? state.satoriBasedConfig : undefined;
            resourceInputs["scope"] = state ? state.scope : undefined;
            resourceInputs["tag"] = state ? state.tag : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as CustomTaxonomyClassifierArgs | undefined;
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            resourceInputs["additionalSatoriCategories"] = args ? args.additionalSatoriCategories : undefined;
            resourceInputs["customConfig"] = args ? args.customConfig : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["parentCategory"] = args ? args.parentCategory : undefined;
            resourceInputs["satoriBasedConfig"] = args ? args.satoriBasedConfig : undefined;
            resourceInputs["scope"] = args ? args.scope : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["tag"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CustomTaxonomyClassifier.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering CustomTaxonomyClassifier resources.
 */
export interface CustomTaxonomyClassifierState {
    /**
     * List of additional Satori taxonomy category IDs.
     * See https://satoricyber.com/docs/taxonomy/standard-categories for a list of possible values.
     */
    additionalSatoriCategories?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Configuration for CUSTOM classifier type.
     */
    customConfig?: pulumi.Input<inputs.CustomTaxonomyClassifierCustomConfig>;
    /**
     * Classifier description.
     */
    description?: pulumi.Input<string>;
    /**
     * Classifier name.
     */
    name?: pulumi.Input<string>;
    /**
     * Parent category ID.
     */
    parentCategory?: pulumi.Input<string>;
    /**
     * Configuration for SATORI*BASED classifier type.
     */
    satoriBasedConfig?: pulumi.Input<inputs.CustomTaxonomyClassifierSatoriBasedConfig>;
    /**
     * Scope of relevant locations.
     */
    scope?: pulumi.Input<inputs.CustomTaxonomyClassifierScope>;
    /**
     * Classifier tag.
     */
    tag?: pulumi.Input<string>;
    /**
     * Classifier type, valid types are: NON*AUTOMATIC, CUSTOM, SATORI*BASED.
     */
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a CustomTaxonomyClassifier resource.
 */
export interface CustomTaxonomyClassifierArgs {
    /**
     * List of additional Satori taxonomy category IDs.
     * See https://satoricyber.com/docs/taxonomy/standard-categories for a list of possible values.
     */
    additionalSatoriCategories?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Configuration for CUSTOM classifier type.
     */
    customConfig?: pulumi.Input<inputs.CustomTaxonomyClassifierCustomConfig>;
    /**
     * Classifier description.
     */
    description?: pulumi.Input<string>;
    /**
     * Classifier name.
     */
    name?: pulumi.Input<string>;
    /**
     * Parent category ID.
     */
    parentCategory?: pulumi.Input<string>;
    /**
     * Configuration for SATORI*BASED classifier type.
     */
    satoriBasedConfig?: pulumi.Input<inputs.CustomTaxonomyClassifierSatoriBasedConfig>;
    /**
     * Scope of relevant locations.
     */
    scope?: pulumi.Input<inputs.CustomTaxonomyClassifierScope>;
    /**
     * Classifier type, valid types are: NON*AUTOMATIC, CUSTOM, SATORI*BASED.
     */
    type: pulumi.Input<string>;
}
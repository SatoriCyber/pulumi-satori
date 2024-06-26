// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

/**
 * The **satori_access_rule** resource allows defining dataset access rules.
 *
 * ## Example Usage
 *
 * <!--Start PulumiCodeChooser -->
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as satori from "@satoricyber/pulumi-satori";
 *
 * const perm1Dataset1 = new satori.AccessRule("perm1Dataset1", {
 *     parentDataPolicy: satori_dataset.dataset1.data_policy_id,
 *     accessLevel: "OWNER",
 *     identity: {
 *         type: "USER",
 *         name: "test-user",
 *     },
 *     expireOn: "2021-09-01T23:00:00Z",
 *     revokeIfNotUsedInDays: 90,
 * });
 * const perm2Dataset1 = new satori.AccessRule("perm2Dataset1", {
 *     parentDataPolicy: satori_dataset.dataset1.data_policy_id,
 *     accessLevel: "READ_ONLY",
 *     identity: {
 *         type: "GROUP",
 *         groupId: satori_directory_group.group1.id,
 *     },
 *     expireOn: "2021-09-01T23:00:00Z",
 *     revokeIfNotUsedInDays: 90,
 *     securityPolicies: [],
 * });
 * const perm3Dataset1 = new satori.AccessRule("perm3Dataset1", {
 *     parentDataPolicy: satori_dataset.dataset1.data_policy_id,
 *     accessLevel: "READ_WRITE",
 *     identity: {
 *         type: "IDP_GROUP",
 *         name: "groupName",
 *     },
 *     securityPolicies: ["none"],
 *     enabled: false,
 * });
 * const perm1DatasetDefinition1 = new satori.AccessRule("perm1DatasetDefinition1", {
 *     parentDataPolicy: satori_dataset.dataset_definition1.data_policy_id,
 *     accessLevel: "READ_ONLY",
 *     identity: {
 *         type: "EVERYONE",
 *     },
 *     securityPolicies: ["8c4745f5-a21e-4b7a-bb21-83c54351539f"],
 * });
 * ```
 * <!--End PulumiCodeChooser -->
 */
export class AccessRule extends pulumi.CustomResource {
    /**
     * Get an existing AccessRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AccessRuleState, opts?: pulumi.CustomResourceOptions): AccessRule {
        return new AccessRule(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'satori:index/accessRule:AccessRule';

    /**
     * Returns true if the given object is an instance of AccessRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AccessRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AccessRule.__pulumiType;
    }

    /**
     * Access level to grant, valid values are: READ*ONLY, READ*WRITE, OWNER.
     */
    public readonly accessLevel!: pulumi.Output<string>;
    /**
     * Enable the rule. Defaults to `true`.
     */
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    /**
     * Expire the rule on the given date and time. RFC3339 date format is expected. Time must be in UTC (i.e. YYYY-MM-DD***T***HH:MM:SS***Z***). Empty value = never expire.
     */
    public readonly expireOn!: pulumi.Output<string | undefined>;
    /**
     * Identity to apply the rule for.
     */
    public readonly identity!: pulumi.Output<outputs.AccessRuleIdentity>;
    /**
     * Parent data policy ID, the data*policy*id field of a dataset.
     */
    public readonly parentDataPolicy!: pulumi.Output<string>;
    /**
     * Revoke access if rule not used in the last given days. Zero = do not revoke. Max value is 180. Defaults to `0`.
     */
    public readonly revokeIfNotUsedInDays!: pulumi.Output<number | undefined>;
    /**
     * IDs of security policies to apply to this rule. Empty list for default dataset security policies. [ "none" ] list for no policies.
     */
    public readonly securityPolicies!: pulumi.Output<string[] | undefined>;

    /**
     * Create a AccessRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AccessRuleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AccessRuleArgs | AccessRuleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AccessRuleState | undefined;
            resourceInputs["accessLevel"] = state ? state.accessLevel : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["expireOn"] = state ? state.expireOn : undefined;
            resourceInputs["identity"] = state ? state.identity : undefined;
            resourceInputs["parentDataPolicy"] = state ? state.parentDataPolicy : undefined;
            resourceInputs["revokeIfNotUsedInDays"] = state ? state.revokeIfNotUsedInDays : undefined;
            resourceInputs["securityPolicies"] = state ? state.securityPolicies : undefined;
        } else {
            const args = argsOrState as AccessRuleArgs | undefined;
            if ((!args || args.accessLevel === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accessLevel'");
            }
            if ((!args || args.identity === undefined) && !opts.urn) {
                throw new Error("Missing required property 'identity'");
            }
            if ((!args || args.parentDataPolicy === undefined) && !opts.urn) {
                throw new Error("Missing required property 'parentDataPolicy'");
            }
            resourceInputs["accessLevel"] = args ? args.accessLevel : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["expireOn"] = args ? args.expireOn : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["parentDataPolicy"] = args ? args.parentDataPolicy : undefined;
            resourceInputs["revokeIfNotUsedInDays"] = args ? args.revokeIfNotUsedInDays : undefined;
            resourceInputs["securityPolicies"] = args ? args.securityPolicies : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AccessRule.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering AccessRule resources.
 */
export interface AccessRuleState {
    /**
     * Access level to grant, valid values are: READ*ONLY, READ*WRITE, OWNER.
     */
    accessLevel?: pulumi.Input<string>;
    /**
     * Enable the rule. Defaults to `true`.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Expire the rule on the given date and time. RFC3339 date format is expected. Time must be in UTC (i.e. YYYY-MM-DD***T***HH:MM:SS***Z***). Empty value = never expire.
     */
    expireOn?: pulumi.Input<string>;
    /**
     * Identity to apply the rule for.
     */
    identity?: pulumi.Input<inputs.AccessRuleIdentity>;
    /**
     * Parent data policy ID, the data*policy*id field of a dataset.
     */
    parentDataPolicy?: pulumi.Input<string>;
    /**
     * Revoke access if rule not used in the last given days. Zero = do not revoke. Max value is 180. Defaults to `0`.
     */
    revokeIfNotUsedInDays?: pulumi.Input<number>;
    /**
     * IDs of security policies to apply to this rule. Empty list for default dataset security policies. [ "none" ] list for no policies.
     */
    securityPolicies?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a AccessRule resource.
 */
export interface AccessRuleArgs {
    /**
     * Access level to grant, valid values are: READ*ONLY, READ*WRITE, OWNER.
     */
    accessLevel: pulumi.Input<string>;
    /**
     * Enable the rule. Defaults to `true`.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Expire the rule on the given date and time. RFC3339 date format is expected. Time must be in UTC (i.e. YYYY-MM-DD***T***HH:MM:SS***Z***). Empty value = never expire.
     */
    expireOn?: pulumi.Input<string>;
    /**
     * Identity to apply the rule for.
     */
    identity: pulumi.Input<inputs.AccessRuleIdentity>;
    /**
     * Parent data policy ID, the data*policy*id field of a dataset.
     */
    parentDataPolicy: pulumi.Input<string>;
    /**
     * Revoke access if rule not used in the last given days. Zero = do not revoke. Max value is 180. Defaults to `0`.
     */
    revokeIfNotUsedInDays?: pulumi.Input<number>;
    /**
     * IDs of security policies to apply to this rule. Empty list for default dataset security policies. [ "none" ] list for no policies.
     */
    securityPolicies?: pulumi.Input<pulumi.Input<string>[]>;
}

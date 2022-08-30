// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9W67x2Pynxr9eDxjdLuGCS
// Component: GnmRy4t8u2
import * as React from "react";
import * as ph from "@plasmicapp/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_vermont_consumer_credit.module.css"; // plasmic-import: 9W67x2Pynxr9eDxjdLuGCS/projectcss
import sty from "./PlasmicLenderAgreementForm.module.css"; // plasmic-import: GnmRy4t8u2/css

export const PlasmicLenderAgreementForm__VariantProps = new Array();

export const PlasmicLenderAgreementForm__ArgProps = new Array();

function PlasmicLenderAgreementForm__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = args;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        sty.root
      )}
    />
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicLenderAgreementForm__ArgProps,
          internalVariantPropNames: PlasmicLenderAgreementForm__VariantProps
        }),

      [props, nodeName]
    );

    return PlasmicLenderAgreementForm__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLenderAgreementForm";
  } else {
    func.displayName = `PlasmicLenderAgreementForm.${nodeName}`;
  }
  return func;
}

export const PlasmicLenderAgreementForm = Object.assign(
  // Top-level PlasmicLenderAgreementForm renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicLenderAgreementForm
    internalVariantProps: PlasmicLenderAgreementForm__VariantProps,
    internalArgProps: PlasmicLenderAgreementForm__ArgProps
  }
);

export default PlasmicLenderAgreementForm;
/* prettier-ignore-end */

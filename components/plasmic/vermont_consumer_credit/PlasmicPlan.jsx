// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9W67x2Pynxr9eDxjdLuGCS
// Component: oNrTx8m4mKP0
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import BaseCard from "../../BaseCard"; // plasmic-import: drjN8EGN7rE8/component
import Bullet from "../../Bullet"; // plasmic-import: r8ItMn1I9Rr2/component
import Button from "../../Button"; // plasmic-import: jRx1E81mYCIy/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_vermont_consumer_credit.module.css"; // plasmic-import: 9W67x2Pynxr9eDxjdLuGCS/projectcss
import sty from "./PlasmicPlan.module.css"; // plasmic-import: oNrTx8m4mKP0/css

export const PlasmicPlan__VariantProps = new Array();

export const PlasmicPlan__ArgProps = new Array(
  "price",
  "name",
  "description",
  "children"
);

export const defaultPlan__Args = {};

function PlasmicPlan__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultPlan__Args, props.args);
  const $props = args;
  return (
    <BaseCard
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames("__wab_instance", sty.root)}
    >
      <div className={classNames(projectcss.all, sty.freeBox___54Sij)}>
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__dj4Gt)}
        >
          {p.renderPlasmicSlot({
            defaultContents: "Basic",
            value: args.name,
            className: classNames(sty.slotTargetName)
          })}

          {p.renderPlasmicSlot({
            defaultContents: (
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__i6Aft
                )}
              >
                {"$10"}
              </div>
            ),

            value: args.price
          })}

          {p.renderPlasmicSlot({
            defaultContents: (
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__oV4Ik)}
              >
                <Bullet
                  className={classNames("__wab_instance", sty.bullet__awYEl)}
                />

                <Bullet
                  className={classNames("__wab_instance", sty.bullet__omsqp)}
                />

                <Bullet
                  className={classNames("__wab_instance", sty.bullet__p26AF)}
                />
              </p.Stack>
            ),

            value: args.description
          })}

          <div className={classNames(projectcss.all, sty.freeBox__fChkd)}>
            {p.renderPlasmicSlot({
              defaultContents: (
                <Button
                  className={classNames("__wab_instance", sty.button__rymI)}
                  color={"outlineBlue"}
                >
                  {"Get started"}
                </Button>
              ),

              value: args.children
            })}
          </div>
        </p.Stack>
      </div>
    </BaseCard>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicPlan__ArgProps,
      internalVariantPropNames: PlasmicPlan__VariantProps
    });

    return PlasmicPlan__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPlan";
  } else {
    func.displayName = `PlasmicPlan.${nodeName}`;
  }
  return func;
}

export const PlasmicPlan = Object.assign(
  // Top-level PlasmicPlan renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicPlan
    internalVariantProps: PlasmicPlan__VariantProps,
    internalArgProps: PlasmicPlan__ArgProps
  }
);

export default PlasmicPlan;
/* prettier-ignore-end */

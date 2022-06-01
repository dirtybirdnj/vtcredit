// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9W67x2Pynxr9eDxjdLuGCS
// Component: VxyCfCXPu8O
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import TextInput from "../../TextInput"; // plasmic-import: b5fDbSitrgRQ/component
import Button from "../../Button"; // plasmic-import: jRx1E81mYCIy/component
import { useScreenVariants as useScreenVariantskcIfFDxm3XN2 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: KCIfFDxm3xN2/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_vermont_consumer_credit.module.css"; // plasmic-import: 9W67x2Pynxr9eDxjdLuGCS/projectcss
import sty from "./PlasmicHomeCta.module.css"; // plasmic-import: VxyCfCXPu8O/css
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: 18moJXKn3z0E/icon

export const PlasmicHomeCta__VariantProps = new Array();

export const PlasmicHomeCta__ArgProps = new Array();

export const defaultHomeCta__Args = {};

function PlasmicHomeCta__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultHomeCta__Args, props.args);
  const $props = args;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantskcIfFDxm3XN2()
  });

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
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__npCgM)}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__tapLq
          )}
        >
          {"Get the most from your lender "}
        </div>

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__wK5Og
          )}
        >
          {
            "Your lender can provide you financial services and can help overcome financial hurdles. Work with us to become a more informed financial consumer and get the most from your consumer financial institutions."
          }
        </div>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__i9Cx3)}
        >
          {true ? (
            <TextInput
              data-plasmic-name={"textInput"}
              data-plasmic-override={overrides.textInput}
              className={classNames("__wab_instance", sty.textInput)}
              color={"dark"}
              placeholder={"Your email..."}
            />
          ) : null}

          <Button
            data-plasmic-name={"button"}
            data-plasmic-override={overrides.button}
            className={classNames("__wab_instance", sty.button)}
            color={"green"}
            endIcon={
              <IconIcon
                data-plasmic-name={"svg"}
                data-plasmic-override={overrides.svg}
                className={classNames(projectcss.all, sty.svg)}
                role={"img"}
              />
            }
            link={"/contact"}
            showEndIcon={true}
          >
            {"Request Information"}
          </Button>
        </p.Stack>

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__uyJm6
          )}
        >
          {
            " We never share information about our clients with any third parties."
          }
        </div>
      </p.Stack>

      {(hasVariant(globalVariants, "screen", "mobile") ? true : true) ? (
        <div className={classNames(projectcss.all, sty.freeBox__aD7Mz)}>
          <p.PlasmicImg
            data-plasmic-name={"img"}
            data-plasmic-override={overrides.img}
            alt={""}
            className={classNames(sty.img)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"auto"}
            loading={"lazy"}
            src={{
              src: "/plasmic/vermont_consumer_credit/images/handsUp.jpeg",
              fullWidth: 3276,
              fullHeight: 4096,
              aspectRatio: undefined
            }}
          />
        </div>
      ) : null}
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "textInput", "textbox", "button", "svg", "img"],
  textInput: ["textInput", "textbox"],
  button: ["button", "svg"],
  svg: ["svg"],
  img: ["img"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHomeCta__ArgProps,
      internalVariantPropNames: PlasmicHomeCta__VariantProps
    });

    return PlasmicHomeCta__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomeCta";
  } else {
    func.displayName = `PlasmicHomeCta.${nodeName}`;
  }
  return func;
}

export const PlasmicHomeCta = Object.assign(
  // Top-level PlasmicHomeCta renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    textInput: makeNodeComponent("textInput"),
    button: makeNodeComponent("button"),
    svg: makeNodeComponent("svg"),
    img: makeNodeComponent("img"),
    // Metadata about props expected for PlasmicHomeCta
    internalVariantProps: PlasmicHomeCta__VariantProps,
    internalArgProps: PlasmicHomeCta__ArgProps
  }
);

export default PlasmicHomeCta;
/* prettier-ignore-end */

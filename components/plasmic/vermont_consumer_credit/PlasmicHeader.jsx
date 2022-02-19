// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9W67x2Pynxr9eDxjdLuGCS
// Component: mCxPr8fs96V
import * as React from "react";
import Link from "next/link";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: jRx1E81mYCIy/component
import { useScreenVariants as useScreenVariantskcIfFDxm3XN2 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: KCIfFDxm3xN2/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_vermont_consumer_credit.module.css"; // plasmic-import: 9W67x2Pynxr9eDxjdLuGCS/projectcss
import sty from "./PlasmicHeader.module.css"; // plasmic-import: mCxPr8fs96V/css
import LogoIcon from "./icons/PlasmicIcon__Logo"; // plasmic-import: ajsvomRNRyt5/icon
import RightArrowIcon from "./icons/PlasmicIcon__RightArrow"; // plasmic-import: 1F_c2O9V7izs/icon

export const PlasmicHeader__VariantProps = new Array();

export const PlasmicHeader__ArgProps = new Array();

function PlasmicHeader__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
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
        projectcss.plasmic_tokens,
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        sty.root
      )}
    >
      <p.PlasmicLink
        data-plasmic-name={"link"}
        data-plasmic-override={overrides.link}
        className={classNames(projectcss.all, projectcss.a, sty.link)}
        component={Link}
        href={"/"}
        platform={"nextjs"}
      >
        {true ? (
          <LogoIcon
            className={classNames(projectcss.all, sty.svg__bKfef)}
            role={"img"}
          />
        ) : null}
      </p.PlasmicLink>

      <div className={classNames(projectcss.all, sty.freeBox__epH)}>
        <p.PlasmicImg
          data-plasmic-name={"img"}
          data-plasmic-override={overrides.img}
          alt={""}
          className={classNames(sty.img)}
          displayHeight={"auto"}
          displayMaxHeight={"none"}
          displayMaxWidth={"none"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={
            hasVariant(globalVariants, "screen", "mobile") ? "217px" : "300px"
          }
          loading={"lazy"}
          src={{
            src: "/plasmic/vermont_consumer_credit/images/vcccMatLogo.svg",
            fullWidth: 300,
            fullHeight: 109,
            aspectRatio: 2.75
          }}
        />

        <div
          data-plasmic-name={"text"}
          data-plasmic-override={overrides.text}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text
          )}
        >
          {"Vermont Consumer Credit Consulting"}
        </div>
      </div>

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__rvsHw)}
      >
        <Button
          className={classNames("__wab_instance", sty.button__n2Hbo)}
          color={"clear"}
          link={"/services"}
          size={"compact"}
        >
          {"Services"}
        </Button>

        <Button
          className={classNames("__wab_instance", sty.button__gwXsR)}
          color={"clear"}
          link={"/about"}
          size={"compact"}
        >
          {"About VCCC"}
        </Button>

        <Button
          className={classNames("__wab_instance", sty.button__gpnhi)}
          color={"clear"}
          size={"compact"}
        >
          {"Contact"}
        </Button>

        {(hasVariant(globalVariants, "screen", "mobile") ? true : true) ? (
          <Button
            className={classNames("__wab_instance", sty.button___57CmN)}
            endIcon={
              <RightArrowIcon
                className={classNames(projectcss.all, sty.svg___3ZX56)}
                role={"img"}
              />
            }
            showEndIcon={true}
          >
            {"Request Appointment"}
          </Button>
        ) : null}
      </p.Stack>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "link", "img", "text"],
  link: ["link"],
  img: ["img"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHeader__ArgProps,
      internalVariantPropNames: PlasmicHeader__VariantProps
    });

    return PlasmicHeader__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeader";
  } else {
    func.displayName = `PlasmicHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicHeader = Object.assign(
  // Top-level PlasmicHeader renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    link: makeNodeComponent("link"),
    img: makeNodeComponent("img"),
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicHeader
    internalVariantProps: PlasmicHeader__VariantProps,
    internalArgProps: PlasmicHeader__ArgProps
  }
);

export default PlasmicHeader;
/* prettier-ignore-end */
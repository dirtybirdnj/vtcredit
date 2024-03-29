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
import * as ph from "@plasmicapp/host";
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

export const PlasmicHeader__VariantProps = new Array();

export const PlasmicHeader__ArgProps = new Array();

function PlasmicHeader__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
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
      {(hasVariant(globalVariants, "screen", "mobile") ? true : true) ? (
        <div
          data-plasmic-name={"logoStack"}
          data-plasmic-override={overrides.logoStack}
          className={classNames(projectcss.all, sty.logoStack)}
        >
          <p.PlasmicLink
            data-plasmic-name={"link"}
            data-plasmic-override={overrides.link}
            className={classNames(projectcss.all, projectcss.a, sty.link)}
            component={Link}
            href={"/"}
            platform={"nextjs"}
          >
            <div className={classNames(projectcss.all, sty.freeBox__epH)}>
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__swJ7)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"none"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={
                  hasVariant(globalVariants, "screen", "mobile")
                    ? "217px"
                    : "300px"
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
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__aGoFa
                )}
              >
                {"Vermont Consumer Credit Consulting"}
              </div>
            </div>
          </p.PlasmicLink>
        </div>
      ) : null}
      {(hasVariant(globalVariants, "screen", "mobile") ? true : true) ? (
        <div className={classNames(projectcss.all, sty.freeBox__vkDwz)}>
          {(hasVariant(globalVariants, "screen", "mobile") ? true : true) ? (
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__rvsHw)}
            >
              {(
                hasVariant(globalVariants, "screen", "mobile") ? true : true
              ) ? (
                <div className={classNames(projectcss.all, sty.freeBox__adga6)}>
                  {(
                    hasVariant(globalVariants, "screen", "mobile") ? true : true
                  ) ? (
                    <div
                      className={classNames(projectcss.all, sty.freeBox__p5Gbc)}
                    >
                      {(
                        hasVariant(globalVariants, "screen", "mobile")
                          ? true
                          : true
                      ) ? (
                        <p.PlasmicImg
                          alt={""}
                          className={classNames(sty.img__cvUFq)}
                          displayHeight={"auto"}
                          displayMaxHeight={"none"}
                          displayMaxWidth={"none"}
                          displayMinHeight={"0"}
                          displayMinWidth={"0"}
                          displayWidth={
                            hasVariant(globalVariants, "screen", "mobile")
                              ? "217px"
                              : "300px"
                          }
                          loading={"lazy"}
                          src={{
                            src: "/plasmic/vermont_consumer_credit/images/vcccMatLogo.svg",
                            fullWidth: 300,
                            fullHeight: 109,
                            aspectRatio: 2.75
                          }}
                        />
                      ) : null}
                      {(
                        hasVariant(globalVariants, "screen", "mobile")
                          ? true
                          : true
                      ) ? (
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__s1Lk2
                          )}
                        >
                          {"Vermont Consumer Credit Consulting"}
                        </div>
                      ) : null}
                    </div>
                  ) : null}
                  {(
                    hasVariant(globalVariants, "screen", "mobile") ? true : true
                  ) ? (
                    <div
                      className={classNames(projectcss.all, sty.freeBox__qo3K)}
                    >
                      <Button color={"clear"} link={"/"} size={"compact"}>
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__xcyV6
                          )}
                        >
                          {"Home"}
                        </div>
                      </Button>

                      <Button
                        color={"clear"}
                        link={"/get-started"}
                        size={"compact"}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__kIoM
                          )}
                        >
                          {"Get Started"}
                        </div>
                      </Button>

                      <Button color={"clear"} link={"/about"} size={"compact"}>
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text___8SdOh
                          )}
                        >
                          {"About VCCC"}
                        </div>
                      </Button>

                      {true ? (
                        <Button
                          className={classNames(
                            "__wab_instance",
                            sty.button__axwV7
                          )}
                          color={"clear"}
                          link={"/calendar"}
                          size={"compact"}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__vjkNi
                            )}
                          >
                            {"Sales"}
                          </div>
                        </Button>
                      ) : null}

                      <Button
                        color={"clear"}
                        link={"/contact"}
                        size={"compact"}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__eD5Ta
                          )}
                        >
                          {"Contact Us"}
                        </div>
                      </Button>
                    </div>
                  ) : null}
                  {(
                    hasVariant(globalVariants, "screen", "mobile") ? true : true
                  ) ? (
                    <div
                      className={classNames(projectcss.all, sty.freeBox__cw2UZ)}
                    >
                      <Button
                        color={"clear"}
                        link={"/get-started"}
                        size={"compact"}
                      >
                        {"Services"}
                      </Button>

                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__gwXsR
                        )}
                        color={"clear"}
                        link={"/about"}
                        size={"compact"}
                      >
                        <div
                          data-plasmic-name={"about"}
                          data-plasmic-override={overrides.about}
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.about
                          )}
                        >
                          {"About VCCC"}
                        </div>
                      </Button>

                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__gpnhi
                        )}
                        color={"clear"}
                        link={"/contact"}
                        size={"compact"}
                      >
                        {"Contact"}
                      </Button>
                    </div>
                  ) : null}
                </div>
              ) : null}
            </p.Stack>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "logoStack", "link", "about"],
  logoStack: ["logoStack", "link"],
  link: ["link"],
  about: ["about"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicHeader__ArgProps,
          internalVariantPropNames: PlasmicHeader__VariantProps
        }),

      [props, nodeName]
    );

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
    logoStack: makeNodeComponent("logoStack"),
    link: makeNodeComponent("link"),
    about: makeNodeComponent("about"),
    // Metadata about props expected for PlasmicHeader
    internalVariantProps: PlasmicHeader__VariantProps,
    internalArgProps: PlasmicHeader__ArgProps
  }
);

export default PlasmicHeader;
/* prettier-ignore-end */

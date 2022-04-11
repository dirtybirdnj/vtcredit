// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9W67x2Pynxr9eDxjdLuGCS
// Component: lKpLQt4I320
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Header from "../../Header"; // plasmic-import: mCxPr8fs96V/component
import Section from "../../Section"; // plasmic-import: TeEenYh07CLQ/component
import Button from "../../Button"; // plasmic-import: jRx1E81mYCIy/component
import Footer from "../../Footer"; // plasmic-import: R265Q5ctgGy/component
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_vermont_consumer_credit.module.css"; // plasmic-import: 9W67x2Pynxr9eDxjdLuGCS/projectcss
import sty from "./PlasmicAbout.module.css"; // plasmic-import: lKpLQt4I320/css
import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: gwsBLKJU83VD/icon

export const PlasmicAbout__VariantProps = new Array();

export const PlasmicAbout__ArgProps = new Array();

function PlasmicAbout__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <React.Fragment>
      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header)}
          />

          <Section
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            className={classNames("__wab_instance", sty.section)}
            subtitle={"Basic page subtitle"}
            title={"Basic Page Title"}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__cjOjo)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__rlXrt
                )}
              >
                {"About Us"}
              </div>

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__jVkc
                )}
              >
                {
                  "Are you receiving all your benefits from your financial institution? Do you really understand the terms of your loans ? \n\nLending doesn't have to be complicated. Once you understand, you can separate facts from fiction and be free from anxiety and stress. It should be all about achieving your goals.  VCCC has the tools, resources and experience to guide you.  It is an important life skill to meet the demands of the daily financial world. Confidence is everything.\n\nWith our team of experts and a personal assessment, you can understand and enhance your finance experiences. VCCC will give you the confidence to avoid common threats like illegal predatory lending practices, high interest payday loans, and other roadblocks to financial freedom.\n\nOur professionals at VCCC have over 20 years of experience helping people navigate  the banking world."
                }
              </div>

              {true ? (
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__snl6H)}
                >
                  <Button
                    className={classNames("__wab_instance", sty.button___0GvsS)}
                    color={"green"}
                    showEndIcon={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__uNgCj
                      )}
                    >
                      {"Make an Appointment Today"}
                    </div>
                  </Button>

                  <Button
                    className={classNames("__wab_instance", sty.button__pnlkX)}
                    endIcon={
                      <SearchsvgIcon
                        data-plasmic-name={"svg"}
                        data-plasmic-override={overrides.svg}
                        className={classNames(projectcss.all, sty.svg)}
                        role={"img"}
                      />
                    }
                    showEndIcon={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__uOOx2
                      )}
                    >
                      {"Request More Information"}
                    </div>
                  </Button>
                </p.Stack>
              ) : null}
            </p.Stack>
          </Section>

          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "header", "section", "svg", "footer"],
  header: ["header"],
  section: ["section", "svg"],
  svg: ["svg"],
  footer: ["footer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicAbout__ArgProps,
      internalVariantPropNames: PlasmicAbout__VariantProps
    });

    return PlasmicAbout__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAbout";
  } else {
    func.displayName = `PlasmicAbout.${nodeName}`;
  }
  return func;
}

export const PlasmicAbout = Object.assign(
  // Top-level PlasmicAbout renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    section: makeNodeComponent("section"),
    svg: makeNodeComponent("svg"),
    footer: makeNodeComponent("footer"),
    // Metadata about props expected for PlasmicAbout
    internalVariantProps: PlasmicAbout__VariantProps,
    internalArgProps: PlasmicAbout__ArgProps
  }
);

export default PlasmicAbout;
/* prettier-ignore-end */

// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9W67x2Pynxr9eDxjdLuGCS
// Component: HkaU6j4gbuD
import * as React from "react";
import Head from "next/head";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Header from "../../Header"; // plasmic-import: mCxPr8fs96V/component
import Section from "../../Section"; // plasmic-import: TeEenYh07CLQ/component
import SquareCalander from "../../SquareCalander"; // plasmic-import: IkZLGa9TM-/component
import Button from "../../Button"; // plasmic-import: jRx1E81mYCIy/component
import Footer from "../../Footer"; // plasmic-import: R265Q5ctgGy/component
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_vermont_consumer_credit.module.css"; // plasmic-import: 9W67x2Pynxr9eDxjdLuGCS/projectcss
import sty from "./PlasmicCalendar.module.css"; // plasmic-import: HkaU6j4gbuD/css

export const PlasmicCalendar__VariantProps = new Array();

export const PlasmicCalendar__ArgProps = new Array();

function PlasmicCalendar__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = args;
  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{"Sales"}</title>
        <meta key="og:title" property="og:title" content={"Sales"} />
        <meta key="twitter:title" name="twitter:title" content={"Sales"} />
      </Head>

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
              className={classNames(projectcss.all, sty.freeBox__rHsUd)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__t5Tdh
                )}
              >
                {"Calendar"}
              </div>

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__aaAO
                )}
              >
                {"Use the calander below to pick a time"}
              </div>

              <SquareCalander
                data-plasmic-name={"squareCalander"}
                data-plasmic-override={overrides.squareCalander}
                className={classNames("__wab_instance", sty.squareCalander)}
              />

              {true ? (
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__m3Q3M)}
                >
                  <Button
                    data-plasmic-name={"button"}
                    data-plasmic-override={overrides.button}
                    className={classNames("__wab_instance", sty.button)}
                    color={"green"}
                    link={"/request-consultation"}
                    showEndIcon={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__cU6D3
                      )}
                    >
                      {"Make an Appointment Today"}
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
  root: ["root", "header", "section", "squareCalander", "button", "footer"],
  header: ["header"],
  section: ["section", "squareCalander", "button"],
  squareCalander: ["squareCalander"],
  button: ["button"],
  footer: ["footer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicCalendar__ArgProps,
          internalVariantPropNames: PlasmicCalendar__VariantProps
        }),

      [props, nodeName]
    );

    return PlasmicCalendar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCalendar";
  } else {
    func.displayName = `PlasmicCalendar.${nodeName}`;
  }
  return func;
}

export const PlasmicCalendar = Object.assign(
  // Top-level PlasmicCalendar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    section: makeNodeComponent("section"),
    squareCalander: makeNodeComponent("squareCalander"),
    button: makeNodeComponent("button"),
    footer: makeNodeComponent("footer"),
    // Metadata about props expected for PlasmicCalendar
    internalVariantProps: PlasmicCalendar__VariantProps,
    internalArgProps: PlasmicCalendar__ArgProps
  }
);

export default PlasmicCalendar;
/* prettier-ignore-end */

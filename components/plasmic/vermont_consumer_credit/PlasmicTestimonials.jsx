// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9W67x2Pynxr9eDxjdLuGCS
// Component: JV46E8AzoY
import * as React from "react";
import Head from "next/head";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Header from "../../Header"; // plasmic-import: mCxPr8fs96V/component
import Section from "../../Section"; // plasmic-import: TeEenYh07CLQ/component
import Testimonial from "../../Testimonial"; // plasmic-import: UHonw5mKes0b/component
import Button from "../../Button"; // plasmic-import: jRx1E81mYCIy/component
import Footer from "../../Footer"; // plasmic-import: R265Q5ctgGy/component
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_vermont_consumer_credit.module.css"; // plasmic-import: 9W67x2Pynxr9eDxjdLuGCS/projectcss
import sty from "./PlasmicTestimonials.module.css"; // plasmic-import: JV46E8AzoY/css
import CycleIcon from "./icons/PlasmicIcon__Cycle"; // plasmic-import: F1nfD4e8NqAk/icon

export const PlasmicTestimonials__VariantProps = new Array();

export const PlasmicTestimonials__ArgProps = new Array();

function PlasmicTestimonials__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;
  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{"Testimonials"}</title>
        <meta key="og:title" property="og:title" content={"Testimonials"} />
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
              className={classNames(projectcss.all, sty.freeBox__un7KO)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__uRo
                )}
              >
                {"Testimonials"}
              </div>

              <Testimonial
                className={classNames("__wab_instance", sty.testimonial__myxGt)}
                quote={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium leo at egestas molestie. In hac habitasse platea dictumst. Phasellus dolor sapien, auctor vitae libero ac, vulputate convallis nibh. "
                }
                tagline={"CEO & Co-Founder @ Dropbox"}
              />

              <Testimonial
                className={classNames("__wab_instance", sty.testimonial__tptt)}
                person={"Second Person"}
                quote={
                  "Nunc non risus sit amet quam maximus semper. Proin libero urna, mollis vel blandit eu, posuere vitae dolor. Ut nec mollis neque, sit amet convallis arcu. Pellentesque aliquam neque ut euismod finibus."
                }
                tagline={"CFO @ SomethingElse"}
              />

              <Testimonial
                className={classNames(
                  "__wab_instance",
                  sty.testimonial___4Gfj6
                )}
                person={"Some Otherguy"}
                quote={
                  "Etiam tempor varius lacus in fringilla. Nullam consequat odio purus, vel accumsan nisi sodales a. Aliquam arcu sapien, scelerisque scelerisque tortor eu, tristique facilisis ligula. Quisque tristique, risus at tincidunt iaculis, mauris nisi facilisis elit, scelerisque rutrum erat purus at metus. Quisque mauris orci, hendrerit sit amet mollis at, vulputate sit amet augue. Nam id mollis urna, ac hendrerit tortor. Donec ut lacus vitae dui condimentum hendrerit eu nec mi."
                }
                tagline={"Director of Finance @ ThirdThing"}
              />

              {true ? (
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__uF8Xj)}
                >
                  <Button
                    className={classNames("__wab_instance", sty.button__gK8Ah)}
                    color={"outlineBlue"}
                    link={"/request-consultation"}
                    showEndIcon={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__aAaTf
                      )}
                    >
                      {"Make an Appointment Today"}
                    </div>
                  </Button>

                  <Button
                    className={classNames("__wab_instance", sty.button__ietiQ)}
                    color={"blue"}
                    endIcon={
                      <CycleIcon
                        data-plasmic-name={"svg"}
                        data-plasmic-override={overrides.svg}
                        className={classNames(projectcss.all, sty.svg)}
                        role={"img"}
                      />
                    }
                    link={"/submit-testimonial"}
                    showEndIcon={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__tVbu
                      )}
                    >
                      {"Submit a Testimonial"}
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
      internalArgPropNames: PlasmicTestimonials__ArgProps,
      internalVariantPropNames: PlasmicTestimonials__VariantProps
    });

    return PlasmicTestimonials__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTestimonials";
  } else {
    func.displayName = `PlasmicTestimonials.${nodeName}`;
  }
  return func;
}

export const PlasmicTestimonials = Object.assign(
  // Top-level PlasmicTestimonials renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    section: makeNodeComponent("section"),
    svg: makeNodeComponent("svg"),
    footer: makeNodeComponent("footer"),
    // Metadata about props expected for PlasmicTestimonials
    internalVariantProps: PlasmicTestimonials__VariantProps,
    internalArgProps: PlasmicTestimonials__ArgProps
  }
);

export default PlasmicTestimonials;
/* prettier-ignore-end */
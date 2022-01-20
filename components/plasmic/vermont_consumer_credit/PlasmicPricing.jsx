// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9W67x2Pynxr9eDxjdLuGCS
// Component: 6sPp355nJZ-s
import * as React from "react";
import Head from "next/head";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Header from "../../Header"; // plasmic-import: mCxPr8fs96V/component
import Section from "../../Section"; // plasmic-import: TeEenYh07CLQ/component
import Plan from "../../Plan"; // plasmic-import: oNrTx8m4mKP0/component
import Bullet from "../../Bullet"; // plasmic-import: r8ItMn1I9Rr2/component
import Button from "../../Button"; // plasmic-import: jRx1E81mYCIy/component
import Faq from "../../Faq"; // plasmic-import: uvD0OplvXorD/component
import Footer from "../../Footer"; // plasmic-import: R265Q5ctgGy/component
import { useScreenVariants as useScreenVariantskcIfFDxm3XN2 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: KCIfFDxm3xN2/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_vermont_consumer_credit.module.css"; // plasmic-import: 9W67x2Pynxr9eDxjdLuGCS/projectcss
import sty from "./PlasmicPricing.module.css"; // plasmic-import: 6sPp355nJZ-s/css

export const PlasmicPricing__VariantProps = new Array();

export const PlasmicPricing__ArgProps = new Array();

function PlasmicPricing__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantskcIfFDxm3XN2()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
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
            sty.root
          )}
        >
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header)}
          />

          <Section
            data-plasmic-name={"pricingSection"}
            data-plasmic-override={overrides.pricingSection}
            className={classNames("__wab_instance", sty.pricingSection)}
            hasSubtitle={true}
            hasTitle={true}
            subtitle={
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
            }
            title={"Pricing"}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"columns"}
              data-plasmic-override={overrides.columns}
              hasGap={true}
              className={classNames(projectcss.all, sty.columns)}
            >
              <div className={classNames(projectcss.all, sty.column__uPwuw)}>
                <Plan
                  className={classNames("__wab_instance", sty.plan__cXwv1)}
                  price={
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__yK8L
                      )}
                    >
                      {"$10"}
                    </div>
                  }
                >
                  <Button
                    className={classNames("__wab_instance", sty.button__g2FGs)}
                    color={"outlineBlue"}
                  >
                    {"Get started"}
                  </Button>
                </Plan>
              </div>

              <div className={classNames(projectcss.all, sty.column__gTxOp)}>
                <Plan
                  className={classNames("__wab_instance", sty.plan__sxfDy)}
                  description={
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__ts9Cp)}
                    >
                      <Bullet
                        className={classNames(
                          "__wab_instance",
                          sty.bullet___3G7U
                        )}
                      />

                      <Bullet
                        className={classNames(
                          "__wab_instance",
                          sty.bullet__ov5
                        )}
                      />

                      <Bullet
                        className={classNames(
                          "__wab_instance",
                          sty.bullet__veEon
                        )}
                      />

                      <Bullet
                        className={classNames(
                          "__wab_instance",
                          sty.bullet__cfGpn
                        )}
                      />
                    </p.Stack>
                  }
                  name={"Team"}
                  price={
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___48Bvc
                      )}
                    >
                      {"$49"}
                    </div>
                  }
                >
                  <Button
                    className={classNames("__wab_instance", sty.button__qcR2)}
                    color={"blue"}
                  >
                    {"Get started"}
                  </Button>
                </Plan>
              </div>

              <div className={classNames(projectcss.all, sty.column__bolyl)}>
                <Plan
                  className={classNames("__wab_instance", sty.plan___91KZw)}
                  name={"Enterprise"}
                  price={
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__xwcoh
                      )}
                    >
                      {"$199"}
                    </div>
                  }
                >
                  <Button
                    className={classNames("__wab_instance", sty.button___6YIdj)}
                    color={"outlineBlue"}
                  >
                    {"Get started"}
                  </Button>
                </Plan>
              </div>
            </p.Stack>
          </Section>

          <Section
            data-plasmic-name={"faqSection"}
            data-plasmic-override={overrides.faqSection}
            className={classNames("__wab_instance", sty.faqSection)}
            hasSubtitle={true}
            hasTitle={true}
            subtitle={
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
            }
            title={"FAQ"}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__foUiQ)}
            >
              <Faq
                className={classNames("__wab_instance", sty.faq__imjdE)}
                slot={
                  "Yes! You can. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
                }
              >
                {"Are there long-term contracts?"}
              </Faq>

              <Faq
                className={classNames("__wab_instance", sty.faq__y9Cgi)}
                slot={
                  "Yes! You can. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
                }
              >
                {"Can I add or remove licenses?"}
              </Faq>

              <Faq
                className={classNames("__wab_instance", sty.faq__pVejR)}
                slot={
                  "Yes! You can. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
                }
              >
                {"Do you offer refunds?"}
              </Faq>
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
  root: ["root", "header", "pricingSection", "columns", "faqSection", "footer"],
  header: ["header"],
  pricingSection: ["pricingSection", "columns"],
  columns: ["columns"],
  faqSection: ["faqSection"],
  footer: ["footer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicPricing__ArgProps,
      internalVariantPropNames: PlasmicPricing__VariantProps
    });

    return PlasmicPricing__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPricing";
  } else {
    func.displayName = `PlasmicPricing.${nodeName}`;
  }
  return func;
}

export const PlasmicPricing = Object.assign(
  // Top-level PlasmicPricing renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    pricingSection: makeNodeComponent("pricingSection"),
    columns: makeNodeComponent("columns"),
    faqSection: makeNodeComponent("faqSection"),
    footer: makeNodeComponent("footer"),
    // Metadata about props expected for PlasmicPricing
    internalVariantProps: PlasmicPricing__VariantProps,
    internalArgProps: PlasmicPricing__ArgProps
  }
);

export default PlasmicPricing;
/* prettier-ignore-end */

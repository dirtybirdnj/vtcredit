// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9W67x2Pynxr9eDxjdLuGCS
// Component: D-IxSyo2D5I
import * as React from "react";
import Head from "next/head";
import Link from "next/link";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
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
import sty from "./PlasmicRequestConsultationPayment.module.css"; // plasmic-import: D-IxSyo2D5I/css
import CycleIcon from "./icons/PlasmicIcon__Cycle"; // plasmic-import: F1nfD4e8NqAk/icon
import PoweredByStripeBlurplesvgIcon from "./icons/PlasmicIcon__PoweredByStripeBlurplesvg"; // plasmic-import: JyjhYJngx/icon

export const PlasmicRequestConsultationPayment__VariantProps = new Array();

export const PlasmicRequestConsultationPayment__ArgProps = new Array();

function PlasmicRequestConsultationPayment__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = args;
  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{"Request Consultation"}</title>
        <meta
          key="og:title"
          property="og:title"
          content={"Request Consultation"}
        />

        <meta
          key="twitter:title"
          name="twitter:title"
          content={"Request Consultation"}
        />
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
              className={classNames(projectcss.all, sty.freeBox___9UDju)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__spol7
                )}
              >
                {"Request Consultation"}
              </div>

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___5Cssf
                )}
              >
                {
                  'Are you ready to take things to the next level? We are excited to assist you in the process of regaining control over your financial challenges.\n\nContact us to schedule an appointment, once that\'s done you can click the "Request Appointment" button below to make a payment.\n\nOnce we receive your payment we will confirm your appointment via email or telephone.\n\nIf you make a payment before you contact us to schedule a date we cannot guarantee you will be able to get your desired date or time. \n\nPlease contact us to schedule a date and we will work with you to find a date and time to meet and review your financial information.'
                }
              </div>

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__fleUu
                )}
              >
                {"Initial 45 Minute Consultation"}
              </div>

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__i9Ea4
                )}
              >
                {
                  "You will be taken to a different page to process your payment. "
                }
              </div>

              {true ? (
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__uefbW)}
                >
                  {true ? (
                    <div
                      className={classNames(projectcss.all, sty.freeBox__xkChY)}
                    >
                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__hHrqT
                        )}
                        color={"green"}
                        link={"https://buy.stripe.com/fZeaIwd2706Ybvy8ww"}
                        showEndIcon={true}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__xSPcY
                          )}
                        >
                          {"Request Appointment"}
                        </div>
                      </Button>

                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__kzG9N
                        )}
                      >
                        {
                          "Clicking this button will open a different site \nwith our secure payment processing page."
                        }
                      </div>
                    </div>
                  ) : null}

                  <Button
                    className={classNames("__wab_instance", sty.button__rg7Wi)}
                    endIcon={
                      <CycleIcon
                        className={classNames(projectcss.all, sty.svg__nUcI)}
                        role={"img"}
                      />
                    }
                    link={"/contact"}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__fmsk4
                      )}
                    >
                      {"Contact Us"}
                    </div>
                  </Button>
                </p.Stack>
              ) : null}

              <p.PlasmicLink
                data-plasmic-name={"link"}
                data-plasmic-override={overrides.link}
                className={classNames(projectcss.all, projectcss.a, sty.link)}
                component={Link}
                href={"https://stripe.com/"}
                platform={"nextjs"}
                target={"_blank"}
              >
                <PoweredByStripeBlurplesvgIcon
                  className={classNames(projectcss.all, sty.svg___8Io5)}
                  role={"img"}
                />
              </p.PlasmicLink>

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__jHk80
                )}
              >
                {"Please contact us if you have any difficulties or questions."}
              </div>
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
  root: ["root", "header", "section", "link", "footer"],
  header: ["header"],
  section: ["section", "link"],
  link: ["link"],
  footer: ["footer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicRequestConsultationPayment__ArgProps,
          internalVariantPropNames:
            PlasmicRequestConsultationPayment__VariantProps
        }),

      [props, nodeName]
    );

    return PlasmicRequestConsultationPayment__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicRequestConsultationPayment";
  } else {
    func.displayName = `PlasmicRequestConsultationPayment.${nodeName}`;
  }
  return func;
}

export const PlasmicRequestConsultationPayment = Object.assign(
  // Top-level PlasmicRequestConsultationPayment renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    section: makeNodeComponent("section"),
    link: makeNodeComponent("link"),
    footer: makeNodeComponent("footer"),
    // Metadata about props expected for PlasmicRequestConsultationPayment
    internalVariantProps: PlasmicRequestConsultationPayment__VariantProps,
    internalArgProps: PlasmicRequestConsultationPayment__ArgProps
  }
);

export default PlasmicRequestConsultationPayment;
/* prettier-ignore-end */

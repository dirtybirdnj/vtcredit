// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9W67x2Pynxr9eDxjdLuGCS
// Component: OS9jnRN5y9p
import * as React from "react";
import Head from "next/head";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Header from "../../Header"; // plasmic-import: mCxPr8fs96V/component
import Section from "../../Section"; // plasmic-import: TeEenYh07CLQ/component
import Button from "../../Button"; // plasmic-import: jRx1E81mYCIy/component
import FeatureCard from "../../FeatureCard"; // plasmic-import: 15TtZ6Zo0vI/component
import Testimonial from "../../Testimonial"; // plasmic-import: UHonw5mKes0b/component
import HomeCta from "../../HomeCta"; // plasmic-import: VxyCfCXPu8O/component
import Footer from "../../Footer"; // plasmic-import: R265Q5ctgGy/component
import { useScreenVariants as useScreenVariantskcIfFDxm3XN2 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: KCIfFDxm3xN2/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_vermont_consumer_credit.module.css"; // plasmic-import: 9W67x2Pynxr9eDxjdLuGCS/projectcss
import sty from "./PlasmicHome.module.css"; // plasmic-import: OS9jnRN5y9p/css
import RightArrowIcon from "./icons/PlasmicIcon__RightArrow"; // plasmic-import: 1F_c2O9V7izs/icon
import LightningIcon from "./icons/PlasmicIcon__Lightning"; // plasmic-import: -oVmvg3GfjTc/icon
import HammerIcon from "./icons/PlasmicIcon__Hammer"; // plasmic-import: k4l-Dm3c3qfC/icon
import PencilIcon from "./icons/PlasmicIcon__Pencil"; // plasmic-import: eaPO9-Mdo-JO/icon
import SwapIcon from "./icons/PlasmicIcon__Swap"; // plasmic-import: wNCM0uukZ7kZ/icon
import SlotIcon from "./icons/PlasmicIcon__Slot"; // plasmic-import: ZHIXBU4fRCk2/icon
import CycleIcon from "./icons/PlasmicIcon__Cycle"; // plasmic-import: F1nfD4e8NqAk/icon
import FacebookLogoIcon from "./icons/PlasmicIcon__FacebookLogo"; // plasmic-import: e-w90-wSkVN4/icon
import TinderLogoIcon from "./icons/PlasmicIcon__TinderLogo"; // plasmic-import: Xf4uM7tBiZpx/icon
import AirbnbLogoIcon from "./icons/PlasmicIcon__AirbnbLogo"; // plasmic-import: V4XdJsnZ7qfj/icon
import HubspotLogoIcon from "./icons/PlasmicIcon__HubspotLogo"; // plasmic-import: D8AvO2dnCPR-/icon
import AmazonLogoIcon from "./icons/PlasmicIcon__AmazonLogo"; // plasmic-import: cpTTWtRk9MQp/icon

export const PlasmicHome__VariantProps = new Array();

export const PlasmicHome__ArgProps = new Array();

function PlasmicHome__RenderFunc(props) {
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
        <p.Stack
          as={"div"}
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          hasGap={true}
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
            data-plasmic-name={"topSection"}
            data-plasmic-override={overrides.topSection}
            className={classNames("__wab_instance", sty.topSection)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__pO4Au)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__m9Knd)}
              >
                <div className={classNames(projectcss.all, sty.freeBox__u394N)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__ghjKy
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobile")
                      ? "Make your website"
                      : "Fix your credit"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___5Fuor
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobile")
                      ? "wonderful"
                      : "the right way"}
                  </div>
                </div>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___3WgOp
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobile")
                    ? "Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever."
                    : "Our approach to credit counseling puts the client first and paves the way \nto long-lasting financial stability and success"}
                </div>
              </p.Stack>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__lpT7G)}
              >
                <Button
                  className={classNames("__wab_instance", sty.button__diSdz)}
                  color={"blue"}
                  endIcon={
                    <RightArrowIcon
                      className={classNames(projectcss.all, sty.svg___4XHnh)}
                      role={"img"}
                    />
                  }
                  showEndIcon={true}
                >
                  {"Request a Consultation"}
                </Button>

                <Button
                  className={classNames("__wab_instance", sty.button__cv9S9)}
                >
                  {"Learn more"}
                </Button>
              </p.Stack>

              <div className={classNames(projectcss.all, sty.freeBox__nvugP)}>
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__exQfe)}
                  displayHeight={"100%"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"none"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"100%"}
                  src={{
                    src: "/plasmic/vermont_consumer_credit/images/heroImage.png",
                    fullWidth: 1536,
                    fullHeight: 864,
                    aspectRatio: undefined
                  }}
                />
              </div>
            </p.Stack>
          </Section>

          <Section
            data-plasmic-name={"solutions"}
            data-plasmic-override={overrides.solutions}
            className={classNames("__wab_instance", sty.solutions)}
            hasSubtitle={true}
            hasTitle={true}
            subtitle={
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
            }
            title={"Explore the solutions"}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"columns"}
              data-plasmic-override={overrides.columns}
              hasGap={true}
              className={classNames(projectcss.all, sty.columns)}
            >
              <div className={classNames(projectcss.all, sty.column__zaaf0)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__pN8Qh)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__aSRd
                    )}
                  >
                    {"Powerful suite of tools"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__d2DJg
                    )}
                  >
                    {
                      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa."
                    }
                  </div>

                  <FeatureCard
                    className={classNames(
                      "__wab_instance",
                      sty.featureCard__toAWz
                    )}
                    description={
                      "Taking collaboration to the next level with security and administrative features built for teams"
                    }
                    iconBack={
                      <LightningIcon
                        className={classNames(projectcss.all, sty.svg__ogzrz)}
                        role={"img"}
                      />
                    }
                    long={true}
                    title={"Building the Simple ecosystem"}
                  />

                  <FeatureCard
                    className={classNames(
                      "__wab_instance",
                      sty.featureCard__s7CKw
                    )}
                    description={
                      "Taking collaboration to the next level with security and administrative features built for teams"
                    }
                    iconBack={
                      <HammerIcon
                        className={classNames(projectcss.all, sty.svg__pkdZj)}
                        role={"img"}
                      />
                    }
                    long={true}
                    title={"Building the Simple Ecosystem"}
                  />

                  <FeatureCard
                    className={classNames(
                      "__wab_instance",
                      sty.featureCard__xhdzI
                    )}
                    description={
                      "Taking collaboration to the next level with security and administrative features built for teams"
                    }
                    iconBack={
                      <PencilIcon
                        className={classNames(projectcss.all, sty.svg__hBzCm)}
                        role={"img"}
                      />
                    }
                    long={true}
                    title={"Building the Simple Ecosystem"}
                  />
                </p.Stack>
              </div>

              <div className={classNames(projectcss.all, sty.column__srJjz)}>
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__lyEwR)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"none"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"100%"}
                  src={{
                    src: "/plasmic/vermont_consumer_credit/images/simpleProject.png",
                    fullWidth: 1000,
                    fullHeight: 924,
                    aspectRatio: undefined
                  }}
                />
              </div>
            </p.Stack>
          </Section>

          <Section
            data-plasmic-name={"howItWorks"}
            data-plasmic-override={overrides.howItWorks}
            className={classNames("__wab_instance", sty.howItWorks)}
            color={"halfDark"}
            hasSubtitle={true}
            hasTitle={true}
            subtitle={
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
            }
            title={"How Simple works"}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__aVxEn)}
            >
              <FeatureCard
                className={classNames("__wab_instance", sty.featureCard__reKeO)}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
                iconFront={
                  <SwapIcon
                    className={classNames(projectcss.all, sty.svg__kXbS7)}
                    role={"img"}
                  />
                }
                title={"Initial Contact"}
              />

              <FeatureCard
                className={classNames(
                  "__wab_instance",
                  sty.featureCard___8VUuH
                )}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
                iconFront={
                  <SlotIcon
                    className={classNames(projectcss.all, sty.svg__hjAUu)}
                    role={"img"}
                  />
                }
                title={"Discovery Session"}
              />

              <FeatureCard
                className={classNames(
                  "__wab_instance",
                  sty.featureCard___2JH8A
                )}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
                iconFront={
                  <CycleIcon
                    className={classNames(projectcss.all, sty.svg__ailEl)}
                    role={"img"}
                  />
                }
                title={"Contracting"}
              />

              <FeatureCard
                className={classNames("__wab_instance", sty.featureCard__nxC0A)}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
                iconFront={
                  <HammerIcon
                    className={classNames(projectcss.all, sty.svg__dbwfF)}
                    role={"img"}
                  />
                }
                title={"Fast Prototyping"}
              />

              <FeatureCard
                className={classNames("__wab_instance", sty.featureCard__wDng1)}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
                iconFront={
                  <PencilIcon
                    className={classNames(projectcss.all, sty.svg__va5Xm)}
                    role={"img"}
                  />
                }
                title={"Design Phase"}
              />

              <FeatureCard
                className={classNames("__wab_instance", sty.featureCard__vmN60)}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
                iconFront={
                  <LightningIcon
                    className={classNames(projectcss.all, sty.svg__gMx7R)}
                    role={"img"}
                  />
                }
                title={"Develop & Launch"}
              />
            </p.Stack>

            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__c3TgN)} />
            ) : null}
          </Section>

          <Section
            data-plasmic-name={"validation"}
            data-plasmic-override={overrides.validation}
            className={classNames("__wab_instance", sty.validation)}
            hasSubtitle={true}
            hasTitle={true}
            subtitle={
              "Arcu cursus vitae congue mauris rhoncus viverra nibh cras pulvinar mattis blandit libero cursus mattis."
            }
            title={"Trusted by over 20,000 companies all over the world"}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__sspZq)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__jzEmP)}
              >
                <FacebookLogoIcon
                  className={classNames(projectcss.all, sty.svg__mqwXy)}
                  role={"img"}
                />

                <TinderLogoIcon
                  className={classNames(projectcss.all, sty.svg__drWGs)}
                  role={"img"}
                />

                <AirbnbLogoIcon
                  className={classNames(projectcss.all, sty.svg__xIAx)}
                  role={"img"}
                />

                <HubspotLogoIcon
                  className={classNames(projectcss.all, sty.svg__fyr8F)}
                  role={"img"}
                />

                <AmazonLogoIcon
                  className={classNames(projectcss.all, sty.svg__uOftE)}
                  role={"img"}
                />
              </p.Stack>

              <Testimonial
                data-plasmic-name={"testimonial"}
                data-plasmic-override={overrides.testimonial}
                className={classNames("__wab_instance", sty.testimonial)}
              />
            </p.Stack>
          </Section>

          <HomeCta
            data-plasmic-name={"homeCta"}
            data-plasmic-override={overrides.homeCta}
            className={classNames("__wab_instance", sty.homeCta)}
          />

          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </p.Stack>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "header",
    "topSection",
    "solutions",
    "columns",
    "howItWorks",
    "validation",
    "testimonial",
    "homeCta",
    "footer"
  ],

  header: ["header"],
  topSection: ["topSection"],
  solutions: ["solutions", "columns"],
  columns: ["columns"],
  howItWorks: ["howItWorks"],
  validation: ["validation", "testimonial"],
  testimonial: ["testimonial"],
  homeCta: ["homeCta"],
  footer: ["footer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHome__ArgProps,
      internalVariantPropNames: PlasmicHome__VariantProps
    });

    return PlasmicHome__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHome";
  } else {
    func.displayName = `PlasmicHome.${nodeName}`;
  }
  return func;
}

export const PlasmicHome = Object.assign(
  // Top-level PlasmicHome renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    topSection: makeNodeComponent("topSection"),
    solutions: makeNodeComponent("solutions"),
    columns: makeNodeComponent("columns"),
    howItWorks: makeNodeComponent("howItWorks"),
    validation: makeNodeComponent("validation"),
    testimonial: makeNodeComponent("testimonial"),
    homeCta: makeNodeComponent("homeCta"),
    footer: makeNodeComponent("footer"),
    // Metadata about props expected for PlasmicHome
    internalVariantProps: PlasmicHome__VariantProps,
    internalArgProps: PlasmicHome__ArgProps
  }
);

export default PlasmicHome;
/* prettier-ignore-end */
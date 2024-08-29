import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import Heading from "@theme/Heading";
import styles from "./index.module.css";
import macIcon from "@site/static/img/apple-logo.png";
import WindowsIcon from "@site/static/img/windows-logo.png";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <a
            className="button button--secondary button--lg"
            href="https://github.com/couchbaselabs/CapellaDataStudioBuilds/releases/latest/download/Capella-DataStudio-darwin-x64.zip
"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center" }}
          >
            <img
              src={macIcon}
              alt="Mac Icon"
              style={{
                width: "20px",
                height: "24px",
                marginRight: "10px",
              }}
            />
            Download for MacOS
          </a>
          <a
            className="button button--secondary button--lg"
            href="https://github.com/couchbaselabs/CapellaDataStudioBuilds/releases/latest/download/Capella.DataStudio.Setup.exe"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "10px",
            }}
          >
            <img
              src={WindowsIcon}
              alt="Windows Icon"
              style={{ width: "24px", height: "24px", marginRight: "10px" }}
            />
            Download for Windows
          </a>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

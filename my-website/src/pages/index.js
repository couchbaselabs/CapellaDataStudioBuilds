import React, { useState } from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import styles from "./index.module.css";
import macIcon from "@site/static/img/apple-logo.png";
import WindowsIcon from "@site/static/img/windows-logo.png";

import ReCAPTCHA from "react-google-recaptcha";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const [verified, setVerified] = useState(false); // for reCAPTCHA verification
  const recaptchaSiteKey = siteConfig.customFields.REACT_APP_RECAPTCHA_SITE_KEY;

  const onRecaptchaChange = (value) => {
    if (value) {
      setVerified(true);
    }
  };

  const triggerDownload = (downloadLink) => {
    if (verified) {
      window.location.href = downloadLink;
    } else {
      alert("Please verify you're not a robot.");
    }
  };

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>

        {/* Wrapper for reCAPTCHA and download buttons */}
        <div className={styles.recaptchaContainer}>
          {/* Centered reCAPTCHA */}
          <div className={styles.recaptchaBox}>
            <ReCAPTCHA
              sitekey={recaptchaSiteKey}
              onChange={onRecaptchaChange}
            />
          </div>

          {/* Download buttons */}
          <div className={styles.buttons}>
            {/* MacOS Download Button */}
            <button
              className="button button--secondary button--lg"
              onClick={() =>
                triggerDownload(
                  "https://github.com/couchbaselabs/CapellaDataStudioBuilds/releases/latest/download/Capella-DataStudio-darwin-x64.zip"
                )
              }
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
            </button>

            {/* Windows Download Button */}
            <button
              className="button button--secondary button--lg"
              onClick={() =>
                triggerDownload(
                  "https://github.com/couchbaselabs/CapellaDataStudioBuilds/releases/latest/download/Capella.DataStudio.Setup.exe"
                )
              }
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
            </button>
          </div>
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

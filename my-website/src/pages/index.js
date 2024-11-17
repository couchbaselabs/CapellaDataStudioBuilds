import React, { useState } from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import styles from "./index.module.css";
import macIcon from "@site/static/img/apple-logo.png";
import WindowsIcon from "@site/static/img/windows-logo.png";

import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const recaptchaSiteKey = siteConfig.customFields.REACT_APP_RECAPTCHA_SITE_KEY;
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleDownload = async (downloadLink) => {
    if (!executeRecaptcha) {
      console.error("Execute recaptcha function is not available");
      return;
    }

    // Get the token for verification
    const token = await executeRecaptcha("download_action");

    // You could optionally verify the token server-side here

    if (token) {
      window.location.href = downloadLink;
    } else {
      alert("Verification failed. Please try again.");
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
          {/* Download buttons */}
          <div className={styles.buttons}>
            {/* Windows Download Button */}
            <button
              className="button button--secondary button--lg"
              onClick={() =>
                handleDownload(
                  "https://github.com/couchbaselabs/CapellaDataStudioBuilds/releases/latest/download/Capella.DataStudio.Setup.exe"
                )
              }
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "10px",
              }}
            >
              <img
                src={WindowsIcon}
                alt="Windows Icon"
                style={{ width: "24px", height: "24px", marginRight: "10px" }}
              />
              Download for Windows
            </button>

            {/* MacOS Download Button */}
            <button
              className="button button--secondary button--lg"
              onClick={() =>
                handleDownload(
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
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const recaptchaSiteKey = siteConfig.customFields.REACT_APP_RECAPTCHA_SITE_KEY;

  return (
    <Layout
      title={`Home`}
      description="Description will go into a meta tag in <head />"
    >
      <GoogleReCaptchaProvider reCaptchaKey={recaptchaSiteKey}>
        <HomepageHeader />
      </GoogleReCaptchaProvider>
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

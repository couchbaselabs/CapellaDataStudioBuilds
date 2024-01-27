import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import CouchbaseSelfSVG from "@site/static/img/couchbase.svg";
import CouchbaseCapellaSVG from "@site/static/img/capella.svg";

const FeatureList = [
  {
    title: "Couchbase Self-Managed",
    Svg: CouchbaseSelfSVG,
    description: (
      <>
        Connect to your Self-Managed Couchbase instances. These can be On-prem,
        deployed on any Cloud provider or a Docker instance on your Mac.
      </>
    ),
  },
  {
    title: "Couchbase Capella",
    Svg: CouchbaseCapellaSVG,
    description: (
      <>
        Connect to your Capella instances. Use the cool AI assisted iQ to
        generate your SQL++ queries.
      </>
    ),
  },
  {
    title: "Couchbase Capella Columnar",
    Svg: require("@site/static/img/columnar.svg").default,
    description: (
      <>
        Connect to your Capella Columnar instances. Use the cool AI assisted iQ
        to generate your SQL++ queries.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

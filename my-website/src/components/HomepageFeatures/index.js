import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import CouchbaseSelfSVG from "@site/static/img/couchbase.svg";
import CouchbaseCapellaSVG from "@site/static/img/capella.svg";
import CouchbaseColumnarSVG from "@site/static/img/columnar.svg";

const FeatureList = [
  {
    title: "Couchbase Server",
    Svg: CouchbaseSelfSVG,
    description: (
      <>
        Connect to your Couchbase Server Clusters. These can be On-prem,
        deployed on any Cloud provider or Docker.
      </>
    ),
  },
  {
    title: "Capella Operational",
    Svg: CouchbaseCapellaSVG,
    description: (
      <>
        Connect to your Capella Operational Clusters. Use the cool AI assisted
        iQ to generate your SQL++ queries.
      </>
    ),
  },
  {
    title: "Capella Columnar",
    Svg: CouchbaseColumnarSVG,
    description: (
      <>
        Connect to your Capella Columnar Clusters. Use the cool AI assisted iQ
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

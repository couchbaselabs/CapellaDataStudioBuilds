---
sidebar_position: 3
title: "Links Manager"
---

# Links

:::info

- Unlike Couchbase Server, Columnar Collections come in 2 flavors
  - Collection contains data which resides on the Columnar Cluster (**Standalone**)
  - Collection contains data whuich resides external to the Columnar Cluster, like:
    - On a Capella Provisioned or a Self-Managed Couchbase Cluster
    - On a Amazon S3 Bucket
    - On MongoDB, mySQL or PostGres database which are connected using **Kafka** from:
      - Confluent Cloud Platform
      - Amazon MSK
- For external data, the Collections needs to **link** to the data source
- The **global** Links Manager manages these links.
- The links are global to the Columnar Cluster

  :::

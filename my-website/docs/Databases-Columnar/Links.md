---
sidebar_position: 2
title: "Links and Collections"
---

# Links and Collections in Columnar

In Capella DataStudio, the management of links and collections for Columnar instances provides a unified interface for accessing data from various sources. This section explains the concepts and processes involved in working with links and collections.

## Understanding Links and Collections

In Columnar, collections are part of a scope, but they differ from provisioned instances in how data is stored and accessed:

- **Standalone Collections**: Data is located within the cluster itself.
- **External Collections**: Data is stored outside the cluster, accessed through links.

External data sources can include:

- Amazon S3
- Capella/Couchbase instances
- MongoDB
- MySQL
- PostgreSQL

Links are global to the cluster and provide the connection to these external data sources.

## Available Link Types

Capella DataStudio supports the following link types:

1. **Local Link**: Always available, used for standalone collections.
2. **Couchbase Link**: Requires a Couchbase/Capella connection in DataStudio.
3. **Amazon S3 Link**: Requires an S3 store configuration in DataStudio.
4. **Confluent Cloud Platform Link**: Link details maintained on the Columnar instance.
5. **Amazon MSK Link**: Link details maintained on the Columnar instance.

:::info
To maintain a consistent UI flow and paradigm, standalone collections in DataStudio are created under "Local" Links, ensuring a uniform creation and management process across all collection types.
:::

## Working with Links and Collections

### Managing Links

1. Open the Links Manager in Capella DataStudio.
2. Add the required links based on your data source needs.

### Creating Collections

1. In the Active Scope, create a link reference.
2. Select the desired link from the dropdown, which displays available links from the Link Manager.
3. Add collections to the selected link reference.

:::tip
The dialog for adding collections will vary based on the selected link type. Refer to subsequent sections for detailed information on each link type.
:::

## Next Steps

In the following sections, we'll dive deeper into the specifics of each link type and provide step-by-step guides for creating and managing collections across different data sources.

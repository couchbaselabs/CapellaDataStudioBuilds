---
sidebar_position: 3
title: "The GSI Indexes UI"
---

# GSI Indexes

The **GSI Indexes** Tab allows you to select any Collection and view the Indexes associated with the Collection.
:::info

- The GSI Indexes Viewer acts on the _Active Connection_ / _Active Database_ / _Active Scope_
  - Check the **AppBar** for the _Active Context_

:::
![indexes-provisoned](/img/databases/provisioned-indexes.png)

## GSI Indexes UI

The GSI Indexes UI in Capella DataStudio provides a comprehensive overview of all Global Secondary Indexes (GSI) for the active database and scope. This feature is designed to enhance index management and improve the efficiency of your Couchbase Server.

### Features

- **Table View**: All GSI indexes are displayed in a sortable and filterable table.
  - **Collection Name**: The name of the collection.
  - **Keys**: The indexed fields.
  - **Filter**: The where clause (partial index).
  - **Status**: The current status of the index.
  - **Replicas**: The number of index replicas.
  - **Partitions**: The number of partitions.
  - **Build Progress**: The progress of index building.
  - **Date Last Used**: The last date the index was used.

### Functionality

- **Sortable and Filterable**: The table allows you to sort and filter individual columns, making it easier to search for duplicates and assess whether an index is being used. This functionality aids in consolidating indexes and removing unwanted ones to improve server efficiency.
- **Index Management**: Easily manage your indexes by sorting and filtering columns. This helps in identifying unused or duplicate indexes, allowing for consolidation and removal to enhance server performance.

### Footer Metrics

The footer of the table provides important metrics about the indexes, including:

- **Scan Latency**: The time taken to scan the index.
- **Resident Ratio**: The percentage of index data that resides in memory.
- **Cache Hit Ratio**: The ratio of index cache hits to total requests.
- **Index Fragmentation %**: The percentage of index fragmentation, useful for assessing index performance.

### Index Operations

- **Drop Indexes**: Indexes can be dropped directly from this view, providing a convenient way to manage and optimize your indexes.

The GSI Indexes UI is a powerful tool in Capella DataStudio for managing your indexes efficiently. With its detailed view and comprehensive metrics, you can ensure your Couchbase Server runs optimally by effectively managing and optimizing your indexes.

:::tip[Tip]
Indexes are also displayed in the **Workbenches** UI, and there, the indexes are displayed in the definiton format.
:::

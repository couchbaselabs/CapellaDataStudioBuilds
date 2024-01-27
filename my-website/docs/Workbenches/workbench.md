---
sidebar_position: 1
title: "Workbenches Overview"
---

# Workbenches Overview

AI assisted Query Workbenches to develop your SQL++ queries.
:::info
The Worbench is common to all types of connections with these exceptions:

- AI Assist is not available for _Couchbase Self Managed Clusters_
- Query Configuration is not applicable for _Capella Columnar_
  :::

## The Workbench UI

![workbench-main](/img/workbenches/workbench-main.png)

## The UI Panels

:::info
Notice the _Context_ in the **AppBar**<br />
Queries will pick up the _Active Database_ and _Active Scope_ from this<br />
Pic also shows the _Active Store_. **Favorites** will be picked up from here.<br />
As a reminder, the structure of the Store (for Favorites) is:<br />

```
~/Documents/MyRepository
├── Backups
├── Datasets
├── Favorites
│   ├── travel-sample
│   │   ├── inventory
│   │   │	├── 1.sql
│   │   │	├── 2.sql
```

:::
Theare are 3 sections and we will be discussing each one in further detail:

- The SQL++ Editor
- The Results Panel
- The Side Panel

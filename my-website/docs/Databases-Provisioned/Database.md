---
sidebar_position: 1
title: "The Database UI"
---

# Databases

:::info
As an example, we will be looking at databases from a Provisoned Connection, _Acme Shopping Cluster_. The documentation for Database Provisioned also apply to Self managed instances.
:::

## The UI

![Provisioned-Database-Main](/img/databases/databases-capella-main.png)
The UI is tabbed:

- Databases (aka _Buckets_)
- Documents
- GSI Indexes
- Schema
- FTS Indexes (_under construction_)

## Databases (_Buckets_)

The Main Panel has 3 tables

- **Bucket**: Choosing Bucket sets _Active Bucket_ in the **AppBar**
- **Scope**: Scopes for the chosen Bucket. Choosing Scope sets _Active Scope_ in the **AppBar**
- **Collection**: Collections for the chosen Scope.

## Buckets Table

This table shows the list of buckets and the number of documents in each bucket.<br />
The table also has a Refresh Button and a Backup Button.<br />
**Refresh**: This action results in the following:

- The bucket is removed from the _CapellaDatastudio store_
- The bucket information is fetched once again from the Server
- You need to do this if Scopes and Collections have been added/removed directly from the Server UI and are not reflected in Capella DataStudio.
  **Backup**: This backs up the entire bucket. More on this later in this page.

:::warning
You _cannot_ create Buckets from Capella DataStudio.<br />
You _cannot_ delete Buckets from Capella DataStudio.<br />
:::

## Scopes Table

This table shows the list of scopes in the chosen bucket.<br />
The table also has a Add Scope, Refresh and Delete Buttons.
:::info
When you connect to a new instance, or create scopes and add data etc. schemas are **not** automatically fetched.<br />
You need to refresh Scopes to fetch the schemas and a sample document.<br />
Refresh will perform the action on **all scopes** and their associated collections.<br />

- So, This action takes time!!!
  - You can check if the collections have a schema from the adjoining table.
- A red check box means, no schema for this collection
  - This will be true if that collection has no documents
- A green check box means there is a schema for this collection
- Schemas are available only for clusters with **Query Service**
  :::

**+Scope**: This action adds one or more Scopes to the Bucket.
<img src="/img/databases/databases-capella-main-add-scope.png" width="400" alt="Capella Add Scope" />

**+Refresh**: This action results in the following:

- The scope is removed from the _CapellaDatastudio store_.
- The scope information is fetched once again from the Server.
- Most importantly, it fetches the **schema** for the collection.

**Delete** (Trashcan Icon):

  <img src="/img/databases/databases-capella-main-delete-scope.png" width="400" alt="Capella Delete Scope" />

This action results in the following:

- All collections in the scope are deleted from the server
- The scope is deleted from the server
- This action is irreversible

## Collections Table

This table shows the list of collections in the chosen scope.<br />
The table also has a Add Collection, Refresh and Delete Buttons.<br />
**+Collection**: This action adds one or more Collections to the Scope.

  <img src="/img/databases/databases-capella-main-add-collection.png" width="400" alt="Capella Add Collection" />

**+Refresh**: This action results in the following:

- The latest item count is fetched from the server.
  **Delete** (Trashcan Icon): You can delete one or more collections by choosing them. The checkbox indicates the collections chosen.

<img src="/img/databases/databases-capella-main-delete-collection.png" width="400" alt="Capella Delete Collection" />

This action results in the following:

- All collections in the scope are deleted from the server
- This action is irreversible

:::info
In the Collections Table, currently, the Ops/Sec, Mem Used, Disk Utiized are fetched only once and are not continuously refreshed.
:::

## The Footer Table

Displays some details on the chosen Bucket.
:::info
In the Footer Table, currently, the Performance metrics are fetched only once and are not continuously refreshed.
:::

## Tip

:::tip[Tip]

Set the **Active Bucket** and **Active Scope** Context from this UI.
:::

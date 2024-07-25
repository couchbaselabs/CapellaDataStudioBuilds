---
sidebar_position: 1
title: "The Database UI"
---

# Databases (_Buckets_)

:::info
As an example, we will be looking at databases from a Provisioned Connection, _Acme Shopping Cluster_. The documentation for Database Provisioned also apply to Self managed instances.
:::

![Provisioned-Database-Main](/img/databases/databases-capella-main.png)

## Databases UI

The Databases UI in Capella DataStudio provides a comprehensive interface for managing databases, scopes, and collections. This feature is designed to facilitate efficient data management and synchronization between Capella DataStudio and your Couchbase Server.

### Features

#### Top Panel

- **Server Sync Button**: Use this button to sync Capella DataStudio with the server if you have added databases outside of Capella DataStudio. This synchronization will not affect any stored documents and schemas.

#### Three Main Panels

##### Databases Panel

- **Databases List**: Displays the names and number of documents in each database. Selecting a database sets it as the active database.
- **AppBar**: Check out the AppBar for additional options.
- **Backup Button**: Located in the panel toolbar, this button will be discussed later.
  :::warning
  You _cannot_ **create** or **delete** Buckets from Capella DataStudio.
  :::

##### Scopes Panel

- **Scopes List**: Lists the scopes for the active database, indicating whether they are read and write enabled.
- **Add Scope Button**: Located in the panel toolbar, this button brings up a dialog box to add a new scope.
- **Delete Scope Button**: A trashcan icon in the panel toolbar allows you to delete a scope. Selecting a scope sets it as the active scope.

##### Collections Panel

- **Collections List**: Displays the collections for the active scope, showing collection name, number of items, memory used, disk utilized, TTL, and a schema status column with a red or green checkmark
  :::info
  In the Collections Table, currently, the Ops/Sec, Mem Used, Disk Utiized are fetched only once and are not continuously refreshed.
  :::

- **Create Collection Button**: Located in the panel toolbar, this button brings up a dialog box to create a new collection.
- **Get Schemas Button**: Located in the panel toolbar, clicking this button retrieves schemas for all collections in the active scope and updates the schema status. It also fetches a sample document for each collection, which is helpful for developers building queries.
  :::info

  - A red check mark means, no schema and no sample document for this collection
  - A green check mark means there is a schema and sample document for this collection
  - Schemas are available only for clusters with **Query Service**
    :::

- **Delete Collection Button**: A trashcan icon in the panel toolbar allows you to delete a collection.

### Dialog Boxes

- **Add Scope Dialog**: This dialog box is displayed when adding a new scope.
  <img src="/img/databases/databases-capella-main-add-scope.png" width="400" alt="Capella Add Scope" />
- **Delete Scope Dialog**: This dialog box is displayed when deleting a scope.
  <img src="/img/databases/databases-capella-main-delete-scope.png" width="400" alt="Capella Delete Scope" />
- **Add Collection Dialog**: This dialog box is displayed when adding a new collection.
  <img src="/img/databases/databases-capella-main-add-collection.png" width="400" alt="Capella Add Collection" />
- **Delete Collection Dialog**: This dialog box is displayed when deleting a collection.
  <img src="/img/databases/databases-capella-main-delete-collection.png" width="400" alt="Capella Delete Collection" />

### Footer

- **Status Bar**: Displays information from background jobs such as import, backup, and restore.
- **Footer Table**: Shows configuration, settings, and performance metrics of the active database, including Resident Ratio % and Cache Hit %, which are particularly useful for understanding database performance.
  :::info
  In the Footer Table, currently, the Performance metrics are fetched only once and are not continuously refreshed.
  :::

The Databases UI is a powerful tool in Capella DataStudio that provides a structured and efficient way to manage your databases, scopes, and collections. With its intuitive interface and comprehensive features, you can ensure optimal performance and synchronization of your data.

:::tip[Tip]
Set the **Active Bucket** and **Active Scope** Context from this UI.
:::

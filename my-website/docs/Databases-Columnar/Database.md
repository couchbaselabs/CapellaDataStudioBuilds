---
sidebar_position: 1
title: "The Database UI"
---

# Database

![Provisioned-Database-Main](/img/columnar/database-initial.png)

## Databases UI

The Databases UI in Capella DataStudio provides a comprehensive interface for managing databases, scopes, and collections. This feature is designed to facilitate efficient data management and synchronization between Capella DataStudio and your Couchbase Server.

### Features

#### Top Panel

- **Server Sync Button**: Use this button to sync Capella DataStudio with the server if you have added artifacts outside of Capella DataStudio. This synchronization will not affect any stored documents and schemas.

#### Four Main Panels

##### Databases Panel

- **Databases List**: Displays the names and number of documents in each database. Selecting a database sets it as the active database.
- **AppBar**: Check out the AppBar for additional options.
- **Add Database Button**: Located in the panel toolbar, this button will be discussed later.

##### Scopes Panel

- **Scopes List**: Lists the scopes for the active database, indicating whether they are read and write enabled.
- **Add Scope Button**: Located in the panel toolbar, this button brings up a dialog box to add a new scope.
- **Delete Scope Button**: A trashcan icon in the panel toolbar allows you to delete a scope. Selecting a scope sets it as the active scope.

##### Links Panel

- **Add Link Reference Button**: This adds a Reference to a Link to enable creation of Collections in the Link. The Reference can be selected from the list of Global Links for the cluster and these are managed by Links Manager.
- **Manage Links**: Located in the panel toolbar, this button brings up a dialog box to managae Links.
  :::info
  Links Manager and Links Reference will be discussed in the next page.
  :::

##### Collections Panel

- **Collections List**: Displays the collections for the selected Link reference, showing collection name, number of items, and a schema status column with a red or green checkmark
- **Create Collection Button**: Located in the panel toolbar, this button brings up a dialog box to create a new collection.
- **Get Schemas Button**: Located in the panel toolbar, clicking this button retrieves schemas for all collections in the active scope and updates the schema status. It also fetches a sample document for each collection, which is helpful for developers building queries.
  :::info

  - A red check mark means, no schema and no sample document for this collection
  - A green check mark means there is a schema and sample document for this collection
    :::

- **Delete Collection Button**: A trashcan icon in the panel toolbar allows you to delete a collection.

### Dialog Boxes

- **Add Database Dialog**: This dialog box is displayed when adding a new scope.
  <img src="/img/columnar/database-add-form.png" width="400" alt="database-add-form" />
- **Add Scope Dialog**: This dialog box is displayed when adding a new scope.
  <img src="/img/columnar/scope-add-form.png" width="400" alt="scope-add-form.png" />
- **Add Collection Dialog**: This dialog box is displayed when adding a new collection.
  :::info
  Add Collections will be discussed in detail in a subsequent section.
  :::

### Footer

- **Footer Table**: Shows Collection details for the selected Link Reference.

The Databases UI is a powerful tool in Capella DataStudio that provides a structured and efficient way to manage your databases, scopes, and collections. With its intuitive interface and comprehensive features, you can ensure optimal performance and synchronization of your data.

:::tip[Tip]
Set the **Active Bucket** and **Active Scope** Context from this UI.
:::

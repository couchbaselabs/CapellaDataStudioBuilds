---
sidebar_position: 1
title: "The Database UI"
---

# Databases

:::info
As an example, we will be looking at databases from a Columnar Connection, _Acme Columnar_.
:::

## The Columnar Database UI

![database-initial](/img/columnar/database-initial.png)
The UI is tabbed:

- Databases
- Documents
- Indexes
- Schema
- Views (under construction)

## Databases

The Main Panel has 4 tables

- **Bucket**: Choosing Bucket sets _Active Bucket_ in the **AppBar**
- **Scope**: Scopes for the chosen Bucket. Choosing Scope sets _Active Scope_ in the **AppBar**
- **Links**: This is the _Data Source_ for the Collections.
- **Collection**: Collections for the chosen Scope, from the _Link_

## Database Table

This table shows the list of databases.<br />
The table also has a Add Database, Refresh Button and a Delete Button.<br />
**+Database**: This action adds a empty Database.<br />
**Refresh**: This action results in the following:

- The database information is removed from the _CapellaDatastudio store_
- The database information is fetched once again from the Server
- You need to do this if Scopes/Links/Collections have been added/removed directly from the Server UI and are not reflected in Capella DataStudio.

**Delete**: Deletes the database from the Server

- This action is irreversible

## Scopes Table

This table shows the list of scopes in the chosen database.<br />
The table also has a Add Scope, Refresh and Delete Buttons.<br />
**+Scope**: This action adds one or more Scopes to the Bucket.<br />
**+Refresh**: This action results in the following:

- The scope is removed from the _CapellaDatastudio store_.
- The scope information is fetched once again from the Server.

**Delete** (Trashcan Icon):
This action results in the following:

- The Scope is deleted fromm the Server
- This action is irreversible

## Links Table

This table shows the list of Links (_Data Source_) in the chosen scope.<br />
The table also has a Add Link, Refresh and Delete Buttons.<br />

**+Link**: This action adds a Link to the Scope.<br />
**+Refresh**: This action results in the following:

- The _Schema_ and the _Item Count_ fetched from the Selected Link (_Data Source_)
  :::info
  This is a expensive operation which takes time, especially fetching the item count from _S3 Buckets_<br />
  This is the reason refresh is applicable to the Selected Link.<br />
  :::

**Delete** (Trashcan Icon):
This action results in the following:

- The Link is deleted fromm the Server
- This action is irreversible

## Collections Table

This table shows the list of collections in the chosen scope.<br />
The table also has a Add Collection, Refresh and Delete Buttons.<br />
**+Collection**: This action adds one or more Collections to the Scope for the chosen Link.<br />
**+Refresh**: This action results in the following:

- The _Schema_ and the _Item Count_ fetched from the Selected Link (_Data Source_)
  :::info
  This is a expensive operation which takes time, especially fetching the item count from _S3 Buckets_<br />
  This is the reason refresh is applicable to the Selected Link.<br />
  :::

**Delete** (Trashcan Icon):
This action results in the following:

- The Collection is deleted fromm the Server
- This action is irreversible

## The Footer Table

Displays some Collection details on the chosen Scope.

## Tip

:::tip[Tip]

Set the **Active Bucket** and **Active Scope** Context from this UI.
:::

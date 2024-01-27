---
sidebar_position: 2
title: "Installing Datasets"
---

# Installing Datasets

The UI shows 4 Tabs

- **Public**: Datasets available to you from the Public Couchbase Repository
  - Not available for _Capella Columnar_
- **Local**: Datasets available to you from your _Local Store_
  - Refer Data Sets Overview section on how to create them
- **Cloud**: Datasets available to your team from your _Cloud Store_
  - Refer Data Sets Overview section on how to create them.
- **File**: To import individual _json_/_csv_/_tsv_ file
  - Files must not be zipped. Can be large too.

:::info
As usual check the _Active Database_ in the **AppBar**
:::

## Installing a Dataset

![datasets-ui](/img/datasets/datasets-ui.png)
The pic shows the Public Repository which has 3 Datasets.

- I have also selected **couchmusic** as my _Active Database_.
  - The tool **cannot create databases**
- The _Active Scope_ has been set as \_default, but this is not important to the operation since installing the Dataset will create the required Scope.

### Choose and confirm Dataset Import

  <img src="/img/datasets/datasets-confirm-dialog.png" width="400" alt="datasets-confirm-dialog" />

### Monitor Progress

The Notification Icon shows the start of the process
![datasets-import-start](/img/datasets/datasets-import-start.png)
The process end
![datasets-import-end](/img/datasets/datasets-import-end.png)
You can also check out the _Activity Log_ from the **Logs** item in the **Left Navigation Bar**
![datasets-import-logs](/img/datasets/datasets-import-logs.png)

## The Databases UI

Now, lets navigate to the **Databases UI** and check out the **couchmusic** database.
![datasets-database-initial](/img/datasets/datasets-database-initial.png)

:::info
The **couchmusic** database may show no items

- Items are fetched each time you navigate away and to from the scope.
- The collections table shows rad checkmarks for schemas
- You can get the schemas by clicking the Refresh button on Scopes
  - Takes time!!!!
- Since Refresh action deletes and recreates scopes, it will lose the set Active Scope
  - Remember to reset _Active Scope_

:::

After Refresh, the UI now shows:
![datasets-database-refreshed](/img/datasets/datasets-database-refreshed.png)

## Schemas

![datasets-schemas](/img/datasets/datasets-schemas.png)

## Indexes

![datasets-indexes](/img/datasets/datasets-indexes.png)

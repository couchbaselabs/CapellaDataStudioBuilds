---
sidebar_position: 3
title: "Links Manager"
---

# Links Manager

The Links Manager is a crucial component of Capella DataStudio that allows you to manage connections to various data sources. This dialog provides a centralized interface for creating and managing links to different platforms.

Unlike Couchbase Server, Columnar Collections come in 2 flavors

- Collection contains data which resides on the Columnar Cluster (**Standalone**)
- Collection contains data which resides external to the Columnar Cluster, like:
  - On a Capella Provisioned or a Self-Managed Couchbase Cluster
  - On a Amazon S3 Bucket
  - On MongoDB, mySQL or PostGres database which are connected using **Kafka** from:
    - Confluent Cloud Platform
    - Amazon MSK
- For external data, the Collections needs to **link** to the data source
- The **global** Links Manager manages these links.
- The links are global to the Columnar Cluster

## Accessing the Links Manager

The Links Manager can be accessed by clicking the "Manage Links" button in the main interface of Capella DataStudio.

## Interface Overview

The Links Manager dialog consists of three main components:

1. **Link Type Selector**: A dropdown menu to choose the type of link you want to create or manage.
2. **Available Links Panel**: Located on the left, this panel displays all available links in the current instance.
3. **Link Details Panel**: Positioned on the right, this panel shows a tree view of Database/Scope/Collections for the selected link.

:::info
By default, the "Local" link is always available, as discussed in the previous section.
:::

## Creating New Links

To create a new link, select the desired link type from the dropdown menu. The available options are:

1. Couchbase Link
2. Amazon S3 Link
3. Confluent Cloud Platform Link
4. Amazon MSK Link

Clicking on any of these options will open the corresponding link configuration dialog.

### Couchbase Link

<img src="/img/columnar/link-add-couchbase.png" width="400" alt="link-add-couchbase" />
1. Select "Couchbase Link" from the dropdown.
2. A dialog box will appear showing all your existing Couchbase connections.
3. Choose the desired connection.
4. Optionally, rename the link.

:::tip
You can create multiple links with different names to the same Couchbase instance. This is useful for controlling data flow independently for different collections, which will be discussed in later sections.
:::
<img src="/img/columnar/link-add-couchbase-submit" width="400" alt="link-add-couchbase-submit" />
:::info
Couchbase Links may take several minutes to establish. This is because the Columnar instance VPC needs to be peered with the Capella instance VPC before link creation. The link creation job is submitted in the background.

If the link doesn't appear immediately:

1. Close the dialog and Links Manager.
2. Wait for 5-10 minutes and reopen the Links Manager.
3. If the link is still not visible, try the "Server Sync" option.
4. If issues persist, check the Columnar UI and the Activity Log for more information.
   :::

### Amazon S3 Link

<img src="/img/columnar/link-add-s3.png" width="400" alt="link-add-s3" />
1. Select "Amazon S3 Link" from the dropdown.
2. A dialog box will appear showing all your Cloud stores.
3. The name is automatically set to the name of the store and cannot be changed.

### Confluent Cloud Platform Link

![link-add-confluent](/img/columnar/link-add-confluent.png)

1. Select "Confluent Cloud Platform Link" from the dropdown.
2. A dialog box for configuring the Confluent Cloud Platform Link will appear.

### Amazon MSK Link

1. Select "Amazon MSK Link" from the dropdown.
2. Configure the link according to your Amazon MSK setup.

### Example after adding a few links

<img src="/img/columnar/link-add-confluent-after.png" width="400" alt="link-add-confluent-after" />

## Managing Existing Links

The Available Links Panel on the left side of the dialog shows all existing links. Selecting a link will display its details in the right panel, including the database, scope, and collections associated with that link.

## Connection Status

Couchbase and Confluent links feature a "Connect" button, allowing you to establish or terminate the connection. These connection controls are also available in the Database View, providing flexibility in managing your connections.

## Next Steps

In the following sections, we'll explore how to use these links to create and manage collections, and how to leverage them for efficient data management across different platforms.

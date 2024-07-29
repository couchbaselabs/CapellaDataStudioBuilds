---
sidebar_position: 7
title: "Confluent Link and Collections"
---

# Confluent Cloud Platform Link and Collections

Create a Collection linked to Confluent Cloud Platform.

### Step 1: Add Confluent Cloud Platform Link Reference

Click the **LinkRef** button in the Links Table ToolBar. This will bring up the list of choices:
After adding the Link Reference, you will see:

![link-add-confluent-reference](/img/columnar/link-add-confluent-reference.png)

- Click on the Link Reference
- This will enable to Add Collection button
- Note that the Link is not **connected**. Don't connect it yet.

### Step 2: Add Collection (MongoDB)

![dataset-confluent](/img/columnar/dataset-confluent.png)
This brings up the dialog box.

- **Collection Name**: Name the Collection
- **Collection Details**: This is the _Primary Key_ and the _Data Type_ of the Key for the Collection. You can get it from the Confluent Cloud Platform Admin for the _topic_ (next)
- **Kafka Topics**: Comma delimited list of Kafka Topics for a given Data Source. Get it from the Confluent Cloud Platform Admin.
- **Dead Letter Queue**: Optional. Get it from the Confluent Cloud Platform Admin.
- **Key Serialization Type**: Required. Get it from the Confluent Cloud Platform Admin.
- **Value Serialization Type**: Required. Get it from the Confluent Cloud Platform Admin.
- **CDC Configuration**
  - **CDC Enabled**: Get it from the Confluent Cloud Platform Admin.
  - **CDC Connector**: Fixed for now.
  - **CDC Source**: Choices are _MongoDB/mySQL/Postgres_
  -
- The info box shows you the DDL being run
- Dataset and Collection is synonymous

#### Post Add Collection

This example shows additional Links and Collections.
![dataset-mash-full-1](/img/columnar/dataset-mash-full-1.png)

- The Collections have been added
- Data is still not fetched yet, the link is not connected!
- Now it time to **Connect** to the source to fetch the data into the Columnar Collection.

### Step 3: Connect the Link

- Set the **Connect Switch** to **ON**
- This will fetch the documents into the collections
  - Note that Items still do show the number of documents
  - The Schema column still shows a red tick mark

### Step 4: Get Schemas (optional, but nice)

- Click the **Get Schemas** button. It:
  - Fetches the **item count**
  - Fetches one **sample document** and attaches it to the Collection
  - Fetches the **schema** for that Collection and attaches it to the Collection<br />
    :::info
    This is an expensive operation and need to be performed just once.
    :::

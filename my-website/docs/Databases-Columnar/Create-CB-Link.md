---
sidebar_position: 5
title: "Couchbase Link and Collections"
---

# Couchbase Link and Collections

Create a Collection linked to Capella Provisioned or Self Managed Couchbase.

### Step 1: Add Couchbase Link Reference

Click the **LinkRef** button in the Links Table ToolBar. This will bring up the list of choices:
<img src="/img/columnar/link-add-couchbase-reference.png" width="400" alt="link-add-couchbase-reference" />
After adding the Link Reference, you will see:

![link-add-couchbase-reference-after](/img/columnar/link-add-couchbase-reference-after.png)

- Click on the Link Reference
- This will enable to Add Collection button
- Note that the Link is not **connected**. Don't connect it yet.

### Step 2: Add Collection

![dataset-couchbase-before-connect](/img/columnar/dataset-couchbase-form.png)

- Choose the Database (Bucket) and Scope from the drop-down
- Select the Collections from the Source Cluster
  - You can rename the Collection. You would want to do this if this Collection name is already taken up. Remember Columnar Colllection names should be unique for the Scope.
- You can optionally add a **filter** to the collection
  - Example _\`type\`=\`hotel\`_. This will exclude all documents with this field type and value.
- Remember that these are the buckets and scopes accessible by the Database credentials used when adding Couchbase Connection in the list of Connections
- Once satisfied, **Proceed** with Adding Collections. You then see the Progress
  ![dataset-couchbase-before-connect](/img/columnar/dataset-couchbase-form.png)
- You can check the progress

  <img src="/img/columnar/dataset-couchbase-form-running.png" width="600" alt="dataset-couchbase-form-running" />

- This operation takes a little time
- The info box shows you the DDL being run
- Dataset and Collection is synonymous

#### Post Add Collection

Once Collections have been added, the UI now will show:
![dataset-couchbase-travel](/img/columnar/dataset-couchbase-travel.png)

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

The UI now shows:
![dataset-couchbase-full](/img/columnar/dataset-couchbase-full.png)

## Example: Adding Collection with Filter

![dataset-couchbase-beers](/img/columnar/dataset-couchbase-beers.png)

- Example shows how to apply a Filter
- Note that the Collection Name cannot begin with an _underscore_
- After editing the Filter column, remember to press **Enter** button.

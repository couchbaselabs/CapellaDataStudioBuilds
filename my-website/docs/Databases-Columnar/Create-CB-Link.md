---
sidebar_position: 3
title: "Couchbase Link and Collections"
---

# Add a Couchbase Link

The _Database_ and _Scope_ have been selected.<br />
Now, click the **+Link** button in the Liks Table ToolBar. This will bring up the list of choices:
<img src="/img/columnar/link-add-initial.png" width="400" alt="link-add-initial" />

Choose _Couchbase_: This brings up a form which allows you to choose the _Couchbase Connection_
<img src="/img/columnar/link-add-couchbase.png" width="400" alt="link-add-couchbase" />

In the example, the _Acme Shopping Cluster_ will be chosen.

- Note that _Link Name_ is automatically set as the Connection Name, the spaces replaced by hyphens.

### Check

Let's take a look at the UI after creating the Link:
![link-add-couchbase-after](/img/columnar/link-add-couchbase-after.png)

- We see the Link Source Icon and the name followes by a _Connect Switch_ which is set to _Off_

:::info
You need to _Connect_ to the Source to fetch the Data to the Collection
:::
We are not there yet. So, lets first add the Collections.

## Add Collections

Click the **+Collection** and you will get this form:
<img src="/img/columnar/dataset-couchbase-form.png" width="400" alt="dataset-couchbase-form" />

- Choose the Database (Bucket) and Scope from the drop-down
- Select the Collections from the Source Cluster
  - You can rename the Collection. You would want to do this if this Collection name is already taken up. Remember Columnar Colllection names should be unique for the Scope.
- You can optionally add a **filter** to the collection
  - Example _\`type\`=\`hotel\`_. This will exclude all documents with this field type and value.

### Add Collections Progress

On clicking save, you can observe the addition process. This takes time!
<img src="/img/columnar/dataset-couchbase-form-running.png" width="400" alt="dataset-couchbase-form-running" />

## Post Add Collection

Once Collections have been added, the UI now will show:
![dataset-couchbase-before-connect](/img/columnar/dataset-couchbase-before-connect.png)
The Collections have been added, now it time to **Connect** to the source to fetch the data into the Columnar Collection.

- Set the **Connect Switch** to **ON**
- Click the **Refresh** button on the Links Table ToolBar.

  :::info

  The **Refresh** action does the following:

  - Fetches the **item count**
  - Fetches one **sample document** and attaches it to the Collection
  - Fetches the **schema** for that Collection and attaches it to the Collection<br />
    This is an expensive operation and need to be performed just once.
    :::

The UI now shows:
![dataset-couchbase-full](/img/columnar/dataset-couchbase-full.png)

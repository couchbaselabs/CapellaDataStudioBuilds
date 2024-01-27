---
sidebar_position: 4
title: "AWS S3 Link and Collections"
---

# Add a AWS S3 Link

The _Database_ and _Scope_ have been selected.<br />
Now, click the **+Link** button in the Liks Table ToolBar. This will bring up the list of choices:
<img src="/img/columnar/link-add-initial.png" width="400" alt="link-add-initial" />

Choose _AWS S3_: This brings up a form which allows you to choose the _AWS S3_
<img src="/img/columnar/link-add-S3.png" width="400" alt="link-add-S3" />

:::info

- The drop down will show a list of AWS S3 buckets you configured in your **Cloud Store**
- The _Link Name_ is automatically set as the AWS S3 bucket name
  :::

### Check

Let's take a look at the UI after creating the Link:
![link-add-s3-after](/img/columnar/link-add-s3-after.png)

:::info
There is no **Connect Switch** since AWS S3 buckets are always connected.
:::

Now let's add collections from the Source AWS S3 Bucket. We will add 2 types of file as an example

- Parquet Files
- CSV Files

## Add Collections (parquet)

Click the **+Collection** and you will get this form:
<img src="/img/columnar/dataset-s3-parquet.png" width="600" alt="dataset-s3-parquet" />

- Choose the Folder from the left Panel
- Choose the file type on the right Panel

Lets see the options here:

- **Name**: The Folder name is chosen for you, and you can change that if you want.
- **File Filter**: You can choose to have no filters or a exclude filter or an include filter.
  :::info
  What is a **file filter**? <br />
  In the filter box, enter the names of the files to be included/excluded from the external collection.<br />
  The file name may include subdirectories of the location specified by the Path option.<br />
  Any files that do not match the specification are included/excluded.<br />
  Include and Exclude are mutually exclusive.<br />
  The file names may contain the following wildcard characters:
  ```
    * — Matches anything
    ? — Matches any single character
    [ sequence ] — Matches any characters in sequence
    [! sequence ] — Matches any characters not in sequence
    For example: ["*2018*.json", "*2019*.json"].
  ```
  :::

### Add Collections (csv)

After adding the Collection, let's add the csv Collection from the same form:
<img src="/img/columnar/dataset-s3-csv.png" width="600" alt="dataset-s3-csv" />

- Choose the Folder from the left Panel
- Choose the file type on the right Panel

Lets see the options here:

- **Name**: The Folder name is chosen for you, and you can change that if you want.
- **File Filter**: Discussed above.
- **Headers Switch**:
  - **ON**: Every file has a header
  - **OFF**: Every file has no headers
    :::info[Header]
    <img src="/img/columnar/headers.png" width="600" alt="headers" />
    The first row is the header.
    :::
- **Schema Expression**: Describes the schema of the CSV file. Example as shown in the pic.

## Post Add Collection

Once Collections have been added:

- Click the **Refresh** button on the Links Table ToolBar.

  :::info

  The **Refresh** action does the following:

  - Fetches the **item count**
  - Fetches one **sample document** and attaches it to the Collection
  - Fetches the **schema** for that Collection and attaches it to the Collection<br />
    This is an expensive operation and need to be performed just once.
    :::

The UI now will show:
![database-ui-afer-s3](/img/columnar/database-ui-afer-s3.png)

---
sidebar_position: 4
title: "Local Link and Collections"
---

# Standalone Collections and Data Import

Create a standalone Collection and Import Data into it

:::info
Remember there is no _Local Link_. **standalone** collections are created directly on the Columnar Instance and are really not "linked" to anything. However, in DataStudio, to maintain a consistent UI Experience, standlaone collections are created in he built-in Local Link.
:::

### Step 1: Add Local Link Reference

Click the **LinkRef** button in the Links Table ToolBar. This will bring up the list of choices:
<img src="/img/columnar/link-add-local-reference.png" width="400" alt="link-add-local-reference" />
After adding the Link Reference, you will see the link.

- Click on the Link Reference
- This will enable to Add Collection button

### Step 2: Add Collection

<img src="/img/columnar/dataset-local-movies.png" width="600" alt="dataset-local-movies" />

- Name the Collection
- You need to provide the **Primary Key** for this Collection

  - **Option 1: Autogenerate**
    - The PK is autogenerated as a UUID string
    - You can name the key instead of accepting the default _columnar_id_ of you want.
    - This is a good, safe option
  - **Option 1: Specify a comma delimited list of field names and types**
    - Example: \`movie title\`: string, \`Rating\`: bigint
    - Do this only if you **sure** that each document in this collection have these fields.

- Once satisfied, **Proceed** with Adding Collections.
- The info box shows you the DDL being run.
- Dataset and Collection is synonymous.

## Import Data into Collection: Local File

Now that the Collection has been created, you need to import data into the colection. Let's first consider importing data from a local file on your computer. This data is in a **single** file and it can be of 3 formats:

### File formats

- JSON Lines: The lines format specifies a file that contains one JSON document on every line in the file.
  ```sql
  {"key": "mykey1", "value": "myvalue1"}
  {"key": "mykey2", "value": "myvalue2"}
  {"key": "mykey3", "value": "myvalue3"}
  {"key": "mykey4", "value": "myvalue4"}
  ```
- JSON List: The list format specifies a file which contains a JSON list where each element in the list is a JSON document. The file may only contain a single list, but the list may be specified over multiple lines.
  ```sql
  [
    {
      "key": "mykey1",
      "value": "myvalue1"
    },
    {"key": "mykey2", "value": "myvalue2"},
    {"key": "mykey3", "value": "myvalue3"},
    {"key": "mykey4", "value": "myvalue4"}
  ]
  ```
- CSV/TSV: Comma or Tab delimited format. File needs to have a **header** row specifying the field names. The field Types are automatically deduced from s sample row which is the 2nd row.

  ```
  VIN (1-10),County,City,State,Postal Code,Model Year,Make,Model,Electric Vehicle Type,Clean Alternative Fuel Vehicle (CAFV) Eligibility,Electric Range,Base MSRP,Legislative District,DOL Vehicle ID,Vehicle Location,Electric Utility,2020 Census Tract
  5YJSA1E22K,King,Seattle,WA,98112,2019,TESLA,MODEL S,Battery Electric Vehicle (BEV),Clean Alternative Fuel Vehicle Eligible,270,0,43,202233958,POINT (-122.300312 47.629782),CITY OF SEATTLE - (WA)|CITY OF TACOMA - (WA),53033006500
  ```

  :::info
  The file to be imported needs to have the proper **extension**.

  - JSON (list or lines) need to have a **.json** extension
  - csv/tsv files need to have a **.csv** or **.tsv** extension
    :::

### Process

- Click on the Local Link Reference
- This will enable the Import Icon on the Collections App Bar. There are 2 icons for import. One from Local file and the other from Cloud. We will discuss the former here.
  ![dataset-local-movies-import-1](/img/columnar/dataset-local-movies-import-1.png)
- This will pop up a dialog box for Import.
  ![dataset-local-movies-import-2](/img/columnar/dataset-local-movies-import-2.png)
  - The Collection Name and Primary Key specified when creating the Collection are displayed as a FYI. These are not editable.
  - The **Select File** button will pop up a file selector. Choose your file.
  - The Right side Panel will show a sample document and the number of documents in the file. This is available only for **JSON Lines** and **CSV/TSV** files.
    - Note: Currently, onn Windows, the number of documents shows 1 extra. The import, however, will import the actual number of documents.
  - You have a few Import Options:
    - _Skip_: Nuumber of documents to be skipped before import starts.
    - _Maximum Documents_: Number of documents to be imported. Specify 0 (default) for all.
    - _Exclude Fields_: Fields to be exluded when importing. This is a selector and you can choose the fields to be excluded. Notice the sample document reflect this selection.
  - Click **Proceed** button
    :::info
    - Documents are _upserted_ in batches
    - There is no file size limit, but this takes time
    - For larger files, import from Cloud is recommended
      :::

## Import Data into Collection: Local File

### File formats

File formats and requirements are same as above
:::info

- Import from Cloud, imports ALL files in the Amazon Folder
- The process actually implements the **COPY INTO** function, and this can be done from the _Query Workbench_ too.
  :::

### Process

- Click on the Local Link Reference
- This will enable the Import Icon on the Collections App Bar. There are 2 icons for import. One from Local file and the other from Cloud. We will discuss the latter here.

### Uploading File to Amazon S3

- You can use Capella DataStudio to upload the file to your Amazon S3 Bucket
  - Navigate to Stores from the Navigation Panel
  - Choose the Cloud Store
  - Click the **S3 File Manager** to open it.
  - In the S3 File Manager, create a folder is necessary and choose it
  - On the ToolBar in Right Panel, click the Upload to Cloud Icon
  - This opens the Local File Browser. Select the file you want to upload
    ![upload-evdata](/img/columnar/upload-evdata.png)
  - **Upload Progress** is shown and will disppear after its done.
    ![upload-evdata-after](/img/columnar/upload-evdata-after.png)
    :::info
    You may have to Navigate away to to the folder.
    :::

### Back to Import Process from Cloud

- Click the Import from the Cloud Icon
  ![dataset-local-evdata-import-1](/img/columnar/dataset-local-evdata-import-1.png)
- This brings up the Import Dialog Box
  ![dataset-local-evdata-import-2](/img/columnar/dataset-local-evdata-import-2.png)
- **Left Panel**
  - _Select_ the Store (if you have more than one)
  - In the Files folder, choose the Folder where the data file is
- **Right Panel**
  - Choose the _File Type_. In our example, this is a CSV file.
  - The Colection Name and the Primary Key is displayed in a Read-Only box as a FYI.
  - You have some Import Options
    - _File Filter_
      - **None** : Default. No Filters
      - **Include Files**: Wildcard filter.
      - **Exclude Files**: Wildcard filter.
      - **Headers**: First row of File is the header with Field Names
      - **Nulls As**:
        - _Empty String_: Fields with nulls are replaced as empty strings
        - _Custom String_: Any string
    - **Sample csv/tsv File**: Select a sample file (if you have more than one) in the Folder.
    - **Schema Expression**: Describe the schema of the file.
      - Field Name, Field Type _not unknown_
        - _not unknown_ is optional. This means that if the field is not there in the document, that document will be skipped and not imported.
    - **Schema Expn Help**: Button to make above task easier. Clieck this as the Expression is generated for you based on the **Sample** file.
      - You can edit the generated schema to you requirement. For example, remove _not unknowm_ or the Type (string/bigint/double/boolean) suggested
    - Click the **Proceed** button
      ![dataset-local-evdata-import-3](/img/columnar/dataset-local-evdata-import-3.png)

### Step 3: Get Schemas (optional, but nice)

- Click the **Get Schemas** button. It:
  - Fetches the **item count**
  - Fetches one **sample document** and attaches it to the Collection
  - Fetches the **schema** for that Collection and attaches it to the Collection<br />
    :::info
    This is an expensive operation and need to be performed just once.
    :::

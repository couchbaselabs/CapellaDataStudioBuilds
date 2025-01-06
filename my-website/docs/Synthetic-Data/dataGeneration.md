---
sidebar_position: 8
title: "Data Generation"
---

# Data Generation

Once the schema has been built to you satisfaction, it's time to generate data.
<img src="/img/synthetic/synth-generate-dataset.png" width="600"
alt="generate-dataset" />

- Dataset is generated and writen to _LocalStore/SyntheticData/DataSets/_
- The dataset filename is _schemaName.json_
  - This is a _JSON Lines_ file
  - If the document has fields marked as Primary Key (prefixed with double-dash), then, a _schemaName.pk_ is also produced
    - The .pk file is a CSV file
- If any field has the _seq()_ function, the sequences are incremented by 1.
- There is no limit to the number of documents

# Datasets

Once the datasets have been generated, they can be previewed from the Datsets tab.
![synth-datasets-1](/img/synthetic/synth-datasets-1.png)

- This shows the json view of the documents

![synth-datasets-2](/img/synthetic/synth-datasets-2.png)

- This shows the table view of the documents
- The tables are sortable

# Data Import

You can then choose a dataset to be imported.
<img src="/img/synthetic/synth-datasets-import.png" width="800"
alt="synth-datasets-import" />

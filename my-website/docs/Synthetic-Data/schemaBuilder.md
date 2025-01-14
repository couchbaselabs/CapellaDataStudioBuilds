---
sidebar_position: 4
title: "Schema Builder"
---

# Overview

![synth-example-orders](/img/synthetic/synth-example-orders.png)

- The schema builder is accessed from the Schemas Tab.
- The schema is built Field by Field, one row at a time.
- Each row has a minimum of 2 attributes
  - The field name
  - The Data Type of the Field
- Depending on the Data Type, more attributes may be exposed
- Adding a new Field (Row) can be done two ways
  - Using the Add Field Icon (the + button) at the end of the row
    - This duplicates the current row, just below the current row
  - Using the Add New Field button at the bottom
    - This adds a new empty row at the bottom

# Schemas App Bar

## Configure

Access by clicking the Configure Button (Sliders), the first button on the Schemas AppBar.
<img src="/img/synthetic/synth-config-1.png" width="800"
alt="synth-config-1" />

### General

**Region**

- Currently only _North America_ is available

**Date Pattern**

- Output of date function. Note that the input of the date function can be any pattern
- Patterns:
  - YYYY-MM-DD
  - DD-MM-YYYY
  - MM-DD-YYYY
  - YYYY/MM/DD
  - DD/MM/YYYY
  - MM/DD/YYYY

**Time Pattern**

- Output of time function. Note that the input of the time function can be any pattern
- Patterns:
  - HH:mm // 24-hour format
  - hh:mm A // 12-hour format

### Location, Products, Food, Medical

- Data Generator will choose only the selected categories

### Buttons

**Schema Name**: Needed to store the schema. Schemas will be stored in localStore/SyntheticData/Schemas <br></br>
**New**: Clears Schemas<br></br>
**Load**: Load stored schema<br></br>
**Save**: Save schema in localStore/SyntheticData/Schemas<br></br>
**Generate Dataset**: From current schema<br></br>

# Fields

## Field Name

- Field names can be any JSON compliant field name
- Nested JSON objects are specified by dotted format
  - Deeply nested JSON supported
- Field Names with a double dash prefix will be treated as a Primary Key
  - When Generating Datasets, these keys will also be exported and will be saved as localStore/SyntheticData/DataSets/schemaName.pk file
  - Primary Keys can be specified only in fields in root document
    - JSON Objects cannot be Primary Key
    - Nested Fields cannot be Primary Key
    - Hidden fields cannot be Primary Key
- Field Names with a single dash prefix will be treated as a Hidden Field
  - Hidden fields are used as temporary storage used in field reference
  - Hidden fields cannot be Primary Key
  - Hidden fields will not appear in JSON document
  - JSON Objects cannot be hidden
  - Nested fields can be hidden

# Type

Clicking on the Type attribute brings up a dialog box from which you can select a type.

<img src="/img/synthetic/synth-select-field-type-2.png" width="800"
alt="synth-select-field-type-2" />

Types can be core (built-in) or user types (imported). Core Types include:

The Core Typesets will be covered in greater detail in a subsequent section, but we will cover the core.function here.

## core.function.jsonArray

The the overview picture shows a jsonArray called _orders_, with a min and max array size.

:::warning

- You can have only simple types inside the jsonArray
- You cannot have nested JSON objects inside a jsonArray
- You cannot nest jsonArrays
  :::

## core.function.foreignKey

The overview picture shows quite a few foreignKeys, but lets consider 2 fields, _customerId_ and _customerName_. To use foreignKeys, there are a couple of previous steps required. Going wih this example:

- You need a **customer.schema** with _Primary Keys_ of _id_ and _name_
- You need to generate a dataset with the above schema.
- The dataset generation produces **customer.json** and a **customer.pk** file.
  - The **customer.pk** is a CSV file.
  - It has the same number of rows as the number of documents
  - The file structure is
    `   id,name
"customer_1","Lula Kuhic"
"customer_2","Chelsea Wilderman"`
    With the above files in place, the orders schema now allows you to choose the customer schema and the PK in drop downs. Let's see how these files are used.
    When the documents are generated:
- When there is a foreignKey reference, then, the .pk file is read.
- A **random** row is chosen
- The fields in the row are then returned and populated in the document.

  :::tip
  With this Primary Key and Foreign Key, now you can generate collections where you can use **joins** in your **SQL++**
  :::

## core.function.expression

- Covered in the next page, **Expressions**

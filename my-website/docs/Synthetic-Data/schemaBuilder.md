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

## Core Function

This is a special data type and there are three of these

1. expression
2. foreignKey
3. jsonArray

### 1. core.function.expression

- Expressions are a powerful way of customizing the schema.
- Expressions are just strings
- They can have embedded references (enclosed in %%) and functions

#### Document and Expression architecture

Let's see how the document is built.

- The document is built, top down, row by row.
  - We always have a partial document at every row stage.
- First, the expression is a string
- It goes to an Expression Evaluator
- The partial document, with its fields and values is supplied to the evaluator.
  - This means, the previous fields and their evaluated values are now available.
- The string is then examined for references
- References are field names, previously used, and their values, from the partial document.
- References are replaced by the values
  - This means that references can also be inside of functions
- The string is then examined for functions
- The functions are then executed and their values are replaced in the partial document.
- The Evaluator finally returns back the output.

### 2. core.function.foreignKey

#### Foreign Keys and Data Correlation

When working with relational data, maintaining referential integrity through foreign keys is crucial. Here's how our synthetic data generator handles foreign key relationships:

#### How Foreign Keys Work

First, you'll need to generate your primary dataset. Let's say you have a schema for "Departments" that generates a CSV file containing department IDs and names. These department IDs serve as primary keys in the Departments dataset.

When you create another schema, say for "Employees," you can specify fields that reference these existing primary keys. The schema builder provides two dropdown menus:

- A dropdown to select the source dataset (e.g., "Departments")
- A dropdown to select which primary key field to reference (e.g., "id")

#### Data Generation Process

When generating data with foreign key references, the system:

- Randomly selects a row from the source dataset
- Reads the primary key value(s) from that row
- Uses these values in the new dataset being generated

#### Maintaining Data Correlation

An important feature is how we handle multiple foreign key references. If your schema references multiple columns from the same source dataset, the values are pulled from the same row to maintain logical correlation.

For example, if your Employee schema references both department_id and department_location from the Departments dataset, both values will come from the same department record. This ensures that the synthetic data maintains realistic relationships between related fields.

This approach helps create more realistic synthetic datasets by preserving the referential integrity and logical relationships present in real-world data.

### 3. core.function.jsonArray

#### JSON Array Configuration

When configuring a JSON array field, you can specify:

- Minimum number of objects in the array
- Maximum number of objects in the array
  The generator will then create arrays with a random number of objects within your specified range.

#### Structure and Limitations

The JSON arrays follow these rules:

- Each array contains simple, flat JSON objects
- Nesting of arrays is not supported (no arrays within arrays)
- Each object in the array follows the same structure

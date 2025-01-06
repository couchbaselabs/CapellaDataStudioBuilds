---
sidebar_position: 2
title: "Quick Start"
---

# UI Overview

![synth-overview-1](/img/synthetic/synth-overview-1.png)
![synth-overview-2](/img/synthetic/synth-overview-2.png)

- **AppBar**: The _bucket_, _scope_ and the _local store_ have been steps
- **Synthetic Data**: Selected from _Left NavBar_
- **Schemas Tab**: Shows a full example schema.
  - Schema Name: Allows you to _save_ the schema (in _localStore/SyntheticData/Schemas_)
- **Schema Builder**: The middle panel
  - Schema Built Field by Field (row by row)
  - _Field Name_ Specified by you
  - _Data Type_: Choose from **core** (built-in) or user specified (if available)
- **Doc Preview**: Right panel
  - Use _refresh_ icon frequently when building
- **Cheat Sheet**: Right panel
  - Covenient Cheat Sheet for Fields and Expressions

# Quick Start

These are the steps to generate and load Synthetic Data.

## Step 1

Complete your Setup, as described in the previous page. After Setup you will have:

- The **Data Tools Plugin** to import datasets
- A **Local Store** to save Schemas and Datasets

## Step 2

Make a connection to Capella Operational or Couchbase Server

- This is neccesary for loading data
- You can defer this for later if you plan just generating schemas and datasets.

## Step 3

Build your first Schema as described by the Schema Builder page

- Play around with the different data types
- Try nested JSON and JSOn Arrays
- Try a few **Expressions** with **Functions**

## Step 5

Generate you dataset as described in the **Data Generator** page.

- Generate your first dataset
- Preview the data generated

## Step 6

Import the data as described in the **Data Generator** page.

- Note that you must create the **scope** and **collections** prior to this step.

## Advanced

Create your own Typeset as described in the **User Typesets** page.

- Follow Step 3 to Step 6 with your Typeset

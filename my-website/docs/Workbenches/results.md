---
sidebar_position: 4
title: "Results Panel"
---

# Results Panel

Lets discuss this in detail<br />
As a first example, let's execute this query:

```sql
select * from airport limit 120;
```

## Toolbar Status

This is the status of the query run.
**Result Chip**: Either Success or Fatal
**Time**: Time taken to run the query
**Docs**: Number of documents returned
**Size**: Server memory used to run the query

## Toolbar Buttons

**Export Button**: Exports the results either in _json_ or _csv_ depending on whether the current view is _json_ or _table_
**Views Toggle Buttons**: These are the different views:

- **JSON**
- **Table**
- **Chart**
- **Plan**
- **Index Advisor**

## JSON View

![workbench-results-json](/img/workbenches/workbench-results-json.png)

## Table View

![workbench-results-table](/img/workbenches/workbench-results-table.png)

**Note**: Table is horizontally scrollable<br />
When you hover on the column header, the **sort** arrow and a **kebab menu** are shown<br />

### Table Filters

![workbench-table-filter](/img/workbenches/workbench-table-filter.png)

#### Filter Example: Columns

<img src="/img/workbenches/workbench-table-filter-column.png" width="200" alt="workbench-table-filter-column" />

#### Filter Example: Name

Let's filter on **airportname**
![workbench-table-filter-post](/img/workbenches/workbench-table-filter-post.png)

:::info
For the remaining Views, we will use the Query:

```sql
SELECT city City, COUNT(DISTINCT name) LandmarkCount
   FROM landmark
   GROUP BY city
   ORDER BY LandmarkCount
   DESC LIMIT 10;
```

:::

## Chart View

You can select from **Bar**,**Pie** or **Line** charts
![workbench-results-chart](/img/workbenches/workbench-results-chart.png)

## Plan View

This is the query Plan
![workbench-results-plan](/img/workbenches/workbench-results-plan.png)

## Index Advisor View

![workbench-results-advisor](/img/workbenches/workbench-results-advisor.png)

- The Index Advisor is available automatically
- Notice the **Badge** on Icon.
  - This will pop up if there are any recommendations
  - The Badge also shows the number of recommendations
- Currently, the **Build** buttons are not available

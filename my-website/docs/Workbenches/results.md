---
sidebar_position: 3
title: "Results Panel"
---

# Results Panel

Lets discuss this in detail
![workbench-results-json](/img/workbenches/workbench-results-json.png)
This has a _ToolBar_ and the _Results Display_

## Toolbar Status

This is the status of the query run.
**Result Chip**: Either Success or Fatal
**Time**: Time taken to run the query
**Docs**: Number of documents returned
**Size**: Server memory used to run the query

## Toolbar Buttons

**Export Button**: Exports the results either in _json_ or _csv_ depending on whether the current view is _json_ or _table_

- The file is always written to ~/Downloads/capds-result.\* (json or csv)
- Here is an example of the csv file for the example query shown:

```csv
City, LandmarkCount
San Francisco, 797
London, 443
Los Angeles, 284
San Diego, 197
Paris, 173
Edinburgh, 141
Birmingham, 101
Sonoma, 80
Liverpool, 67
Glasgow, 64
```

**Views**: These are the different views:

- JSON View (First Pic shows this)
- Table View
  ![workbench-results-table](/img/workbenches/workbench-results-table.png)
- Chart View: You select from **Bar**,**Pie** or **Line** charts
  ![workbench-results-chart](/img/workbenches/workbench-results-chart.png)
- Plan View: This is the query Plan
  ![workbench-results-plan](/img/workbenches/workbench-results-plan.png)
  Index Advisor:
  ![workbench-results-advisor](/img/workbenches/workbench-results-advisor.png)
- The Index Advisor is available automatically
- Notice the **Badge** on Icon.
  - This will pop up if there are any recommendations
  - The Badge also shows the number of recommendations
- Currently, the **Build** buttons are not available

---
sidebar_position: 3
title: "History"
---

# History

Lets see the History in greater detail
![workbenches-history](/img/workbenches/workbenches-history.png)

- History is kept in Capella DataStudio store
- You can change the number of entries which History can hold.
  - Beware of performance and storage implications! So dont make this too big!
- All columns are sortable and filterable
  :::tip
  When you hover on the column header, the **sort** arrow and a **kebab menu** are shown<br />
  If you do not see the **kebab menu** scroll the table to the left!
  :::
- Clicking on a row displays the Query in the **Side Panel**
- This panel also has a convenient **Copy** button on top and this copies the query to the Editor and when you navigate to **Query**, it's ready.

## History Table

### Filter

Lets look at the Filtering options
![workbenches/history-filter-menu](/img/workbenches/history-filter-menu.png)
Apart from Sorting, you can also manage columns
<img src="/img/workbenches/history-filter-manage.png" width="200" alt="history-filter-manage" />

The more interesting feature is the **filter**<br/>
As an example, lets look at queries which have the work **distinct** in them:
![workbenches/history-filter-query](/img/workbenches/history-filter-query.png)
It filters out the relevant queries!

#### Filtering Dates

In the Table, Dates are shown as _Mar 4 2024, 13:55:43 PM_ for example<br />
However, this is just the **display** format. Internally, the date is in ISO-8601 format like _YYYY-MM-DDThh:mm:ss._<br />
So, when filtering , keep that in mind. For example, filtering for Mar 4th, 2024, the filter would be **2024-03-04**

### Deleting

You can choose the queries you want to delete by selecitng the check-boxes and the **delete button**

:::info
What happens when the Query History is full?

- In this case, the first query in the list gets deleted and the latest added.
  :::

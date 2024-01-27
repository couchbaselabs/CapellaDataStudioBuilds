---
sidebar_position: 2
title: "SQL++ Editor"
---

# SQL++ Editor

Lets see the Editor in greater detail
![workbench-editor](/img/workbenches/workbench-editor.png)

## The Editor

This is the panel where you write your SQL++ queries<br />
It comes with _color_ highlighting<br />
Only ona single SQL++ Query is supported. You cannot run mutiple queries.

## The ToolBar

These are the buttons in the ToolBar.<br />
**Configuration**
This is the first button in the ToolBar. You can configure some parameters currently:
<img src="/img/workbenches/workbench-query-settings.png" width="400" alt="workbench-query-settings" />

- **Query Timeout**: In seconds.
- **Query Memory Quota**: The maximum amount of memory the query can can use. 0 setting means unlimited.
- **Query Transaction Timeout**: Currently not available
- **Run Button**: Runs the Query
- **Stop Button**: Currently not available
- **Pretty Button**: Currently not available
- **Favorite Button**: To store the Favorite. You need to be aware of 2 things.
  - Set you Store
  - The query needs to formatted with a comment. Let's see how:

```sql
/*
* Example of Group by and Order by
** Selects 10 cities with most landmarks. Orders them by DESC. Nice for Bar Chart.
*/
SELECT city City, COUNT(DISTINCT name) LandmarkCount
FROM landmark
GROUP BY city
ORDER BY LandmarkCount
DESC LIMIT 10;
```

- Comments are enclosed by "/\*" and "\*/" in their own lines
- The line starting with a single \* is the **Title** of the Favorite
- The line starting with a double \* is the **Description** of the Favorite
- **Delete Button**: This is the Trash can Icon. Clears the Editor.
- **Queries Paging**: Currently not available
- **Transaction**: Currently not available

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

### Configuration

This is the first button in the ToolBar:
![workbench-query-settings](/img/workbenches/workbench-query-settings.png)
This has 3 tabs

#### Run Time

- **Query Timeout**: In seconds.
- **Query Memory Quota**: The maximum amount of memory the query can can use. 0 setting means unlimited.
- **History Size**: The number of queries to be kept in histort _across all connections, buckets and scopes_

#### Favorites Tags

Tags are a convenient way to classify Query Favorites and **filter** on them.

- You can optionally Tag each Favorite. This can be done before or after the Favorite is saved.
- You have 10 Tags to choose from. Scroll down to see the complete list
- Choose the color you are interested in and name the Tag.
- Do this only for the Tags you are interested in. Yiou can skip Tags. It need not be in order.
- Remember, you can always name the Tags and modify the Tag, post saving too.

#### iQ Credentials

**Prerequisite**: You should have a Capella Account.
:::tip

- You can use iQ even with your self-managed Couchbase as long as you have a Capella Account
- Note that you just need the Account, not even a running cluster!
  :::

#### Prepare

Login into Capella and copy the URL from your browser. It will be something like this:

```
https://cloud.couchbase.com/database/datatools?oid=cfc87f18-98f2-12234-b9a3-abcdes94f284&pid=6aef2345-c6780-444c-a671-833393729b79&dbid=ab46fd88-g321-45f2-978b-3b54a44a49de
```

There are a 4 sections in the URL:

- **Cloud** : cloud.couchbase.com
- **Organization**: oid=**cfc87f18-98f2-12234-b9a3-abcdes94f284**&
- **Project**: pid=**6aef2345-c6780-444c-a671-833393729b79**&
- **Database**: dbid=**ab46fd88-g321-45f2-978b-3b54a44a49de**
  - Copy the **Organization** (the bolded part) and keep it handy.

#### Fill in the form

- **Capella Cloud**: Cloud from above info
- **Organization**: oid from above info
- **User ID**: Capella login user. _Not the database credentials_
- **Password**: Capella login password. _Not the database credentials_. This password is **encrypted on disk**

**Tags Export**
The Tags are exported as a JSON File <br />
This provides a convenient way of sharing the same Tagnames and Colors with others.

**Tags Import**
The Tags are imported from JSON File <br />
This provides a convenient way of sharing the same Tagnames and Colors with others.

:::tip
You will notice that the Tags JSON File also export the Tag Color in RGB. Please be careful when changing the colors (if you decide to!)
:::

### Run Button

Runs the Query

### Stop Button

Currently not available

### Pretty Button

Currently not available

### Favorite

  <img src="/img/workbenches/workbench-favorites-form.png" width="400" alt="workbenches-favorites-form" />

- Fill out the **Title** and **Description**.
- **Title** also doubles as filename. So, keep it unique
- Choose an optional tag
- The query will be modified with the comment (above example):

```sql
/*
* Example of Group by and Order by
** Selects 10 cities with most landmarks. Orders them by DESC. Nice for Bar Chart.
##2
*/
SELECT city City, COUNT(DISTINCT name) LandmarkCount
FROM landmark
GROUP BY city
ORDER BY LandmarkCount
DESC LIMIT 10;
```

:::info
The above query is stored as:

```
~/Documents/MyRepository
├── Backups
├── Datasets
├── Favorites
│   ├── travel-sample
│   │   ├── inventory
│   │   │	├── Example-of-Group-by-and-Order-by##2.sql
```

:::

### Delete Button

This is the Trash can Icon. Clears the Editor.

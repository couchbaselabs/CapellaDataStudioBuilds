# Backup Center

The backup center holds all your backups.
:::info

1. Make sure you have the **Data Tools Plugin** installed
2. Make sure that you have chosen the _Active Store_. Check on the **AppBar**
3. Choose the _Active Connection_/_Active Database_ you want to restore on

- Restore will **not** create a database
- It does not matter if the backed up database name is different from the one you want to restore to.
- It does not matter if the backed up database was from a different cluster
- All the Scopes and Collections will be restored to your _Active Database_
  To refresh our minds, let's look at the _Local Store_ structure for backups

```
~/Documents/MyRepository
├── Backups
│   ├── travel-sample
│   │   ├── 2023-10-05T09_43_34.506946-07_00
│   │   ├── 22023-10-24T09_48_26.419267-07_00
│   │   ├── 2024-01-20T12_39_35.08943-08_00
│   │   │   ├── **/*.css
│   │   ├── backup-meta.json
│   ├── views
│   ├── model
│   ├── index.js
```

:::

## Backup Center UI

![backup-center-ui](/img/backup-center/backup-center-ui.png)

## Backup Center Main Panel

This has 3 tables

- **Buckets**
  - The name of the backed up bucket
- **Bucket Details**
  - _Date_: The date of the backup
  - _Date_: Timestamp of the backup
  - _Source_: The cluster endpoint where the backup was taken from
    - This is convenient if you have the same bucket name across different clusters
  - _Indexes_: The number of GSI Indexes in the backup
  - _Size_: Size of the backup
- **Backup Details**
  - Details of the backup

### Backup Details

Let's take a detailed look at the backup details of **jungleville**

```json
[
  {
    "name": "_default",
    "mutations": 11,
    "tombstones": 0,
    "collections": [
      {
        "name": "_default",
        "mutations": 0,
        "tombstones": 0
      },
      {
        "name": "users",
        "mutations": 4,
        "tombstones": 0
      },
      {
        "name": "inbox",
        "mutations": 3,
        "tombstones": 0
      },
      {
        "name": "stats",
        "mutations": 4,
        "tombstones": 0
      }
    ]
  },
  {
    "name": "25KIMDb",
    "mutations": 7069,
    "tombstones": 0,
    "collections": [
      {
        "name": "movies",
        "mutations": 7069,
        "tombstones": 0
      }
    ]
  }
]
```

- The source bucket was **jungleville**
- This had 2 **Scopes**
  - Scope **\_default** which had 4 _Collections_
  - Scope **25KIMDb** which had 2 _Collections_
- The **mutations** are the number of documents
- The **tombstones** are the number of _tombstones_. For more details on these, plaese refer Couchbase Documentation

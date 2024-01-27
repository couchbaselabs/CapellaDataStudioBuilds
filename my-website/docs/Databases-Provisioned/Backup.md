---
sidebar_position: 5
title: "Backing up a Database"
---

# Backup

:::info

- Only _Full bucket backups are supported_
- Before backing up, you need a few prerequisites
  - Setup your _Local Store_: Check out the documenatation on **Stores** on how to set this up.
  - Set the _Active_ Local Store. _Check the **AppBar**!_
  - Install the _Data Tools_ plugin: Check out the documenatation on **Plugins** on how to install this.
- Currently only _Local Store_ is supported

:::

## Backup the database

### Select the database and click the backup icon

![backup-select](/img/backup/backup-select.png)

### Review Information and Proceed

  <img src="/img/backup/backup-dialog.png" width="400" alt="backup-dialog" />

### Check Notification on begin

![backup-notification](/img/backup/backup-notification.png)

:::info
Backups take time!
:::

### Check Notification on end

![backup-notification](/img/backup/backup-notification-end.png)

## Check the _Logs_ from the Left Navigation Bar

![backup-notification](/img/backup/backup-logs.png)
The logs show the typical output of **cbbackupmanager**

## Check the _Backup Center_ from the Left Navigation Bar

![backup-notification](/img/backup/backup-check-center.png)

- **Backup Center** is discussed in detail elsewhere in the documentation
- For now, click on the database backed up and choose the time.
  - This shows details of the backup available

## Tip

:::tip[Tip]
Please do not delete backup images manually
:::

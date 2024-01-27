# Restore

Restoring a backup to a database

## Restoring jungleville to Demo

This backup was taken some time back on a cluster which has actually been deleted<br />
Let's restore this on our _Active Connection_<br />
The _Active Database_ is **Demo**<br />. This is empty.
The _Active Scope_ id=s **\\\_default**. Restore will create and overwrite scopes as required<br />

### Restore ToolBar

<img src="/img/backup-center/backup-center-toolbar.png" width="400" alt="backup-center-toolbar" />

## Restore Form

<img src="/img/backup-center/backup-center-restore-form.png" width="400" alt="backup-center-restore-form" />

:::info
Note that while the tool does use **cbbackupmanager**, it does not support _all_ the restore options.
:::

### Exclude Collections

Overrides the repository configuration to skip restoring the data specified in the _collection_string_list_. This flag takes a comma separated list of collection strings. Note that excluding data at the scope/collection level is an Enterprise Edition feature.

### Filter Keys

Only restore data where the key matches a particular regular expression. The regular expressions provided must follow RE2 syntax.

### Filter Values

Only restore data where the value matches a particular regular expression. The regular expressions provided must follow RE2 syntax.

### Force Update

Forces data in the Couchbase cluster to be overwritten even if the data in the cluster is newer. By default updates are not forced and all updates use Couchbase’s conflict resolution mechanism to ensure that if newer data exists on the cluster that is not overwritten by older restore data.

### Remove Collections

Automatically delete scopes/collections which are known to be deleted in the backup.

## Restore Process

### Notification

The Bell Icon on the **AppBar** shows the beginning and end of the restore process
![backup-center-restore-notification](/img/backup-center/backup-center-restore-notification.png)

### Logs

The Logs show the details of the Restore
![backup-center-restore-logs](/img/backup-center/backup-center-restore-logs.png)

- Notice that even the **indexes** have been automatically rebuilt

### Databases

You might see that the **Databases Scope** does not reflect the imported scopes.<br />
You will have to **Refresh** the Scopes. Once done, you will see:
![backup-center-restore-databases](/img/backup-center/backup-center-restore-database.png)

## Restore travel-sample to the same Demo bucket

Let's see how we can restore the backup taken from travel-sample bucket from a different cluster to the same demo bucket.<br />

## Restore Form

<img src="/img/backup-center/backup-center-restore-form-travel.png" width="400" alt="backup-center-restore-form-travel" />

### Notification

The Bell Icon on the **AppBar** shows the beginning and end of the restore process
<img src="/img/backup-center/backup-center-restore-notification-travel.png" width="400" alt="backup-center-restore-notification-travel" />

- Notice the restore from travel-sample has been added

### Logs

The Logs show the details of the Restore
![backup-center-restore-logs-travel](/img/backup-center/backup-center-restore-logs-travel.png)

- Notice the restore from travel-sample has been added
- Notice that even the **indexes** have been automatically rebuilt

### Databases

You might see that the **Databases Scope** does not reflect the imported scopes.<br />
You will have to **Refresh** the Scopes. Once done, you will see:
![backup-center-restore-databases-travel](/img/backup-center/backup-center-restore-database-travel.png)
OK, lets' examine this in detail: <br />

- The **Scopes and Collections** from _travel-sample_ have been added to the existing **Scopes and Collections** from _jungleville_.
- The documents from _travel-sample_ have been added to the _default_ collection which was empty.
  - If default was not empty, the docs from _travel-sample_ would have been an addition

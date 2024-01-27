---
sidebar_position: 5
title: "Enable Couchbase iQ"
---

# Enable Couchbase iQ

This is the AI Assitant for developing SQL++ queries and more.<br />
**iQ** is Couchbase's AI assistant.

:::info
**Couchbase iQ** is available only for _Capella Provisioned_ and _Capella Columnar_

- iQ Needs to be enabled for your Organization on the Server.
  - Please consult Couchbase Documentation for details.
- You also need a Capella UI Login credentials to enable iQ on Capella DataStudio
  :::

## Enabling iQ on Capella DataStudio

Note: You need to do this only for _Capella Provisioned_<br />

### Prepare

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

### Enable

From the **AppBar** goto the last icon, the **profile**
![workbench-iq-enabling](/img/workbenches/workbench-iq-enabling.png)
Then fill out the form with details collected above
<img src="/img/workbenches/workbench-iq-form.png" width="400" alt="workbench-iq-form" />

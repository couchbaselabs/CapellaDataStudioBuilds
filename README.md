# Welcome to Capella DataStudio

## Disclaimers
- Capella DataStudio is only Forum supported.
- This product is Couchbase CE licensed: https://www.couchbase.com/community-license-agreement04272021/
- This is in active development with frequent updates. While decent amount of testing is done, please expect bugs!
## Install Capella DataStudio
- Go to latest Release: https://capelladatastudio.com/
- Download the zip file for your Operating System
- Unzip the downloaded zip file
- Move or Copy the Capella DataStudio application to ~/Applications folder
- Execute Capella DataStudio from here
  - Note: If you attempt to run it from the downloaded folder, it will pop up a message such as:
- You can delete the downloaded zip file.
## Supported Couchbase Editions and Versions
- Couchbase Self-Managed, Couchbase Server version 7.x and abover
- Couchbase Capella
- Couchbase Columnar
## Quick Guide
- Full Documentation: https://capelladatastudio.com/docs/intro
### Navigation
The UI has 3 parts and this document will refer to these sections:
- The AppBar: This is the Top Bar which has the Capella DataStudio Logo
- The NavBar: This is the Navigation Bar on the Left of the UI
- The MainPanel: This is where various UI Components are displayed.
### Context!
Pay particular attention to the AppBar. This is where you see the Context in which you are in.
- The Context will show you:
 - The Active Connection
 - The Active Bucket and Scope
 - The Active Store (more on this later)
- All actions will always be on these Active objects.
## Adding Connections
### Prerequisites
- Capella DataStudio can connect to Capella Clusters or Self Managed Couchbase Clusters
- Couchbase Clusters should be Version 7.x or above.
- If you want to connect to Capella, make sure:
- You have whitelisted (IP AllowList) your Mac.
- You have created Database Credentials with Read/Write Access to All Buckets and Scopes
- You have at least 1 Bucket in your cluster.
  - Note: Capella DataStudio is a Client Tool and you cannot create Buckets from this tool.
## Thanks
- For folks who want to download this and try it out, a Big Thanks! 👏
- All feedback is greatly appreciated!


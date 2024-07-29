---
sidebar_position: 12
title: "Uninstall"
---

# Uninstall and Cleaning up

You might want to uninstall and clean up assets stored on your computer by the DataStudio in 2 circumstances

- You want to remove **Capella DataStudio** App from your computer ☹️
- Something went wrong and the DataStudio is not starting up normally

In this case, you can remove these 2 directories

- /Users/_name_/Library/Application Support/Capella DataStudio
- /Users/_name_/.capds
  You can also optionally delete any Store which you may have created.

:::info
Cleaning up and removing the local folders **does not** affect the databases on the Server
:::

## Brute force removal

**Capella DataStudio** auto-updates whenever a new version drops, just like any other app.<br />
In case of breaking changes to the App, if the auto-update results in a unrespoonsive App, you may have to kill the App and performa the Cleaning up. <br />
In this circumstatnces, go to your **Activity Monitor** and kill **Capella DataStudio** processes:
<img src="/img/cleanup.png" width="400" alt="cleanup" />

## Restarting after Cleanup

- Remove the **Capella DataStudio** App from ~/Applications folder.
- Download the App from the home page of this documentation. This will get you the latest version of the App
- Redo all you connections
- Reinstall **Data Tools** Plugin
- Configure your Stores
  - If you have **not** removed your Stores Folder, then, just add the folder to Stores and all your stored assets like **backups** and **favorites** are automatically available.

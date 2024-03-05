---
sidebar_position: 11
title: "Stores"
---

# Stores

:::info

- You can setup Stores either in the Cloud **AWS S3** or **Local** on your Mac
- You can setup as many stores as you need.
- Stores are needed for _Backups_, _Datasets_ and _Favorites_

:::

## Store structure

  <img src="/img/stores/stores-structure.png" width="400" alt="Capella Delete Scope" />

The above pic shows the store stucture and what is maintained there.

## Setting the Stores

Lets setup a couple of stores, one _Local_ and the other in the Cloud.
![Stores-Main](/img/stores/stores-main.png)

### Local Store

#### Prerequisite:

- An empty folder on your Mac.

#### Fill out the form

  <img src="/img/stores/stores-local-form.png" width="400" alt="stores-local-form" />

- Click the **Select** button
- Choose folder for your store

![Stores-Main](/img/stores/stores-local.png)

- When you select the store in from the table (click _Radio Button_), notice the _Active Store_ name is displayed in the **AppBar**

### Cloud Store

#### Prerequisite:

- A **AWS S3** Bucket
- **Access Key Id** for the S3 Bucket
- **Secret Access Key** for the S3 Bucket

#### Fill out the form

  <img src="/img/stores/stores-cloud-form.png" width="400" alt="stores-cloud-form" />

Some notes on the form:

- When you make this writable, then, Capella DataStudio will use this for backups, favorites etc. _Currently, this is not supported_.
- The name is your AWS S3 Bucket
- At the tme of adding, no checks are performed for access.

After Adding, the UI will show your store
![Stores-Main](/img/stores/stores-cloud.png)

- When you select the store in from the table (click _Radio Button_), notice the _Active Store_ name is displayed in the **AppBar**

:::info[Encryption]

- All **passwords** and **secrets** are encrypted using the native OS encryption. On Mac, this is Keychain. Keychain uses **AES-256** for encryption, the strongest encryption method.
- The encrypted passwords are not actually stored in Keychain. They are still stored in Capella DataStudio Local Store. Keychain is used only to provide encryption and decryption services.
  :::

## Tip

:::tip[Tip]

- You can add as many Local or Cloud Stores as you desire.
- Set the **Active Store** Context from this UI.
- Deleting the store from the UI, deletes only the **reference** to this store from the _Capella DataStudio store_ and not from the file system
- If you delete accidentally from the UI, you can re-add the same store.
  - This will _not_ wipe out the existing folders or files
    :::

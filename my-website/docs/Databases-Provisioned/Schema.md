---
sidebar_position: 4
title: "The Schema UI"
---

# Schema

The **Schema** Tab shows the Schema of all the Collections in a single UI
:::info

- The Schema Viewer acts on the _Active Connection_ / _Active Database_ / _Active Scope_
  - Check the **AppBar** for the _Active Context_

:::

![provisoned-schema](/img/databases/provisioned-schema.png)

## Schema View

The Schema View in Capella DataStudio provides a detailed overview of all collections within the active database and scope. This feature is designed to enhance your data management experience by offering a structured and comprehensive display of your data schemas.

### Features

- **Schema Cards**: Each collection within the active database and scope is represented by a card. The card title displays the collection name and includes an icon indicating the database source.
- **Tree Structure Display**: The schema of each collection is displayed in a tree structure within the card, providing a clear and organized view of your data schema.
- **Multiple Schemas**: If a collection has multiple schemas, each schema is displayed individually within its respective card.
- **Add Info Text Box**: Each schema card includes a text box where you can enter additional details about the schema. This feature is particularly useful for describing primary and foreign keys, as well as any other fields that may require additional information.
- **AI Integration**: The details entered in the text box can significantly enhance the capabilities of iQ, the AI assistant available in the Workbench. By providing more context, iQ can make better decisions, especially when performing joins and other complex queries.
- **Document Count**: Each schema card also displays the total number of documents in the collection, giving you a quick insight into the size of your data.

### Usage

1. **Viewing Schemas**: Navigate to the Schema View to see the schemas of all collections in the active database and scope. Each schema is neatly organized into cards for easy browsing.
2. **Adding Descriptions**: Utilize the text box in each schema card to add detailed descriptions about primary keys, foreign keys, and other important fields. These descriptions help iQ, the AI assistant, to perform more efficiently.
3. **Analyzing Document Count**: Quickly assess the size of your collections by viewing the document count displayed on each schema card.

The Schema View is a powerful tool in Capella DataStudio that provides a comprehensive and organized way to manage and understand your data schemas. With its integration with iQ, it enhances the overall data management and querying experience.

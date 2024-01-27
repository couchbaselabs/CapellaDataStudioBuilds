---
sidebar_position: 3
title: "The GSI Indexes UI"
---

# GSI Indexes

The **GSI Indexes** Tab allows you to select any Collection and view the Indexes associated with the Collection.
:::info

- The GSI Indexes Viewer acts on the _Active Connection_ / _Active Database_ / _Active Scope_
  - Check the **AppBar** for the _Active Context_

:::
![indexes-provisoned](/img/databases/provisioned-indexes.png)

## The Indexes UI Main Panel

Let's look at the displayed Index definition:

```sql
create INDEX `def_inventory_route_route_src_dst_day`
ON `travel-sample`.`inventory`.`route`
(`sourceairport`,`destinationairport`,(distinct (array (`v`.`day`) for `v` in `schedule` end)))
```

- Clicking on any Collection shows the Indexes on this Collection on the right table.
- The details include:
  - The _Index Name_
  - The _Keys_ which are being indexed
  - The _Filter_: This would typically be the _where_ clause in a _partial_ index

## The Indexes UI Footer

If the indexes have replicas (by default in Capella Provisioned), then, details of the Index on the _nodes_ which the indexes are deployed.

## Tip

:::tip[Tip]
Indexes are also displyed in the **Workbenches** UI, and there, te indexes are displayed in the definito format.
:::

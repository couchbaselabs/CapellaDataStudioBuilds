---
sidebar_position: 5
title: "Core Typesets"
---

# Core Typsets

These are the built-in types
:::tip[Core types can be either unrelated or correlated.]

- **Unrelated**
  - Truly random data. For example, the **person** type is unrelated. For example, if you choose firstName, lastName and fullName, each one of these is randomly output som fullName will not be the chosen firstName and lastName.
- **Correlated**
  - Related data. For example, the **location** data is correlated. For example, if you choose city, state, zip, phone, all these will be accurate in the sense, city will be guranteed to be in the state with correct zip and phone numbers will have the right area code.

:::

## Person

- **Unrelated random data**
  ![synth-types-person](/img/synthetic/synth-types-person.png)
  - **For example**, _fullName_ will not be _firstName_ + _LastName_

## Finance

- **Unrelated random data**
  ![synth-types-finance](/img/synthetic/synth-types-finance.png)

## Miscellaneous

- **Unrelated random data**
  ![synth-types-misc](/img/synthetic/synth-types-misc.png)
  :::info[Reviews are special!]

  - **Review**
    - **Subject**: Any string, generally is a _field reference_
    - **Category**: Drop down. Choose from _store | product | restaurant | hotel | service_
    - **Rating**: Int fromm 1 to 5, generally is a _field reference_ - Review output will reflect all above 3.

  :::

## Location

- **Correlated data**
  ![synth-types-location](/img/synthetic/synth-types-location.png)

  - **For example**, State, Zip, GPS, Phone Area Code etc. will be accurate for a given city.
  - **gpsNearby Radius**: specified in miles
  - Check out **Configure** section at bottom of page

### List of Cities

| state          | cities                                                                         |
| -------------- | ------------------------------------------------------------------------------ |
| New York       | New York City, Buffalo, Rochester, Syracuse, Albany                            |
| California     | Los Angeles, San Francisco, San Diego, Sacramento, San Jose                    |
| Texas          | Houston, Dallas, Austin, San Antonio, El Paso                                  |
| Florida        | Miami, Orlando, Tampa, Jacksonville, Fort Lauderdale                           |
| Illinois       | Chicago, Springfield                                                           |
| Canada         | Toronto, Vancouver, Montreal, Calgary, Ottawa, Edmonton, Quebec City, Winnipeg |
| Pennsylvania   | Philadelphia, Pittsburgh, Allentown, Harrisburg, Scranton                      |
| Ohio           | Columbus, Cleveland, Cincinnati, Toledo                                        |
| Georgia        | Atlanta, Savannah, Augusta, Columbus                                           |
| North Carolina | Charlotte, Raleigh, Greensboro, Asheville                                      |
| Michigan       | Detroit, Grand Rapids, Lansing, Warren                                         |
| New Jersey     | Newark, Atlantic City                                                          |

## Product

- **Correlated data**
  ![synth-types-product](/img/synthetic/synth-types-product.png)

  - Check out **Configure** section at bottom of page

  :::info[How Products are generated]
  Products are generated from built in tables like (snippet):
  |category|sub-category|products|
  |-----|------|-----|
  |Electronics|Computing|Laptop, Desktop, Tablet, Monitor, All-in-One, Mini PC, Workstation, Chromebook|
  | |Mobile|Smartphone, Smartwatch, Earbuds, Charger, Tablet, Power Bank, Phone Case, Screen Protector|
  |Groceries|Fresh|Apples, Bananas, Tomatoes, Lettuce, Carrots, Cucumbers, Berries, Potatoes, Onions, Peppers|

- **price** reflects actual price of product (in US $)
  :::

## Food

- **Correlated data**
  ![synth-types-food](/img/synthetic/synth-types-food.png)
  - Check out **Configure** section at bottom of page

## Medical

- **Correlated data**
  ![synth-types-medical](/img/synthetic/synth-types-medical.png)

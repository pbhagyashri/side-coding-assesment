# Getting Started

- Please read the INSTRUCTIONS.md first
- For any questions around Create React App (CRA), reference
  CRA_DOCUMENTATION.md

# Code and Design Decisions

<!-- Please document your code & design decisions here. -->

## Router

I chose to nest PropertyListing components under App because App is global level component and Header is present on every page. With React Router V6, routes and components must be nested to achieve this behavior. While nesting PropertyDetails under PropertyListing will make sure PropertyListing component doesn’t re-render every time user switches between the 2 pages

## File Structure

I kept Routes and components separate so that I can make sure each component has a specific purpose. It helped me split the code while keeping the role and purpose of each component clear and simple. it also makes testing easier. As this application grow, more componenets that can be re-used multiple times for example, we can add Button, Input, Banners and such and use them in Route components as needed. It also helps to keep the styles seperate

## Styles

If I had more time, I would have created a file to house all the css or sass variables that can be used through out application. This is a great way to reduce code and gain consistency. color, font size, font weight, paddings could be made into a variable.

## Helper Function

Helper function were where useful to keep complex logic out of the components. As the app scales, these helper functions can be re-used to save code duplication. Also helper fuctions can be tested with multiple inputs.

## Note on test cases

I wanted to add more test case specially to test the components but I ran out of time. If I had more time, I would have added more unit tests with Jest and some e2e tests with Cypress.

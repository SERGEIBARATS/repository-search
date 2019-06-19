# Angular Search App
* Each product has the following properties:
ID (number, unique)
Name (string, mandatory)
Description (string, optional)
Price (number, larger than zero, mandatory)
Creation Date (Date in timestamp, mandatory)
Thumbnail image
Url Image

* Instructions
The app should be written in HTML, Typescript and SCSS using Angular/React platform.
Please build the app according to the following:

Acquire Products data using an Api Call:
When Submitting an “getAll” api call:
successful call:
Request URL: https://msbit-exam-products-store.firebaseio.com/products.json
Request Method: GET
Request Header: accept: application/json; charset=UTF-8

upon Error/No results  display the message “No data to display”  


* For each item display the product name, description and image-thumbnailUrl . 
When clicking on an item, display a ‘details’ view of the product on the right side of the screen (on desktop layout) with the rest of the data of the product.
* Add a “Save” button on the details pane that saves the product after the user edits its properties. 
* Save action will invoke a “Success” popup - (no additional Api call is required ) with the text: “Thank you for updating product {product name comes here}”
* Add validation to the details pane. The save button should only be enabled if the properties contain valid values (for example, name is not empty, price is greater than zero, etc.) Refer to the product properties in the overview section for the exact validation rules of each property.
* CSS layout:
* Display should be responsive  400px - 1920px width.
Desktop layout: Apply basic CSS to the app, nothing fancy but the layout should look similar to the mockup.
Tablet and Mobile layout: Implement CSS changes that will allow a proper user ux also in smaller width views - as you see fit. 
* Add the ability to sort the list by product name or price, by using a dropdown control.
* Add the ability to filter the list by typing free text into a text box control. The list should display only products whose name or description contain the search text.


* Bonus:

* Add paging to the list. Display 5 products on each page. Allow moving to the next and previous pages. Disable the buttons when appropriate. Display the current page and the total number of pages.


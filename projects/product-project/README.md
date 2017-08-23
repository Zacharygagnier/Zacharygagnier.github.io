Product Project
===

Given the data at `data/products.json`, create a searchable list of products.

Note:

* We've included a few utilities for you to use, but you'll definitely want to use jQuery, maybe a CSS library too.
* Feel free to use Bower or a similar client-side package manager for your project.
* There are also product thumbnails and detailed images within the `img/product` directory!


# Product Project : Directions

### [Overview](#overview)

You've been given some product data in the file located at `data/product.json`, and from this dataset, you're going to create a page of searchable and filterable products! You can style the project and layout the products as you see fit.

Have a look at the data available `data/product.json` - this will give you an idea of the ways in which a user can search or filter on products by type, search for products by description keyword queries, order by cost, and maybe build in other features, like if there's less than 10 products, show **"Hurry, only x left in stock!"**. The page should feel like an Amazon product search experience.

You'll want to make use of forms and layouts, and of course, your functional programming chops! Below we've listed a set of review-resources to help you in your work.

* * *

### [Setup](#setup)

#### Create the products.js File

1.  [ ] In the root directory of `product-project`, find a directory named `js`.
2.  [ ] In the `js` directory, create a file called `products.js`
3.  [ ] Paste the following starter code into your `products.js` file:

```javascript
$(document).ready(function() {
	// ALL YOUR CODE GOES BELOW HERE //





	// ALL YOUR CODE GOES ABOVE HERE //
});
```

All of your code for this project will go in this `products.js` file. We've already linked it to your `index.html` file, so you're good to go!

### **It is very important as you create your new elements that you create them as the proper HTML tags, and provide them the ids and classes listed in the directions. **

* * *

#### Load the Product Data

1.  [ ] We need to first load our data before we can display it in any way: our product data is located in a file at `data/product.json`. We can use the `$.getJSON()` method to load our data. Google how to use `$.getJSON()`, or find examples from our previous projects (We definitely used it in `Billypedia`).

* * *

#### Display the List of Product

Now that we have our data loaded, we need to display it in some fancy way to our user. First thing to do would be to get the data on the page, next, make it pretty! Review all the material below for ideas!

1.  [ ] Make use of jQuery to build a list of products! Create a factory function that will take a product and manipulate its data with jQuery so that it can be displayed on the page. Make sure you give each product the class of `product`.
2.  [ ] Note that there are product thumbnails and full size images within the `img/product` directory! The file names of the images are referenced in the `product.json` file as `image` on each product, so you should use them in your product profiles.
3.  [ ] Add functionality that creates a [modal](https://www.w3schools.com/bootstrap/bootstrap_modal.asp) to show product details when a user clicks on a product in the list.
4.  [ ] Remember that you have both thumbnails and full size images for the products. Use the thumbnails in the directory `img/product/thumbs` for the list of products, and the full size images in  `img/product` for the modal.

* * *

#### Search & Filter Features

1.  [ ] Now that we have all our products on the page, let's create a new section in the `nav` tag OR at the top of the `main` tag to filter and search for products.
2.  [ ] Add a drop-down menu with the ID `type` that is populated dynamically with all the different types of products. When you choose a value in the menu it should filter the products on the page based on the selected type. This menu should not be hard coded in the HTML, each type should be added using jQuery. Hint: Use reduce on the array of products!
3.  [ ] Add an input with the ID `query` where users can type in what type of product they want.
4.  [ ] Add a button with the ID `search` that repopulates the page with items that contain the search query in the `query` input and are also the selected type in the `type` drop-down.
5.  [ ] For an added challenge, make the search button functional when you hit the `enter` key!
6.  [ ] Go nuts creating other ways to filter the products! You have [lodash installed in your client project, so you can make use of all its functional goodies](https://lodash.com/docs) as you would with underscore.js.

* * *

## In-Depth Review

### HTML & CSS

[Start Here](https://www.learnhowtoprogram.com/lessons/block-elements) (click "next section" in bottom left to advance)

[Some basic HTML examples are here.](basic_html.html)

### Layouts

[This is a great resource for a more in-depth understanding of CSS layouts.](http://learnlayout.com/)

[Flexbox is a handy layout system to use.](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### Javascript

[[JavaScript One]](https://www.learnhowtoprogram.com/sections/javascript-primitives-methods-and-functions) [[JavaScript Two]](https://www.learnhowtoprogram.com/sections/branching-and-looping-in-javascript)

* * *

## More JQuery Resources

*   Watch the first of these [videos about jQuery](https://www.learnhowtoprogram.com/sections/jquery)*   Or try a similar resource [from CodeSchool](https://www.codeschool.com/courses/try-jquery)

* * *

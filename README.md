# Project Minerva

## Link to deployed project

https://project-minerva.herokuapp.com

## Group Members
* Michael Manzon
* Prajwal Chinchmalatpure
* Nissar Ahmed Pinjari

Project initialized with create-react-app: https://github.com/facebook/create-react-app

No starter project used.

In order to use the admin functionality, you can use the following test credentials:

email: projectminervatest@gmail.com

password: 123456

In order to test stripe functionality you can use this test card:

Number: 4242 4242 4242 4242
Expiration: Any future date
CVC: any 3 digit number
zip code: any 5 digit number

## Iteration 3

### Screenshots

Stripe payment page:

![Iteration-3](/readme_photos/payment.png)

User Purchase History with invoice downloads:

![Iteration-3](/readme_photos/user_history.png)

Admin Order Dashboard with status change:

![Iteration-3](/readme_photos/admin_dashboard.png)

User Wishlist:

![Iteration-3](/readme_photos/wishlist.png)

### Total Progress

Iteration 3 is complete! We have rounded out all of our main functionality. After integrating Stripe into our app, we can process credit card payments. Right now Stripe is only in test mode, because we don't want anyone accidentally spending real money. A test card's details are provided above the iteration 3 update. Order details are also stored in our database, so we can display each user's order history as well as all orders together in the admin dashboard. Users can download pdf invoices for each of their orders from their history page, and admins can update the status of any order. Finally, products can be added to logged-in users' wishlists by clicking the "add to wishlist" button on a product's page. The wishlists for each user are stored in the database. Logged in users can delete products from their wishlists, as well as navigate to any product it contains. Logged in users can get to their wishlist from the dropdown menu where they can also get to their dashboard/history and logout.

### Responsibilities
* Prajwal
  * Set up backend for Stripe Payment
  * Set up front end for Stripe Payment
  * Implement Stripe Checkout Component
  * Charging Actual Cart Total
  * Show Discount and Coupon Applied in Frontend
  * Order Schema set up
* Michael 
  * implement order status update functionality for admin
  * display all orders with details in tables and changable order status in the admin dashboard
  * set up backend for wishlist
  * setup wishlist page and operations, added link to wishlist from logged in dropdown menu
  * stamped out bug where reloading order history and admin dashboard would adjust the displayed total cost of orders
  * fixed bug where deleted products caused errors when viewing orders that contained them
  * Deployed app on heroku
* Nissar
  * Created Order feature in the Backend and added Empty Cart at frontend.
  * Implemented Decrement Quantity Increment sold feature and showing out of stock feature.
  * Impemented User orders in purchase history page and showing each Order's Products in table.
  * Added a feature of showing payment info with PDF view and download link.
  * Created Invoice component and downloading feature of invoice as PDF.

## Iteration 2

### Screenshots

New home page:

![Iteration-2](/readme_photos/new_home.png)

Shop with filters: 

![Iteration-2](/readme_photos/shop.png)

Individual Product Page: 

![Iteration-2](/readme_photos/product.png)

Admin Coupon Page: 

![Iteration-2](/readme_photos/coupon.png)

Cart page:

![Iteration-2](/readme_photos/cart.png)

Checkout with coupon applied:

![Iteration-2](/readme_photos/checkout.png)

### Description

In iteration 2 we rounded out most functionality of the website. Admin can now view, edit, and delete products on the site. The home page now displays highlighted items, and provides links to view products by category. The shop page displays all items, and enables filtering by many attributes. The search bar at the top allows users to search for items. Additionally, products can now be rated as well as added to the cart. The cart page has been implemented, and the cart is now part of the redux state. Users can go to the checkout page if they are logged in, and on that page they can enter coupon codes created by an admin. Admins can create, edit, and delete coupon codes from the coupon section of their admin dashboard. Next week we will implement payment/order processing with Stripe, and then complete the user and admin dashboards to include order history, invoices, etc.

### Responsibilities
* Prajwal
  * Implemented Star Rating System Backend
  * Star Rating System: Front End
  * Implemented Product Categories and Sub categories
  * Advanced Searching and Filtering by: Price, Categories, Star Rating
  * Advanced Searching and Filtering by: Brand, Color, SubCategory, Shipping

* Michael 
  * implemented cart redux state
    * add to, remove from, and edit cart,  display cart, etc.
    * can add to cart from home, shop, and single product cards
    * side drawer cart that opens when adding item to cart
  * Implemented checkout page and process
    * sends cart to backend for verification
    * displays cart and final order summary
    * empty cart functionality
    * shipping address input
  * implemented coupons
    * admin can create/edit/delete coupon codes
    * user can apply coupon code in checkout
  * deployed iteration 2 client and server to heroku
  
* Nissar
  * Set up image upload and storage for products using Cloudacity
    * resizes images for display and storage
  * Enabled product update and delete in the admin dashboard
  * designed home page
    * paginated display of new products, best sellers, etc.
    * cool typewriter display at top of page

## Iteration 1

### Screenshots

Home page: 

![Ch13_Search](/readme_photos/home_page.png)

Login page with email and google login:

![Ch13_Search](/readme_photos/login.png)

Admin view: create category form and navigation

![Ch13_Search](/readme_photos/create_category.png)

User view: reset password form with navigation 

![Ch13_Search](/readme_photos/password.png)

### Description

Our project is to build an e-commerce platform for musical instruments. 

In iteration 1 we set up the front end and back end servers, implemented Firebase authentication, established protected routes based on user type, and began implementing different schemas and CRUD functionality. The home page is a placeholder, in the future it will display products users can view and add to cart. Logging in can be done through google or with email. If using email, a verificaiton email is sent, through which a user can set up a password. Users can go to their dashboards by hovering over their name once signed in and clicking on dashboard. Normal users will see pages for purchase history, changing password, and a wishlist. Admins will see links for their dashboard, create product, category, and subcategory forms, and change password form. Category and subcategories are displayed and can be edited/deleted, but products can only be created for now. Protected routes (like those in user dashboards), will redirect to the home page if the user is not logged in/is not an admin. 

### Responsibilities 
* Prajwal
   * Initilized React application and basic routes
   * Implemented navigation bar using Ant Design
   * Implemented router links; set up firebase
   * Created registration page; email verification for registration
   * Implemented login page; Google login and forgot password
   
* Michael
    * set up backend express server and atlas mongodb database
    * implemented firebase in the backend, and connected front and back ends to store information about users
    * created user schema, enabled password resets, and protected routes based on user status
        * users are redirected away from admin dashboard if their user type is not admin
        * Only logged in users can see their history, password change, and wishlist pages
    * deployed the client and server on Heroku, ensuring all database interactions and authentication still works at the deployed address
* Nissar
  * Implemented Product Category Schema and Routes in the backend and instantiated CRUD request operations for products.
  * Created and linked Dynamic Dashboard Link with admin sidebar Navigation.
  * Implemented search filter categories of the product and executed code refactoring techniques
  * Created product subcategories section by implementing CRUD requests and its associated functionalities.
  * Initialized model section of products in backend by creating form and page with alert and reload functionalities after product gets created.
  * Made a feature which sends error message while creation of products in categories or sub-categories and implemented code refactoring techniques.


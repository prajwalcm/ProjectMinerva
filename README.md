# Project Minerva

## Link to deployed project

https://project-minerva.herokuapp.com

## Group Members
* Michael Manzon
* Prajwal Chinchmalatpure
* Nissar Ahmed Pinjari

Project initialized with create-react-app: https://github.com/facebook/create-react-app

No starter project used.

## Iteration 2

### Screenshots

### Description

### Responsibilities
* Prajwal

* Michael 

* Nissar

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

In order to use the admin functionality, you can use the following test credentials:

email: projectminervatest@gmail.com

password: 123456

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


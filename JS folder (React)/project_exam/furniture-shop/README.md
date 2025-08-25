## Welcome to the Furniture-shop Application!

The current application is an e-commerce site for buying furniture. It includes a homepage, shop, search, login, registration, basket, furniture details, and a 404 error page, all of which are accessible to both guests and logged-in users.

Some pages are restricted to authenticated users only, such as Profile, Checkout, Placed Orders, and My Orders and etc.

Admin users have access to additional features, such as creating furniture offers (CREATE OFFER), editing furniture offers (EDIT), and deleting furniture offers (DELETE). At the same time, certain user-only features (e.g., basket, wishlist) are restricted for admins. The only way to create an admin is by first registering a normal user (with email, password, etc.) and then assigning them admin privileges.

Access to pages is guarded based on user status. For example, guests cannot access the user profile, while logged-in users cannot access the registration page.

User authentication is managed via a third-party cookie (auth) containing a JWT token, which is valid for one hour. When the token expires, a dialog prompts the user to log in again. To improve user experience, session storage is used to persist the session in case the current page is accidentally reloaded.

<br>

### Users for testing the application.
| Email  | Password |
| ------------- | ------------- |
| `userOne@abv.bg` | 123123  |
| `userTwo@abv.bg` | 321321  |
| `admin@abv.bg` | 321321  |

<br>

1. **Home page:**

   - **The homepage displays static HTML elements and recently added furniture offers.**
   - **Accessible to both guest users and logged-in users**

2. **Shop page:**

   - **The shop page displays all the offers for buying and selling furniture.**
   - **Accessible to both guest users and logged-in users**

3. **Search page:**

   - **The search page allows users to search for different furniture offers by name (e.g. chairs).**
   - **Accessible to both guest users and logged-in users**
  
4. **Register & Login:**

   - **The login and registration pages contain forms for entering user data. These forms are protected on both the client and server sides. On the client side, the Yup library is used to validate inputs, while the server returns errors for invalid data.**
   - **Accessible to guest users**

5. **Create Offer page:**

   - **On this page, we can create furniture offer, and it is also protected by an input validator.**
   - **Accessible to admin users**
  
6. **User profile page:**

   On the Profile page, the logged-in user can view their account information. They will be able to:

   - **View their orders and filter them by status and date**
   - **When viewing the details of an order, the admin user has the right to mark the order as sent. On the other hand, the regular user has the ability to confirm the order and view the invoice.**
   - **See the furniture they have wishlisted (without admin user)**
   - **Update certain profile information**
   - **Accessible to logged-in users**
  
7. **Basket page:**

   - **The Basket page is accessible to both guests and logged-in users, but not to admins. On this page, users can view a summary of all furniture items added to the basket, including details such as price and quantity. From here, items can be removed from the basket, or alternatively, added to or removed from the wishlist.**

   - **Before proceeding to checkout, the user must select a preferred delivery method. Once the user continues to checkout, they are redirected to the Checkout page, which is guarded and only accessible to logged-in users.**

   - **The Checkout page contains a form where the user provides their delivery address and selects a payment method. At the end, a final order review/summary is displayed. After confirming the delivery details and payment option, the order can be completed.**

   - **Upon completion, the user is redirected to the Placed Order page, where they can find detailed information about the order. This page is also guarded and only accessible to logged-in users.**

9. **Details Furniture page:**

   - **Each furniture offer has its own details page, and the available functionality depends on the user’s status. If the visitor is a guest, the only option available is adding the offer to the basket. Logged-in users can both add the offer to their basket and wishlist, as well as write a review for the furniture. Admin users, on the other hand, cannot add items to the basket or wishlist, nor write reviews; instead, they have the ability to edit or delete the offer. Regardless of status, all non-guest users are able to view reviews written by other users.**
   - **Accessible to both guest users and logged-in users**

10. **Edit page:**

    - **On this page, we can modify the offer's details if needed, and it is also protected by an input validator.**
    - **Accessible to admin users**

## How to run the React app:
1. `create environment for developer and production` - VITE_API_URL
2. `npm install` - installing node_modules
3. `npm run start` - starts localhost
4. `configured Firebase settings.` - (it's not required.)
5. `npm run build` - production build of your app (it's not required.)
6. `npm run deploy` - firebase host (it's not required.)

## Upcoming features to the app:

- ~~**Pagination for the shop page**~~
- ~~**Responsive design**~~
- ~~**Multiple images for the details furniture page**~~
- ~~**Basket Page**~~
- ~~**View purchased furniture on the profile page.**~~
- ~~**Password change for the user**~~
- ~~**Spinner component for home and shop page**~~

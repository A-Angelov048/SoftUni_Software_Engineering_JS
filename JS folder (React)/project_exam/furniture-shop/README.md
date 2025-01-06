## Welcome to the Furniture-shop Application!

The current application is designed for buying and selling furniture. It includes a homepage, shop, offer search, furniture details, login, registration, and 404 error pages, all of which are accessible to both guests and users. However, certain features are only accessible to users, such as creating a furniture offer (CREATE OFFER), accessing the user profile (USER ICON), and editing a furniture offer (EDIT). Some pages are restricted based on user status; for example, guests cannot access the user profile, and logged-in users cannot access the registration page. User authentication is managed via a third-party cookie (auth) containing a JWT token that is valid for up to one hour. When the token expires, a dialog prompts the user to log in again. Session storage is used to persist the user session if the current page is accidentally reloaded.

<br>

### Users for testing the application.
| Email  | Password |
| ------------- | ------------- |
| `pesho1@abv.bg` | 123123  |
| `test@abv.bg` | test123  |

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
   - **Accessible to logged-in users**
  
6. **User profile page:**

   - **On the profile page, we can find information about the logged-in user. The logged-in user will be able to view the offers they have created for selling furniture, the furniture they have liked, and update some of          their profile information. Additionally, they will be able to navigate to other users profile and will have the ability to view only the offers created by them for selling furniture.**
   - **Accessible to logged-in users**
  
7. **Details Furniture page:**

   - **Each offer has a page detailing the furniture itself, where, if we are guests in the application, we will not have any functionality and will only be able to see the data about the offer. If we are logged-in users         and the owners of the current offer, we will be able to edit or delete it. If we are not the owners of the offer, we will be able to like the furniture or purchase it. On the same page, we can write a review of the        current piece of furniture (only if we are not the owner of the offer), and we can also review all other users reviews.**
   - **Accessible to both guest users and logged-in users**

8. **Edit page:**

   - **On this page, we can modify the offer's details if needed, and it is also protected by an input validator.**
   - **Accessible to logged-in users**

## How to run the React app:
1. `create environment for developer and production` - VITE_API_URL
2. `npm install` - installing node_modules
3. `npm run start` - starts localhost
4. `configured Firebase settings.` - (it's not required.)
5. `npm run build` - production build of your app (it's not required.)
6. `npm run deploy` - firebase host (it's not required.)

## Upcoming features to the app:

- **Pagination for the shop page**
- ~~**Responsive design**~~
- ~~**Multiple images for the details furniture page**~~
- **Add Cart Page**
- **View purchased furniture on the profile page and leave a review after purchase.**
- ~~**Password change for the user**~~
- ~~**Spinner component for home and shop page**~~

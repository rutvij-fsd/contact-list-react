
# Contact List Web App

Contact List Web App using React JS.

This website is completely Responsive across all the Devices.

-  Users are able to Add New Contacts.
-  Users are able to Delete Existing Contacts.
-  Users are able to Read Existing Contacts.
   

## Author

- [@rutvij-fsd](https://github.com/rutvij-fsd)


## API Reference

#### Get all items

```http
  GET https://jsonplaceholder.typicode.com/users
```
```javascript
fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((contact) => setContactListArr(contact));
```
#### POST

```http
  POST https://jsonplaceholder.typicode.com/users
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `uuid().split("-")[0]` | **Required**. Redom generated Id from react-uuid |
| `name`      | `inputName` | **Required**. Local State from Input |
| `email`      | `inputEmail` | **Required**. Local State from Input |

```javascript
fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        id: uuid().split("-")[0],
        name: inputName,
        email: inputEmail,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        json.id = 10;
        setContactListArr([json, ...contactListArr]);
        console.log("json", json);
      });
```

#### PUT

```http
  PUT https://jsonplaceholder.typicode.com/users/${Id}
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `isEditing.contactId` | **Required**. Local State isEditing |
| `name`      | `inputName` | **Required**. Local State from Input |
| `email`      | `inputEmail` | **Required**. Local State from Input |

```javascript
fetch(`https://jsonplaceholder.typicode.com/users/${isEditing.contactId}`, {
      method: "PUT",
      body: JSON.stringify({
        id: isEditing.contactId,
        name: inputName,
        email: inputEmail,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        const clonedArr = [...contactListArr];
        clonedArr[contactIndex] = json;
        setContactListArr(clonedArr);
      });
```

#### DELETE

```http
const updatedArr = contactListArr.filter((contact) => contact.id !== contactId);
setContactListArr(updatedArr);
```
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

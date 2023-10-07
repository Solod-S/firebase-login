![Version](https://img.shields.io/badge/Version-1.0-blue.svg?cacheSeconds=2592000)
[![runs with react](https://img.shields.io/badge/Runs%20with%20React-000.svg?style=flat-square&logo=React&labelColor=f3f3f3&logoColor=61DAFB)](https://uk.legacy.reactjs.org/)
[![runs with firebase](https://img.shields.io/badge/Runs%20with%20Firebase-000.svg?style=flat-square&logo=Firebase&labelColor=f3f3f3&logoColor=FFCB2D)](https://firebase.google.com/)
[![runs with router dom](https://img.shields.io/badge/Runs%20with%20React_Router_Dom-000.svg?style=flat-square&logo=React&labelColor=f3f3f3&logoColor=blue)](https://reactrouter.com/en/main)
[![runs with redux](https://img.shields.io/badge/Runs%20with%20Redux-000.svg?style=flat-square&logo=Redux&labelColor=f3f3f3&logoColor=7247B5)](https://redux.js.org/)
[![runs with styledcomponents](https://img.shields.io/badge/Runs%20with%20Styled_Components-000.svg?style=flat-square&logo=styledcomponents&labelColor=f3f3f3&logoColor=#DB7093)](https://styled-components.com/)

# Firebase Auth Project

![Firebase Auth Project Demo](./src/img/public/firebase_main-min.jpg)

**_Built using React JS, Redux, Firebase, Styled-Components & Styled-System _**.

## Project Description

Welcome to my authentication project powered by Firebase! 🚀

The Firebase Authentication project offers a convenient authentication system using React, Redux, and Firebase. Users can log in through two methods: via email and password or by
quick authentication using a Google account. Additionally, the project provides functionality for users to edit their profile data, allowing them to modify their name, gender,
subscription and avatar.

## The Tech Stack:

    react
    react-router-dom
    redux
    redux-persist
    firebase
    firebase-tools
    formik
    styled-components
    styled-system
    react-icons
    react-loader-spinner
    react-modal
    react-toastify
    yup

## How to build your own..?

1. this repo
2. Install all the dependencies
   ```bash
   npm i
   ```
3. Setup Firebase

   - Create Firebase account
   - Create a new project
   - Create a new firestore db
   - Create a web app for that
   - Copy your config from there

     - Select config option
     - Paste config keys inside src/fBase/fBase.js file

   - Setup authentication by Google and Email

4. Replace values in .env!! Exemple of `.env` file.

```env
REACT_APP_API_KEY = FIREBASE API KEY;
```

## Functionality

- Login by Google account
- Login by Email account
- User data editor
- Logout

## Contributing

Contributions are welcome! If you have any suggestions or improvements, please create a pull request. For major changes, please open an issue first to discuss the changes.

**_NOTE: PLEASE LET ME KNOW IF YOU DISCOVERED ANY BUG OR YOU HAVE ANY SUGGESTIONS_**

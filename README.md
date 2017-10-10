## Before You Begin
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). <br>

the Readable project is a post app that allows you to add, categorize, sort and update user posts. Also, this app includes a comments functionality to each post. This app uses a local API server provided by Udacity Course. <br>

Below you will find some information on how to perform common tasks.<br>

## Quick Install
The first thing you should do is install the Node.js dependencies. To install Node.js dependencies you're going to use npm, in the application folder run this in the command-line:

```
$ npm install
```

## Running the Application

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `npm test`

Launches the test runner in the interactive watch mode.<br>


### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!


### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Folder Structure

After creation, your project should look like this:

```
readable-project/
  README.md
  .gitignore
  package.json
  public/
    index.html
    favicon.ico
    manifest.json
  src/
    icons/
      add.svg
    actions/
      index.js
    components/
      App.js
      CategoryList.js
      CategoryView.js
      CommentControls.js
      CommentsList.js
      DefaultView.js
      GeneralPostControls.js
      LeftOrderOptions.js
      PostDetails.js
      PostDetailsControls.js
      PostForm.js
      PostFormUpdate.js
      PostsList.js
      PostsListCat.js
      RelatedComments.js
      RightDetailsOpstions.js
    reducers/
      index.js
    utils/
      ServerAPI.js
    App.css
    App.test.js
    index.css
    index.js

```

## Sending Feedback
Feel free to send any feedback to joaquin.aparicio@rulesware.com

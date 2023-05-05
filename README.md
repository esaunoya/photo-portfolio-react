# React Photo Portfolio

This is a photography portfolio web application built with React. The app displays galleries of images fetched from Contentful. The galleries can be navigated through a navigation bar, and the home page features a slideshow of randomly selected images from all galleries.

## Prerequisites

To run this project, you will need:

1. A Contentful account with a Space ID and an API Key (Content Delivery API).
2. Node.js installed on your local machine.

## Content Model

To set up the content model in your Contentful space, create a new content type with the following fields:

1. **Content Type Name**: Gallery
2. **Fields**:
   - `galleryTitle` (Text, Short Text)
   - `slug` (Text, Short Text)
   - `images` (Media, Many files)

Make sure to create entries for the Gallery content type, including a title, slug, and a set of images for each gallery.

After setting up the content model, the app will fetch data from your Contentful space and display the galleries accordingly.

## Setup

1. Clone the repository to your local machine.
2. Run `npm install` to install the required dependencies.
3. Create a `.env` file in the root of the project and add the following environment variable, replacing `your_space_id` and `your_content_delivery_api_key` with your actual Space ID and API Key from Contentful.:

```
REACT_APP_CONTENTFUL_API="https://cdn.contentful.com/spaces/your_space_id/entries?access_token=your_access_token"
```

4. Run `npm start` to start the development server. The app will be accessible at [http://localhost:3000](http://localhost:3000).


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

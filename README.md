# INTERN PROJECT

## Scripts

```sh
npm start
```

Runs the app in the development mode.\
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

```sh
npm build
```

Builds the app for production to the build folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Folder structure

public: public folder.\
src/api: include requests to the server.\
src/application: contains the pages in the application and the individual components of each page.\
src/components: contains components are shared by pages.\
src/baseUI: UI are shared by pages.\
src/router: contains routers in the app.\
src/store: contains store created by redux-toolkit.\
src/helper: functions, slices are shared by pages.

## Setup pre-commit

Run scripts:

```sh
npm install mrm mrm-task-lint-staged --save-dev
```

```sh
npx mrm lint-staged
```

```sh
npm uninstall mrm mrm-task-lint-staged
```

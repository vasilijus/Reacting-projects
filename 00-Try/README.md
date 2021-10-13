# Movie list App

Proj setup
- webpack
```
 npm i --save-dev webpack webpack-cli
```
will add environment running in package.json
"start": "webpack --mode development",
"build": "webpack --mode production",
Not to forget create - index.js

## Configuring webpack to work with React
 npm i react react-dom

 npm install --save-dev @babel/core @babel/preset-env @babel/presetreact babel-loader

Therefore, we should install the html-webpack-plugin package as a
devDependency:
 npm install --save-dev html-webpack-plugin

## Creating a dev server 
Instead of running each time - npm start , we make a server that wathces our changes
npm i --save-dev webpack-dev-server

particular versions 
npm install webpack@1.x --save-dev
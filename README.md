# Daisy - Rigsarkivet

## Basic

This project is running on node **v9.4.0**: https://nodejs.org/en/download/releases/

It's also using npm package manager **v5.6.0**: https://www.npmjs.com/package/npm/v/5.6.0

The entire project is built on **Bootstrap 4.3**: https://getbootstrap.com/docs/4.3/getting-started/introduction/

For all tables in the project it's using DataTables: https://datatables.net/

## Installation and running this Project

To get started - install all dependencies:

`npm install`

To start it use a local web server. You can install this package through npm that does the job: https://www.npmjs.com/package/http-server. To install open your terminal and type the following:

`npm install http-server -g`

and then when it's installed:

`http-server`

This creates a webserver on localhost:8080. You should now be able to see everything working.

Next if you want to make your css changing work in `custom.scss` you need to run the watch command. Open a new terminal window and type `npm run watch` inside the root folder to start watching for changes. It will then output a css file with everything to css/custom.css. All changes should be done through custom.scss - don't do it in the bootstrap component / css files. It will be a pain when you have to update bootstrap versions.

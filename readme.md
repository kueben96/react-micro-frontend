## Getting Started

Creating Micro Frontend Architecture with react

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

* node version v18.12.1

* npm
  ```sh
  npm install webpack@5.68.0 webpack-cli@4.10.0 webpack-dev-server@4.7.4 faker@5.1.0 html-webpack-plugin@5.5.0
  ```

### Tutorial:

- cd products
- npm run start -> build with webpack and makes npm modules usable 
- dist/main.js -> output of webpack / bundle

#### Create Webpack Dev Server
- makes webpack output easily available to the browser

#### Container application: 
- dependencies:

```sh
  npm install webpack@5.68.0 webpack-cli@4.10.0 webpack-dev-server@4.7.4 html-webpack-plugin@5.5.0 nodemon
  ```
 

## Module Federation

1. Designate one app as the host (CONTAINER) and one as the Remote (PRODUCTS)
2. In the Remote, decide which modules (files) you want to make available to other projects
3. Set up module federation plugin to expose those files
4. In the Host, decide which files you want to get from the remote
5. Set up Module Federation plugin to fetch those files
6. In the Host, refactor the entry point to load asynchronously
7. In the Host, import whatever files you need from the remote

### ModuleFederationPlugin 
#### for products
- remoteEntry.js; Contains a list of files that are available from this project + directions on how to load them 
- src_index.js: Version of src/index.js that can be safely loaded into the browser
- faker.js: Version of faker that can be safely loaded into the browser

#### for container
- index.js: allow webpack to get some additional javaScript code
- 
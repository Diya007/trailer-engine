# Trailer Engine

Full- functional trailer search App, built with React, Redux, Mongodb, Express, and Node.js.

## Directory layout

```
.
├── client      Client-side code
│   ├── assets  Images, videos, etc.
│   ├── js      JavaScript
│   └── scss    SASS stylesheets
├── server      Server-side code
└── test        Tests
    ├── client  Client tests
    └── server  Server tests
```

## Deployment

Requires the [Heroku CLI client](https://devcenter.heroku.com/articles/heroku-command-line).

### Setting up the project on Heroku

* Move into the project directory: `cd ~/YOUR_PROJECTS_DIRECTORY/YOUR_PROJECT_NAME`
* Create the Heroku app: `heroku create PROJECT_NAME`
* Instruct Heroku to install the development dependencies: `heroku config:set NPM_CONFIG_PRODUCTION=false`

### Deploying to Heroku

* Push your code to Heroku: `git push heroku master`



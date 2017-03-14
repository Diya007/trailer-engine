# Trailer Engine
Full- functional trailer searching App that allow people to search movie trailers, add to favorite list and play it. 

![screen shot 2017-02-24 at 8 49 33 am](https://cloud.githubusercontent.com/assets/17839996/23921270/3e244d94-08bb-11e7-82c4-94492d84ceb5.png)

![screen shot 2017-02-10 at 2 10 38 pm](https://cloud.githubusercontent.com/assets/17839996/23921315/79e8de94-08bb-11e7-9f19-bbd9fb0496a5.png)

# Technology #
### Front End
- HTML5
- CSS3
- React
- Redux
### Back End
- Node.js + Express.js (web server)
- MongoDB (database)
- Mongoose

# Directory layout

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

# Deployment
### Setting up the project on Heroku
* Move into the project directory: `cd ~/YOUR_PROJECTS_DIRECTORY/YOUR_PROJECT_NAME`
* Create the Heroku app: `heroku create PROJECT_NAME`
* Instruct Heroku to install the development dependencies: `heroku config:set NPM_CONFIG_PRODUCTION=false`

### Deploying to Heroku
* Push your code to Heroku: `git push heroku master`

# Getting started #
### Install
- git clone https://github.com/Diya007/trailer-engine.git
- cd trailer-engine
- npm install
## Launch ##
- npm run dev
- Then open localhost:8080 in a browser



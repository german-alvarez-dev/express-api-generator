# ExpressJS API boilerplate + auth

<img src="https://buttercms.com/static/images/tech_banners/webp/ExpressJS.b7bdb4190ea4.webp" alt="ExpressJS" width="500"/>

<hr>

ExpressJS API backend boilerplate including:
- **ODM**: Mongoose
- **Auth**: Login, signup, logout

Prepopulated with Express middlewares:
- **Logger**: morgan
- **HTTP POST Params**: body-parser
- **Cookies**: cookie-parser
- **Passport**: local strategy implemented

Facilities:
- Gitignore file
- Error handling

## Directory structure

````

express-generator/
├── app.js
├── package.json
├── .gitignoe
├── routes
│   │── index.js
│   └── auth.routes.js
├── models
│   └── user.model.js
├── utils
│   └── index.js
├── middlewares
│   └── index.js
├── config
│   │── db.config.js
│   │── debug.config.js
│   └── middleware.config.js
└── bin
    └── www

````

## Install

- Run `npm i` on the root directory

## Run

- Create a `.env` file on the root directory to link the MongoDB URI (`MONGODB_URI`) and port (`PORT`)
- Run `npm run dev` command on the root directory

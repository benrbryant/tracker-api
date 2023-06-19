# Tracker API

API powering Tracker Client applications.

## Getting Started

If you want to work on this project, you need to run through a few setup steps. Although I will only highlight them here, you can message [Ben Bryant](https://github/Bryantellius) for more information.

1. Fork and clone the project from Github
2. Install the project dependencies using npm or yarn
3. Create a `.env` file in your root directory, and copy the contents from `.env.template` into that file
4. Next, you will replace the environment variable values with real values. Part of this will include you having a MongoDB Atlas account. Then you will be able to:
   - create a new database for this project
   - locate your MongoDB connection string
   - locate your MongoDB user and password
5. For `BASE_URL` and `PORT`, just make sure they match. In development, they can be `http://localhost:8080` and `8080` respectively.
6. For `AUTH_SECRET`, this can be any string, but make sure it is at least 16 characters long for security purposes.
7. (Optional) Lastly, have [Postman](https://www.postman.com/downloads/) downloaded, and import the project collection located at `data/Express-Testing-All.postman_collection.json`

At this point you should be up and running for development! All contributions are welcome.

## Scripts

- `npm start` runs the Express application
- `npm run dev` runs the development server
- `npm run build` compiles the project using Babel
- `npm run test` runs the Jest test runner

## Resources

- [Express.js Docs](https://expressjs.com/)
- [MongoDB Docs](https://www.mongodb.com/docs/)
- [Mongoose Docs](https://mongoosejs.com/docs/)
- [Jest Docs](https://jestjs.io/docs/getting-started)
- [Passport.js Docs](https://www.passportjs.org/docs/)
- [Babel](https://babeljs.io/docs/)

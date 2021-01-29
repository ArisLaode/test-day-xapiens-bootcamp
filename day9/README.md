# Start The Project
## Step By Step
1. Clone this repository
2. Install dependencies
   1. Run `npm i --save` on terminal
   2. Run `npm i sequelize-cli faker --save-dev` on terminal
3. Set your environment file
   1. Copy `.env-example` file to `.env` by run this `cp .env-example .env` on terminal
   2. Change the credentials with yours
4. Create the database by run this `npx sequelize db:create` on terminal
5. Do migration and seeder to your database
   1. Run `npx sequelize-cli db:migrate` on terminal
   2. Run `npx sequelize-cli db:seed:all` on terminal
6. Run the server by type this `node app.js` on terminal
7. Available routes
   1. Get all users `/users`
   2. Get user by id `/users/1`
   3. Delete user `/users/1`
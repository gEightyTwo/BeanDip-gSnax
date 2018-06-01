This is the Backend for [BeanDip](https://github.com/gEightyTwo/BeanDip-gSnax-Front)

## Entity Relationship Diagram

![snacks ERD](./snacks_erd.jpg)


## Setup

```shell
npm install
```

Create the development database:

```shell
createdb snacks_dev
```

and run migrations and seeds:

```shell
npm run knex migrate:latest
npm run knex seed:run
```

Finally, start the server and check that you can GET the `/api/snacks` endpoint

```shell
npm run dev
```

## This Project was developed by
* Claudia Ligidakis [Github](https://github.com/claudialigidakis)
  * Setup the Backend routes and authorization
  * Responsible for CSS design and bootstrap framework
  * Hooked up the CRUD actions for every review
  * Changed content on the page as LocalStorage was created and updated
* Abe Queen [Github](https://github.com/abedababe8)
  * Implemented Redux and React-Bootstrap Components
  * Rendered Components based on Backend API data
  * Managed Redux store state and application state
  * Controlled all Modals and user sign-in/sign-up operations

# WhatShouldICook?

# Backend

## Intro

This is the backend of WhatShouldICook? web app. All the logic, filtering, sorting and validation are made by the backend. The endpoints require authentication when they change the database. Besides the requested data, the responses also send back the request status and a message.

**WhatShouldICook?** is a web app that helps people decide what to cook, finding recipes using ingredients they already have in the fridge or pantry. You can search by multiple ingredients and the first results are the ones with more matches. The user can also save recipes as favorites, rate the ones he already cooked, or even contribute to the community by posting his own recipes.

[Check it out the MVP version](https://whatshouldicook.netlify.app/)

## Technologies used

### Frontend:

- React
- Redux
- Axios

### Backend:

- Express
- REST
- Sequelize
- Postgres
- NodeJS

## Goals

The main goal of this project is to practice all technologies and tools learned in Codaisseur's Full Stack Javascript Academy and try to learn and use new technology by myself.
Supporting this goal I intend to:

- Create and Follow a doable plan.
- Have a wireframe of my MVP, considering future new features.
- Have a Database model of my MVP, considering future new features.
- Keeping constants and organized commits using Github.

## Endpoints

#### POST("recipe/"):
- Not require authentication
- The body must be a string with the ingredients separeted by comma.
- The response is an object with the following data:
- - a list of recipes with: title, id, imageUrl, ratings and number of matches. The array is sorted by number of matches.
- - the list of ingredients found
- - the list of ingredients requested

#### GET("recipe/:id"):
- Not require authentication
- The id must be the recipe id.
- The response is an object with the following data:
- - All recipe's data that matches the informed id.

#### POST("recipe/favorite"):
- Require authentication
- The body must be an object with userId and recipeId.
- The endpoint will check if the recipe is favorite and if yes, undo it, if not, favorite it.
- The endpoint don't allows a user favorite his own recipe.
- The response is an object with the following data:
- - A message, status and the recipe favorited/unfavorited.

#### PATCH("recipe/rating"):
- Require authentication
- The body must be an object with userId, recipeId and rating.
- The endpoint will check if the recipe is already rated by the user and if yes, update its rating, if not, create a new rating.
- The endpoint don't allows a user rate his own recipe.
- The response is an object with the following data:
- - A message, status and the recipe rated.

#### POST("recipe/createrecipe"):
- Require authentication
- The body must be an object with title, description, content, imageUrl, userId and ingredientList.
- The endpoint will create a new recipe with the date send.
- Then, the endpoint will create the ingredients if they are not in the database.
- The response is an object with the following data:
- - A message, status and the recipe created.

#### DELETE("recipe/delete"):
- Require authentication
- The body must be an object with userId and recipeId.
- The endpoint will check if the user owns the recipe and if yes, delete it.
- The response is an object with the following data:
- - A message and status.

#### GET("ingredients/all"):
- Not require authentication
- The response is an object with the following data:
- - A list with all ingredients in the database.

#### POST("user/login"):
- Require authentication
- The body must be an object with email and password.
- The endpoint will check if there is a user with the informed password.
- The response is an object with the following data:
- - All the user data, a token but not the password.

#### POST("user/signup"):
- Not require authentication
- The body must be an object with name, email and password.
- The endpoint will check if the user exists, if not, will create a new user
- The response is an object with the following data:
- - All the new user data, a token but not the password.

## Links

### MVP:
[Link to WhatShouldICook](https://whatshouldicook.netlify.app/)

### Wireframe:

[Link to Wireframe](https://wireframepro.mockflow.com/view/Mchp450YTmb)

### Database Model:

[Link to Database Model](https://lucid.app/lucidchart/01f1a08d-e93c-42db-b1b5-a4c8815e9a67/edit?viewport_loc=319%2C305%2C1650%2C683%2C0_0&invitationId=inv_96b4614e-6a4f-4322-b77a-7af921ba85bd)

### Project Board:

[Link to Kanban](https://github.com/users/giocapeli/projects/2)

### Backend repository:

[Link to Backend repository](https://github.com/giocapeli/Portfolio-Backend)

### Frontend repository:

[Link to Frontend repository](https://github.com/giocapeli/Portfolio-Frontend)

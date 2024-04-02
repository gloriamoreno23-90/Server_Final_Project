# Project - Meditation

## Description

This is a full-stack application that allows users to find meditation exercises. Users can create an account, log in, and add apps and exercises to their favorites. They can also add, edit, and delete them.

## Installation

1. Clone the repository

```bash
git clone
```

2. Install the dependencies

```bash
npm install
```

3. Create a .env file in the root folder and add the following environment variables:

```bash
PORT=3001
DB_URI=your_mongoDB_URI
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

4. Run the server to develop locally

```bash
npm run dev
```




# API Routes

## **Applications routes**:

| URL path                    | HTTP Method       | Response                          | Action                        |
| :--------------------------:|:-----------------:| :--------------------------------:| :----------------------------:|
| /api/applications/list       | GET               | [applications]                     | Get all applications     |
| /api/applications/getOne/:application_id            | GET               | {application}                | Get one Application     |
| /api/applications/create            | POST               | {createdApplication}                | Create Application      |
| /api/applications/edit/:application_id            | PUT               | {editedApplication}                | Edit one application     |
| /api/applications/delete/:application_id           | DELETE               | {msg: "Application successfully deleted!" }                | Delete one application     |


## **Exercises routes**:

| URL path                    | HTTP Method       | Response                          | Action                        |
| :--------------------------:|:-----------------:| :--------------------------------:| :----------------------------:|
| /api/exercises/list       | GET               | [exercises]                     | Get all exercises     |
| /api/exercises/getOne/:exercise_id            | GET               | {exercise}                | Get one Exercise     |
| /api/exercises/create            | POST               | {createdExercise}                | Create Exercise      |
| /api/exercises/edit/:exercise_id            | PUT               | {editedExercise}                | Edit one exercise    |
| /api/exercises/delete/:exercise_id           | DELETE               | {msg: "Exercise successfully deleted!" }                | Delete one exercise     |



## **User routes**:

| URL path                    | HTTP Method       | Response                          | Action                        |
| :--------------------------:|:-----------------:| :--------------------------------:| :----------------------------:|
| /api/users/getFavoriteApplications              | GET               | [applications]                         | Get logged user's favorite applications |
| /api/users/likeApplication/:application_id              | PUT               | {updatedUser}                           | Like Application |
| /api/users/dislikeApplication/:application_id              | PUT               | {updatedUser}                           | Dislike Application |

| /api/users/getFavoriteExercises              | GET               | [exercises]                         | Get logged user's favorite exercises |
| /api/users/likeExercise/:exercise_id              | PUT               | {updatedUser}                           | Like Exercise |
| /api/users/dislikeExercise/:exercise_id              | PUT               |{updatedUser}                         | Dislike Exercise |




## **Auth routes**:

| URL path                    | HTTP Method       | Response                          | Action                        |
| :--------------------------:|:-----------------:| :--------------------------------:| :----------------------------:|
| /api/auth/getLoggedUser     | GET               | {loggedUser}                            | Get Logged User             |
| /api/auth/signup            | POST              | {createdUser}    | Create a new user             |
| /api/auth/login             | POST              | {authToken}                       | Log user in             |

## **Upload routes**:

| URL path                    | HTTP Method       | Response                          | Action                        |
| :--------------------------:|:-----------------:| :--------------------------------:| :----------------------------:|
| /api/upload     | POST               | CLOUDINARY_LINK                            | Upload Image to Cloudinary
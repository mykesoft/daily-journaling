# Welcome to Daily Journaling!

The goal of this project is to create a web application [Node.js](https://nodejs.org/en), [Express.js](https://expressjs.com/), [node-postgres package](https://www.npmjs.com/package/pg), [EJS](https://ejs.co/) and [Bootstrap](https://getbootstrap.com/) for styling. The application will allow users to create and view Daily journaling pages. Posts will persist between sessions as a postreSQL database will be used in this version of the application.


# Features

1. **Page Create/Update:** Users should be able to edit current daily journaling page.

2. **Page Viewing:** The history page should allow the user to view all their journaling pages.

3. **Styling:** The application should be well-styled and responsive, ensuring a good user experience on both desktop and mobile devices.

## Technical Requirements

1. **Node.js & Express.js:** The application will be a web server built using Node.js and Express.js. Express.js will handle routing and middleware.

2. **EJS:** EJS will be used as the templating engine to generate dynamic HTML based on the application's state.


## Steps

**Planning**
- Gather content and design ideas, create wireframes with [Balsamiq wireframes](https://balsamiq.com/). Plan out how the application will work, which routes might be necessary and which pages need to be made.
 
**Setup**
- Set up the project repository, initialize the Node.js application, and install necessary dependencies (Express.js, EJS).

- Create the application structure, including routes, views, and static files.

- Set up the Express.js server and define the necessary routes.
 
**Implementing Features**
- Implement the page create/edit feature. This includes creating the form on the daily journaling page and handling the form submission in the server.

- Implement the pages viewing feature. This includes displaying all the pages on the history page.

- Implement the delete feature. This allows the user to click a button and remove the page from the history page.

- Test the application to ensure that post creation and viewing are working correctly.
 
 **Styling and Polishing**
- Style the application. This includes creating a CSS file, linking it to your EJS templates, and writing CSS or using Bootstrap/Flexbox/Grid to style the application.

- Test the application on different devices and browsers to ensure the styling works correctly.

- Fix any bugs or issues that came up during testing.

# Planning

## Logo
<img src="https://raw.githubusercontent.com/mykesoft/daily-journaling/main/assets/icon-logo/noun-journaling-5330031.png" width="320px" alt="Logo: journaling">

## Home page miniature
![Home page miniature](https://raw.githubusercontent.com/mykesoft/daily-journaling/main/assets/icon-logo/white-logo-daily-journaling.png "Title")

These are the following paths and wireframes.

## /home

Contains 2 buttons: "**Write daily page**" and "**See your history**"

![Screenshot](https://raw.githubusercontent.com/mykesoft/daily-journaling/main/assets/wireframes/home.png?raw=true "Title")

## /daily-page

It is made up by the current day on the top-right and a **text box** where to write.

![Screenshot](https://raw.githubusercontent.com/mykesoft/daily-journaling/main/assets/wireframes/daily-page.png?raw=true "Title")

## /history

Preview **all journaling pages** with pagination.

![Screenshot](https://raw.githubusercontent.com/mykesoft/daily-journaling/main/assets/wireframes/history.png?raw=true "Title")

## /page?id=ID

Preview the selected Page inside text box (if page isn't today, the write option is disabled).

![Screenshot](https://raw.githubusercontent.com/mykesoft/daily-journaling/main/assets/wireframes/page-id.png?raw=true "Title")
 
## /search

It opens when a search is made.

![Screenshot](https://raw.githubusercontent.com/mykesoft/daily-journaling/main/assets/wireframes/search.png?raw=true "Title")

## /about

Somthing about the usefulness of this website.

![Screenshot](https://raw.githubusercontent.com/mykesoft/daily-journaling/main/assets/wireframes/about.png?raw=true "Title")


# Future implementations

- Export/Import Articles

- User Login

- Syncronization

- [Dockerization](https://www.docker.com/)

- Implementation of [Kubernets](https://kubernetes.io/)
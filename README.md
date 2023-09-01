# The Tech Blog

## Description

The Tech Blog is a CMS-style blog site that allows a user to sign up/login, post their own blog post, make comments on other people's post, update and/or delete their own blog post, and logout.

It is made in the MVC software design pattern, where the Model is handled by MySQL2 and Sequelize, the View is handled by Handlebars.js, and the Controllers is built with Express.js and Node.js.

There are also several backend additional packages added including express-sessions which allows for a user's login session to be stored as a cookie on the client side, along with bcrypt that allows for the user's login password to be hashed for security within the database. 

## Table of Contents
  - [Usage](#usage)
  - [License](#license)
  - [Questions](#questions)

## Usage

To access the website, please go to  [The Tech Blog](https://am-tech-blog-7b700eeeb546.herokuapp.com/).

Once there, you will be able to see the current blog posts and who they are created by: 

![Screenshot of tech blog homepage with current blog post]()

If you try to access any of the postings or the Dashboard from the navbar you will be directed to login first. If you have not logged in before, you may sign up with a username and password.

![Screenshot of tech blog login and signup page]()

Once you have logged in, you will be directed to your personal Dashboard which will show if you have any post published and a button to create a new post.

![Screenshot of tech blog dashboard page]()

Creating a new post will allow that post to appear not only in the individual's dashboard but also on the homepage.
![Screenshot of tech blog create post page]()

You may also return back to the Home page and access an existing post by selecting the post title and then add a comment to the post.

![Screenshot of tech blog individual post page with add comment form showing]()

Back on your Dashboard if you have an existing post you may go in and update or delete that posting.

![Screenshot of tech blog ]()

## License

This project is licensed under MIT. Please check LICENSE document in repository for more information.

## Questions

If you have any questions, feel free to reach me at [GitHub](https://github.com/Annie-McElroy) or via email at [annie.mcelroy8522@gmail.com](annie.mcelroy8522@gmail.com).


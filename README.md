### Home Page for Ravi Gyani

This page uses a Next.js project and hosting it on GitHub pages. It covers:
* Using next export to convert the Next.js project to a static website.
* Building a Travis pipeline to build the website and push it to a gh-pages branch.


### Overview of technologies

#### GitHub Pages

GitHub Pages is a static site hosting service that takes HTML, CSS, and JavaScript files straight from a repository on GitHub optionally runs the files through a build process and publishes a website.

#### Travis
Travis CI is a hosted continuous integration service used to build and test software projects hosted at GitHub and Bitbucket.

It’s free for open-source projects and integrates automatically with Github. All you need to do is sign up and add a .travis.yml file and it’s ready to go.


#### Next.js export

next export allows you to export your app to static HTML, which can be run standalone without the need of a Node.js server.

It generates the HTML into an out directory. From there you can use tools such as serve to run your app.

Now that the technologies used in this blog have been introduced, let's deploy our Next.js app to GitHub Pages.
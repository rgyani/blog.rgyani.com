### Home Page for Ravi Gyani

This page uses a Next.js project and hosting it on GitHub pages. It covers:
* Using next export to convert the Next.js project to a static website.
* Using Github Actions to build the project and push changes to a branch, from which the site is rendered


### Overview of technologies

#### GitHub Pages

GitHub Pages is a static site hosting service that takes HTML, CSS, and JavaScript files straight from a repository on GitHub optionally runs the files through a build process and publishes a website.


#### Next.js export

next export allows you to export your app to static HTML, which can be run standalone without the need of a Node.js server.

It generates the HTML into an out directory. From there you can use tools such as serve to run your app.

Now that the technologies used in this blog have been introduced, let's deploy our Next.js app to GitHub Pages.

### GitHub Actions 

GitHub Actions is a powerful way to automate workflows based on events from your GitHub repository, such as new commits or PRs. It started with a public beta in 2018, with general CI/CD functionality being released to general public in 2019.

As of today, it is very powerful and flexible. It is based on Docker and makes it easy to create your own actions, with an interesting marketplace of community provided actions available.


## Basic script sequence
Any script to build a static site and publish it to GitHub Pages will contain at least the following steps:

* Check out the branch with your source files
* Install the dependencies necessary to generate the static HTML/JS/CSS files.
* Generate the static HTML/JS/CSS files from your source files. These files will be generated to an output folder
* Push/copy the generated files to the publishing source of your GitHub Pages site, replacing any prior files you might have. More about publishing sources this in a minute!

## Getting started with GitHub Actions
If you open your repo in the GitHub website, you will see an Actions tab. When you navigate to this tab, you will be greeted with a page that lets you start from some preconfigured workflows or to create your own.

We can see this workflow:

* Is defined by a YAML file located inside the .github/workflows directory of your repo.
* It is triggered by one or more events of your repo, such as new commits or new PRs
* Has a number of jobs that can run either in parallel or in sequence. Each job starts on a fresh instance and does not share state! (unless you push that state somewhere yourself)
* Each job has a number of steps. These are the individual tasks where you run either bash commands or actions.

The concept of action is very interesting. It lets anyone encapsulate a common task so it can be easily used by any workflow. For example, there are actions for checking out your code, for publishing a library to NPM or for pushing changes back to your repo. While some are officially maintained by GitHub, many are community-driven!

## Everything together
* The source is self explanatory and can be found under ./github/workflows/node.js.yml
* Also, I had to add a .nojekyll file, as we need to completely bypass Jekyll processing on GitHub Pages
* in the next.config.js, I had to add a assetPrefix: './' This is a [known issue/feature](https://nextjs.org/docs/api-reference/next.config.js/cdn-support-with-asset-prefix) with nextjs


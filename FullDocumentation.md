# Who's Fake News Capstone Project - Full Documentation

## Table of Contents

1. [In-progress Updates](#in-progress-updates)  
2. [Research for the Project](#research-for-the-project)  
3. [Tools Used Throughout the Process](#tools-used-throughout-the-process) 
4. [Tutorials Found](#tutorials-found)
5. [Website Creation](#website-creation)  
    4.1. [Website Dependencies Added](#website-dependencies-added)  
    4.2. [Website Accessibility Measures Taken](#website-accessibility-measures-taken)  
    4.3. [Website Design Techniques Used to Get People to Interact](#website-design-techniques-used-to-get-people-to-interact)  
    4.4. [How React Components and Naming Conventions were used](#how-react-components-and-naming-conventions-were-used)  
6. [Extension Creation](#extension-creation)  
    <!-- 5.1. [Extension Dependencies Needed](#extension-dependencies-needed)  
    5.2. [Extension Accessibility Measures Taken](#extension-accessibility-measures-taken)  
    5.3. [Extension Design Techniques Used to Get People to Interact](#extension-design-techniques-used-to-get-people-to-interact)   -->
7. [Backend Creation](#backend-creation)  
    <!-- 6.1. [Backend Dependencies Needed](#backend-dependencies-needed)  
    6.2. [Software Used for Backend](#software-used-for-backend)  
    6.3. [Data Sets Used for Partial Functionality](#data-sets-used-for-partial-functionality) -->
8. [Future Work](#future-work)  
9. [Issues during Process with Solutions if available](#issues-during-process-with-solutions-if-available)  
    9.1. [Machine Learning Issues](#machine-learning-issues)  
    9.2. [Website Issues](#website-issues)  
    9.3. [Extension Issues](#extension-issues)  
    9.4. [Backend Issues](#backend-issues)
  
--------
## In-progress Updates

*Last Updated 5/5/2020*

Here's my current project progress in video form: https://youtu.be/7LlGvHPOp20.

Next goal is to hard code data to populate the website by using server calls and create an extension.


## Research for the Project

At this time, the research for this project can be seen in my final paper [here](https://portfolios.cs.earlham.edu/index.php/2020/05/05/capstone-paper-a-functional-and-scale-able-user-platform-for-automatic-fake-news-detection/).   
You can also view my poster created for this project [here](https://portfolios.cs.earlham.edu/index.php/2020/05/05/capstone-poster-whos-fake-news/).

## Tools Used Throughout the Process

### postgreSQL for Windows
* Downloaded from https://www.postgresql.org/download/  
* to set up a path for postgreSQL: https://sqlbackupandftp.com/blog/setting-windows-path-for-postgres-tools  
    * I only got PSQL command to work on windows cmd and not in the wsl (windows subsystem for linux)

### Ways to check the accessibility of the website
* https://accessibility.psu.edu/testing/testingtools/wave/
    * Chrome extension 

* https://www.equalweb.com
    * This provides code to add accessibility services to the website itself
    * Not responsive
    * Not customizable as far as I can find
    * Going to try and find alternatives

* https://www.mediacurrent.com/blog/5-website-accessibility-checkers/
    * Website with a list of tools that are detailed below

* https://khan.github.io/tota11y/
    * A small button at bottom of website that will highlight issues of accessibility to the website
    * Going to install it (https://github.com/Khan/tota11y)
    * ```npm install @khanacademy/tota11y```
    * Put <script src="tota11y.min.js"></script> before the end of body tag (</body>) in index file
    * *Not working. No button showing up on the site*

* https://www.deque.com/axe/
    * Chrome extension that adds section in developer tools to analyze the webpage

* https://www.powermapper.com/products/sortsite/checks/accessibility-checks/
    * Good to use when the website is actually deployed

* https://pa11y.org
    * Good to use when website is done to track the accessibility of the website over time and get accessibility data

### Tools to test the readability of the conent

* https://app.readable.com/text/?demo

* http://www.hemingwayapp.com

### Tools to help translate react apps into different languages

* https://www.npmjs.com/package/react-translate  
    * React library to work with
* https://github.com/i18next/react-i18next & https://react.i18next.com  
    * react-i18next is a powerful internationalization framework for React / React Native which is based on i18next.

### Tools to check color constrast

* https://contrastchecker.com  

* https://webaim.org/resources/contrastchecker/

* https://coolors.co/contrast-checker  

* https://toolness.github.io/accessible-color-matrix/?n=white&n=light&n=bright&n=medium&n=nav%20black&n=black&v=FFFBFC&v=CCDBDC&v=CFEAED&v=A93F55&v=343A40&v=000000
    * Allows you to put in 6 colors and tells you the Accessible color combinations for each of the colors

### Tools to create color palettes

* https://medium.com/@NateBaldwin/leonardo-an-open-source-contrast-based-color-generator-92d61b6521d2
    * Describes leonardcolor.io and what it does and all the features
    * https://leonardocolor.io/?colorKeys=%236fa7ff&base=ffffff&ratios=3%2C4.5&mode=CAM02 
        * This is the actual tool

* https://coolors.co
    * Good way to create palettes automatically
    * Can lock certain colors and generate others that go well with them
    * Have options to see how the palette looks to people with certain types of color blindness
    * It also has a color contrast checker but it is not as detailed
    * You can export the palette to a pdf or png or other forms and on the pdf it has details of all the HEX codes or rgb and other things as well as different shades for each color in the palette

### Tools for place holder images
* https://loremipsum.io/21-of-the-best-placeholder-image-generators/
* https://fakeimg.pl


## Tutorials Found

### Tutorials about connecting react app with a backend:
* [Getting started with postgres in your react app](https://blog.logrocket.com/getting-started-with-postgres-in-your-react-app/ )

* [Fullstack react blog app with express and psql](https://www.freecodecamp.org/news/fullstack-react-blog-app-with-express-and-psql/ )

* [Creat a nodejs express application with express genereator](https://medium.com/@miarirabs/create-a-nodejs-express-application-with-express-generator-d3c32ac564b2)
  
* [More detail about Express](https://expressjs.com/en/starter/generator.html)

* [Udemy course - React fullstack with node, express, psql, and aws](https://www.udemy.com/course/react-fullstack-with-nodeexpress-psql-and-aws/learn/lecture/16146113#overview)

* [ReactJS and PostgreSQL: Fullstack Application](https://www.youtube.com/watch?v=2oAS7MtMwqA)

* [React and Express Starter Pack for Fullstack development](https://www.youtube.com/watch?v=v0t42xBIYIs)

### Tutorials on how to translate react websites

* https://www.codeandweb.com/babeledit/tutorials/how-to-translate-your-react-app-with-react-i18next

* https://www.codeandweb.com/babeledit/tutorials/how-to-translate-your-react-app-with-react-intl

* https://www.freecodecamp.org/news/setting-up-internationalization-in-react-from-start-to-finish-6cb94a7af725/

* https://dev.to/ksushiva/how-to-translate-your-react-js-app-with-i18next-12mn

* https://react.i18next.com/latest/using-with-hooks  

### Tutorials on Sci-kit learn for the future machine learning aspect

* https://scikit-learn.org/stable/tutorial/index.html
* https://www.datacamp.com/community/tutorials/machine-learning-python



## Website Creation
I started with a react template instead of starting from scratch so that I could quickly get my bearings since I only had 1 month to get this part up and running. I've put information about the template I used below.

#### React, React Router, Redux, and Redux Thunk boilerplate
* Tutorial: [Getting started with create-react-app, Redux, React Router & Redux Thunk](https://medium.com/@notrab/getting-started-with-create-react-app-redux-react-router-redux-thunk-d6a19259f71f)
* [Demo](https://create-react-app-redux.now.sh)
* Installation:  
    * ```bash
        git clone https://github.com/notrab/create-react-app-redux.git
        cd create-react-app-redux
        yarn
        ```
* [Link to fixes I needed to make to the template](#react-boilerplate-issues) 

### Website Dependencies Added

Here's a list of dependencies I added throughout this project.

* ```npm install``` and ```yarn install```
    * adds all the node packages needed
    * needs to be run in all three folders if you want to use them. 
        * if you just want the client folder, you don't need to run it in the server or parent folder
        * you just have to be sure that you run the start command in the right place
        * you can see what commands you can run with ``npm`` or ```yarn``` by looking at the package.json file and looking at the area that says "scripts"
            * underneath there are commands in "" and are usually blue followed by a colon with what it does in "" and usually orange

* Bit
    * ```npm install bit-bin --global```
    * "Bit is an open-source cli tool for collaborating on isolated components across projects and repositories." 
    * "Use Bit to distribute discrete components from a design library or a project into a standalone reusable package and utilize it across applications."
    * [Info about Bit from npmjs](https://www.npmjs.com/package/bit-bin)
    * [Bit Documentation](https://docs.bit.dev/docs/quick-start)
    * I will use this more in the future to make sure my code is resuable.
* React-Bootstrap
    * ```npm install react-bootstrap bootstrap```
    * UI component library
    * "React-Bootstrap replaces the Bootstrap JavaScript. Each component has been built from scratch as a true React component, without unneeded dependencies like jQuery."
    * [Info on React-Bootstrap](https://react-bootstrap.netlify.app)
* React Icons 
    * ```npm install react-icons --save```
    * "Include popular icons in your React projects easly with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using."
    * [Info on React Icons](https://react-icons.netlify.com/#/)
* Semenatic UI React
    * ```yarn add semantic-ui-react```
    * add this link to the <head> of your index.html file.
        *     <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
    * "Semantic UI React provides React components while Semantic UI provides themes as CSS stylesheets. Install the React components and choose a theme that suits your needs."
    * [More information on Semenatic UI](https://react.semantic-ui.com/usage/)
* Filepond for React
    * ```npm install filepond react-filepond --save```
    * ```npm i filepond-plugin-file-validate-type --save```
    * More info in the Uploading files section under Info about React Components or Libraries
    * There are some issues with filepond accepting certain file types


### Website Accessibility Measures Taken

* Made sure all of my content was at 5th grade reading level

* Made sure all the colors on my website have the proper contrast ratio in accordance with the Web Content Accessibility Guidelines

* Made sure every page is responsive and will scale well for mobile and tablet devices as well as laptops

* Made sure important info was put at the top of the page and that I follow common design practices
    * This ensures that people will know exactly what they need to do without scrolling and that people who may have some impairment can reasonably find key things like the Nav bar and the Home link without much searching.

* Made sure that the relative paths to the pages are simple and make sense so that users can find pages more simply if they can't use the links.

* Made sure the color palette would be okay for people with color blindness
    * https://usabilla.com/blog/how-to-design-for-color-blindness/
        * Article about how to design for color blindness


* Created FAQ, Tutorial, Similar Services, and Feedback pages for the website

* Made sure every image has alt texts that matches the image

* Creating documentation about every step of the process
    * [More info about documenation types and best practices](https://blog.prototypr.io/software-documentation-types-and-best-practices-1726ca595c7f)

### Website Design Techniques Used to Get People to Interact

#### References for how to design homepages:

* https://www.crazyegg.com/blog/homepage-design/

* https://www.websitebuilderexpert.com/designing-websites/awesome-home-page-design-layouts/


<!-- ### How React Components and Naming Conventions were used -->

### Info about React Components or Libraries

#### Info about what Hooks are for React

* https://reactjs.org/docs/hooks-intro.html  
* https://upmostly.com/tutorials/react-hooks-simple-introduction 

#### Info on Scrolling
* https://www.digitalocean.com/community/tutorials/how-to-implement-smooth-scrolling-in-react
    * Uses react-scroll
* https://codesandbox.io/s/3zznv27l5
    * React-scroll code example

#### Info on Forms:
* https://medium.com/@agoiabeladeyemi/the-complete-guide-to-forms-in-react-d2ba93f32825
    * "Forms are very useful in any web application. Unlike angular and angularjs, that gives form validation out of the box. You have to handle forms yourself in React. This brought about many complications like how to get form values, how do I manage form state, how do I validate my form on the fly and show validation messages. There are different methods and libraries out there to help with this but if you are like me that hates dependent on too many libraries, welcome on board, We are going to bootstrap our own form from the ground up."
* https://github.com/upmostly/custom-react-hooks-form-validation
* https://github.com/upmostly/custom-react-hooks-forms

#### Possible react component for footers
* https://mdbootstrap.com/docs/react/navigation/footer/#docsTabsOverview    

#### Info on Uploading files in React

* https://github.com/pqina/filepond 
    * A JavaScript library that can upload anything you throw at it, optimizes images for faster uploads, and offers a great, accessible, silky smooth user experience.
    * https://github.com/pqina/react-filepond - react version of filepond
    * https://itnext.io/uploading-files-with-react-and-filepond-f8a798308557  - tutorial on linking filepond with react app
    * https://pqina.nl/filepond/#profile-picture-code
    * https://pqina.nl/filepond/docs/
* https://malcoded.com/posts/react-file-upload/ 
    * very detailed so might be better than the first one but maybe the first one is easier to implement
* https://upmostly.com/tutorials/react-dropzone-file-uploads-react  - good tutorial 
    * https://upmostly.com/tutorials/upload-a-file-from-a-react-component
* https://www.telerik.com/kendo-react-ui/components/upload/  - good but you have to pay
* https://www.syncfusion.com/react-ui-components/react-file-upload  - good but you have to pay
* List of file types in the MIME style
    * https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types

#### Info on Filtering

* https://upmostly.com/tutorials/react-filter-filtering-arrays-in-react-with-examples
    * Describes the .filter() thing that react has and how it can be used on arrays of things
    * I will probably need a state for filtered data and reference that filtered data when rendering the component
        * Have a dropdown for what you can filter by at first and on click have it to the .filter()
* https://www.npmjs.com/package/react-filter-search
* https://gist.github.com/rogeliog/9455a6ad460361aa9a68fbe7657c4ee0
* https://medium.com/@AndrewBonner2/filter-results-with-react-f746dc7984c
* https://moduscreate.com/blog/ext-js-to-react-load-sort-and-filter-data-with-react/
* https://www.npmjs.com/package/react-filter-search
* https://github.com/joehdodd/react-filter-search

#### Small delete buttons for things like filters

Using <Chip /> from Material UI
* ```npm install @material-ui/core```
* add this link to the ```<head>``` component of the index.html file
```<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />```
* ```npm install @material-ui/icons --save``` or ```yarn add @material-ui/icons```




#### React Component Libraries

I found a lot of these libraries from https://blog.logrocket.com/top-10-react-component-libraries-for-2020/ 

* https://ant.design/components/button/  
* https://material-ui.com/getting-started/installation/
* https://blueprintjs.com/docs/
* https://react.semantic-ui.com
* https://rebassjs.org/getting-started
* https://developer.microsoft.com/en-us/fluentui#/get-started
* https://evergreen.segment.com/components/
* https://chakra-ui.com/getting-started
* https://v2.grommet.io/components 


### Info on CSS things:

* https://css-tricks.com/snippets/css/a-guide-to-flexbox/
    * Use flexbox as a really main thing to be able to contain things and make it responsive and move it to be where I want it on the page
* I have other links in my bookmarks folder that talk about how media queries work and how I combine that to make things responsive
    * I'll update the documentation with those bookmarks later
* !important tag
    * Using the !important tag before the semicolon of css entries fixed the issue of the media queries not overriding correctly at those widths
        * Adding !important tag to the tablet media query as well as the mobile media query did not work
        * https://css-tricks.com/when-using-important-is-the-right-choice/
* fit-content() property
    * Used min-height: fit-content(__%) for the getting started content and it seems to have fixed the weird overlap that was happening
    * https://www.geeksforgeeks.org/css-fit-content-property/
* Styling Images
    * https://www.w3schools.com/css/css3_images.asp  
    * I don't have much pictures now, but I hope to create more graphics to add in the future.
* Scrolling for a certain div/element
    * https://www.w3schools.com/cssref/pr_pos_overflow.asp






## Extension Creation

### Info on Extensions:
* https://www.freecodecamp.org/news/how-to-create-and-publish-a-chrome-extension-in-20-minutes-6dc8395d7153/
* https://davidwalsh.name/web-extensions
* https://developer.chrome.com/extensions/getstarted

*More coming soon.*

<!-- 
### Extension Dependencies Needed

### Extension Accessibility Measures Taken

### Extension Design Techniques Used to Get People to Interact -->

## Backend Creation

Coming soon.

<!-- ### Backend Dependencies Needed

### Software Used for Backend

#### PostgreSQL Database

### Data Sets Used for Partial Functionality

**In the future this data sets will be used for the machine learning training** -->

## Future Work

## Issues during Process with Solutions if available

### Machine Learning Issues

Coming soon.

### Website Issues

#### Issues with the boilerplate
* Need to fix router situation by adding a <Router> tag around the <Route> tags and by importing BrowserRouter as Router from react-router-dom
* [Where I found the solution to the issue](https://stackoverflow.com/questions/34607841/react-router-nav-bar-example)
* More details of what exactly I’ve done can be seen through my github commits

#### Parsing error: Cannot find module '@babel/helper-validator-identifier'
This was the error I got:

./src/index.js  
 Line 0:  Parsing error: Cannot find module '@babel/helper-validator-identifier'

 I fixed it by installing this:
 ```npm install --save-dev @babel/helper-validator-identifier```

 #### Issues with Filepond
1. It is not accepting .doc or .docx even though I have the right format and MIME type  
    * At first using ‘application/* doc’ to be about to upload msword docs worked
    * https://www.mediawiki.org/wiki/Manual:MIME_type_detection  - this is what helped me figure that out
    * But the issue resurfaced and ‘application/* doc’ no longer works for pdfs or msword docs
2. Can’t copy and paste a url into the file pond area 
    * So I’m going to need to have a separate form input for urls

#### Broken Aria Reference
* https://stackoverflow.com/questions/59633637/how-to-fix-a-broken-aria-reference  

I basically had to remove the labeledby reference point because it wasn't pointing to any other component.


### Extension Issues

Coming Soon

### Backend Issues

Coming Soon




const { Category } = require('../models');

const categoryData = [
  {
    name: 'CSS',
    description: `Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.
    
    CSS is among the core languages of the open web and is standardized across Web browsers according to W3C specifications. Previously, development of various parts of CSS specification was done synchronously, which allowed versioning of the latest recommendations. You might have heard about CSS1, CSS2.1, CSS3. However, CSS4 has never become an official version.
    
    From CSS3, the scope of the specification increased significantly and the progress on different CSS modules started to differ so much, that it became more effective to develop and release recommendations separately per module. Instead of versioning the CSS specification, W3C now periodically takes a snapshot of the latest stable state of the CSS specification.`
  },
  {
    name: 'Express.js',
    description: `Express is the most popular Node web framework, and is the underlying library for a number of other popular Node web frameworks. It provides mechanisms to:
    
    Write handlers for requests with different HTTP verbs at different URL paths (routes).
    Integrate with "view" rendering engines in order to generate responses by inserting data into templates.
    Set common web application settings like the port to use for connecting, and the location of templates that are used for rendering the response.
    Add additional request processing "middleware" at any point within the request handling pipeline.
    While Express itself is fairly minimalist, developers have created compatible middleware packages to address almost any web development problem. There are libraries to work with cookies, sessions, user logins, URL parameters, POST data, security headers, and many more. You can find a list of middleware packages maintained by the Express team at Express Middleware (along with a list of some popular 3rd party packages).
    
    Note: This flexibility is a double edged sword. There are middleware packages to address almost any problem or requirement, but working out the right packages to use can sometimes be a challenge. There is also no "right way" to structure an application, and many examples you might find on the Internet are not optimal, or only show a small part of what you need to do in order to develop a web application.`
  },
  {
    name: 'HTML',
    description: `HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. Other technologies besides HTML are generally used to describe a web page's appearance/presentation (CSS) or functionality/behavior (JavaScript).
    
    "Hypertext" refers to links that connect web pages to one another, either within a single website or between websites. Links are a fundamental aspect of the Web. By uploading content to the Internet and linking it to pages created by other people, you become an active participant in the World Wide Web.
    
    HTML uses "markup" to annotate text, images, and other content for display in a Web browser. HTML markup includes special "elements" such as <head>, <title>, <body>, <header>, <footer>, <article>, <section>, <p>, <div>, <span>, <img>, <aside>, <audio>, <canvas>, <datalist>, <details>, <embed>, <nav>, <output>, <progress>, <video>, <ul>, <ol>, <li> and many others.
    
    An HTML element is set off from other text in a document by "tags", which consist of the element name surrounded by "<" and ">".  The name of an element inside a tag is case insensitive. That is, it can be written in uppercase, lowercase, or a mixture. For example, the <title> tag can be written as <Title>, <TITLE>, or in any other way.`
  },
  {
    name: 'MVC',
    description: `MVC (Model-View-Controller) is a pattern in software design commonly used to implement user interfaces, data, and controlling logic. It emphasizes a separation between the software’s business logic and display. This "separation of concerns" provides for a better division of labor and improved maintenance. Some other design patterns are based on MVC, such as MVVM (Model-View-Viewmodel), MVP (Model-View-Presenter), and MVW (Model-View-Whatever).
    
    The three parts of the MVC software-design pattern can be described as follows:
    
    Model: Manages data and business logic.
    View: Handles layout and display.
    Controller: Routes commands to the model and view parts.
    The View
    The view defines how the app's data should be displayed.

    In our shopping list app, the view would define how the list is presented to the user, and receive the data to display from the model.

    The Controller
    The controller contains logic that updates the model and/or view in response to input from the users of the app.

    So for example, our shopping list could have input forms and buttons that allow us to add or delete items. These actions require the model to be updated, so the input is sent to the controller, which then manipulates the model as appropriate, which then sends updated data to the view.

    You might however also want to just update the view to display the data in a different format, e.g., change the item order to alphabetical, or lowest to highest price. In this case the controller could handle this directly without needing to update the model.`
  },
  {
    name: 'Node.js',
    description: `Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm,[6] unifying web-application development around a single programming language, rather than different languages for server-side and client-side scripts.

    Though .js is the standard filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[7]
    
    The Node.js distributed development project was previously governed by the Node.js Foundation,[8] and has now merged with the JS Foundation to form the OpenJS Foundation, which is facilitated by the Linux Foundation's Collaborative Projects program.`
  },
  {
    name: 'SQL',
    description: `SQL (S-Q-L,[4] /ˈsiːkwəl/ "sequel"; Structured Query Language)[5] is a domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS), or for stream processing in a relational data stream management system (RDSMS). It is particularly useful in handling structured data, i.e. data incorporating relations among entities and variables.

    SQL offers two main advantages over older read–write APIs such as ISAM or VSAM. Firstly, it introduced the concept of accessing many records with one single command. Secondly, it eliminates the need to specify how to reach a record, e.g. with or without an index.
    
    Originally based upon relational algebra and tuple relational calculus, SQL consists of many types of statements,[6] which may be informally classed as sublanguages, commonly: a data query language (DQL),[a] a data definition language (DDL),[b] a data control language (DCL), and a data manipulation language (DML).[c][7] The scope of SQL includes data query, data manipulation (insert, update and delete), data definition (schema creation and modification), and data access control. Although SQL is essentially a declarative language (4GL), it also includes procedural elements.
    
    SQL was one of the first commercial languages to use Edgar F. Codd’s relational model. The model was described in his influential 1970 paper, "A Relational Model of Data for Large Shared Data Banks".[8] Despite not entirely adhering to the relational model as described by Codd, it became the most widely used database language.[9][10]
    
    SQL became a standard of the American National Standards Institute (ANSI) in 1986, and of the International Organization for Standardization (ISO) in 1987.[11] Since then, the standard has been revised to include a larger set of features. Despite the existence of standards, most SQL code requires at least some changes before being ported to different database systems.`
  },
  {
    name: 'API',
    description: `An API (Application Programming Interface) is a set of features and rules that exist inside a software program (the application) enabling interaction with it through software - as opposed to a human user interface. The API can be seen as a simple contract (the interface) between the application offering it and other items, such as third party software or hardware.
    
    In Web development, an API is generally a set of code features (e.g. methods, properties, events, and URLs) that a developer can use in their apps for interacting with components of a user's web browser, or other software/hardware on the user's computer, or third party websites and services.
    
    For example:
    
    The getUserMedia API can be used to grab audio and video from a user's webcam, which can then be used in any way the developer likes, for example, recording video and audio, broadcasting it to another user in a conference call, or capturing image stills from the video.
    The Geolocation API can be used to retrieve location information from whatever service the user has available on their device (e.g. GPS), which can then be used in conjunction with the Google Maps APIs to for example plot the user's location on a custom map and show them what tourist attractions are in their area.
    The Twitter APIs can be used to retrieve data from a user's twitter accounts, for example, to display their latest tweets on a web page.
    The Web Animations API can be used to animate parts of a web page — for example, to make images move around or rotate.`
  },
  {
    name: 'JavaScript',
    description: `JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles. Read more about JavaScript.
    
    This section is dedicated to the JavaScript language itself, and not the parts that are specific to Web pages or other host environments. For information about API specifics to Web pages, please see Web APIs and DOM.
    
    The standards for JavaScript are the ECMAScript Language Specification (ECMA-262) and the ECMAScript Internationalization API specification (ECMA-402). The JavaScript documentation throughout MDN is based on the latest draft versions of ECMA-262 and ECMA-402. And in cases where some proposals for new ECMAScript features have already been implemented in browsers, documentation and examples in MDN articles may use some of those new features.
    
    Do not confuse JavaScript with the Java programming language. Both "Java" and "JavaScript" are trademarks or registered trademarks of Oracle in the U.S. and other countries. However, the two programming languages have very different syntax, semantics, and use.`
  },
  {
    name: 'ORM',
    description: `A database is essential to any application that collects data. Larger applications typically collect more data—making data management more complex. For example, we might have to compare data across databases, migrate an app's existing database, or even use various types of databases. Object-relational mapping (ORM) makes these tasks more manageable by helping us to interact with databases using JavaScript.
    
    We can choose from many ORM tools, but for this unit we will use Sequelize. A popular JavaScript ORM that uses object-oriented programming, Sequelize enables us to communicate with Postgres, MySQL, MariaDB, SQLite, and Microsoft SQL Server using Node.js. It also helps make relationships between the data easier to recognize and leverage. Thus, we can see how the data interacts much better than we could with plain SQL.`
  },
  {
    name: 'OOP',
    description: `In this unit, we'll discuss object-oriented programming in JavaScript as we learn about constructors and the prototype chain. Constructors are special functions that help us create objects of similar types. Prototypes are JavaScript’s built-in system that allows objects to inherit features from other objects. Additionally, we'll explore Promises and learn how to take full advantage of them.
    
    On the Job: Prototypes are generally considered an advanced JavaScript concept. Mastering this concept will make you a more competitive JavaScript developer!
    
    We'll also cover test-driven development (TDD), which involves writing tests for application features before writing any code. Then we write only the minimum amount of code needed to make the tests pass—and repeat this process until the application is complete. Among its many benefits, test-driven development helps us write more understandable and maintainable code.
    
    We'll conclude this unit with an introduction to modern class syntax and inheritance. ES6 introduced a class keyword, which allows us to create objects that use class structures like those found in other OOP programming languages. Essentially, classes are just constructor functions with more intuitive syntax. They allow us to implement more advanced OOP patterns, like inheritance, without needing to understand every aspect of JavaScript's prototypal inheritance system.`
  },
];

const seedCategory = () => Category.bulkCreate(categoryData);

module.exports = seedCategory;
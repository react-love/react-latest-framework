###超强大的redux-react案列，热更新、ES6/7、LESS、Router、async（终极异步）、本地node服务器...
==========================================

####作者：二月  
email：1130216245@qq.com  
Difficulties can contact me directly by mail

=========================

####Installation Tutorial
1, Method 1: Download the case source code  
2, Method 2: git command line type git clone https://github.com/hyy1115/react-redux-book.git, copy the source code to the local git repository  
3, windows system, installed in the ruby and node environment, based on the ios system do not set
Run the npm install command at the root of the Web site  
4, npm start run, if not an error will automatically open the browser   

===========================================

####Related introduction  
1, the website made two pages, routing between the pages Jump.  
2, the component is responsible for calling the action method, and then dispatch to the corresponding reducer, reducer responsible for updating state.  
3, to achieve a hot update, real-time monitoring js and less changes.  
4, with axios package data access layer, and with the ultimate asynchronous solution async, await do asynchronous processing.  
5, the configuration jsx syntax to write if..else ... function, but there are still some problems in the test, but the ternary expression can still be used.  
6, the most important function, the local node server, eliminating the need for a separate configuration mockserver, server.js file inside the back-end api interface, pay attention to follow the restful specification    


===================================================

####Folder description
1, action: state definition center, management status constants and state parameters  
2, components: Unpacking the various components of the module, js components and less placed in the same component directory below, to avoid the development process to find difficult problems  
3, containers: module into a single page package  
4, reducers: custom reducer, responsible for the state state of the update delivery  
5, store: state of the total control center, all state owned by him  
6, utils: custom plug-ins and constants  
7, data: back-end json data  

####Introduction to Unidirectional Data Flow  
1. Open a Web page and enter localhost: 3000  
2, the site will enter the index.html  
3, before initialization, index is empty, and only write their own static file header, this time will resolve bundle.js file  
4, analytical time, the first step will be loaded index.js file  
5, the second step analysis route.js, route container is appContainer, all the pages are in the container appContainer container  
6, so the third step is to load the home page homeContainer routing  
7, home which I imported four components, including nav (navigation) components used to manage the state data  
8, I define a state inside the action constant "RECEIVE_NAV" used to manage the loading of nav data  
9, and action is the corresponding reducers, in the reducers inside the definition of the nav reducers, initialize the navigation data, and the data saved to the state state
Inside, so every time in the hands of home navigation loading time, will be controlled by the specified action  
10, reducers state first passed to the container inside, through the props transmission, specifically to see the code  
11, this time call the state of the specific navigation components, it is also necessary to state from the container passed to the component,
Some students may ask, why not pass directly to the component, in my opinion, as far as possible to keep components clean, clean, the business logic is written to the container is
More appropriate, because the same components, may be deployed in many places, but the state is different, if the state directly to the component, it is difficult to achieve Component multiplexing  

===================================================

####The next version of the perfect plan 
1, I hope you use the template of the students can put forward some valuable advice   

==================================================

####Finally, JavaScript is the world's best language, if demand, you can directly send me an email  

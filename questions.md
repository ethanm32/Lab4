React Assignment – Rich Web Tech
Ethan Moran
C19305451


Q1. 

Props: 

Props are the actual data used in a React component such as a function. Props are the data passed in. They act like function arguments. Props are read-only. This is because they are pure functions and components modifying its own props cannot be changed. An example of props in code is shown below:

 
The output of this would be My favourite team is Barcelona. The Football component is getting a prop team with the value “Barcelona”, which can be changed.

State

State is where values are stored that belong to the component. When the state changes, the component re-renders. An example of this in code is shown below:

 
Here the state is set in the constructor which can be changed/added to and then is called in the render return as this.state.team.


Q2. 
A functor is an object that can hold any data type and that implements the map operation. The map function of a functor takes another function as an argument and calls this for each element of the functor which results in a new functor. When using maps in a functor, a new functor of the same size is created. JavaScript arrays are examples of functors.

Q3. 

Callbacks

Advantage:

Callback functions allow for you to wait for the previous function result and then execute a new function call.

Disadvantage:
If a new asynchronous request needs to be made the new asynchronous request needs to be made with the first request’s callback logic. This results in nested callbacks which are difficult to reason with and debug.

Promises

Advantage:
Better flow of control definition in asynchronous logic.

Disadvantage:
Promises are unable to handle data sources that have more than one value such as mouse movements.


Streams 

Advantage:
Streams allow access to data straight away. Before streams, users had to wait for the whole file to download before having access to it.

Disadvantage:
Once a stream is consumed it cannot be used later on.



Q4. 

![alt text][image]

[image]: C:\Users\ethan\OneDrive\Desktop\cssmodel.png


The CSS box model is a box that wraps around the HTML elements on a webpage. The element content is the space that the actual element takes up. The padding is the spacing between the object content and the object. The border is the exterior of the object touching the edges of the object and the margin is the spacing between the object and any other objects on the webpage.


Q5.
When a user goes to a URL, the browser uses DNS to tell where the website is. The browser then makes a TCP/IP connection to the server IP address and the port on that URL. These protocols show where the files for the website are located. A server or HTTP proxy at the ip address accepts the connection from the browser. The browser sends a HTTP request over the TCP/IP connection. The application server then parses this request and responds to the TCP/IP connection adding the necessary files.


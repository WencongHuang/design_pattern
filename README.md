# Design Pattern in Front End Development

The following question is based on the article below:
https://www.digitalocean.com/community/tutorial_series/javascript-design-patterns#undefined

More about design patterns:
https://www.patterns.dev/posts/introduction/

## Questions

### 1. Why we want to encapsulate stuff?
To protect states and behaviors from being accessed from other classes. The module pattern allows for public and private (plus the lesser-know protected and privileged) access levels.

### 2. What is module design pattern?
The module design pattern is a way to allow the programmer to split up the code into smaller and reuseable pieces. It also allows the programmer to keep certain values within the file private.

### 3. Why we want to use module design pattern.
To make the code pieces reuseable; easier to debug since they are usually small pieces; keep certain values encapsulate; and use it only if we explicitly 'import' the values.

### 4. What is Observer Design Pattern? And Why we want to use Observer Design Pattern. 
An observer design pattern is a method to tell/notify the dependencies if an object is modified. Using observer design pattern is a great way to enforce separation of concerns and the single-responsibility principle. But if we overuse this design pattern, we might cause performance issues and the program will run slower than we might expected.

### 5. What is Publisher/Subscribe Design Pattern. And Why we want to use Publisher/Subscribe Design Pattern. 
The publisher/subscribe design pattern can be consider as an improvised version of the observer design pattern. The difference is that the pub-sub design pattern are communicate with each other by using a broker/event bus (The observable doesn't know who their observers are). Using the design pattern allows the components to be loosely coupled since they are using a broker, which comes in handy if we want to expand our project later on. And they are usually implemented asynchronously (using message queue), unlike the traditional observer pattern that implemented synchronously.

### 6. What is Singleton Design Pattern?  And Why we want to use Singleton Design Pattern. 
Singleton design pattern are classes which can be instantiated once and can be accessed globally. Just like Redux, the singleton design pattern allows us to create a single instance of object and shared throughout the application, which is great for managing global state in the application. We want to use singleton design pattern whenever we want to share the resources with different components with a much easier, faster way to access the data.

### 7. What is MVC design pattern? How does it work?
The MVC is stands for Model-View-Controller. The view or the user-interface will update whenever the model is changed. One benefit is decoupling the view from the model to reduce dependencies.

## Code Implementation

### Observer, Publish/Subscribe, Singleton Design Pattern
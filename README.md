# JS-Random-Quotes-Generator-

Generating random quotes from an array of quotes using Math.random function on the click of a button. 

# Synopsis

A website with very simple UI built to generate random motivational quotes from an array of quotes that has some motivational quotes hardcoded. To display the random quote first a random index is generated using Math.random method which is multiplied with the length of the array to restrict the range of the random numbers to be between 0 and the length of the array. Then the random index is floored to an integer value using Math.floor method. After generating a random index, the element at the random index is stored onto a variable. An event listener has been added to the button that fires when the user clicks the button. A callback function used that changes the innerText property to the random quote that was generated on the click of the button. 

# Code Snippet Of JavaScript Code

```
let quote =
  [
  "I’ve noticed when I fear something, if I just end up doing it, I’m grateful in the end.— Colleen Hoover",
  "We’ve been making our own opportunities, and as you prove your worth and value to people, they can’t put you in a box. You hustle it into happening, right?— Jennifer Lopez",
  "When you’ve seen beyond yourself, then you may find, peace of mind is waiting there.— George Harrison",
  "Out of the mountain of despair, a stone of hope.— Martin Luther King, Jr.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.– Zig Ziglar",
  "I’m realizing how much I’ve diminished my own power. I’m not doing that no more.— Alicia Keys",
  "You are never too old to set another goal or to dream a new dream.— C.S. Lewis",
  "I believe that if you’ll just stand up and go, life will open up for you. Something just motivates you to keep moving.— Tina Turner",

  ];

btn.addEventListener('click', function(){

  var random = quote[Math.floor(Math.random() * quote.length)]
  output.innerHTML = random;
})

```

# Screeenshots 

### Before The Button Was Clicked 

<img width="1440" alt="Screenshot 2022-05-23 at 2 05 52 PM" src="https://user-images.githubusercontent.com/70855191/169778736-10361a1e-0eab-446f-848e-f28776282cf2.png">



### After The Button Was Clicked 
<img width="1440" alt="Screenshot 2022-05-23 at 1 49 43 PM" src="https://user-images.githubusercontent.com/70855191/169778135-a1544f3a-a911-41e6-a747-ef07b601036f.png">

# Getting Started 

In order to get started, fork the project and clone it to your local machine. 
The project has been deployed on github pages which can be found here : [Link To GitHub Page](https://santshvm.github.io/JS-Random-Quotes-Generator-/)


# Learnings 

* JavaScript HTML DOM 
* Manipulating HTML elements by using getElementById and getElementByClass 
* Array in JavaScript
* Math.floor and Math.random methods
* EventListeners and Callback functions in JavaScript

# Contact

Santosh Shivam [Twitter](http://twitter.com/santshvm) | [LinkedIn](https://www.linkedin.com/in/santosh-shivam/)
<br> 
<br> 
<hr> 
<p align="center"> 
  Santosh Shivam 2022 ©
 </p> 

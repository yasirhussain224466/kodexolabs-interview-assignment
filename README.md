# Getting Started

- Please read the INSTRUCTIONS.md first
- For any questions around Create React App (CRA), reference
  CRA_DOCUMENTATION.md

# Code and Design Decisions

<!-- Please document your code & design decisions here. -->

Assalam o Alykum!

In this task or Assignment, we had to make product listing cards on one page, let's suppose we have to design an E-commerce web app in which the seller is listing our product in a web app. so that the request hits like a post request to the API and we just post the data in API. when we want to get all products from API so we generally use Map Function for this purpose.
in this task, I used Material UI. Library just because I am used to designing and creating a component through MUI.   

The second thing is the simplyrets API. I created a function getListing() in this function I defined a variable const URL, username, password, listingskey, cacheTimeKey, stale cache
now we just checked if nothing is set in localStorage so that we just set the header like Authorization, Basic, and username and password this function returns a method GET and headers and then just resolve the promise i.e fetch, then we just returned the data i.e we resolved first. then the else part is executed if items in localStorage then simply return a promise which we are just resolving in the else block and call the getItem function.

then I use useEffect, useState react hooks, which I am calling the get method, and then get the data from the locatStorage. also set it through useState hook.

And much more things which I did in this task, I used javaScipt Regex to convert the int price to international standard comma which is used to represent the price like 3,000,000, and a javaScript Date method. to customize the date which is coming from API.

I would like to thank you for reaching out and gave a wonderful opportunity to show my potential.
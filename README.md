# Lab 2 Interactive User Registration Form- Read Me
### Reflection Questions:
:octocat:
#### By Andrea Etienne 
###### 11/06/2025
<table><tr><td>

1. How did event.preventDefault() help in handling form submission?:
Event Default helps prevent anything from being pre-loaded, reset unnecessarily or even the natural way certain js elements would do naturally

2. What is the difference between using HTML5 validation attributes and JavaScript-based validation? Why might you use both?:
HTML5 validation attributes are useful because they allow you to notify the user with things like visual cues. Javascript takes it a bit further by doing that and then allowing you to do customizations for colors, messages and I believe how things are stored. 


3. Explain how you used localStorage to persist and retrieve the username.: What are the limitations of localStorage for storing sensitive data? :There are limitations of localStorage for storing sensitive data because 
local storage is stored in public files that can be viewed by others. But when you store them in like a server they can be encrypted.

4. Describe a challenge you faced in implementing the real-time validation and how you solved it.:
I resolved numerous issues after realizing just while interacting with the registration/login form, that things were breaking. A few of these issues were not properly calling my pattern in html validation, I incorrectly was calling the original event click in my function. Because I was not retyping I also caused some issues where I was calling my email input in improper places. I also had some typos that caused things to break. There was also a point in time where I ahd to ask myself would the user know this? And as a result fixed the user experience.

5. How did you ensure that custom error messages were user-friendly and displayed at the appropriate times?:
I am actually working through that right now, for one my password entry does not currently tell the user what the requirements are but then **penalizes** them for it. Secondly, my current password is flagging me although its within the patterns that I have set for the password so I have to go back to the drawing board. 

</td></tr></table>


*KEY LEARNING* <br>localStorage: Stores data with no expiration date. It will persist until explicitly deleted by the user (e.g., by clearing browser data) or by web application code. Data stored in localStorage is shared across all tabs and windows from the same origin.


References:<br>
[Pattern Mismatch for event validations](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState/patternMismatch)<br>

[Pattern for HTML](https://www.w3schools.com/tags/att_input_pattern.asp)<br>

[Validation](https://www.w3schools.com/howto/howto_js_password_validation.asp)
 <br> 

[Form Submission and Event Default](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event)

<br>

Respect to the Dom
![Spongebob Meme](https://media1.tenor.com/m/Xc1vTqtun24AAAAC/rainbow-spongebob.gif)

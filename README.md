# Read Me


### Reflection Questions:
<table><tr><td>

1. How did event.preventDefault() help in handling form submission?
Event Default helps prevent anything from being pre-loaded, reset unnecessarily or even the natural way certain js elements would do naturally

2. What is the difference between using HTML5 validation attributes and JavaScript-based validation? Why might you use both?



3. Explain how you used localStorage to persist and retrieve the username. What are the limitations of localStorage for storing sensitive data?

4. Describe a challenge you faced in implementing the real-time validation and how you solved it.

5. How did you ensure that custom error messages were user-friendly and displayed at the appropriate times?
I am actually working through that right now, for one my password entry does not currently tell the user what the requirements are but then **penalizes** them for it. Secondly, my current password is flagging me although its within the patterns that I have set for the password so I have to go back to the drawing board. 

</td></tr></table>


*KEY LEARNING* localStorage: Stores data with no expiration date. It will persist until explicitly deleted by the user (e.g., by clearing browser data) or by web application code. Data stored in localStorage is shared across all tabs and windows from the same origin.


References:
(!Pattern Mismatch for event validations)[https://developer.mozilla.org/en-US/docs/Web/API/ValidityState/patternMismatch]

(Pattern for HTML !)[https://www.w3schools.com/tags/att_input_pattern.asp]
(!Password validation for HTML)[!https://www.w3schools.com/howto/howto_js_password_validation.asp]
# Take A Hike! - Client Application

This is the client side directory for the hike-tracking application. This application allows a user to create a new account and sign in to view and record their hikes. Hike information to be recorded and stored includes the park name and location, a distance and a difficulty rating. The user is able to record this information, and then view, edit and delete their previously recorded hikes. Users are able to change their password and sign out using the navigation bar.

The current version does not provide additional user information such as username, actual name or "home base" location, however that would be added in the next round of revisions.

## Important Links

  * [GitHub Client Application Repository] (https://github.com/kbini28/hike-tracker-client)
  * [GitHub API Repository](https://github.com/kbini28/hike-tracker-api)
  * [Application](https://kbini28.github.io/hike-tracker-api/)

## Planning Story

I placed more emphasis with this application on preparation and planning. My plan, including wireframes, were more thought out, and my expectations for execution were more realistic (at least at the start). My plan was to develop the backend application first, then focus on frontend authentication. Once I was able to have a user sign up and in, I followed by adding a change password and sign out, including curl scripts to test each step along the way. I made sure to run both the front end server and back end api server to make sure authentication was successful.

From there I focused on CRUD actions for logging a hike; starting with creating a hike with a form, indexing all hikes, removing a hike, and finally updating a hike. The update action was by far the most difficult, because part of our challenge was to include a handlebars action in our application. I chose to index all hikes using a handlebars script, and then include a button for updating and removing a hike within each "content section" in handlebars. I wanted to challenge myself by adding a modal that would pop up and allow a user to update a hike through the modal, but was not able to connect the modal's html to my javascript and handlebars code. I instead chose to include a simple toggle to show and hide the update form, and will try to include a modal in version 2 or 3 when I am able.

I decided to save all of the styling until the very end this project, because I felt styling some elements first had complicated my code and made it more difficult to read and update in the first project. It helped keep my code cleaner, but ended up becoming more overwhelming, because I had to spend more time consistently on styling, rather than breaking up the day styling pieces. Overall I am happy with my styling - The accordion menu to sign up/in is my favorite part - but I still believe I can improve on what I have later.

### User Stories

  * As a user, I want to be able to sign in securely.
  * As a user, I want to view a list of all hikes I've recorded.
  * As a user, I want to input my most recent hike, with at least a name and location.
  * As a user, I want to rate my experience on that trail.
  * As a user, I want to sign out from this application.

My user stories could be broken down further into "input my most recent hike," "add a name and location," etc.

### Technologies Used

  * HTML
  * CSS/SASS with Bootstrap
  * Handlebars
  * Javascript
  * jQuery

### Unsolved Problems

I want to be able to show the most recent post, after it is input. Like having a "most recent" section.
Most of my unsolved problems are styling issues. I was unable to style my logged hikes much more than they are now without them either breaking or shifting. I want to add margins between each log, but with the bootstrap classes I cannot figure out how without the content shifting to the next line.
Also I wanted to add more modals, bootstrap forms and styling that way, using a modal to update, and improving my navigation bar with better styling.
I did not have enough time to add reviews/comments or additional user information above and beyond my MVP which I would like to add later.

### Wireframe

[Project ERD](https://i.imgur.com/YBIBhio.jpg)
[Second ERD, after group discussion](https://i.imgur.com/1MfIHP8.jpg)

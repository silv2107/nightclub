# Night Club Web Application

## Technologies and libraries used

- Javascript
- React
- Sass
- Axios
- @reach/router
- React Hook Form
- Local API
- Github
- Alice Carousel (slider)
- Intersection Observer (react-intersection-observer)

### note
Most of the time a new branch was created to improve tractability of the project. Similarly commiting, after achieving a goal, to github was done on a regular basis 

### Starting phase
1. git clone, create-react-app & cleanup unnecessary files
2. install libraries, npm install the following: sass, axios, @reach/router, react-hook-form etc...(see package.json)

### Building header content & animation
1. creating Home page component and making the functionality for switching beetween the two header images: an array was created and using Math.random() the switch would be random when page is reloaded.
2. animation for hero logo: @keyframes, animation, opacity, transform, translate, rotate

### Building the nav component
Nav component includes the navigation bar and the logo on left side: flex to position the content and position:sticky was applied to make the nav component stick to the top of the screen one the user scrolls down 

## Starting on Main

### Title component is build
This component includes the title and the underline. Probs in the component can change the title content in whatever place the component is used. Img to make the underline 

### Create welcome card component
A front images is placed on top of a div tag. Once the user hovers over the image the opacity of the image become zero, exposing the div tag. The div tag includes the icon, title and description corresponding to the image. Furthermore, there is a Triangle component attached in the corners, which also becomes visible once the user hovers over the front image. Everything is animated with transition, transform, translate and opacity, once the user hovers over each card/image

### Events of the month component
An Event component called Slider is created. This slider has the functionality of sliding to card at each step. Info for each card was fetches using axios. Once the raw data is fetched and the length of the array "events" was achieved, the sorting of each event could be hardcoded using index, like for example event[1].asset.url. Alice Carousel library was used to make the slider. Custom modification of the default slider were applied to achieve the website look requirements.

The animation of the event followed a similar pattern which can be found on the welcome card specifications.

### Creating the Gallery component
- fetched images were inserted on to seperate grids to achieve the four by three images on row 1 and row 2 respectively
- scroll animation using intersection observer package specified in the package.json. Ternary operator to control the process 

### Creating The Testimonials component
Fetching the testimonial data using the endpoint from the API and styling as required. Alice Carousel was used for the slider
   
### Mailing subscription
1.handle user feedback with regular expression - if it is an valid email setMessage to "You email is registered" else setMessage "Enter a valid email"

2.register valid email using a post request

3.check for correct register of valid emails with a get request

4.react-hook-form was used to handle submit

5. message to user assured

## Starting on footer
Footer was created using regular styling method like Grid for instance

## Auxiliary Tasks

### Handle routing and linking from Home to Contact Us
@reach/router was used for this purpose

### Contact formular page
handle user feedback with regular expression
1. Name: validate that it has over 4 characters in length & has whitespace /\s/g

2. Email: validate it has a correct email

3. Content: validate that it has over 20 characters in length

4. react-hook-form was used to handle submit

5. message to user assured

### Book Table page 
- Styling of the tables position was a result by using an self-made array that could place the right sized table in the correct place. An arrays index favours the use of this method.

- Validations can be understood by looking at the code. The event.target was in this case used to validate the different input fields

- Select/option tag was used to select the date instead of an input field

- A table context component was created to make the select-table functionality: a selected table will be written automatically in the Table Number input field. Usecontext to acieve this goal.** 

- Get requests to check for reservations and block reservations on already booked tables: for loops and if statements to achieve this goal 

- Post requests, if the first attempt to reserve a table passes the validation, to register reservations. Reservations are registered at the specified endpoint in the API 

### Exam presentation
** I would like to discuss, and explain the code of this functionality, in more detail at the exam presentation



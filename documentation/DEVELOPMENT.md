# TANDEM CODING CHALLENGE PROCESS AND DEVELOPMENT CHALLENGES

## Process

- getting checked questions to shuffle into a slice of state
    I started off by getting every question to display on screen with a checkbox next to it, and when you clicked the checkbox it would move that question to a 'asked' section on a different part of the screen. This allowed me to keep track of which questions had been asked or not.

- randomized questions
    Getting random questions wasn't too difficult. I decided it would be best to use a useEffect hook configured to run only once when the component was loaded to pick a random question at the start, then make a function that selects a new random question called. These both work by selecting a random number between 0 and 20 and putting it into a slice of State, then using that slice of State to key into the raw data. See Challenges section for dev process of getting random question selection without repeats per round.

- getting shuffled questions
    One thing I noticed that wasn't in the requirements for this challenge but seemed essential to include was randomized answer order. Its no fun to play a trivia game if answer D is always the correct answer, so I found a random array shuffling function on stack overflow and used it to shuffle an array containing a questions answers before passing it through the props to the Question component, which I made to display the questions. See shuffing question order in Challenges section for more of my process with this.

- basic game behavior
    at first, to test randomized questions without repeats, I made the game 21 questions long so I could try out running all the questions to make sure that was working properly. Once everything was in place, I found it most easy to use terinary statements based off of how long the array in the 'asked' slice of State was to choose what to display, wether it be a start button, a try again button with a score, or a Question component. I also used a terninary statement in my Question component to display the options with different classes assigned so that I could apply some helpful styling. The most difficult part of getting the game to work seamlessly was figuring out how to keep the Question component from calling the shuffling function too many times, or getting too many rerenders. See Challenges section for more of my process in deciding to make Question a controlled component rather than having its own discreet state.

- styling
    To style this app I used css modules. Based on the scope of this app I didn't really need to use css modules for this app, but I find them extremely useful in planning ahead since finding unique class names for every single thing you want to style becomes a chore as the app gets bigger. I also find it very convenient for each component to have their own css module so its easy to know where to look for anything.


## Challenges in Development

- getting random question selection without repeats
    Initially, getting random question selection wasn't too hard, but I did run into some challenges when I started to set up my Question component with its own slices of state. I kept running into a problem where my random question selector was being called before the question just answered was pushed into the 'asked' array. By using debuggers in my functions 'answer' and 'newQ' I was able to see the problematic lines of code and refactor these functions to give their expected behavior. The choice to make Question a controlled component made debugging this problem much easier.

- shuffling question order
    I knew I didn't want to spend to much time making my own custom array shuffling function, so I found one on stack overflow. The function itself worked perfectly, but I kept running into a problem where the questions would get reshuffled after you made your selection. Fixing this was a lot of trial-and-error, I tried using the shuffler with a useEffect hook in the Question component to shuffle whenever the options it was passed changed, but there would be a split second where you'd see the unshuffled answers, and that didn't feel seemless enough to me. Eventually, when I made the choice to make Question a controlled component, I decided to make a new slice of state to store a questions options, and shuffle the options before putting them into that slice of state.

- question component discreet state vs. controlled component
    Initially, it made sense to me to give the Question component its own slices of state. To me it generally feels natural to give a component its own slice of state, so it can manage its own logic, and in doing so, clear up space on its parent component. In the case of this app, as I made the Question component rely on more and more things passed through the props, it became difficult to manage which functions were getting called on which rerenders of the component. This coupled with the other challenges I was having moved me to change Question to a controlled component and move almost all of the logic to its parent component App. Once I decided to do this finishing up the functionality of the app became much easier.


## Further Development Ideas

- user accounts

- scoreboard

- user submitted trivia questions

# Sprint Challenge: Advanced React - Women's World Cup

This challenge allows you to practice the concepts and techniques learned over the past Sprint and apply them in a concrete project. This Sprint explored class components, custom hooks, and testing. In your challenge for this Sprint, you will demonstrate proficiency by creating an application that consumes data from an API using a custom hook, displays that data on the DOM, and tests your React components.

The data you will get back from the server will be the Women's World Cup players ranked by search interest from Google Trends, June-July 2019, worldwide - https://googletrends.github.io/data/.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency with ReactJS Fundamentals and your command of the concepts and techniques in the Functional Components.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons and your Team Lead.

## Self-Study/Essay Questions

Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions. Edit the `ANSWERS.md` file to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

- [ ] Why would you use class component over function components (removing hooks from the question)?


    Class Components are used at the base of the application more as a foundation for the application itself, it can handle all the state holding and passit down to any of its components, a functional compononet is normally child of the class component and will pull its data from the Class but it can have functionality to change the state of the parent through inheritence

- [ ] Name three lifecycle methods and their purposes.

    onComponentDidMount() :: =>
     is used right after the first render when the component that it is attached to mounts to the Virtual Dom

     onComponenetDidUpdate() ::=>
        is used to change something on the virtual dom when the state is changed.

        componentWillUnmount() ::=>
            is used when the compoennt is un-mounted usualy you would call the clean functions here
 
- [ ] What is the purpose of a custom hook?

    custom hooks allow us to be able to inject our own data at anytime by creating a hook that inherits another and overrideing it and returning the result 

- [ ] Why is it important to test our apps?

    testing apps is great because it :
        finds bugs faster,
        shows us edge cases,
        costs less over time

## Project Set Up

Follow these steps to set up and work on your project:

- [X] Create a forked copy of this project.
- [X] Add TL as collaborator on Github.
- [X] Clone your OWN version of Repo. **(Not Lambda's by mistake!)**
- [X] Create a new Branch locally: `git checkout -b <firstName-lastName>`.
- [X] Run `yarn` to download dependencies.
- [X] Run the server using `yarn start` or `node server.js`.
- [X] In a separate terminal cd into the `client` folder and run `yarn install` to download dependencies.
- [X] Still inside the `client` folder run `yarn start` to run the client application.
- [X] Implement the project on this Branch, **committing progress & changes often.**
- [X] Push commits: `git push origin <firstName-lastName>`.

Follow these steps for completing your project:

- [X] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
- [X] Add your Project Manager as a Reviewer on the Pull-request.
- [X] PM then will count the HW as done by merging the branch back into master.

## Minimum Viable Product

Your finished project must include all of the following requirements:

- [ ] Class component that fetches data from the server you now have running - the data can be fetched from `http://localhost:5000/api/players`
- [ ] Display the player data you receive from the API
- [ ] Build a custom hook and use it in your app - this can be a localStorage hook, a fetch hook, a dark mode hook, or any other hook you would like
- [ ] Write integration tests for your React components

## Stretch Problems

- [ ] Implement another custom hook
- [ ] Use a graphing library to graph the data you received from the API

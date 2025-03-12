- Section 6: State, Events, and Forms: Interactive Components

- March 9, 2025

- Section Overview
- Build a steps components

- March 10, 2025

- Handling Events the React Way
- What is State in React?
- Data that a component can hold over time, necessary for info that it neeeds to remember throughout the appp's lifecycle.
- State - Components of Memory
- State - Ex. Read Notification & Messages, Input field, Tab, Content of shopping cart.
- "State variable" / "piece of state": A single variable in a component (component state)
- Updating component state triggers React to re-render the component.
- State Allows the Devs to:

1. Update the components view (by re-redndering it)
2. Persist local variable renders.

- Note: State is a Tool. Mastering state will unlock the power of React Development
- Note: useState function is a hook. All start in "use" is hook.
- Don't Set State Manually
- React is all about immutability

- March 11, 2025

- The Mechanics of State

1. It was developed by Facebook and has gained massive adoption within the web development community due to its simplicity, performance, and reusability. React follows a Declarative programming paradigm, which is a fundamental concept that makes it easier to build complex user interfaces efficiently.
2. Imperative programming is a paradigm in which code explicitly describes the sequence of steps required to achieve a certain result. In the context of React, imperative programming involves manipulating the DOM (Document Object Model) directly to update the user interface.

- REACT is called "REACT" because react reacts to state changes by re-rendering the UI. DATE <-> US are Synced

- Adding Another Piece of State
- React Developer Tools https://react.dev/learn/react-developer-tools
- https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en&pli=1

-March 12, 2025

- Updating State Based on Current State
- More Thoughts About State + State Guidelines

1. One component, One State - each component has & manages its own state, no matter how many times we render the same component.Each state is Isolated in one component
2. UI as FXN of STATE UI = f(state), with state we view UI as a reflection of data changing over time.

- Practical Guidelines about State

1. Use state variable for any data that component should keep track of ("remember")
   over time.
2. Whenever you want something in the component to be dynamic, create a piece of state related to that "thing", & update the state when the "thing" should change (aka "be dynamic")

- Example. window isOpen = True else False

3. Update its state this usually happend in an event handler function.
4. Building a component, imagine its view as reflection of state changing over time.
5. For data that should not trigger component re-renders, dont use state. Use regular variable instead. This is common beginner mistake.

- A Vanilla JavaScript Implementation
- CHALLENGE #1: Date Counter (v1)

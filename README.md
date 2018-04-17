# (つ ° ヮ °)つ Understanding React Context

A repo containing different ways to manage state in React with simple examples.

## How to use this repo

You've heard about the [Context API](https://reactjs.org/docs/context.html). You're ready to start using it. Here's a friendly step-by-step progression to using context to manage some portion of your state in your production app.

Each flavor of state management is under a separate branch:

1.  [Component State (setState)](https://github.com/matthamil/react-context/tree/1-component-state)
1.  [Redux](https://github.com/matthamil/react-context/tree/2-redux-state)
1.  [Context](https://github.com/matthamil/react-context/tree/3-context)
1.  [Nested Context](https://github.com/matthamil/react-context/tree/4-nested-context)
1.  [Unstated](https://github.com/matthamil/react-context/tree/5-unstated) _(this is awesome :sparkles:)_

Checkout each branch one-by-one and run `yarn run start` (or `npm run start`) to see the app in action.

:warning: This repo is not an endorsement of using context for all of your state management problems. Obligatory Tweet from Dan Abramov:

<p align="center">
  <img src="https://imgur.com/wzFDx7u.png" alt="dan abramov">
</p>

## Helpful Resources

1.  [awesome-react-context](https://github.com/diegohaz/awesome-react-context)
1.  [Unstated](https://github.com/jamiebuilds/unstated)
1.  [Context API RFC](https://github.com/reactjs/rfcs/blob/master/text/0002-new-version-of-context.md)
1.  [Context API pull request](https://github.com/reactjs/rfcs/pull/2/files)

## Practice using Context

> But Matt, I want to understand Context better! What can I do?

Well, you can read about some of the resources above :point_up:. You can also try to extend the app in this repo by doing the following exercises:

1.  Extend the [Context](https://github.com/matthamil/react-context/tree/3-context) example to use a product category context to choose which type of products are rendered in the product list.
1.  Extend the [Unstated](https://github.com/matthamil/react-context/tree/5-unstated) example to use the a currency context like the one in the [Nested Context](https://github.com/matthamil/react-context/tree/4-nested-context) example.
1.  Create a PR and fix my bad code.
1.  Follow me on [Twitter](https://twitter.com/_matthamil).

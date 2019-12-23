# WTF is this?

Containers are great because they contain stuff. The problem is if your container needs to stretch the width of the browser, whilst still containing it's children, you often need another wrapping div. With the power of calc and transparent borders, you only need a simple class.

## Why borders?

I needed to maintain padding, borders felt a decent alternative. Also, who the hell puts borders on a container?

## Installation

Run `npm i kevinruscoe/tailwindcss-container-bg-w-screen` and require it like.

```
module.exports = {
  theme: {
    extend: {}
  },
  variants: {},
  plugins: [
    require('tailwindcss-container-bg-w-screen')
  ]
}
```

## Use it

`<div class='container-bg-w-screen'>`

The options highjack the default container options.

- Center. Should the container be centered by default.
- Padding. Any padding to apply to the container.

```
theme: {
  container: {
    center: true,
    padding: '.75rem'
  }
}
```

## Demo

Kinda like https://codepen.io/kevdotbadger/pen/xxbVOMG
# WTF is this?

Containers are great because they contain stuff. The problem is if your container needs stretch the width of the browser, whilst still containing it's children, you often need another wrapping div. With the power of calc and transparent borders, you only need a simple class.

## Installation

Run `npm i kevinruscoe/tailwindcss-container-spill` and require it like.

```
module.exports = {
  theme: {
    extend: {}
  },
  variants: {},
  plugins: [
    require('tailwindcss-container-spill')
  ]
}
```

## Use it

`<div class='container--spill'>`

The options are the same as tailwind's container, so you've got:

- Center. Should the container be centered by default.
- Padding. Any padding to apply to the container.

The plugin piggybacks on the container options, so they're defined under the container namespace.

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
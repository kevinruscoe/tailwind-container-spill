# WTF is this?

Containers are great because they contain stuff. The problem is if your container needs stretch the width of the browser, whilst still containing it's children, you often need another wrapping div. With the power of calc and transparent borders, you only need a simple class.

## Installation

Run `npm i kevinruscoe/tailwind-container-spill` and require it like

```
module.exports = {
  theme: {
    extend: {}
  },
  variants: {},
  plugins: [
    require('tailwind-container-spill')
  ]
}
```

## Use it

`<div class='container--spill'>`
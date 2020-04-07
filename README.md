# React Responsive Bricks

A responsive masonry layout for React

## [Live Demo](https://mickybizzle.github.io/react-responsive-bricks/)

## Installation

```
#NPM
npm i --save react-responsive-bricks

#Yarn
yarn add react-responsive-bricks
```

## Usage

```JSX
import React from "react";
import { Bricks } from "react-responsive-bricks";

//...

let data = [
  {
    imSrc: "link to image"
  },
  {
    imSrc: "link to image"
  },
  {
    imSrc: "link to image"
  },
]

//...

<Bricks data={data} />
```

## Props

| Prop            | Type     | Default | Description                                                                                                                                       |
| --------------- | -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| data            | `Array`  |         | Array of objects in the form `{imgSrc: "link to img"}`. _Required_                                                                                |
| columns         | `Number` | 4       | How many columns to show. Minimum of 1. Has built in logic for responsiveness.                                                                    |
| gap             | `Number` | 0       | Gap (in pixels) between elements. Minimum of 0                                                                                                    |
| minWidth        | `Number` | 200     | Minimum width (in pixels) of each element. Determines wrapping of elements based on width of the browser.                                         |
| backgroundColor | `String` | white   | Background color of the grid. Only seen if `gap` is more than 0. Supports named colors (e.g. white, red, black, etc) or hex values (e.g. #ffffff) |

## Todo

This is my list of features I plan to implement in the near future. If you have any ideas reach out!

- [ ] onClick for each element
- [ ] Support for cards as well as images
- [ ] Add more mouseover features

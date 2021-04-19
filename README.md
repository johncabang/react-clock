## Frontend Mentor - Clock App Challenge

!["react-clock - desktop - nighttime"](https://github.com/johncabang/react-clock/blob/main/docs/react-clock-desktop-daytime-01.gif?raw=true)

This is a solution to the [Clock app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/clock-app-LMFaxFwrM). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Clock App Challenge](#frontend-mentor---clock-app-challenge)
- [Table of contents](#table-of-contents)
- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Expected Behaviour](#expected-behaviour)
  - [Built with](#built-with)
  - [APIs](#apis)
  - [Preview](#preview)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- View the current time and location information based on their IP address
- View additional information about the date and time in the expanded state
- Be shown the correct greeting and background image based on the time of day they're visiting the site
- Generate random programming quotes by clicking the refresh icon near the quote

### Expected Behaviour

- Change the greeting depending on the time of day. It should say:
  - "Good morning" between 5am and 12pm
  - "Good afternoon" between 12pm and 6pm
  - "Good evening" between 6pm and 5am
- Change the greeting icon and background image depending on the time of day. They should show:
  - The sun icon and the daytime background image between 5am and 6pm
  - The moon icon and the nighttime background image between 6pm and 5am
- Generate a new random programming quote whenever the refresh icon is clicked

### Built with

- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles
- [Moment JS](https://momentjs.com/) - Time

### APIs

- [World Time API](http://worldtimeapi.org/) to set the time based on the visitor's IP adress. This API will also be used for additional data, like the day of the year shown in the expanded state.
- [IPstack API](https://ipstack.com/) to set the city and country underneath the time
- [Programming Quotes API](https://programming-quotes-api.herokuapp.com/) to generate random programming quotes.

!["react-clock - mobile - expand"](https://github.com/johncabang/react-clock/blob/main/docs/clock-mobile-nighttime-expand.png?raw=true)

### Preview

Desktop

!["react-clock - desktop - nighttime"](https://github.com/johncabang/react-clock/blob/main/docs/clock-desktop-nighttime-01.gif?raw=true)

Tablet

<img src="https://github.com/johncabang/react-clock/blob/main/docs/react-clock-tablet-daytime-01.gif?raw=true" height="450"> <img src="https://github.com/johncabang/react-clock/blob/main/docs/react-clock-tablet-nighttime-01.gif?raw=true" height="450">

Mobile

<img src="https://github.com/johncabang/react-clock/blob/main/docs/react-clock-mobile-daytime-01.gif?raw=true" height="600"> <img src="https://github.com/johncabang/react-clock/blob/main/docs/react-clock-mobile-nighttime-01.gif?raw=true" height="600">

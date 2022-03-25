# Forecastzy App ☀️

In Reservamos we're always looking for ways to help our users have the best
experience when looking for travel options so that they can make the best
decision when reserving a bus or flight ticket. To accomplish this, we have to
make an app where the users can check the weather forecast for the
destinations available in Reservamos 🚍.

The web app's functionality is to be able to compare the weather forecast for
the next 7 days, by day, of different destinations offered by Reservamos. The
user must be able to input the name of cities and see the maximum and
minimum temperature for these places

![App Screenshot](https://res.cloudinary.com/images-alex-projects/image/upload/v1648172604/Portfolio/forecastzy-app/desktop-forecastzy_ygmttv.png)

## Features

- Search forecasts by city name
- Compare the weather forecast for the next 7 days, by day, of different
  destinations offered by Reservamos
- Mobile & Desktop version

## Run Locally

Clone the project

```bash
  git clone https://github.com/alxmcr/forecastzy-app
```

Go to the project's directory

```bash
  cd forecastzy-app
```

Install the dependencies using NPM:

```bash
  npm install
```

Start the Frontend server:

```bash
  npm run start
```

Open the browser:

```
http://localhost:3000
```

## Environment Variables

We use the following environment variables to configure the app:

```
REACT_APP_OPEN_WEATHER_MAP_API_KEY=your-open-weather-api-key
```

You can get `your-open-weather-api-key` from [Open Weather Map](https://openweathermap.org/api)

We need to set the `REACT_APP_OPEN_WEATHER_MAP_API_KEY` environment variable in a file called `.env` in the project's root directory. You can find the `.env-sample` file in the repository's root directory as guide.

## Tech Stack

- `@testing-library/jest-dom`: `"^5.16.3"`,
- `@testing-library/react`: `"^12.1.4"`,
- `@testing-library/user-event`: `"^13.5.0"`,
- `@types/jest`: `"^27.4.1"`,
- `@types/node`: `"^16.11.26"`,
- `@types/react`: `"^17.0.42"`,
- `@types/react-dom`: `"^17.0.14"`,
- `react`: `"^17.0.2"`,
- `react-dom`: `"^17.0.2"`,
- `react-scripts`: `"5.0.0"`,
- `typescript`: `"^4.6.2"`,
- `web-vitals`: `"^2.1.4`"
- `sass`: `"^1.49.9`"

## Screenshoots

![App Screenshot - Mobile](https://res.cloudinary.com/images-alex-projects/image/upload/v1648172604/Portfolio/forecastzy-app/mobile-forecastzy_pepqmy.png)

![App Screenshot - Desktop](https://res.cloudinary.com/images-alex-projects/image/upload/v1648172604/Portfolio/forecastzy-app/desktop-forecastzy_ygmttv.png)

## Demo

[https://forecastzy-app.netlify.app/](https://forecastzy-app.netlify.app/)

## Authors

- [Alejandro M. Coca Rojas (@alxmcr)](https://www.github.com/alxmcr)

## Feedback

If you have any feedback, please reach out to me at amcocarojas@gmail.com.
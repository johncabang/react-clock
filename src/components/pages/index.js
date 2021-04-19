import React, { useState, useEffect } from "react";
import Expandbar from "../Expandbar";
import Main from "../Main";

import Axios from "axios";
import { Content } from "./ContentElements";

const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY;

const Home = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [abbreviation, setAbbreviation] = useState("");
  const [currentTimezone, setCurrentTimezone] = useState("");
  const [dayOfYear, setDayOfYear] = useState("");
  const [dayOfWeek, setDayOfWeek] = useState("");
  const [weekNumber, setWeekNumber] = useState("");
  const [city, setCity] = useState("");
  const [countryCode, setCountryCode] = useState("");

  // Expand More Info Component

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // Check Time of Day for GREETING

  const [greeting, setGreeting] = useState("");
  const [dayTime, setDayTime] = useState(null);

  const checkGreeting = (timeobj) => {
    const currentHours = new Date(timeobj).getHours();
    if (currentHours >= 5 && currentHours < 12) {
      setGreeting("GOOD MORNING");
      setDayTime(true);
    } else if (currentHours > 12 && currentHours < 18) {
      setGreeting("GOOD AFTERNOON");
      setDayTime(true);
    } else {
      setGreeting("GOOD EVENING");
    }
  };

  // API Calls to worldtimeapi & ipstack

  useEffect(() => {
    async function getTime() {
      await Axios.get("https://worldtimeapi.org/api/ip/")
        .then((response) => {
          setCurrentTime(response.data.datetime);
          setAbbreviation(response.data.abbreviation);
          setCurrentTimezone(response.data.timezone);
          setDayOfYear(response.data.day_of_year);
          setDayOfWeek(response.data.day_of_week);
          setWeekNumber(response.data.week_number);
          checkGreeting(response.data.datetime);
          Axios.get(
            `http://api.ipstack.com/${response.data.client_ip}?access_key=${ACCESS_KEY}`
          )
            .then((response) => {
              setCity(response.data.city.toUpperCase());
              setCountryCode(response.data.country_code);
            })
            .catch((err) => {
              console.log("Location API Error", err);
            });
        })
        .catch((err) => {
          console.log("Current Time API Error", err);
        });
    }
    getTime();
  }, []);

  return (
    <Content dayTime={dayTime}>
      <Expandbar
        isOpen={isOpen}
        toggle={toggle}
        currentTimezone={currentTimezone}
        dayOfWeek={dayOfWeek}
        dayOfYear={dayOfYear}
        dayTime={dayTime}
        weekNumber={weekNumber}
      />
      <Main
        isOpen={isOpen}
        toggle={toggle}
        abbreviation={abbreviation}
        city={city}
        countryCode={countryCode}
        currentTime={currentTime}
        dayTime={dayTime}
        greeting={greeting}
      />
    </Content>
  );
};

export default Home;

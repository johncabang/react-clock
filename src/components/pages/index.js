import React, { useState, useEffect } from "react";
import Expandbar from "../Expandbar";
import Main from "../Main";

import Axios from "axios";

const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY;

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [currentTime, setCurrentTime] = useState("");
  const [abbreviation, setAbbreviation] = useState("");
  const [currentTimezone, setCurrentTimezone] = useState("");
  const [dayOfYear, setDayOfYear] = useState("");
  const [dayOfWeek, setDayOfWeek] = useState("");
  const [weekNumber, setWeekNumber] = useState("");
  const [city, setCity] = useState("");
  const [countryCode, setCountryCode] = useState("");

  const getTime = async () => {
    await Axios.get("https://worldtimeapi.org/api/ip/")
      .then((response) => {
        console.log(response.data);
        setCurrentTime(response.data.datetime);
        setAbbreviation(response.data.abbreviation);
        setCurrentTimezone(response.data.timezone);
        setDayOfYear(response.data.day_of_year);
        setDayOfWeek(response.data.day_of_week);
        setWeekNumber(response.data.week_number);

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
  };

  useEffect(() => {
    getTime();
  }, []);

  return (
    <>
      <Expandbar
        isOpen={isOpen}
        toggle={toggle}
        currentTimezone={currentTimezone}
        dayOfYear={dayOfYear}
        dayOfWeek={dayOfWeek}
        weekNumber={weekNumber}
      />
      <Main
        isOpen={isOpen}
        toggle={toggle}
        currentTime={currentTime}
        abbreviation={abbreviation}
        city={city}
        countryCode={countryCode}
      />
    </>
  );
};

export default Home;

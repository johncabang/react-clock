import React, { useState, useEffect } from "react";
import Axios from "axios";
import Moment from "react-moment";

import {
  ClockContainer,
  ClockGreeting,
  ClockGreetingContainer,
  ClockGreetingIcon,
  ClockLocation,
  ClockTime,
  ClockTimeContainer,
  ClockTimeZone,
  ClockWrapper,
  MainContainer,
} from "./MainElements";

// import sunIcon from "./../../assets/desktop/icon-sun.svg";
import moonIcon from "./../../assets/desktop/icon-moon.svg";
import Button from "../Button";
import Quote from "../Quote";

const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY;

const Main = () => {
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
        // console.log(response.data);
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
            // console.log(response.data);
            // console.log(response.data.city);
            // console.log(response.data.country_code);
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
    <MainContainer>
      <Quote />
      <ClockContainer>
        <ClockWrapper>
          <ClockGreetingContainer>
            <ClockGreetingIcon>
              <img src={moonIcon} alt="sun" />
            </ClockGreetingIcon>
            <ClockGreeting>GOOD EVENING, IT’S CURRENTLY</ClockGreeting>
          </ClockGreetingContainer>
          <ClockTimeContainer>
            <ClockTime>
              <Moment format="hh:mm">{currentTime}</Moment>
            </ClockTime>
            <ClockTimeZone>{abbreviation}</ClockTimeZone>
          </ClockTimeContainer>
          <ClockLocation>
            IN {city}, {countryCode}
          </ClockLocation>
        </ClockWrapper>
        <Button />
      </ClockContainer>
    </MainContainer>
  );
};

export default Main;

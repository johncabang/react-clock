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
  const [geoLocationIp, setGeoLocationIp] = useState("");
  const [city, setCity] = useState("");
  const [regionCode, setRegionCode] = useState("");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const results = await Axios("https://worldtimeapi.org/api/ip/");
  //     setCurrentTime(results.data.datetime);
  //     setAbbreviation(results.data.abbreviation);
  //     setCurrentTimezone(results.data.timezone);
  //     setDayOfYear(results.data.day_of_year);
  //     setDayOfWeek(results.data.day_of_week);
  //     setWeekNumber(results.data.week_number);
  //     setGeoLocationIp(results.data.client_ip);

  //     const locationResults = await Axios(
  //       `http://api.ipstack.com/${geoLocationIp}?access_key=e5b7e5a6fa98709c0e842812a3d0bfa4`
  //     );
  //     setCity(locationResults.data.city.toUpperCase());
  //     setRegionCode(locationResults.data.region_code);
  //   };
  //   fetchData();
  // }, []);

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
        setGeoLocationIp(response.data.client_ip);

        return Axios.get(
          `http://api.ipstack.com/${geoLocationIp}?access_key=${ACCESS_KEY}`
        )
          .then((response) => {
            // console.log(response.data.city);
            // console.log(response.data.region_code);
            setCity(response.data.city.toUpperCase());
            setRegionCode(response.data.region_code);
          })
          .catch((err) => {
            console.log("Location API Error", err);
          });
      })
      .catch((err) => {
        console.log("Current Time API Error", err);
      });
  };

  // const getLocation = () => {
  //   Axios.get(
  //     `http://api.ipstack.com/${geoLocationIp}?access_key=e5b7e5a6fa98709c0e842812a3d0bfa4`
  //   )
  //     .then((response) => {
  //       // console.log(response.data.city);
  //       setCity(response.data.city.toUpperCase());
  //       // console.log(response.data.region_code);
  //       setRegionCode(response.data.region_code);
  //     })
  //     .catch((err) => {
  //       console.log("Location API Error", err);
  //     });
  // };

  useEffect(() => {
    getTime();
    // getLocation();
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
            IN {city}, {regionCode}
          </ClockLocation>
        </ClockWrapper>
        <Button />
      </ClockContainer>
    </MainContainer>
  );
};

export default Main;

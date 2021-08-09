import React, { useState, useEffect } from 'react'
import Expandbar from '../components/Expandbar'
import Main from '../components/Main'

import Axios from 'axios'

import { Content } from './ContentElements'
import Loading from '../components/Loading'

const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY

const Home = () => {
  const [currentTime, setCurrentTime] = useState('')
  const [abbreviation, setAbbreviation] = useState('')
  const [currentTimezone, setCurrentTimezone] = useState('')
  const [dayOfYear, setDayOfYear] = useState('')
  const [dayOfWeek, setDayOfWeek] = useState('')
  const [weekNumber, setWeekNumber] = useState('')
  const [city, setCity] = useState('')
  const [countryCode, setCountryCode] = useState('')

  const [clientIP, setClientIP] = useState('')

  const [isLoading, setIsLoading] = useState(true)
  // const [error, setError] = useState(null);

  // Expand More Info Component

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  // Check Time of Day for GREETING

  const [greeting, setGreeting] = useState('')
  const [dayTime, setDayTime] = useState(false)

  const checkGreeting = (time) => {
    const currentHours = new Date(time).getHours()
    if (currentHours >= 5 && currentHours < 12) {
      setGreeting('GOOD MORNING')
      setDayTime(true)
    } else if (currentHours >= 12 && currentHours < 18) {
      setGreeting('GOOD AFTERNOON')
      setDayTime(true)
    } else {
      setGreeting('GOOD EVENING')
    }
  }

  // API Calls to worldtimeapi & ipstack

  const worldtimeapiURL = 'https://worldtimeapi.org/api/ip/'
  const ipstackURL = `http://api.ipstack.com/${clientIP}?access_key=${ACCESS_KEY}`

  const getTime = async () => {
    try {
      const { data } = await Axios.get(worldtimeapiURL)
      const {
        datetime,
        abbreviation,
        timezone,
        day_of_year,
        day_of_week,
        week_number,
        client_ip,
      } = data
      setCurrentTime(datetime)
      setAbbreviation(abbreviation)
      setCurrentTimezone(timezone)
      setDayOfYear(day_of_year)
      setDayOfWeek(day_of_week)
      setWeekNumber(week_number)
      checkGreeting(datetime)
      setClientIP(client_ip)
      setIsLoading(false)
      // setError(null);

      getIp()
    } catch (error) {
      console.log('Current Time API Error', error)
      setIsLoading(false)
      // setError(error.message);
    }
  }

  const getIp = async () => {
    try {
      const { data } = await Axios.get(ipstackURL)
      const { city, country_code } = data
      setCity(city)
      setCountryCode(country_code)
      setIsLoading(false)
      // setError(null);
    } catch (error) {
      console.log('Location API Error', error)
      setIsLoading(false)
      // setError(err.message);
    }
  }

  useEffect(() => {
    getTime()
    // getIp()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
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
      )}
    </>
  )
}

export default Home

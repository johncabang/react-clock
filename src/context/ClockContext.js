import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios'

const ClockContext = createContext()

const ClockProvider = ({ children }) => {
  const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY

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
      const { data } = await axios.get(worldtimeapiURL)
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
    } catch (error) {
      console.log('Current Time API Error', error)
      setIsLoading(false)
      // setError(error.message);
    }
  }

  const getIp = async () => {
    try {
      const { data } = await axios.get(ipstackURL)
      const { city, country_code } = data
      setCity(city)
      // console.log(city)
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
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    getIp()
    // eslint-disable-next-line
  }, [clientIP])

  const value = {
    currentTime,
    abbreviation,
    dayOfYear,
    dayOfWeek,
    weekNumber,
    city,
    countryCode,
    isLoading,
    currentTimezone,
    toggle,
    greeting,
    dayTime,
    isOpen,
  }

  return <ClockContext.Provider value={value}>{children}</ClockContext.Provider>
}

export { ClockContext, ClockProvider }

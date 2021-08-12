import styled from 'styled-components'

import dayBg from '../assets/desktop/bg-image-daytime.jpg'
import nightBg from '../assets/desktop/bg-image-nighttime.jpg'

export const Content = styled.div`
  background: ${({ dayTime }) =>
    dayTime
      ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${dayBg})`
      : `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${nightBg})`};
  background-position: center top;
  background-size: cover;
  overflow: hidden;
  height: 100vh;
  width: 100%;
`

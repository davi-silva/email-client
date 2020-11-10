import React, { useState, useEffect, useLayoutEffect } from 'react'

import Logo from '../../../assets/logo.png'
import ArrowUp from '../../../assets/icon_arrow01.svg'

import EmailListItem from './ListItem/EmailListItem'

import {
  MainListContainer,
  EmptyList,
  LogoImg,
  Header,
  HeaderP,
  MobileHeaderContainer,
  MobileHeader,
  Sep
} from '../../../styles/components/UI/List/EmailList'

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

const EmailList = ({ emails }) => {
  const [isMobile, setIsMobile] = useState(false)
  const [width, height] = useWindowSize();
  const [emailIndex, setEmailIndex] = useState([])

  useEffect(() => {
    if (width <= 880) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }, [width])

  const handleClickEmail = (index) => {
    let tempEmailIndex = [...emailIndex]

    if (tempEmailIndex.length === 0) {
      tempEmailIndex.push(index)
    } else {
      const myIndex = tempEmailIndex.indexOf(index)
      console.log('myIndex:', myIndex)
      if (tempEmailIndex.length > 0) {
        if (myIndex > -1) {
          console.log('found')
          tempEmailIndex.splice(myIndex, 1)
        } else {
          console.log('not found')
          tempEmailIndex.push(index)
        }
      }
    }
    setEmailIndex(tempEmailIndex)
  }

  return (
    <MainListContainer>
      {emails.length > 0 ? (
        <>
          {isMobile ? (
            <MobileHeaderContainer>
              <MobileHeader>
                <HeaderP className='highlight'>
                  From
                  <span>
                    <img src={ArrowUp} />
                  </span>
                </HeaderP>
                <Sep />
                <HeaderP>To</HeaderP>
                <Sep />
                <HeaderP>Subject</HeaderP>
                <Sep />
                <HeaderP>Date</HeaderP>
              </MobileHeader>
            </MobileHeaderContainer>
          ) : (
              <Header isMobile={isMobile}>
                <div>
                  <HeaderP>From</HeaderP>
                </div>
                <div>
                  <HeaderP>To</HeaderP>
                </div>
                <div>
                  <HeaderP>Subject</HeaderP>
                </div>
                <div>
                  <HeaderP className='highlight'>
                    Date
                    <span>
                      <img src={ArrowUp} />
                    </span>
                  </HeaderP>
                </div>
              </Header>
            )
          }
          {emails.map((email, index) => (
            <EmailListItem
              content={email}
              isMobile={isMobile}
              index={index}
              handleClickEmail={handleClickEmail}
              emailIndex={emailIndex}
            />
          ))}
        </>
      ) : (
          <EmptyList>
            <LogoImg src={Logo} />
          </EmptyList>
        )}
    </MainListContainer>
  )
}

export default EmailList

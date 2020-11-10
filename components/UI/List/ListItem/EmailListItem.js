import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import MailSP from '../../../../assets/icon_mail_sp.svg'
import RightArrow from '../../../../assets/icon_arrow02.svg'
import Clip from '../../../../assets/icon_clip.svg'

import {
  EmailContainer,
  EmailContent,
  EmailPIconDiv,
  EmailP,
  MultipleEmails,
  EmailContainerMobile,
  EmailContentMobile,
  TopDiv,
  MailIconDiv,
  MailIcon,
  FromToEmailsDivMobile,
  FromEmailMobile,
  ToEmailMobile,
  TimestampClipDivMobile,
  PaperClipMobile,
  Timestamp,
  ArrowMobile,
  SubjectMobile,
  MultipleEmailsMobile,
  PaperClip,
  Content
} from '../../../../styles/components/UI/List/ListItem/EmailListItem'

const EmailListItem = ({ content, isMobile, index, handleClickEmail, emailIndex }) => {
  const [currentIndexFound, setCurrentIndexFound] = useState(false)

  const convertEmailFromArrayToString = (emailsArray) => {
    let emailToString = ''
    if (emailsArray.length > 1) {
      emailToString += emailsArray[0] + ', ...'
    } else {
      emailToString += emailsArray[0]
    }
    return emailToString
  }

  useEffect(() => {
    emailIndex.indexOf(index) > -1 ? setCurrentIndexFound(true) : setCurrentIndexFound(false)
  }, [emailIndex])

  return (
    <>
      {isMobile ? (
        <EmailContainerMobile
          className={`mobile-${index}`}
          onClick={() => handleClickEmail(index)}
          emailIndex={emailIndex}
        >
          <EmailContentMobile>
            <TopDiv>
              <MailIconDiv>
                <MailIcon src={MailSP} />
              </MailIconDiv>
              <div>
                <FromToEmailsDivMobile>
                  <FromEmailMobile className='mobile-emails'>
                    {content.emails.from}
                  </FromEmailMobile>
                  <ToEmailMobile className='mobile-emails'>
                    {convertEmailFromArrayToString(content.emails.to)}
                    {content.emails.to.length > 1 && (
                      <MultipleEmailsMobile className='mobile-multipleEmails'>
                        {`+ ${content.emails.to.length - 1}`}
                      </MultipleEmailsMobile>
                    )}
                  </ToEmailMobile>
                </FromToEmailsDivMobile>
              </div>
              <TimestampClipDivMobile hasDocument={content.document !== undefined}>
                {content.document !== undefined && (
                  <a href={content.document.url} target='_blank'>
                    <PaperClipMobile>
                      <img src={Clip} />
                    </PaperClipMobile>
                  </a>
                )}
                <Timestamp className='mobile-Timestamp'>
                  {content.date}
                </Timestamp>
                <ArrowMobile>
                  <img src={RightArrow} />
                </ArrowMobile>
              </TimestampClipDivMobile>
            </TopDiv>
            <SubjectMobile className='mobile-subject'>{content.subject}</SubjectMobile>
          </EmailContentMobile>
        </EmailContainerMobile>
      ) : (
          <EmailContainer
            className={`desktop-${index}`}
            onClick={() => handleClickEmail(index)}
            emailIndex={emailIndex}
          >
            <EmailContent>
              <div className='sub'>
                <EmailP className='desktop-EmailP'>
                  {content.emails.from}
                </EmailP>
              </div >
              <div className='sub'>
                <EmailPIconDiv>
                  <EmailP className='desktop-EmailP'>
                    {convertEmailFromArrayToString(content.emails.to)}
                  </EmailP>
                  {content.emails.to.length > 1 && (
                    <MultipleEmails className='desktop-MultipleEmails'>
                      {`+ ${content.emails.to.length - 1}`}
                    </MultipleEmails>
                  )}
                </EmailPIconDiv>
              </div>
              <div className='sub'>
                <EmailPIconDiv>
                  <EmailP className='desktop-EmailP'>
                    {content.subject}
                  </EmailP>
                  {content.document !== undefined && (
                    <a href={content.document.url} target='_blank'>
                      <PaperClip>
                        <img src={Clip} />
                      </PaperClip>
                    </a>
                  )}
                </EmailPIconDiv>
              </div>
              <div className='sub'>
                <EmailP className='desktop-EmailP'>
                  {content.date}
                </EmailP>
              </div>
            </EmailContent >
          </EmailContainer >
        )
      }
      {currentIndexFound && (
        <Content dangerouslySetInnerHTML={{ __html: content.content }} />
      )}
    </>
  )
}

EmailListItem.propTypes = {
  content: PropTypes.shape().isRequired,
  isMobile: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  handleClickEmail: PropTypes.func.isRequired,
  emailIndex: PropTypes.number.isRequired
}

export default EmailListItem

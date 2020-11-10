import styled from 'styled-components'

export const EmailContainer = styled.div`
  width: 100%;
  height: 43px;
  border-bottom: 1px solid #f5f5f5;
  transition: all .15s ease-in-out;
  cursor: pointer;
  &:hover {
    background: #f6f8fa;
    .desktop-EmailP {
      color: #0033dd;
    }
    .desktop-MultipleEmails {
      background: #0033dd;
    }
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 4px, rgba(0, 0, 0, 0.15) 0px 0px 2px;
  }
`;

export const EmailContent = styled.div`
  height: 43px;
  display: grid;
  grid-template-columns: 1fr 1.5fr 2fr 0.5fr;
  .sub {
    padding-left: 13px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const EmailPIconDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;  
`;

export const EmailP = styled.p`
  color: #000;
  font-size: 16px;
  font-weight: 900;
  text-overflow: ellipsis;
  width: 100%;
  max-width: 80%;
  overflow-x: hidden;
  transition: all .15s ease-in-out;
  white-space: nowrap;
`;

export const MultipleEmails = styled.span`
  background: #888888;
  color: #fff;
  font-size: 14px;
  font-weight: 900;
  padding: 0px 4px;
  border-radius: 4px;
  float: right;
  transition: all .15s ease-in-out;
`;

export const PaperClip = styled.span`
  float: right;
  transition: all .15s ease-in-out;
  img {
    height: 17px;
    width: 17px;
  }
`;

export const Content = styled.div`
  height: 50vh;
  padding: 20px;
  overflow-y: scroll;
  box-shadow: inset rgba(0, 0, 0, 0.15) 0px 2px 4px, rgba(0, 0, 0, 0.15) 0px 0px 2px;
  &::-webkit-scrollbar {
    width: 10px;
    background-color: transparent;
  }
`;

export const EmailContainerMobile = styled.div`
  width: 100%;
  height: 95px;
  border-bottom: 1px solid #f5f5f5;
  transition: all .15s ease-in-out;
  cursor: pointer;
  &:hover {
    background: #f6f8fa;
    .mobile-Timestamp, .mobile-emails {
      color: #0033dd;
    }
    .mobile-multipleEmails {
      background: #0033dd;
    }
    .mobile-subject {
      color: #0033dd;
    }
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 4px, rgba(0, 0, 0, 0.15) 0px 0px 2px;
  }
`;

export const EmailContentMobile = styled.div`
  height: 95px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TopDiv = styled.div`
  display: grid;
  grid-template-columns: 35px 1fr 70px;
`;

export const MailIconDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const MailIcon = styled.img`
  height: 33px;
  width: 33px;
`;

export const FromToEmailsDivMobile = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FromEmailMobile = styled.p`
  font-size: 15px;
  font-weight: 900;
  color: #000;
  margin-bottom: 0.25rem;
`;

export const ToEmailMobile = styled.p`
  font-size: 15px;
  color: #000;
`;

export const TimestampClipDivMobile = styled.div`
  display: flex;
  flex-direction: row;
  height: 20px;
  justify-content: space-between;
  ${(props) => props.hasDocument ? 'width: 70px;' : 'width: 45px;'}
  ${(props) => props.hasDocument ? '' : 'transform: translateX(25px);'}
`;

export const PaperClipMobile = styled.span`
  float: right;
  transition: all .15s ease-in-out;
  img {
    height: 16px;
    width: 16px;
  }
`;

export const Timestamp = styled.p`
  font-size: 15px;
  font-weight: 900;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 20px;
`;

export const ArrowMobile = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  img {
    height: 8px;
    width: 8px;
  }
`

export const SubjectMobile = styled.p`
  font-size: 16px;
  font-weight: 900;
  color: #000;
  margin-top: 0.5rem;
`;

export const MultipleEmailsMobile = styled.span`
  background: #888888;
  color: #fff;
  font-size: 14px;
  font-weight: 900;
  padding: 0px 4px;
  border-radius: 4px;
  float: right;
  position: absolute;
  right: 20px;
`;

import React from 'react'

export const NewsletterSponsorshipLink = () => {

  const config = {
    contact: "https://sponsor.hackernoon.com/contact"
  }

  return <div style={{textAlign: 'center'}}>
    <br/>
    <a href={config.contact} target="_blank" style={{
      msoLineHeightRule: 'exactly',
      msTextSizeAdjust: '100%',
      WebkitTextSizeAdjust: '100%',
      color: '#656565',
      fontWeight: 'normal',
      textDecoration: 'underline'
    }}>
      Click Here To Sponsor A Newsletter by Hacker Noon
    </a>
  </div>
}


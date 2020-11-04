import React from 'react'

export const Image = ({href, src}) => {

    return <p dir="ltr" style={{textAlign: 'center', lineHeight: '150%', margin: '10px 0', padding: 0, msoLineHeightRule: 'exactly', msTextSizeAdjust: '100%', WebkitTextSizeAdjust: '100%', color: '#111111', fontFamily: '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif', fontSize: '18px'}}>
        <span style={{fontFamily: 'georgia,times,times new roman,serif'}}>
            <span style={{fontSize: '17px'}}>
                <a href={href} target="_blank" style={{msoLineHeightRule: 'exactly', msTextSizeAdjust: '100%', WebkitTextSizeAdjust: '100%', color: '#111111', fontWeight: 'bold', textDecoration: 'underline'}}>
                <img data-file-id={1041068} src={src} style={{border: '0px initial', width: '220px', height: '134px', margin: '0px', outline: 'none', textDecoration: 'none', msInterpolationMode: 'bicubic'}} alt="altText" /></a>
            </span>
        </span>
    </p>
}
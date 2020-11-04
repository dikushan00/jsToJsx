import React from 'react'

export const PreviewText = ({content}) => (
    <span className="mcnPreviewText" style={{
        display: 'none',
        fontSize: '0px',
        lineHeight: '0px',
        maxHeight: '0px',
        maxWidth: '0px',
        opacity: 0,
        overflow: 'hidden',
        visibility: 'hidden',
        msoHide: 'all'
    }}>{content}</span>
)

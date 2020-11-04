import React from 'react'

export const Section = ({content}) => (
    <table border={0} cellPadding={0} cellSpacing={0} width="100%" className="mcnTextBlock" style={{
        minWidth: '100%',
        borderCollapse: 'collapse',
        msoTableLspace: '0pt',
        msoTableRspace: '0pt',
        msTextSizeAdjust: '100%',
        WebkitTextSizeAdjust: '100%'
    }}>
        <tbody className="mcnTextBlockOuter">
        <tr>
            <td valign="top" className="mcnTextBlockInner" style={{
                paddingTop: '9px',
                msoLineHeightRule: 'exactly',
                msTextSizeAdjust: '100%',
                WebkitTextSizeAdjust: '100%'
            }}>
                {/*[if mso]>
				<table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
				<tr>
				<![endif]*/}
                {/*[if mso]>
				<td valign="top" width="600" style="width:600px;">
				<![endif]*/}
                <table align="left" border={0} cellPadding={0} cellSpacing={0} style={{
                    maxWidth: '100%',
                    minWidth: '100%',
                    borderCollapse: 'collapse',
                    msoTableLspace: '0pt',
                    msoTableRspace: '0pt',
                    msTextSizeAdjust: '100%',
                    WebkitTextSizeAdjust: '100%'
                }} width="100%" className="mcnTextContentContainer">
                    <tbody>
                    <tr>
                        <td valign="top" className="mcnTextContent" style={{
                            padding: '0px 18px 9px',
                            lineHeight: '150%',
                            msoLineHeightRule: 'exactly',
                            msTextSizeAdjust: '100%',
                            WebkitTextSizeAdjust: '100%',
                            wordBreak: 'break-word',
                            color: '#111111',
                            fontFamily: '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif ',
                            fontSize: '18 px',
                            textAlign: 'left'
                        }}>
                            {content}
                        </td>
                    </tr>
                    </tbody>
                </table>
                {/*[if mso]>
                            </td>
                            <![endif]*/}
                {/*[if mso]>
                            </tr>
                            </table>
                            <![endif]*/}
            </td>
        </tr>
        </tbody>
    </table>
)

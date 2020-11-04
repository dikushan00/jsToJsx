import React from 'react'
import {LogoTop} from './body/LogoTop'
import {LogoBottom} from './body/LogoBottom'
import {Footer} from './body/Footer'

export const MainBody = ({content, previewText}) => {

    return <div>
        {/*[if !gte mso 9]><!--*/}
        {previewText}
        {/*<![endif]*/}
        {/*{Использовать префиксы}*/}
        <table
            align="center"
            border={0}
            cellPadding={0}
            cellSpacing={0}
            height="100%"
            width="100%"
            id="bodyTable"
            style={{
                borderCollapse: 'collapse',
                msoTableLspace: '0pt',
                msoTableRspace: '0pt',
                msTextSizeAdjust: '100%',
                WebkitTextSizeAdjust: '100%',
                height: '100%',
                margin: 0,
                padding: 0,
                width: '100%',
                backgroundColor: '#ffffff'
            }}>
            <tbody>
            <tr>
                <td align="center" valign="top" id="bodyCell" style={{
                    msoLineHeightRule: 'exactly',
                    msTextSizeAdjust: '100%',
                    WebkitTextSizeAdjust: '100%',
                    height: '100%',
                    margin: 0,
                    padding: '10px',
                    width: '100%',
                    borderTop: 0
                }}>
                    {/* BEGIN TEMPLATE // */}
                    {/*[if (gte mso 9)|(IE)]>
                    <table align="center" border={0} cellSpacing={0} cellPadding={0} width={600} style={{width: '600px'}}>
                        <tbody><tr>
                            <td align="center" valign="top" width={600} style={{width: '600px'}}>
                            </td></tr></tbody></table>
                    <![endif]*/}
                        <table border={0} cellPadding={0} cellSpacing={0} width="100%" className="templateContainer"
                               style={{
                                   borderCollapse: 'collapse',
                                   msoTableLspace: '0pt',
                                   msoTableRspace: '0pt',
                                   msTextSizeAdjust: '100%',
                                   WebkitTextSizeAdjust: '100%',
                                   border: 0,
                                   maxWidth: '600px !important'
                               }}>
                            <tbody>
                            <tr>
                                <td valign="top" id="templatePreheader" style={{
                                    background: '#ffffff none no-repeat center/cover',
                                    msoLineHeightRule: 'exactly',
                                    msTextSizeAdjust: '100%',
                                    WebkitTextSizeAdjust: '100%',
                                    backgroundColor: '#ffffff',
                                    backgroundImage: 'none',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    borderTop: 0,
                                    borderBottom: 0,
                                    paddingTop: '9px',
                                    paddingBottom: '9px'
                                }}>
                                    <LogoTop/>
                                </td>
                            </tr>
                            <tr>
                                <td valign="top" id="templateHeader" style={{
                                    background: '#ffffff none no-repeat center/cover',
                                    msoLineHeightRule: 'exactly',
                                    msTextSizeAdjust: '100%',
                                    WebkitTextSizeAdjust: '100%',
                                    backgroundColor: '#ffffff',
                                    backgroundImage: 'none',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    borderTop: 0,
                                    borderBottom: 0,
                                    paddingTop: '9px',
                                    paddingBottom: 0
                                }}>
                                    {content}
                                </td>
                            </tr>
                            <tr>
                                <td valign="top" id="templateBody" style={{
                                    background: '#ffffff none no-repeat center/cover',
                                    msoLineHeightRule: 'exactly',
                                    msTextSizeAdjust: '100%',
                                    WebkitTextSizeAdjust: '100%',
                                    backgroundColor: '#ffffff',
                                    backgroundImage: 'none',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    borderTop: 0,
                                    borderBottom: '4px solid #00ff00',
                                    paddingTop: 0,
                                    paddingBottom: '9px'
                                }}>
                                    <table border={0} cellPadding={0} cellSpacing={0} width="100%"
                                           className="mcnDividerBlock" style={{
                                        minWidth: '100%',
                                        borderCollapse: 'collapse',
                                        msoTableLspace: '0pt',
                                        msoTableRspace: '0pt',
                                        msTextSizeAdjust: '100%',
                                        WebkitTextSizeAdjust: '100%',
                                        tableLayout: 'fixed !important'
                                    }}>
                                        <tbody className="mcnDividerBlockOuter">
                                        <tr>
                                            <td className="mcnDividerBlockInner" style={{
                                                minWidth: '100%',
                                                padding: '12px 18px',
                                                msoLineHeightRule: 'exactly',
                                                msTextSizeAdjust: '100%',
                                                WebkitTextSizeAdjust: '100%'
                                            }}>
                                                <table className="mcnDividerContent" border={0} cellPadding={0}
                                                       cellSpacing={0} width="100%" style={{
                                                    minWidth: '100%',
                                                    borderTop: '2px none #eaeaea',
                                                    borderCollapse: 'collapse',
                                                    msoTableLspace: '0pt',
                                                    msoTableRspace: '0pt',
                                                    msTextSizeAdjust: '100%',
                                                    WebkitTextSizeAdjust: '100%'
                                                }}>
                                                    <tbody>
                                                    <tr>
                                                        <td style={{
                                                            msoLineHeightRule: 'exactly',
                                                            msTextSizeAdjust: '100%',
                                                            WebkitTextSizeAdjust: '100%'
                                                        }}>
                                                            <span/>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                                {/*
                                                <td className="mcnDividerBlockInner" style={{padding: '18px'}}>
                                                <hr className="mcnDividerContent" style={{borderbottomColor: "none", borderLeftColor: "none", borderRightColor:"none", borderBottomWidth: "0", borderLeftWidth:"0", borderRightWidth:"0", marginTop:"0", marginRight:"0", marginBottom:"0", marginLeft:"0"}} />
                                            */}
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <LogoBottom />
                                </td>
                            </tr>
                            </tbody>
                            <Footer/>
                        </table>
                        {/*[if (gte mso 9)|(IE)]>
                            </td>
                            </tr>
                            </table>
                            <![endif]*/}
                        {/* // END TEMPLATE */}
                </td>
            </tr>
            </tbody>
        </table>
    </div>
}

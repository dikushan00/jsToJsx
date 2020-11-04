import React from 'react'

export const Divider = () => (
    <table border={0} cellPadding={0} cellSpacing={0} width="100%" className="mcnDividerBlock" style={{
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
                <table className="mcnDividerContent" border={0} cellPadding={0} cellSpacing={0} width="100%" style={{
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
                    <td class="mcnDividerBlockInner" style="padding: 18px;">
                    <hr class="mcnDividerContent" style="border-bottom-color:none; border-left-color:none; border-right-color:none; border-bottom-width:0; border-left-width:0; border-right-width:0; margin-top:0; margin-right:0; margin-bottom:0; margin-left:0;" />
                */}
            </td>
        </tr>
        </tbody>
    </table>
)
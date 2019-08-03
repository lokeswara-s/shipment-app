import React from 'react';
import Button from '@material-ui/core/Button';
import Img from './paypal.png';
const PaypalLogo=(props)=>{
    return(
            <table border="0" cellpadding="10" cellspacing="0" align="center">
                <tr>
                    <td align="center">
                        </td>
                        </tr>
                        <tr>
                            <td align="center">
                                <a title="Paypal" >
                                    <img src={Img} border="0" alt="PayPal Logo"/>
                                        </a>
                                        </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            <Button variant="outlined" color="primary" onClick={props.handleConnectPaypal}>Link your Paypal Account </Button>

                                            </td>
                                        </tr>
                                        </table>   
         )
}

export default PaypalLogo;
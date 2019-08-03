import React from 'react';
import Button from '@material-ui/core/Button';
import Img from './methods.png';
import TextField from '@material-ui/core/TextField';

const MethodsImg=(props)=>{
    return(
            <table border="0" cellpadding="10" cellspacing="0" align="center" style={{width:"100%"}}>
                <tr>
                    <td align="center">
                        </td>
                        </tr>
                        <tr>
                            <td align="center">
                                <a title="Paypal" >
                                    <img src={Img} border="0" alt="PayPal Logo" width="250"/>
                                        </a>
                                        </td>
                                        <td>
                                            <div style={{display:"flex", flexWrap: "wrap"}}>
                                            <div style={{flex: "1 0 100%", paddingRight:"2%"}}>
                                                <TextField
                                                    label="Cardholder name"                                                     
                                                    margin="normal"
                                                    fullWidth={true}
                                                     
                                                />
                                            </div>
                                            <div style={{flex: "1 0 100%", paddingRight:"2%"}}>
                                                <TextField
                                                    label="Card number"                                                     
                                                    margin="normal"
                                                    fullWidth={true}
                                                     
                                                />
                                            </div>
                                            <div style={{flex: "1 0 40%", paddingRight:"2%"}}>
                                                <TextField
                                                    label="CVV"                                                     
                                                    margin="normal"
                                                    fullWidth={true}
                                                     
                                                />
                                            </div>
                                            <div style={{flex: "1 0 40%", paddingRight:"2%"}}>
                                                <TextField
                                                    label="Exp Date"                                                     
                                                    margin="normal"
                                                    fullWidth={true}
                                                     
                                                />
                                            </div>
                                            <div style={{flex: "1 0 100%", paddingRight:"2%"}}>
                                                <Button
                                                    label="Cardholder name"                                                     
                                                    margin="normal"
                                                    fullWidth={true}
                                                    variant="contained"
                                                    color="secondary"
                                                    style={{marginTop:"3%"}} 
                                                 >Add Card</Button>
                                            </div>
                                            </div>

                                            </td>
                                        </tr>
                                        <tr>
                                            
                                        </tr>
                                        </table>   
         )
}

export default MethodsImg;
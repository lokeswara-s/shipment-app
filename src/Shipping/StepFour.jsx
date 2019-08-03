import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import WarningIcon from '@material-ui/icons/Warning';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
const StepFour = (props)=>{
    return (
        <div style={{display:"flex", flexWrap:"wrap"}}> 
            <div  style={{flex: "1 0 40%", paddingRight:"2%"}}>
             <Card >
                <CardContent>
                    <Typography className={"Review "} color="textSecondary" gutterBottom>
                        Sender Information
                    </Typography>
                    <Typography variant="h5" component="h2">
                        {                             
                            ['shipmentFname', 'shipmentLname', 'shipmentEmail', 'shipmentPhone', 'shipmentAddress1', 'shipmentAddress2'].map(item=>{
                                return <p style={{margin:0, fontSize:"12px"}}>{props.state[item]|| "NA"}</p>
                            })
                        }                     
                    </Typography>
                    <Typography  color="textSecondary">
                     
                    </Typography>
                    <Typography variant="body2" component="p">

                     </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" variant="outlined" onClick={()=>{props.handleStepper(0)}} color="secondary">Edit</Button>
                </CardActions>
                </Card>
            </div>
            <div  style={{flex: "1 0 40%", paddingRight:"2%"}}>
             <Card >
                <CardContent>
                    <Typography className={"Review "} color="textSecondary" gutterBottom>
                    Receipent Information
                    </Typography>
                    <Typography variant="h5" component="h2">
                        {                             
                            ['recipentFname', 'recipentMname', 'recipentEmail', 'receipentPhone', 'receipentAddress1', 'receipentAddress2'].map(item=>{
                                return <p style={{margin:0, fontSize:"12px"}}>{props.state[item] || "NA"}</p>
                            })
                        }                     
                    </Typography>
                    <Typography  color="textSecondary">
                     
                    </Typography>
                    <Typography variant="body2" component="p">

                     </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" variant="outlined" onClick={()=>{props.handleStepper(1)}} color="secondary">Edit</Button>
                </CardActions>
                </Card>
            </div>
            <div  style={{flex: "1 0 80%", paddingRight:"2%", paddingTop:"2%"}}>
             <Card >
                <CardContent>
                    <Typography className={"Review "} color="textSecondary" gutterBottom>
                        Verify your shipping Information
                    </Typography>
                    <Typography variant="h5" component="h2">
                        <p style={{margin:0, fontSize:"12px"}}>Source: {props.state.receipentCity}</p>    
                        <p style={{margin:0, fontSize:"12px"}}>Destination: {props.state.shipmentCity}</p>
                        <p style={{margin:0, fontSize:"12px"}}>Weight: {props.state.weight }</p>
                        <p style={{margin:0, fontSize:"12px"}}>Delivery speed: {props.state.deliverySpeed }</p>
                        <p style={{margin:0, fontSize:"12px"}}>Pickup Type: {props.state.pickupType }</p>
                        <p style={{margin:0, fontSize:"12px"}}>Notes: {props.state.additionalNotes }</p>                    
                    </Typography>
                    <Typography className={"Review "} color="textSecondary" gutterBottom>
                        Cost Information
                    </Typography>
                    <Typography variant="body2" component="p">
                        <p style={{margin:0, fontSize:"12px"}}>Shipping Charges: <b>$98</b></p>    
                        <p style={{margin:0, fontSize:"12px"}}>Package Insurence Charges: <b>$2</b></p>
                        <p style={{margin:0, fontSize:"12px"}}>Material Charges: <b>$20</b></p>    
                        <p style={{margin:0, fontSize:"12px"}}>Total: <b>$170</b></p>
                     </Typography>
                </CardContent>
                </Card>
            </div>
            <div style={{flex: "1 0 100%", paddingRight:"2%"}}>
                <Button variant="contained" color="primary" style={{margin:"2%", float:"right"}} onClick={()=>{
                    if(props.validateFirst()){
                        props.handleNext()
                    }
                }}>
                    Finish
                </Button>
                {
                    props.state.activeStep > 0 &&
                    <Button variant="contained" color="primary" style={{margin:"2%", float:"right"}} onClick={props.handlePrevious}>
                        Back
                    </Button>
                }
            </div>
        </div>);
}

export default StepFour
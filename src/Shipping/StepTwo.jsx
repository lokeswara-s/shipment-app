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
const StepTwo = (props)=>{
    return (
        <div style={{display:"flex", flexWrap:"wrap"}}> 
            <div style={{flex: "1 0 30%", paddingRight:"2%"}}>
                <TextField
                    error = {props.state.hasErros && !props.state.recipentFname}
                    id="outlined-fname-input"
                    label="First name"
                    margin="normal"
                    errorTex
                    value={props.state.recipentFname}
                    fullWidth={true}
                    onChange={(e)=>{props.handleChange("recipentFname",e.target.value)}}
                 />
            </div>
            <div style={{flex: "1 0 30%", paddingRight:"2%"}}>
                <TextField
                    error = {props.state.hasErros && !props.state.recipentLname}
                    id="outlined-fname-input"
                    label="Last name"
                    margin="normal"
                    value={props.state.recipentLname}
                    fullWidth={true}
                    onChange={(e)=>{props.handleChange("recipentLname",e.target.value)}}
                 />
            </div>
            <div style={{flex: "1 0 40%", paddingRight:"2%"}}>
                <TextField
                error = {props.state.hasErros && !props.state.recipentEmail}
                    id="outlined-fname-input"
                    label="Email"
                    margin="normal"
                    value={props.state.recipentEmail}
                    fullWidth={true}
                    onChange={(e)=>{props.handleChange("recipentEmail",e.target.value)}}    
                 />
            </div>
            <div style={{flex: "1 0 50%", paddingRight:"2%"}}>
                <TextField
                error = {props.state.hasErros && !props.state.receipentPhone}
                    id="outlined-fname-input"
                    label="Phone"
                    value={props.state.receipentPhone}
                    margin="normal"
                    fullWidth={true}
                    onChange={(e)=>{props.handleChange("receipentPhone",e.target.value)}}

                 />
            </div>
            <div style={{flex: "1 0 30%", paddingRight:"2%"}}>
                <TextField
                error = {props.state.hasErros && !props.state.receipentAddress1}
                    id="outlined-fname-input"
                    label="Address Line 1"
                    value={props.state.receipentAddress1}
                    margin="normal"
                    fullWidth={true}
                    onChange={(e)=>{props.handleChange("receipentAddress1",e.target.value)}}
                 />
            </div>
            <div style={{flex: "1 0 30%", paddingRight:"2%"}}>
                <TextField
                error = {props.state.hasErros && !props.state.receipentAddress2}
                    id="outlined-fname-input"
                    label="Address Line 2"
                    value={props.state.receipentAddress2}
                    margin="normal"
                    fullWidth={true}
                    onChange={(e)=>{props.handleChange("receipentAddress2",e.target.value)}}
                 />
            </div>
            <div style={{flex: "1 0 30%", paddingRight:"2%"}}>
                <FormControl fullWidth={true} margin="normal"> 
                    <InputLabel htmlFor="country-simple">Country</InputLabel>
                    <Select
                error = {props.state.hasErros && !props.state.receipentCountry}
                    onChange={(e)=>{props.handleChange("receipentCountry",e.target.value)}}
                    value={props.state.receipentCountry}
                     >
                    <MenuItem value={'india'}>India</MenuItem>
                    <MenuItem value={'usa'}>USA</MenuItem>
                    <MenuItem value={'china'}>China</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div style={{flex: "1 0 30%", paddingRight:"2%"}}>
                <FormControl fullWidth={true} margin="normal"> 
                    <InputLabel htmlFor="state-simple">State</InputLabel>
                    <Select
                error = {props.state.hasErros && !props.state.shipmentState}
                            value={props.state.shipmentState}
                            onChange={(e)=>{props.handleChange("shipmentState",e.target.value)}}
                        >
                        <MenuItem value={'telengana'}>Telangana</MenuItem>
                        <MenuItem value={'andhra_pradesh'}>Andhra Pradesh</MenuItem>
                        <MenuItem value={'karnataka'}>Karnataka</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div style={{flex: "1 0 30%", paddingRight:"2%"}}>
                <FormControl fullWidth={true} margin="normal"> 
                    <InputLabel htmlFor="state-simple">City</InputLabel>
                    <Select
                error = {props.state.hasErros && !props.state.receipentCity}
                            value={props.state.receipentCity}
                            onChange={(e)=>{props.handleChange("receipentCity",e.target.value)}}
                        >
                        <MenuItem value={'hyderbad'}>Hyderabad</MenuItem>
                        <MenuItem value={'warangal'}>Warangal</MenuItem>
                        <MenuItem value={'secundarabad'}>Secundrabad</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div style={{flex: "1 0 30%", paddingRight:"2%"}}>
                <TextField
                    error = {props.state.hasErros && !props.state.receipentzipCode}
                    id="outlined-fname-input"
                    label="Zipcode"
                    value={props.state.receipentzipCode}
                    margin="normal"
                    fullWidth={true}
                    onChange={(e)=>{props.handleChange("receipentzipCode",e.target.value)}}
                 />
            </div>
            <div style={{flex: "1 0 100%", paddingRight:"2%"}}>
                <Typography style={{marginTop:"5%", marginBottom: "-2%"}}>
                    <em>Additional information related to delivery</em>
                </Typography>
            </div>
            <div style={{flex: "1 0 30%", paddingRight:"2%"}}>
                <FormControl fullWidth={true} margin="normal"> 
                        <InputLabel htmlFor="country-simple">Receive Type</InputLabel>
                        <Select
                            error = {props.state.hasErros && !props.state.receiveType}
                            value={props.state.receiveType}
                            onChange={(e)=>{props.handleChange("receiveType",e.target.value)}}
                            >
                            <MenuItem value={'door_pickup'}>Leave with Neighbour</MenuItem>
                            <MenuItem value={'near_by_store'}>Pick up from store</MenuItem>
                            <MenuItem value={'near_by_store'}>Door delivery</MenuItem>
                        </Select>
                    </FormControl>
            </div>
            <div style={{flex: "1 0 30%", paddingRight:"2%"}}>
                <FormControlLabel
                    style={{padding:"6%"}}
                    control={
                        <Checkbox
                            checked={props.state.return_to_sender}
                            onChange={(e)=>{props.handleChange("return_to_sender",e.target.checked)}}
                            value={true}
                        />
                    }
                    label="Return to sender if receiver unavailable"
                />
            </div>
            <div style={{flex: "1 0 100%", paddingRight:"2%"}}>
                <Button variant="contained" color="primary" style={{margin:"2%", float:"right"}} onClick={()=>{
                    if(props.validateSecond()){
                        props.handleNext()
                    }
                }}>
                    Next
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

export default StepTwo
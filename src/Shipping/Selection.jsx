import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';
import Data from '../Shipping/Data.json'
class Selection extends React.Component{
 
    state = {
        activeStep: 0,
        shipmentFname: "",
        shipmentMname: "",
        shipmentLname: "",
        shipmentEmail: "",
        shipmentPhone: "",
        shipmentAddress1: "",
        shipmentAddress2: "",
        shipmentCountry : "",
        shipmentCity: "",
        shipmentzipCode: "",
        contentOfPackage: "",
        packageType:"",
        weight:"",
        deliverySpeed:"",
        pickupType:"",
        insurePackage:"",
        additionalNotes: "",
        shipmentState:"",
        hasErros:false,
        openError:false,
        enableSuccess: false,
        recipentFname:"",
        recipentLname:"",
        recipentMname:"",
        recipentEmail:"",
        receipentPhone:"",
        receipentAddress1: "",
        receipentAddress2: "",
        receipentCountry : "",
        receipentCity: "",
        receipentzipCode: "",
        selectedTab:0,
        barCommon:false,
        commonMessage:"",
        searchCity:"Hyderabad"
    }


    handleNext=()=>{
        this.setState({
            activeStep: this.state.activeStep + 1
        },()=>{
            if(this.state.activeStep === 4){
                setTimeout(()=>{
                    this.setState({
                        enableSuccess: true
                    })
                }, 1000)
            }
        })
    }

    handleCodChange=(key, value)=>{
        this.setState({
            [key]: value
        })
    }

    handleConnectPaypal=()=>{
        this.setState({
            barCommon: true,
            commonMessage: "Unable to connect to Paypal, Please try later."
        })
    }

    handleChange=(key, value)=>{
        this.setState({
            [key]: value
        })
    }

    validateFirst=()=>{
        let hasErros =false;
        let firstStep = {
            shipmentFname: "",
            shipmentMname: "",
            shipmentLname: "",
            shipmentEmail: "",
            shipmentPhone: "",
            shipmentAddress1: "",
            shipmentAddress2: "",
            shipmentCountry : "",
            shipmentCity: "",
            shipmentzipCode: "",
            contentOfPackage: "",
            packageType:"",
            weight:"",
            deliverySpeed:"",
            pickupType:"",
            insurePackage:"",
            additionalNotes: "",
            shipmentState:""
        }
        Object.keys(firstStep).map(item=>{
            if(!this.state[item]){
                this.setState({
                    hasErros: true
                });
                hasErros = true;
            }
        })
        if(!hasErros){
            this.setState({
                openError:false,
                hasErros: false
            })
            return true;
        }else{
            this.setState({
                openError:true
            })
        }
    }

    validateSecond=()=>{
        let hasErros =false;
        let secondStep = {
            recipentFname:"",
            recipentLname:"",
            recipentEmail:"",
            receipentPhone:"",
            receipentAddress1: "",
            receipentAddress2: "",
            receipentCountry : "",
            receipentCity: "",
            receipentzipCode: "",
        }
        Object.keys(secondStep).map(item=>{
            if(!this.state[item]){
                this.setState({
                    hasErros: true
                });
                hasErros = true;
            }
        })
        if(!hasErros){
            return true;
        }else{
            this.setState({
                openError:true
            })
        }
    }

    handleTabChange=(e, value)=>{
        this.setState({
            selectedTab: value
        })
    }

    handleStepper=(v)=>{
        this.setState({
            activeStep: v
        })
    }

    handlePrevious=()=>{
        this.setState({
            activeStep: this.state.activeStep - 1
        })
    } 

    render(){

        let {
            activeStep
        } = this.state;
        return(
            <div style={{margin:"3%",textAlign:"left", display:"flex", flexWrap:"wrap"}}>
                <div style={{flex:"1 0 0"}}>
                <Stepper activeStep={this.state.activeStep} orientation="vertical">
                    <Step key={"Shipment Information"}>
                        <StepLabel><span style={{fontFamily:"segoe ui", fontSize:"20px"}}>Shipment Information</span></StepLabel>
                        <StepContent>
                        <Typography>
                            Enter sendor information in the below form, All fields are manditory
                        </Typography>
                        <div>
                            <SectionOne {...this} />
                        </div>
                        </StepContent>
                    </Step>

                    <Step key={"Receipent Information"}>
                        <StepLabel><span style={{fontFamily:"segoe ui", fontSize:"20px"}}>Receipent Information</span></StepLabel>
                        <StepContent>
                        <Typography>
                            Enter receiver information in the below form.
                        </Typography>
                            <div>
                                <StepTwo {...this} />
                            </div>
                        </StepContent>
                    </Step>

                    <Step key={"Payment Information"}>
                        <StepLabel><span style={{fontFamily:"segoe ui", fontSize:"20px"}}>Payment Information</span></StepLabel>
                        <StepContent>
                        <Typography>                            
                        </Typography>
                            <div>
                                <StepThree {...this}/>
                            </div>
                        </StepContent>
                    </Step>
                    <Step key={"Review Shipping"}>
                        <StepLabel><span style={{fontFamily:"segoe ui", fontSize:"20px"}}>Review Shipping Information</span></StepLabel>
                        <StepContent>
                        <Typography>                            
                        </Typography>
                            <div>
                                <StepFour {...this}/>
                            </div>
                        </StepContent>
                    </Step>
                </Stepper>
                
                </div>
                <div style={{flex:"1 0 0"}}>
                {
                        this.state.activeStep === 0 &&
                        <span><h1>Source: <p style={{fontWeight:"400", textTransform:"capitalize", display:"inline"}}>{this.state.shipmentCity}</p></h1>
                        <div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src={`https://maps.google.com/maps?q=${this.state.shipmentCity}&t=&z=13&ie=UTF8&iwloc=&output=embed`} frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div></span>
                    }
                    {
                        this.state.activeStep >= 1 && this.state.activeStep <= 3 &&
                        <span><h1>Destination: <p style={{fontWeight:"400", textTransform:"capitalize", display:"inline"}}>{this.state.receipentCity}</p></h1>
                        <div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src={`https://maps.google.com/maps?q=${this.state.receipentCity}&t=&z=13&ie=UTF8&iwloc=&output=embed`} frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div></span>
                    }
                    <div style={{flex:"1 0 0", paddingTop:"25%"}}>
                    {
                        this.state.activeStep === 4 && this.state.enableSuccess &&
                        <div className="svg-container">    
                        <svg className="ft-green-tick" xmlns="http://www.w3.org/2000/svg" height="100" width="100" viewBox="0 0 48 48" aria-hidden="true">
                            <circle className="circle" fill="#5bb543" cx="24" cy="24" r="22"/>
                            <path className="tick" fill="none" stroke="#FFF" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M14 27l5.917 4.917L34 17"/>
                        </svg>
                        <h3 style={{color:"#219a00"}}>Shipment created Successfully</h3>
                    </div>
                    }

                    </div>
                </div>

                <div>
                <Snackbar
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                    }}
                    SnackbarContentProps={{style:{ backgroundColor: 'teal', color: 'coral' }}} 
                    open={this.state.openError}
                    autoHideDuration={6000}
                    onClick={()=>{this.setState({openError: false})}}

                    message={<span id="client-snackbar" ><WarningIcon></WarningIcon><span style={{marginTop:"5px", marginLeft:"10px", float:"right"}}> Please fill the details.</span> </span>}
                    action={[
                    <IconButton
                        key="close"
                        aria-label="close"
                        color="inherit"
                        onClick={()=>{this.setState({openError: false})}}
                    >
                        <CloseIcon />
                    </IconButton>,
                    ]}
                /> 
                <Snackbar
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                    }}
                    SnackbarContentProps={{style:{ backgroundColor: 'teal', color: 'coral' }}} 
                    open={this.state.barCommon}
                    autoHideDuration={6000}
                    onClick={()=>{this.setState({barCommon: false})}}

                    message={<span id="client-snackbar" ><WarningIcon></WarningIcon><span style={{marginTop:"5px", marginLeft:"10px", float:"right"}}> {this.state.commonMessage} </span> </span>}
                    action={[
                    <IconButton
                        key="close"
                        aria-label="close"
                        color="inherit"
                        onClick={()=>{this.setState({barCommon: false})}}
                    >
                        <CloseIcon />
                    </IconButton>,
                    ]}
                />
                </div>
            </div>
        )
    }
}

const SectionOne=(props)=>{
    return (
        <div style={{display:"flex", flexWrap:"wrap"}}> 
            <div style={{flex: "1 0 30%", paddingRight:"2%"}}>
                <TextField
                    error = {props.state.hasErros && !props.state.shipmentFname}
                    id="outlined-fname-input"
                    label="First name"
                    margin="normal"
                    errorTex
                    value={props.state.shipmentFname}
                    fullWidth={true}
                    onChange={(e)=>{props.handleChange("shipmentFname",e.target.value)}}
                 />
            </div>
            <div style={{flex: "1 0 30%", paddingRight:"2%"}}>
                <TextField
                    error = {props.state.hasErros && !props.state.shipmentMname}
                    id="outlined-fname-input"
                    label="Middle name"
                    margin="normal"
                    value={props.state.shipmentMname}
                    fullWidth={true}
                    onChange={(e)=>{props.handleChange("shipmentMname",e.target.value)}}
                 />
            </div>
            <div style={{flex: "1 0 30%", paddingRight:"2%"}}>
                <TextField
                error = {props.state.hasErros && !props.state.shipmentLname}
                    id="outlined-fname-input"
                    label="Last name"
                    margin="normal"
                    value={props.state.shipmentLname}
                    fullWidth={true}  
                    onChange={(e)=>{props.handleChange("shipmentLname",e.target.value)}}          
                        
                    />
            </div>
            <div style={{flex: "1 0 40%", paddingRight:"2%"}}>
                <TextField
                error = {props.state.hasErros && !props.state.shipmentEmail}
                    id="outlined-fname-input"
                    label="Email"
                    margin="normal"
                    value={props.state.shipmentEmail}
                    fullWidth={true}
                    onChange={(e)=>{props.handleChange("shipmentEmail",e.target.value)}}    
                 />
            </div>
            <div style={{flex: "1 0 50%", paddingRight:"2%"}}>
                <TextField
                error = {props.state.hasErros && !props.state.shipmentPhone}
                    id="outlined-fname-input"
                    label="Phone"
                    value={props.state.shipmentPhone}
                    margin="normal"
                    fullWidth={true}
                    onChange={(e)=>{props.handleChange("shipmentPhone",e.target.value)}}

                 />
            </div>
            <div style={{flex: "1 0 30%", paddingRight:"2%"}}>
                <TextField
                error = {props.state.hasErros && !props.state.shipmentAddress1}
                    id="outlined-fname-input"
                    label="Address Line 1"
                    value={props.state.shipmentAddress1}
                    margin="normal"
                    fullWidth={true}
                    onChange={(e)=>{props.handleChange("shipmentAddress1",e.target.value)}}
                 />
            </div>
            <div style={{flex: "1 0 30%", paddingRight:"2%"}}>
                <TextField
                error = {props.state.hasErros && !props.state.shipmentAddress2}
                    id="outlined-fname-input"
                    label="Address Line 2"
                    value={props.state.shipmentAddress2}
                    margin="normal"
                    fullWidth={true}
                    onChange={(e)=>{props.handleChange("shipmentAddress2",e.target.value)}}
                 />
            </div>
            <div style={{flex: "1 0 30%", paddingRight:"2%"}}>
                <FormControl fullWidth={true} margin="normal"> 
                    <InputLabel htmlFor="country-simple">Country</InputLabel>
                    <Select
                error = {props.state.hasErros && !props.state.shipmentCountry}
                    onChange={(e)=>{props.handleChange("shipmentCountry",e.target.value)}}
                    value={props.state.shipmentCountry}
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
                error = {props.state.hasErros && !props.state.shipmentCity}
                            value={props.state.shipmentCity}
                            onChange={(e)=>{props.handleChange("shipmentCity",e.target.value)}}
                        >
                        {
                            Data.map(item=>{
                                if(item.label !== props.state.receipentCity){
                                return <MenuItem value={item.label}>{item.label}</MenuItem>}
                            })
                        }
                    </Select>
                </FormControl>
            </div>
            <div style={{flex: "1 0 30%", paddingRight:"2%"}}>
                <TextField
                error = {props.state.hasErros && !props.state.shipmentzipCode}
                    id="outlined-fname-input"
                    label="Zipcode"
                    value={props.state.shipmentzipCode}
                    margin="normal"
                    fullWidth={true}
                    onChange={(e)=>{props.handleChange("shipmentzipCode",e.target.value)}}
                 />
            </div>
            <div style={{flex: "1 0 100%", paddingRight:"2%"}}>
                <Typography style={{marginTop:"5%", marginBottom: "-2%"}}>
                    <em>Please provide package information in brief</em>
                </Typography>
            </div>
            <div style={{flex: "1 0 30%", paddingRight:"2%"}}>
                <TextField
                error = {props.state.hasErros && !props.state.contentOfPackage}
                    id="outlined-fname-input"
                    label="Contents in the package"
                    margin="normal"
                    value={props.state.contentOfPackage}
                    fullWidth={true}
                    onChange={(e)=>{props.handleChange("contentOfPackage",e.target.value)}}
                 />
            </div>
            <div style={{flex: "1 0 30%", paddingRight:"2%"}}>
                  <FormControl fullWidth={true} margin="normal"> 
                    <InputLabel htmlFor="country-simple">Package Type</InputLabel>
                    <Select
                error = {props.state.hasErros && !props.state.packageType}
                    
                    value={props.state.packageType}
                    
                    onChange={(e)=>{props.handleChange("packageType",e.target.value)}}
                    >
                    <MenuItem value={'glass'}>Glass</MenuItem>
                    <MenuItem value={'chemicals'}>Chemicals</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div style={{flex: "1 0 30%", paddingRight:"2%"}}>
                <TextField
                error = {props.state.hasErros && !props.state.weight}
                    id="outlined-fname-input"
                    label="Weight"
                    margin="normal"
                    value={props.state.weight}
                    fullWidth={true}
                    onChange={(e)=>{props.handleChange("weight",e.target.value)}}
                 />
            </div>
            <div style={{flex: "1 0 30%", paddingRight:"2%"}}>
            <FormControl fullWidth={true} margin="normal"> 
                    <InputLabel htmlFor="country-simple">Delivery Speed</InputLabel>
                    <Select
                error = {props.state.hasErros && !props.state.deliverySpeed}
                    
                    value={props.state.deliverySpeed}
                    
                    onChange={(e)=>{props.handleChange("deliverySpeed",e.target.value)}}
                    >
                    <MenuItem value={'express'}>Express</MenuItem>
                    <MenuItem value={'normal'}>Normal</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div style={{flex: "1 0 30%", paddingRight:"2%"}}>
                <FormControl fullWidth={true} margin="normal"> 
                        <InputLabel htmlFor="country-simple">Pickup Type</InputLabel>
                        <Select
                error = {props.state.hasErros && !props.state.pickupType}
                            value={props.state.pickupType}
                            onChange={(e)=>{props.handleChange("pickupType",e.target.value)}}
                            >
                            <MenuItem value={'door_pickup'}>Door Pickup</MenuItem>
                            <MenuItem value={'near_by_store'}>Near by Store</MenuItem>
                        </Select>
                    </FormControl>
            </div>
            <div style={{flex: "1 0 30%", paddingRight:"2%"}}>
                <FormControl fullWidth={true} margin="normal"> 
                        <InputLabel htmlFor="country-simple">Insure Package</InputLabel>
                        <Select
                error = {props.state.hasErros && !props.state.insurePackage}
                            value={props.state.insurePackage}
                            onChange={(e)=>{props.handleChange("insurePackage",e.target.value)}}
                            >
                            <MenuItem value={'yes'}>Yes</MenuItem>
                            <MenuItem value={'no'}>No</MenuItem>
                        </Select>
                    </FormControl>
            </div>
            <div style={{flex: "1 0 30%", paddingRight:"2%"}}>
                <TextField
                error = {props.state.hasErros && !props.state.additionalNotes}
                    id="outlined-fname-input"
                    label="Additional notes"
                    value={props.state.additionalNotes}
                    margin="normal"
                    fullWidth={true}
                    onChange={(e)=>{props.handleChange("additionalNotes",e.target.value)}}
                 />
            </div>
            <div style={{flex: "1 0 100%", paddingRight:"2%"}}>
                <Button variant="contained" color="primary" style={{margin:"2%", float:"right"}} onClick={()=>{
                    if(props.validateFirst()){
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
        </div>
    )
}


export default Selection;

import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';

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
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import PaypalLogo from './Partials/PaypaLogo';
import MethodsImg from './Partials/methods';
function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        <Box p={3}>{children}</Box>
      </Typography>
    );
  }

const StepThree = (props)=>{
    return(
        <div style={{display:"flex", flexWrap:"wrap"}}> 
            <div style={{flex: "1 0 100%", paddingRight:"2%"}}>
                <div>
                    <AppBar position="static">
                        <Tabs value={props.state.selectedTab} onChange={props.handleTabChange} aria-label="simple tabs example">
                        <Tab label="Cash on Delivery" style={{textTransform:"capitalize"}} />
                        <Tab label="Paypal" style={{textTransform:"capitalize"}} />
                        <Tab label="Debit/Credit Card"  style={{textTransform:"capitalize"}}  />
                        </Tabs>
                    </AppBar>
                    <TabPanel value={props.state.selectedTab} index={0}>
                    <FormControlLabel
                        control={
                            <Switch checked={props.state.selectCod} onChange={(e)=>{
                                props.handleCodChange('selectCod', e.target.checked)
                            }} value="yes" color="primary" />
                        }
                        label="Pay shipping charges at the time of delivery"
                        />
                    </TabPanel>
                    <TabPanel value={props.state.selectedTab} index={1}>
                        <PaypalLogo {...props} />            
                    </TabPanel>
                    <TabPanel value={props.state.selectedTab} index={2}>
                        <MethodsImg />                  
                    </TabPanel>
                    </div>
             </div>
             <div style={{flex: "1 0 100%", paddingRight:"2%"}}>
                <p style={{paddingLeft:"4%", color:"red"}}><em>You should select valid Payment type</em></p>
                <Button variant="contained" color="primary" style={{margin:"2%", float:"right"}} onClick={()=>{
                    if(props.validateFirst()){
                        props.handleNext()
                    }
                }} disabled={!props.state.selectCod}>
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
    );
}

export default StepThree;
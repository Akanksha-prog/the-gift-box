import mobiscroll from '@mobiscroll/react-lite';
import '@mobiscroll/react-lite/dist/css/mobiscroll.min.css';
import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {DatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
  });

const Customize_2 = () => {

    const [date, changeDate] = useState(new Date());
    const classes = useStyles();
   
    return (
        <section className="customize">
            <div className="container" data-aos="fade-up" data-aos-delay="1000">
                <div className="row customize-row">
                    <div className="customize-img">
                        <h4>Select a Date for Delivery</h4>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <DatePicker
                                autoOk
                                orientation="landscape"
                                variant="static"
                                openTo="date"
                                value={date}
                                onChange={changeDate}
                                className={classes.root}
                            />
                        </MuiPickersUtilsProvider>
                    </div>
                    <div className="customize-form">
                        <mobiscroll.FormGroup>
                            <mobiscroll.Input icon="user4" inputStyle="outline" labelStyle="floating" placeholder="Name of the reciever">Name</mobiscroll.Input>
                            <mobiscroll.Input icon="line-user" inputStyle="outline" labelStyle="floating" >Age</mobiscroll.Input>
                            <mobiscroll.Input icon="office" inputStyle="outline" labelStyle="floating" >Profession</mobiscroll.Input>
                            <mobiscroll.Input icon="earth" inputStyle="outline" labelStyle="floating" >Address To Deliver</mobiscroll.Input>
                        </mobiscroll.FormGroup> 
                    </div>
                </div>
            </div>
        </section>

        
    )
}
export default Customize_2;

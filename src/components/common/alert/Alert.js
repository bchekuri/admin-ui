import React from 'react';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import WarningIcon from '@material-ui/icons/Warning';
import InfoIcon from '@material-ui/icons/Info';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import AlertStyles from './AlertStyles';
import { ERROR, WARN, INFO, SUCCESS } from '../../../constants/AlertType';


function Alert({ message, severity, show }) {
    const classes = AlertStyles();
    const supplementClass = classes.standardError;

    const alertIcon = function () {
        switch (severity) {
            case ERROR:
                return <ErrorOutlineIcon/>
            case WARN:
                return <WarningIcon/>
            case INFO:
                return <InfoIcon/>
            case SUCCESS:
                return <CheckCircleOutlineIcon/>
            default:
                return <ErrorOutlineIcon/>
        }
    };

    return (
        <>
            <div className={show === 'true' ? `${classes.alertBox} ${supplementClass}` : classes.hideAlert} role="alert">
                <div className={classes.avatar}>
                    {alertIcon(severity)}
                </div>
                <div className={classes.message}>
                    {message}
                </div>
            </div>
        </>
    );
}


export default Alert;
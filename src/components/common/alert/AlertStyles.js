import { makeStyles } from '@material-ui/core/styles';

const AlertStyles = makeStyles((theme) => ({
    alertBox: {
        padding: theme.spacing(1.5, 2),
        display: "flex",
        overflowWrap: "break-word"
    },
    avatar: {
        display: "flex",
        padding: theme.spacing(1, 0),
        marginRight: theme.spacing(1)
    },
    message: {
        padding: theme.spacing(1.2, 0)
    },
    standardError: {
        color: theme.palette.secondary.main
    },
    standardWarn: {
        color: theme.palette.warning.main
    },
    standardInfo: {
        color: theme.palette.primary.main
    },
    standardSuccess: {
        color: theme.palette.success.main
    },
    hideAlert: {
        display: "none"
    }
}));

export default AlertStyles;
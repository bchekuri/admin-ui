import { makeStyles } from '@material-ui/core/styles';

const LoginStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        padding: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
    form: {
        width: '100%'
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default LoginStyles;
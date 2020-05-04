import React, { useState } from 'react';
import { Container,
    Typography,
    Avatar,
    TextField,
    FormControlLabel,
    Button,
    Grid,
    Box,
    Checkbox,
    Link,
    Paper } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Copyright from '../common/copyright/Copyright'
import LoginStyles from './LoginStyles';
import * as LoginAction from '../../redux/actions/UserAction';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from 'prop-types';
import Alert from '../common/alert/Alert';
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';
import { ERROR } from '../../constants/AlertType';


function Login({ actions }) {
    const classes = LoginStyles();
    const [credential, setCredential] = useState({
        username: '',
        password: ''
    });

    const error = useSelector(state => state.user.error);

    const [ disableSubmit, setDisableSubmit ] = useState(true);

    const history = useHistory();

    const handleSubmit = function (event) {
        event.preventDefault();
        const { username, password } = credential;
        actions.initiateLogin(username, password, history);
    };

    function handleChange(e) {
        const { name, value } = e.target;
        setCredential(inputs => {
            const retCredential = { ...inputs, [name]: value };
            if(Boolean(retCredential.username) && Boolean(retCredential.password)) {
                setDisableSubmit(false);
            } else {
                setDisableSubmit(true);
            }
            return retCredential;
        });
    }

    return (
        <>
            <Container component="main" maxWidth="xs">
                <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5" color="primary">
                    Admin
                </Typography>
                    <Alert show={error ? "true" : "false"} message={error ? error.message : process.env.REACT_APP_BACK_END_FAILED} severity={ERROR}/>
                    <form className={classes.form} noValidate onSubmit={handleSubmit}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoComplete="username"
                            onChange={handleChange}
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            onChange={handleChange}
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            disabled={disableSubmit}
                            className={classes.submit}
                        >
                            Login
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
                <Box mt={8}>
                    <Copyright />
                </Box>
            </Container>
        </>
    );
}


Login.propTypes = {
    actions: PropTypes.object.isRequired
};

Login.defaultProps = {
    loading: false
};

const mapStateToProps = (state) => {
    return {
    }
};



function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(LoginAction, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)
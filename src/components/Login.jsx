import React, {useEffect, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import {useHistory} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Cookies from 'universal-cookie';

import LoginsService from "../services/LoginsService";


const Login = props => {

    const useStyles = makeStyles((theme) => ({
        root: {
            height: '100vh',
        },
        paper: {
            margin: theme.spacing(8, 4),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        form: {
            width: '30%',
            marginTop: theme.spacing(1),
            align: 'center',
        },
    }));

    const classes = useStyles();

    const signInClickHandler = () => {
        signIn()
    }

    const cookies = new Cookies();
    const history = useHistory();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [validationError, setValidationError] = useState(false);

    let cookiesLogin = cookies.get("login")
    let cookiesPassword = cookies.get("password")




    const signIn = () => {
        let user = {
            login: login,
            password: password
        }
        LoginsService.login(user).then(resp => {
            console.log(resp.data)
            if(resp.data.success === true){
                console.log("ok")
                setValidationError(false)
                cookies.set("login",login,{path:"/"});
                cookies.set("password",password,{path:"/"});
                history.push("/clients")
            }else {
                console.log("no")
                setValidationError(true)
            }
        })
    }

    const onLoginChange = (e) => {
        setLogin(e.target.value);
    };

    const onPasswordChahge = (e) => {
        setPassword(e.target.value);
    };

    const onEnterPressed = async (event) => {
        if (event.key === 'Enter') {
            signIn();
        }
    };





    useEffect(() => {
        if( cookiesLogin && cookiesPassword){
            setLogin(cookiesLogin)
            setPassword(cookiesPassword)
            signIn()
        }
    })


    return (
        <div className={classes.paper}>
            <Typography component="h1" variant="h5">
                SIGN IN
            </Typography>
            <div className={classes.form}>
                <TextField
                    error={validationError}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="login"
                    label="Login"
                    name="login"
                    autoComplete="login"
                    autoFocus
                    value={login}
                    onKeyDown={onEnterPressed}
                    onChange={onLoginChange}
                />
                <TextField
                    error={validationError}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={onPasswordChahge}
                    onKeyDown={onEnterPressed}
                />
                <Grid container direction="row" justify="center" alignItems="left">
                    <Grid item>
                        <Button
                            className={classes.sumbit}
                            type="submit"
                            variant="contained"
                            color="primary"
                            onClick={signInClickHandler}
                        >
                            Sign in
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

Login.propTypes = {};

export default Login;
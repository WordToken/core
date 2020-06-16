import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Link from 'next/link'

import Logo from '@components/Logo'




// const useStyles = makeStyles((theme) => ({
//     paper: {
//       marginTop: theme.spacing(8),
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//     },
//     avatar: {
//       margin: theme.spacing(1),
//       backgroundColor: theme.palette.secondary.main,
//     },
//     form: {
//       width: '100%', // Fix IE 11 issue.
//       marginTop: theme.spacing(1),
//     },
//     submit: {
//       margin: theme.spacing(3, 0, 2),
//     },
//   }));


const Login = () => {

    return (<SectionWrapper>
                {/* <Logo /> */}
                <LogoWrapper>
                    <a href="https://www.wordtoken.com">
                        <img src="/images/word-token-logo-bold.png" />
                    </a>
                </LogoWrapper>
                
                <FormWrapper>
                    <p>Sign in to your account</p>

                    <InputWrapper className="email-input">
                        <InputLabel>Email</InputLabel>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="email"
                            label="Email"
                            type="email"
                            id="email"
                            autoComplete="email"
                        />
                    </InputWrapper>

                    <InputWrapper className="password-input">
                        <InputLabel><span>Password</span><span>Forgot your password?</span></InputLabel>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                    </InputWrapper>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                    >
                        Sign In
                    </Button>
                </FormWrapper>
                <Typography className="sign-in-link">Don't have an account? <Link href="/register">Sign up</Link></Typography>
            </SectionWrapper>)
}

export default Login



const SectionWrapper =  styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img {
        max-width: 130px;
        margin-top: 100px;
    }


    .sign-in-link {
        margin-top: 30px;

        a {
            text-decoration: none;
        }
    }
`

const LogoWrapper = styled.div`
    cursor: pointer;
`

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 450px;
    margin-top: 50px;
    font-family: sans-serif;
    font-size: 14px;
    padding: 2%;
    background: white;
    border-radius: 4px;
    box-shadow: rgba(60, 66, 87, 0.12) 0px 7px 14px 0px, rgba(0, 0, 0, 0.12) 0px 3px 6px 0px;

    p:first-child {
        font-size: 19px;
        font-family: sans-serif;
        font-weight: 500;
    }

    div:first-child {
        margin-top: 10px;
    }
`

const InputWrapper = styled.div`
    margin-bottom: 30px;
`

// const InputElement = styled.input`
//     width: 100%;
//     height: 40px;

//     :first-child {
//         margin-bottom: 20px;
//     }
// `

const InputLabel = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`



import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import Link from 'next/link'

const Register = () => {

    return (<SectionWrapper>
                {/* <Logo /> */}
                <LogoWrapper>
                    <a href="https://www.wordtoken.com">
                        <img src="/images/word-token-logo-bold.png" />
                    </a>
                </LogoWrapper>
                
                <FormWrapper>
                    <p>Create your account</p>

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
                        <InputLabel><span>Password</span></InputLabel>
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
                    <InputWrapper className="password-input">
                        <InputLabel><span>Confirm Password</span></InputLabel>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="Confirm Password"
                            label="Confirm Password"
                            type="password"
                            id="confirm-password"
                            autoComplete="confirm-password"
                        />
                    </InputWrapper>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                    >
                        Create account
                    </Button>
                </FormWrapper>
                <Typography className="sign-in-cta">Have an account? <Link href="/login">Sign in</Link></Typography>
            </SectionWrapper>)
}

export default Register



const SectionWrapper =  styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img {
        max-width: 130px;
        margin-top: 100px;
    }


    .sign-in-cta {
        margin-top: 30px;
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



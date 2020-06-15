import Link from 'next/link';
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';






const Login = () => {

    return (<SectionWrapper>
                <img src="/images/word-token-logo.png" alt="WordToken logo" />
            </SectionWrapper>)
}

export default Login



const SectionWrapper =  styled.div`
    img {
        max-width: 100px;
    }
`
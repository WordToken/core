
import styled from 'styled-components'


function Logo() {
	return <LogoWrapper><img src='/images/word-token-logo-light-blue.png' alt="WordToken Logo" /></LogoWrapper>
}

export default Logo


const LogoWrapper = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;

	img {
		max-width: 120px;
	}
`
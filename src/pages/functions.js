import Layout from '@components/Layout'
import Content from '@components/Content'

function FunctionsPage({ location }) {
	const pageTitle = location ? location.pathname.replace(/\//g, '') : ''
	return (
		<Layout location={location} title={pageTitle}>
			<Content />
		</Layout>
	)
}

export default FunctionsPage

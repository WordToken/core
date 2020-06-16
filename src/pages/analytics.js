import Layout from '@components/Layout'
import Content from '@components/Content'

function AnalyticsPage({ data, location }) {
	const pageTitle = location ? location.pathname.replace(/\//g, '') : ''
	return (
		<Layout location={location} title={pageTitle}>
			<Content />
		</Layout>
	)
}

export default AnalyticsPage

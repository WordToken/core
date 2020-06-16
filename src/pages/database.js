import Layout from '@components/Layout'
import DatabaseContent from '@components/DatabaseContent'

function DatabasePage({ location }) {
	const pageTitle = location ? location.pathname.replace(/\//g, '') : ''
	return (
		<Layout location={location} title={pageTitle}>
			<DatabaseContent />
		</Layout>
	)
}

export default DatabasePage

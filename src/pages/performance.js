import React from 'react'
import Layout from '@components/Layout'
import Content from '@components/Content'
function PerformancePage({ location }) {
	const pageTitle = location ? location.pathname.replace(/\//g, '') : ''
	return (
		<Layout location={location} title={pageTitle}>
			<Content />
		</Layout>
	)
}

export default PerformancePage

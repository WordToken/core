
import React from 'react'
import Layout from '@components/Layout'
import Content from '@components/Content'

function DashboardIndex({  location }) {
	const title = "Dashboard"

	return (
		<Layout location={location} title={title}>
			<Content />
		</Layout>
	)
}

export default DashboardIndex

import React from 'react'
import Layout from '@components/Layout'
import StorageContent from '@components/StorageContent'



function StoragePage({ location }) {
	const pageTitle = location ? location.pathname.replace(/\//g, '') : ''
	return (
		<Layout location={location} title={pageTitle}>
			<StorageContent />
		</Layout>
	)
}

export default StoragePage

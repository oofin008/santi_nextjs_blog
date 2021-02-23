import React from 'react'
import { Layout } from '@layouts'
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
MyApp.getInitialProps = (ctx) => {
  return {}
}
export default MyApp

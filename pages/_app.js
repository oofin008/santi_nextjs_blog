import React from 'react'
import { Layout } from '../components/layouts'
import '../components/styles/globals.css'
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

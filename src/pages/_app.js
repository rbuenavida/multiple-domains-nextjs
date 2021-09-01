import '../styles/globals.css'

function MyApp({ Component, pageProps, cmsProperties }) {
  // here we can pass the cmsProperties as props to the components
  return <Component {...pageProps} />
}

export default MyApp

import {AppProps} from "next/app"

function App({Component, pageProps}: AppProps) {
  return (
    <>
      {/* Globalstyles here */}
      <Component {...pageProps} />
    </>
  )
}

export default App

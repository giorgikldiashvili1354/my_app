import { ItemContextProvider } from '../Context/ItemContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (<ItemContextProvider>
    <Component {...pageProps}/>
    </ItemContextProvider> 
    );
}

export default MyApp

import { ChakraProvider } from '@chakra-ui/react'
import { 
    Fonts, 
    Footer, 
    Layout, 
    Navbar, 
    theme
} from './../components'

const MyPortfolio = ({ Component, pageProps }) => {
    return (
        <ChakraProvider theme={theme}>
            <Layout>
                <Fonts />
                <Navbar />
                <Component {...pageProps} />
                <Footer />
            </Layout>
        </ChakraProvider>
    )
}

export default MyPortfolio
import type { AppProps } from 'next/app'
import { UserContextProvider } from 'contexts/UserContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import Header from 'components/Layout/Header'
import { ThemeProvider } from 'styled-components'
import theme from 'theme/theme'
import GlobalStyles from 'theme/globals'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<UserContextProvider>
			<ThemeProvider theme={theme}>
				<Header />
				<Component {...pageProps} />
				<ToastContainer style={{ fontSize: '1.8rem' }} />
				<GlobalStyles />
			</ThemeProvider>
		</UserContextProvider>
	)
}

export default MyApp

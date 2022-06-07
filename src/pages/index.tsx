import Filter from 'components/Filter'
import Header from 'components/Header'
import Users from 'components/Users'
import type { NextPage } from 'next'
import S from 'styles/Home.module.scss'
import { UserContextProvider } from 'contexts/UserContext'

const Home: NextPage = () => {
	return (
		<>
			<Header />
			<main className={S.main}>
				<UserContextProvider>
					<Filter />
					<Users />
				</UserContextProvider>
			</main>
		</>
	)
}

export default Home

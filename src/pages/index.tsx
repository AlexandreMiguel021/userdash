import Filter from 'components/Filter'
import Header from 'components/Header'
import Users from 'components/Users'
import type { NextPage } from 'next'
import S from 'styles/Home.module.scss'
import { UserContextProvider } from 'contexts/UserContext'

const Home: NextPage = () => {
	return (
		<>
			<UserContextProvider>
				<Header />
				<main className={S.main}>
					<Filter />
					<Users />
				</main>
			</UserContextProvider>
		</>
	)
}

export default Home

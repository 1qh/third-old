import type { NextPage } from 'next'

const Home: NextPage = () => {
	return (
		<>
			<div className="flex justify-center pt-20">
				<div className="text-center text-5xl shadow-gray-300 shadow-2xl font-bold text-gray-600 px-8 py-5 bg-white dark:bg-black dark:text-gray-300 bg-opacity-50 rounded-full">
					Welcome to Crowdfund Dapp
				</div>
			</div>
		</>
	)
}

export default Home

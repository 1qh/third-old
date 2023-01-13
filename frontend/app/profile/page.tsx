import type { NextPage } from 'next'

const Home: NextPage = () => {
	return (
		<>
			<div className="flex justify-center pt-20">
				<div className="rounded-full bg-white bg-opacity-50 px-8 py-5 text-center text-5xl font-bold text-gray-600 shadow-2xl shadow-gray-300 dark:bg-black dark:text-gray-300">
					Your Campaigns
				</div>
			</div>
		</>
	)
}

export default Home

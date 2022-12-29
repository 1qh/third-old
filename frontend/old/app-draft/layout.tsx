'use client'

import { links } from '#/lib/data'
import { DarkThemeToggle, Flowbite, Navbar, Sidebar } from 'flowbite-react'
import './globals.css'
const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html>
			<head />
			<body>
				<Flowbite>
					<div className="dark:text-white dark:bg-black">
						<MyNavBar />
						<MySidebar />
						{children}
					</div>
				</Flowbite>
			</body>
		</html>
	)
}
const MyNavBar = () => {
	return (
		<Navbar fluid className="sticky top-0">
			<Navbar.Brand>Logo</Navbar.Brand>
			<DarkThemeToggle />
		</Navbar>
	)
}

const MySidebar = () => {
	return (
		<Sidebar className="top-20 w-48 fixed">
			<Sidebar.Items>
				<Sidebar.ItemGroup>
					{links.map(item => {
						return (
							<>
								<Sidebar.Item href={`/${item.slug}`} icon={item.icon}>
									{item.name}
								</Sidebar.Item>
							</>
						)
					})}
				</Sidebar.ItemGroup>
			</Sidebar.Items>
		</Sidebar>
	)
}
export default RootLayout

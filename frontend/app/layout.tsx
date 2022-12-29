'use client'
import { links } from '#/lib/data'
import { Flowbite } from 'flowbite-react'
import { FC, PropsWithChildren } from 'react'
import Header from './components/header'
import Sidebar from './components/sidebar'
import { SidebarProvider } from './context/SidebarContext'
import './globals.css'
const RootLayout: FC<PropsWithChildren> = function ({ children }) {
	return (
		<html lang="en">
			<body>
				<Flowbite>
					<SidebarProvider>
						<Header />
						<div className="flex dark:bg-black">
							<main className="order-2 mx-4 mt-4">{children}</main>
							<div className="order-1 pt-3">
								<ActualSidebar />
							</div>
						</div>
					</SidebarProvider>
				</Flowbite>
			</body>
		</html>
	)
}

function ActualSidebar(): JSX.Element {
	return (
		<Sidebar>
			<Sidebar.Items className="dark:bg-black">
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

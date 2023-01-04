'use client'
import { links } from '#/lib/data'
import { Flowbite, Timeline } from 'flowbite-react'
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
							<main className="order-2 mx-4 mt-4">
								{children}
								<Timeline.Body className="opacity-0">
									_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
									_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
									_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
									_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
									_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
									_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
									_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
									_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
									_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
									_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
									_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
									_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
								</Timeline.Body>
							</main>
							<div className="order-1 pt-3">
								<Sidebar>
									<Sidebar.Items>
										<Sidebar.ItemGroup>
											{links.map(item => (
												<Sidebar.Item href={`/${item.slug}`} icon={item.icon}>
													{item.name}
												</Sidebar.Item>
											))}
										</Sidebar.ItemGroup>
									</Sidebar.Items>
								</Sidebar>
							</div>
						</div>
					</SidebarProvider>
				</Flowbite>
			</body>
		</html>
	)
}

export default RootLayout

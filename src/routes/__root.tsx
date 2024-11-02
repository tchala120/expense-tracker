import { createRootRoute, Outlet, useLocation, useMatches, useRouter } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { ConfigProvider, NavBar, SafeArea } from 'antd-mobile'
import enUS from 'antd-mobile/es/locales/en-US'

import { PWABadge } from '@/components/PWABadge'

export const Route = createRootRoute({
	component: RootLayout,
})

export function RootLayout() {
	const matches = useMatches()
	const { pathname } = useLocation()
	const isRootPage = pathname === '/'

	const router = useRouter()

	const currentMatchPath = matches.find((item) => item.id === pathname)

	return (
		<ConfigProvider locale={enUS}>
			<div className="h-screen flex flex-col">
				<SafeArea position="top" />

				<div
					style={{
						flex: 0,
						borderBottom: 'solid 1px var(--adm-color-border)',
					}}
				>
					<NavBar
						backIcon={isRootPage ? null : undefined}
						onBack={() => {
							router.history.back()
						}}
					>
						{currentMatchPath?.staticData.title}
					</NavBar>
				</div>

				<div className="flex-1 overflow-y-auto">
					<Outlet />
				</div>

				<TanStackRouterDevtools />

				<PWABadge />

				<SafeArea position="bottom" />
			</div>
		</ConfigProvider>
	)
}

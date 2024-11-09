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
					className="border border-[var(--adm-color-border)] dark:border-gray-200"
					style={{
						flex: 0,
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

				{import.meta.env.DEV ? <TanStackRouterDevtools /> : null}

				<PWABadge />

				<SafeArea position="bottom" />
			</div>
		</ConfigProvider>
	)
}

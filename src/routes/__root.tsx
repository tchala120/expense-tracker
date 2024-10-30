import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

import { PWABadge } from '@/components/PWABadge'

export const Route = createRootRoute({
	component: () => (
		<>
			<div>
				<Link to="/">Home</Link>

				<Link to="/about">About</Link>
			</div>

			<hr />

			<Outlet />

			<TanStackRouterDevtools />

			<PWABadge />
		</>
	),
})

import './global.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { routeTree } from './routeTree.gen'

const router = createRouter({
	routeTree,
})

declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router
	}

	interface StaticDataRouteOption {
		title?: string
	}
}

const root = document.getElementById('root')

const client = new QueryClient()

if (root != null) {
	ReactDOM.createRoot(root).render(
		<StrictMode>
			<QueryClientProvider client={client}>
				<RouterProvider router={router} />
			</QueryClientProvider>
		</StrictMode>,
	)
}

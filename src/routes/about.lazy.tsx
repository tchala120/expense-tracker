import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/about')({
	component: AboutPage,
})

export function AboutPage() {
	return <div>Hello /about!</div>
}

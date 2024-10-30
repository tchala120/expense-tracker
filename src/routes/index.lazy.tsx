import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
	component: IndexPage,
})

export function IndexPage() {
	return (
		<div>
			<h3>Welcome Home!</h3>
		</div>
	)
}

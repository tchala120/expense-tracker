import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/setting')({
	component: SettingPage,
	staticData: {
		title: 'Setting',
	},
})

function SettingPage() {
	return <>Setting Page</>
}

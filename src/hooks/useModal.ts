import { useState } from 'react'

interface UseModalOptions {
	initialVisible?: boolean
}

const defaultModalOptions = {
	initialVisible: false,
}

export const useModal = (options?: UseModalOptions) => {
	const opts = { ...defaultModalOptions, ...options }

	const [visible, setVisible] = useState(opts.initialVisible)

	const show = () => {
		setVisible(true)
	}

	const hide = () => {
		setVisible(false)
	}

	const toggle = () => {
		setVisible((prev) => !prev)
	}

	return {
		visible,
		show,
		hide,
		toggle,
	}
}

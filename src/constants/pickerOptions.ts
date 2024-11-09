import type { ReactNode } from 'react'

import type { PaymentMethod } from '@/services/api'

interface PaymentMethodPickerOption {
	key: string
	label: ReactNode
	value: PaymentMethod
}

export const listPaymentMethodOptions: PaymentMethodPickerOption[] = [
	{
		key: 'transfer',
		label: 'Transfer',
		value: 'transfer',
	},
	{
		key: 'credit-card',
		label: 'Credit Card',
		value: 'credit-card',
	},
]

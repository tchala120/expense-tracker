import { Picker, type PickerProps, type PickerRef } from 'antd-mobile'
import type { PickerColumn } from 'antd-mobile/es/components/picker-view'
import { forwardRef } from 'react'

const listPaymentMethodOptions: PickerColumn = [
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

export const PaymentMethodSelectPicker = forwardRef<PickerRef, Omit<PickerProps, 'columns'>>((props, ref) => {
	return (
		<Picker {...props} columns={[listPaymentMethodOptions]} closeOnMaskClick ref={ref}>
			{(value) => {
				const selected = value[0]

				if (selected == null) {
					return <span className="text-[var(--adm-color-light)]">Pick a payment method</span>
				}

				return value[0]?.label
			}}
		</Picker>
	)
})

PaymentMethodSelectPicker.displayName = 'PaymentMethodSelectPicker'

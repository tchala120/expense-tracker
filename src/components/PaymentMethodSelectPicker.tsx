import { Picker, type PickerProps, type PickerRef } from 'antd-mobile'
import { forwardRef } from 'react'

import { listPaymentMethodOptions } from '@/constants/pickerOptions'

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

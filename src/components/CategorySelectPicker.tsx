import { Picker, type PickerProps, type PickerRef } from 'antd-mobile'
import type { PickerColumn } from 'antd-mobile/es/components/picker-view'
import { forwardRef } from 'react'

const listCategoryOptions: PickerColumn = [
	{
		key: 'food-drinks',
		label: 'Food & Drinks',
		value: 'food-drinks',
	},
	{
		key: 'entertainment',
		label: 'Entertainment',
		value: 'entertainment',
	},
	{
		key: 'shopping',
		label: 'Shopping',
		value: 'shopping',
	},
	{
		key: 'bills-utilities',
		label: 'Bills & Utilities',
		value: 'bills-utilities',
	},
	{
		key: 'auto-transport',
		label: 'Auto & Transport',
		value: 'auto-transport',
	},
	{
		key: 'loan-leasing',
		label: 'Loan & Leasing',
		value: 'loan-leasing',
	},
	{
		key: 'family-personal',
		label: 'Family & Personal',
		value: 'family-personal',
	},
	{
		key: 'saving-investment',
		label: 'Saving & Investment',
		value: 'saving-investment',
	},
	{
		key: 'gifts-donations',
		label: 'Gifts & Donations',
		value: 'gifts-donations',
	},
	{
		key: 'education',
		label: 'Education',
		value: 'education',
	},
	{
		key: 'hotel-travel',
		label: 'Hotel & Travel',
		value: 'hotel-travel',
	},
	{
		key: 'insurance',
		label: 'Insurance',
		value: 'insurance',
	},
]

export const CategorySelectPicker = forwardRef<PickerRef, Omit<PickerProps, 'columns'>>((props, ref) => {
	return (
		<Picker {...props} columns={[listCategoryOptions]} closeOnMaskClick ref={ref}>
			{(value) => {
				const selected = value[0]

				if (selected == null) {
					return <span className="text-[var(--adm-color-light)]">Pick a category</span>
				}

				return value[0]?.label
			}}
		</Picker>
	)
})

CategorySelectPicker.displayName = 'CategorySelectPicker'

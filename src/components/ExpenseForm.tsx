import { DatePicker, Form, Input, TextArea, type DatePickerRef, type PickerRef } from 'antd-mobile'
import dayjs from 'dayjs'
import type { RefObject } from 'react'

import { CategorySelectPicker } from '@/components/CategorySelectPicker'
import { PaymentMethodSelectPicker } from '@/components/PaymentMethodSelectPicker'

import { ruleRequired } from '@/helpers/antdUtils'
import { DATE_TIME_FORMAT } from '@/helpers/formatter'

export const ExpenseForm = () => {
	return (
		<>
			<Form.Item name="name" label="Name" rules={[ruleRequired]}>
				<Input placeholder="Netflix, Youtube Premium" />
			</Form.Item>

			<Form.Item
				name="amount"
				label="Amount"
				rules={[
					ruleRequired,
					{
						validator: (_, value) => {
							if (value === 0) {
								return Promise.reject(new Error('Amount cannot be 0'))
							}

							return Promise.resolve()
						},
					},
				]}
				getValueFromEvent={(value) => {
					return value === '' ? '' : Number(value)
				}}
			>
				<Input
					type="number"
					inputMode="numeric"
					placeholder="300"
					onBlur={(event) => {
						console.log('current value', event.target.value)
					}}
				/>
			</Form.Item>

			<Form.Item
				name="category"
				label="Category"
				rules={[ruleRequired]}
				trigger="onConfirm"
				onClick={(_, ref: RefObject<PickerRef>) => {
					ref.current?.open()
				}}
			>
				<CategorySelectPicker />
			</Form.Item>

			<Form.Item
				name="paidAs"
				label="Paid as"
				rules={[ruleRequired]}
				trigger="onConfirm"
				onClick={(_, ref: RefObject<PickerRef>) => {
					ref.current?.open()
				}}
			>
				<PaymentMethodSelectPicker />
			</Form.Item>

			<Form.Item
				name="date"
				label="Paid at"
				rules={[ruleRequired]}
				trigger="onConfirm"
				onClick={(_, ref: RefObject<DatePickerRef>) => {
					ref.current?.open()
				}}
			>
				<DatePicker closeOnMaskClick>
					{(value) =>
						value == null ? (
							<span
								style={{
									color: 'var(--adm-color-light)',
								}}
							>
								Select date
							</span>
						) : (
							dayjs(value).format(DATE_TIME_FORMAT)
						)
					}
				</DatePicker>
			</Form.Item>

			<Form.Item name="note" label="Note">
				<TextArea rows={4} />
			</Form.Item>
		</>
	)
}

import { createFileRoute } from '@tanstack/react-router'
import { Button, DatePicker, DatePickerRef, FloatingBubble, Form, Input, Picker, TextArea } from 'antd-mobile'
import { AddOutline } from 'antd-mobile-icons'
import dayjs from 'dayjs'
import { RefObject } from 'react'

import { Popup } from '@/components/Popup'

import { ruleRequired } from '@/helpers/antdUtils'
import { DATE_TIME_FORMAT } from '@/helpers/formatter'

import { useModal } from '@/hooks/useModal'

export const Route = createFileRoute('/')({
	component: IndexPage,
	staticData: {
		title: 'Home',
	},
})

export function IndexPage() {
	const { visible, show, hide } = useModal()

	return (
		<div>
			<h1 className="text-3xl font-bold underline">Home Page</h1>

			<FloatingBubble
				style={{
					'--initial-position-bottom': '24px',
					'--initial-position-right': '24px',
					'--edge-distance': '24px',
				}}
				onClick={() => {
					show()
				}}
			>
				<AddOutline fontSize={24} />
			</FloatingBubble>

			<Popup visible={visible} title="Add new expense" closeOnMaskClick onClose={hide}>
				<Form
					layout="horizontal"
					footer={
						<Button block type="submit" color="primary" size="large">
							Add new expense
						</Button>
					}
				>
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
						onClick={(_, ref: RefObject<DatePickerRef>) => {
							ref.current?.open()
						}}
					>
						<Picker
							columns={[
								[
									{
										key: 'Hi',
										label: 'Yo',
										value: 1,
									},
									{
										key: '2',
										label: 'Yoya',
										value: 2,
									},
								],
							]}
							closeOnMaskClick
						>
							{(value) => value[0]?.label}
						</Picker>
					</Form.Item>

					<Form.Item name="paidAs" label="Paid as" rules={[ruleRequired]}>
						<Input placeholder="Transfer, Credit card" />
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
						<DatePicker precision="minute" closeOnMaskClick>
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
				</Form>
			</Popup>
		</div>
	)
}

import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { Button, Card, ErrorBlock, FloatingBubble, Form, Grid, List, PullToRefresh, Space } from 'antd-mobile'
import { AddOutline } from 'antd-mobile-icons'
import dayjs from 'dayjs'
import isEmpty from 'lodash.isempty'

import { ExpenseForm } from '@/components/ExpenseForm'
import { PaidAsIcon } from '@/components/PaidAsIcon'
import { Popup } from '@/components/Popup'

import { listPaymentMethodOptions } from '@/constants/pickerOptions'

import { moneyFormat } from '@/helpers/formatter'

import { useModal } from '@/hooks/useModal'

import { listExpenses } from '@/services/api'

export const Route = createFileRoute('/')({
	component: IndexPage,
	staticData: {
		title: 'Home',
	},
})

export function IndexPage() {
	const { visible, show, hide } = useModal()

	const query = useQuery({
		queryKey: ['list-expenses'],
		queryFn: () => listExpenses(),
	})

	const expense = query.data

	return (
		<PullToRefresh
			pullingText="Pull to refresh"
			canReleaseText="Release to refresh"
			refreshingText="Refreshing..."
			completeText="Done"
			onRefresh={async () => {
				await query.refetch()
			}}
		>
			<div className="p-3">
				<Grid columns={2} gap={12}>
					<Grid.Item span={2}>
						<Card icon={<></>} title="All Expense" extra={<></>} className="border border-gray-200">
							<h1 className="text-center text-xl font-bold text-red-500">{expense?.totalExpense}</h1>
						</Card>
					</Grid.Item>

					{listPaymentMethodOptions.map((item) => (
						<Grid.Item key={item.key} span={1}>
							<Card title={item.label} className="border border-gray-200">
								{expense?.expenseByMethod[item.value].toString()}
							</Card>
						</Grid.Item>
					))}

					<Grid.Item span={2} className="-mx-3">
						<Space direction="vertical" block>
							<h1 className="px-3 text-bold text-xl">Expense Transaction</h1>

							{isEmpty(expense?.data) ? (
								<ErrorBlock
									status="empty"
									className="flex flex-col items-center px-3"
									title="Expense not found"
									description="Your expense is empty, by adding new press + button on the bottom right"
								/>
							) : (
								Object.keys(expense.data).map((date) => {
									const listExpenseByDate = expense.data[date]

									return (
										<List key={date} header={dayjs(date).format('DD MMM YYYY')}>
											{listExpenseByDate.map((item) => (
												<List.Item
													key={item.id}
													title={<PaidAsIcon method={item.paymentMethod} />}
													extra={<span className="text-red-500 text-lg">-{moneyFormat(item.amount)}</span>}
													description={<span>{item.category}</span>}
												>
													{item.name}
												</List.Item>
											))}
										</List>
									)
								})
							)}
						</Space>
					</Grid.Item>
				</Grid>

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

				<Popup visible={visible} title="Add new expense" closeOnMaskClick closeOnSwipe onClose={hide}>
					<Form
						layout="horizontal"
						footer={
							<Button block type="submit" color="primary" size="large">
								Add new expense
							</Button>
						}
						onFinish={(values) => {
							console.log('Values', values)
						}}
					>
						<ExpenseForm />
					</Form>
				</Popup>
			</div>
		</PullToRefresh>
	)
}

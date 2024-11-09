import { createFileRoute } from '@tanstack/react-router'
import { Button, Card, FloatingBubble, Form, Grid, List, Space } from 'antd-mobile'
import { AddOutline, BankcardOutline } from 'antd-mobile-icons'
import dayjs from 'dayjs'

import { ExpenseForm } from '@/components/ExpenseForm'
import { Popup } from '@/components/Popup'

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
		<div className="p-3">
			<Grid columns={2} gap={12}>
				<Grid.Item span={2}>
					<Card icon={<></>} title="All Expense" extra={<></>} className="border border-gray-200">
						<h1 className="text-center text-xl font-bold text-red-500">5,000</h1>
					</Card>
				</Grid.Item>

				<Grid.Item span={1}>
					<Card title="Transfer" className="border border-gray-200">
						2,500
					</Card>
				</Grid.Item>
				<Grid.Item span={1}>
					<Card title="Credit Card" className="border border-gray-200">
						2,500
					</Card>
				</Grid.Item>

				<Grid.Item span={2} className="-mx-3">
					<Space direction="vertical" block>
						<h1 className="px-3 text-bold text-xl">Expense Transaction</h1>

						<List header={dayjs().format('DD MMM YYYY')}>
							<List.Item
								title={
									<Space align="center">
										<BankcardOutline />

										<span>Credit Card</span>
									</Space>
								}
								extra={<span className="text-red-500 text-lg">-250 ฿</span>}
								description={<span>Entertainment</span>}
							>
								Netflix
							</List.Item>

							<List.Item
								title={
									<Space align="center">
										<BankcardOutline />

										<span>Credit Card</span>
									</Space>
								}
								extra={<span className="text-red-500 text-lg">-250 ฿</span>}
								description={<span>Entertainment</span>}
							>
								Netflix
							</List.Item>

							<List.Item
								title={
									<Space align="center">
										<BankcardOutline />

										<span>Credit Card</span>
									</Space>
								}
								extra={<span className="text-red-500 text-lg">-250 ฿</span>}
								description={<span>Entertainment</span>}
							>
								Netflix
							</List.Item>

							<List.Item
								title={
									<Space align="center">
										<BankcardOutline />

										<span>Credit Card</span>
									</Space>
								}
								extra={<span className="text-red-500 text-lg">-250 ฿</span>}
								description={<span>Entertainment</span>}
							>
								Netflix
							</List.Item>
						</List>
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
	)
}

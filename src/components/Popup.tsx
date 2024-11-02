import { Popup as AntdPopup, PopupProps as AntdPopupProps } from 'antd-mobile'
import { CloseOutline } from 'antd-mobile-icons'
import type { ReactNode } from 'react'

interface PopupProps extends AntdPopupProps {
	title?: ReactNode
	showCloseIcon?: boolean
}

export const Popup = ({ title, showCloseButton = true, children, ...antdPopupProps }: PopupProps) => {
	return (
		<AntdPopup
			bodyStyle={{
				maxHeight: '70vh',
				overflowY: 'auto',
				...antdPopupProps.bodyStyle,
			}}
			{...antdPopupProps}
		>
			{title == null ? null : (
				<div className="sticky top-0 z-10 bg-white flex justify-center items-center py-2 shadow-sm">
					<span className="font-bold text-base">{title}</span>

					{showCloseButton ? (
						<div className="absolute right-4 top-1/2 -translate-y-1/2 z-20">
							<CloseOutline onClick={antdPopupProps.onClose} />
						</div>
					) : null}
				</div>
			)}

			{children}
		</AntdPopup>
	)
}

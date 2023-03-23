import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js'
import { useEffect, useState } from 'react'

const PayPalCheckout = ({
	total = 0,
	handleCreateOrder = () => {},
	handleApprove = () => {},
}) => {
	return (
		<>
			<PayPalButtons
				forceReRender={[total]}
				createOrder={handleCreateOrder}
				onApprove={handleApprove}
			/>
		</>
	)
}

export default ({
	setOrderId = '',
	total = 0,
	setIsPurchaseOpen = () => {},
	setIsCheckoutOpen = () => {},
}) => {
	const handleCreateOrder = (data, actions) => {
		return actions.order
			.create({
				purchase_units: [
					{
						amount: {
							currency_code: 'USD',
							value: total,
						},
					},
				],
			})
			.then((orderId) => {
				setOrderId(orderId)
				return orderId
			})
	}

	const handleApprove = (data, actions) => {
		return actions.order.capture().then((details) => {
			setIsPurchaseOpen(true)
			setIsCheckoutOpen(false)
		})
	}

	const props = { handleCreateOrder, handleApprove, total }

	return (
		<PayPalScriptProvider
			options={{
				'client-id':
					'AQowvQnvX-fEab1YjnPHaih9rkGQMTFrVM8HoTSMkAM8JvpoTeOjIoxrSCv7GB55evcYrQmxjU73nMWN',
			}}
		>
			<PayPalCheckout {...props} />
		</PayPalScriptProvider>
	)
}

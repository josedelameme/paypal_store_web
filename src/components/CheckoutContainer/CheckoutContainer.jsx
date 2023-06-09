import { Box, Button, Typography } from '@mui/material'
import { useState } from 'react'
import OrderDetails from '../OrderDetails'
import PayPalCheckout from '../PayPalCheckout'

const CheckoutContainer = ({
	total = 0,
	setTotal = () => {},
	setOrderId = () => {},
	setIsPurchaseOpen = () => {},
	setIsCheckoutOpen = () => {},
	currentSku = '',
}) => {
	const handleCancel = () => {
		setIsCheckoutOpen(false)
	}

	return (
		<Box
			sx={{
				width: '40%',
				border: '1px solid grey',
				textAlign: 'center',
			}}
		>
			<Typography
				component='div'
				variant='h3'
				sx={{
					textAlign: 'center',
				}}
			>
				Checkout
			</Typography>
			<Box sx={{ height: 70 }} />
			<OrderDetails currentSku={currentSku} total={total} setTotal={setTotal} />
			<Box sx={{ height: 70 }} />
			<PayPalCheckout
				total={total}
				setOrderId={setOrderId}
				setIsPurchaseOpen={setIsPurchaseOpen}
				setIsCheckoutOpen={setIsCheckoutOpen}
			/>
			<Box sx={{ height: 30 }} />
			<Button variant='contained' onClick={handleCancel}>
				Cancel
			</Button>
		</Box>
	)
}

export default CheckoutContainer

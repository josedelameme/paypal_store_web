import { Box, Button, Typography } from '@mui/material'
import PayPalCheckout from '../PayPalCheckout'

const CheckoutCard = ({ setIsCheckoutOpen = () => {} }) => {
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
			<Typography component='div' variant='h4'>
				Checkout
			</Typography>
			<PayPalCheckout />
			<Button onClick={handleCancel}>Cancel</Button>
		</Box>
	)
}

export default CheckoutCard

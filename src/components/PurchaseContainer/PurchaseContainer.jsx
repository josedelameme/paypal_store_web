import { Box, Button, Typography } from '@mui/material'

const PurchaseContainer = ({
	orderId = '',
	total = 0,
	setIsPurchaseOpen = () => {},
}) => {
	const handleReturn = () => {
		setIsPurchaseOpen(false)
	}

	return (
		<Box
			sx={{
				width: '40%',
				border: '1px solid grey',
				textAlign: 'center',
			}}
		>
			<Typography component='div' variant='h3'>
				Thank You for your purchase!
			</Typography>
			<Box sx={{ height: 60 }} />
			<Typography component='div' variant='h6'>
				{`Order number: ${orderId}`}
			</Typography>
			<Box sx={{ height: 60 }} />
			<Typography component='div' variant='h6'>
				{`Total: $${total} USD`}
			</Typography>
			<Box sx={{ height: 60 }} />
			<Button variant='contained' onClick={handleReturn}>
				Return
			</Button>
		</Box>
	)
}

export default PurchaseContainer

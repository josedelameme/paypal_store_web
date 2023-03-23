import { Button, Card, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { recordList } from '../RecordContainer/RecordContainer.constants'

const OrderDetails = ({ currentSku = '', total = '', setTotal = () => {} }) => {
	const [title, setTitle] = useState('')
	const [price, setPrice] = useState(0.0)
	const [quantity, setQuantity] = useState(1)

	useEffect(() => {
		const currentRecord = recordList.find((record) => record.sku == currentSku)
		setTitle(currentRecord.title)
		setPrice(currentRecord.price)
		setQuantity(1)
	}, [currentSku])

	const onIncrement = () => {
		setQuantity(quantity + 1)
	}
	const onDecrement = () => {
		quantity >= 2 && setQuantity(quantity - 1)
	}

	useEffect(() => {
		setTotal(quantity * price)
	}, [quantity, price])

	return (
		<>
			<Card raised={true}>
				<Stack direction={'column'} spacing={2}>
					<Typography variant='h6'>Order Details:</Typography>
					<Typography variant='h6'>{`Item:    ${title} Vinyl Record`}</Typography>
					<Typography variant='h6'>{`SKU:    ${currentSku}`}</Typography>
					<Typography variant='h6'>
						{`Quantity:    ${quantity}x    `}
						<Button variant='contained' onClick={onDecrement}>
							-
						</Button>
						<Button variant='contained' onClick={onIncrement}>
							+
						</Button>
					</Typography>
					<Typography variant='h5'>{`Total:    $${total} USD`}</Typography>
				</Stack>
			</Card>
		</>
	)
}

export default OrderDetails

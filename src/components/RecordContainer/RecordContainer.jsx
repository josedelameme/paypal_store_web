import { Box, Button, ImageList, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import RecordCard from '../RecordCard/RecordCard'
import { recordList } from './RecordContainer.constants'

const RecordContainer = ({
	setIsCheckoutOpen = () => {},
	setProductDetails = () => {},
}) => {
	const handleBuy = (price, title, sku) => {
		setIsCheckoutOpen(true)
		setProductDetails({ price, title, sku })
	}

	return (
		<Stack
			direction='column'
			spacing={1}
			sx={{
				width: '60%',
				border: '1px solid grey',
			}}
		>
			{recordList.map((record) => (
				<RecordCard
					key={record.img}
					img={record.img}
					artist={record.artist}
					title={record.title}
					price={record.price}
					sku={record.sku}
					description={record.description}
					handleBuy={handleBuy}
				/>
			))}
		</Stack>
	)
}

export default RecordContainer

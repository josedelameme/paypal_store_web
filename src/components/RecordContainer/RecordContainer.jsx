import { Box, Button, ImageList, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import RecordCard from '../RecordCard/RecordCard'
import { recordList } from './RecordContainer.constants'

const RecordContainer = ({
	isCheckoutOpen = false,
	setIsCheckoutOpen = () => {},
}) => {
	const [width, setWidth] = useState('100%')

	useEffect(() => {
		isCheckoutOpen ? setWidth('70%') : setWidth('100%')
	}, [isCheckoutOpen])

	const handleBuy = () => {
		setIsCheckoutOpen(!isCheckoutOpen)
	}

	return (
		<Stack
			direction='column'
			spacing={1}
			sx={{ width: width, border: '1px solid grey' }}
		>
			{recordList.map((record) => (
				<RecordCard
					key={record.img}
					img={record.img}
					artist={record.artist}
					title={record.title}
					handleBuy={handleBuy}
				/>
			))}
		</Stack>
	)
}

export default RecordContainer

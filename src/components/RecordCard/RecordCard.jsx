import {
	Box,
	Button,
	Card,
	ImageListItem,
	Typography,
	CardMedia,
	CardContent,
} from '@mui/material'
import { useEffect, useState } from 'react'
import elMalQuerer from '../../assets/el_mal_querer.jpg'

const RecordCard = ({
	img = '',
	title = '',
	artist = '',
	handleBuy = () => {},
}) => {
	return (
		<Card sx={{ display: 'flex' }}>
			<CardMedia sx={{ width: 200, height: 200 }} image={img} />
			<Box sx={{ display: 'flex', flexDirection: 'column' }}>
				<CardContent sx={{ flex: '1 0 auto' }}>
					<Typography variant='h6'>{title}</Typography>
					<Typography variant='h6'>{artist}</Typography>
					<Button onClick={handleBuy}>Buy</Button>
				</CardContent>
			</Box>
		</Card>
	)
}

export default RecordCard

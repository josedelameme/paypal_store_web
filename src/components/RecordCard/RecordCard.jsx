import {
	Box,
	Button,
	Card,
	Typography,
	CardMedia,
	CardContent,
	Stack,
} from '@mui/material'

const RecordCard = ({
	img = '',
	title = '',
	artist = '',
	price = 0.0,
	description = '',
	sku = '',
	handleBuy = () => {},
}) => {
	return (
		<Card sx={{ display: 'flex' }}>
			<CardMedia sx={{ width: 200, height: 200 }} image={img} />
			<Box sx={{ display: 'flex', flexDirection: 'column' }}>
				<CardContent sx={{ display: 'flex', flexDirection: 'row' }}>
					<Stack>
						<Typography
							variant='h6'
							sx={{ width: 500, height: 40 }}
						>{`${title} - ${artist}`}</Typography>
						<Typography variant='h8' sx={{ width: 500, height: 90 }}>
							{description}
						</Typography>
						<Typography
							variant='h5'
							sx={{ width: 500, height: 20 }}
						>{`$${price}`}</Typography>
					</Stack>
					<Box sx={{ width: 10 }} />
					<Button
						variant='contained'
						onClick={() => {
							handleBuy(price, title, sku)
						}}
						sx={{ width: 100 }}
					>
						Buy
					</Button>
				</CardContent>
			</Box>
		</Card>
	)
}

export default RecordCard

import { AppBar, Stack, SvgIcon, Typography, Box } from '@mui/material'
import { ReactComponent as Turntable } from '../../assets/turntable.svg'

const TitleBar = () => {
	return (
		<>
			<AppBar>
				<Stack
					spacing={4}
					direction='row'
					sx={{
						alignItems: 'center',
						ml: 'auto',
						mr: 'auto',
					}}
				>
					<Box sx={{ display: 'block' }}>
						<SvgIcon
							component={Turntable}
							fontSize='large'
							inheritViewBox
							sx={{ pt: '0.1rem' }}
						/>
					</Box>
					<Typography variant='h3'>RECORD STORE</Typography>

					<Box sx={{ display: 'block' }}>
						<SvgIcon
							component={Turntable}
							fontSize='large'
							inheritViewBox
							sx={{ pt: '0.1rem' }}
						/>
					</Box>
				</Stack>
			</AppBar>
		</>
	)
}

export default TitleBar

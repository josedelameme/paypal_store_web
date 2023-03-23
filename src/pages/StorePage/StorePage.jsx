import { Container, Stack } from '@mui/material'
import TitleBar from '../../components/TitleBar'
import CheckoutCard from '../../components/CheckoutCard'
import { useState } from 'react'
import RecordContainer from '../../components/RecordContainer'

const StorePage = () => {
	const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)

	return (
		<>
			<TitleBar />
			<Stack direction='row' spacing={0} sx={{ pt: 7, display: 'flex' }}>
				<RecordContainer
					isCheckoutOpen={isCheckoutOpen}
					setIsCheckoutOpen={setIsCheckoutOpen}
				/>
				{isCheckoutOpen && (
					<CheckoutCard setIsCheckoutOpen={setIsCheckoutOpen} />
				)}
			</Stack>
		</>
	)
}

export default StorePage

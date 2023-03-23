import { Container, Stack } from '@mui/material'
import TitleBar from '../../components/TitleBar'
import CheckoutContainer from '../../components/CheckoutContainer'
import { useEffect, useState } from 'react'
import RecordContainer from '../../components/RecordContainer'

const StorePage = () => {
	const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
	const [currentSku, setCurrentSku] = useState('')

	return (
		<>
			<TitleBar />
			<Stack direction='row' spacing={0} sx={{ pt: 7, display: 'flex' }}>
				<RecordContainer
					isCheckoutOpen={isCheckoutOpen}
					setIsCheckoutOpen={setIsCheckoutOpen}
					setCurrentSku={setCurrentSku}
				/>
				{isCheckoutOpen && (
					<CheckoutContainer
						setIsCheckoutOpen={setIsCheckoutOpen}
						currentSku={currentSku}
					/>
				)}
			</Stack>
		</>
	)
}

export default StorePage

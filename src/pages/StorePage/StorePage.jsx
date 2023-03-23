import { Container, Stack } from '@mui/material'
import TitleBar from '../../components/TitleBar'
import CheckoutCard from '../../components/CheckoutCard'
import { useEffect, useState } from 'react'
import RecordContainer from '../../components/RecordContainer'

const StorePage = () => {
	const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
	const [productDetails, setProductDetails] = useState({})

	return (
		<>
			<TitleBar />
			<Stack direction='row' spacing={0} sx={{ pt: 7, display: 'flex' }}>
				<RecordContainer
					isCheckoutOpen={isCheckoutOpen}
					setIsCheckoutOpen={setIsCheckoutOpen}
					setProductDetails={setProductDetails}
				/>
				{isCheckoutOpen && (
					<CheckoutCard
						setIsCheckoutOpen={setIsCheckoutOpen}
						productDetails={productDetails}
					/>
				)}
			</Stack>
		</>
	)
}

export default StorePage

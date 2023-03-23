import { Container, Stack } from '@mui/material'
import TitleBar from '../../components/TitleBar'
import CheckoutContainer from '../../components/CheckoutContainer'
import { useEffect, useState } from 'react'
import RecordContainer from '../../components/RecordContainer'
import PurchaseContainer from '../../components/PurchaseContainer'

const StorePage = () => {
	const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
	const [isPurchaseOpen, setIsPurchaseOpen] = useState(false)
	const [currentSku, setCurrentSku] = useState('')
	const [orderId, setOrderId] = useState()
	const [total, setTotal] = useState(0)

	useEffect(() => {
		isCheckoutOpen && setIsPurchaseOpen(false)
	}, [isCheckoutOpen])

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
						total={total}
						setTotal={setTotal}
						setOrderId={setOrderId}
						setIsCheckoutOpen={setIsCheckoutOpen}
						currentSku={currentSku}
						setIsPurchaseOpen={setIsPurchaseOpen}
					/>
				)}
				{isPurchaseOpen && (
					<PurchaseContainer
						orderId={orderId}
						total={total}
						setIsPurchaseOpen={setIsPurchaseOpen}
					/>
				)}
			</Stack>
		</>
	)
}

export default StorePage

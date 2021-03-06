import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from './state/index'

function App() {
	const state = useSelector((state) => state.account)
	const dispatch = useDispatch()

	const { depositMoney, withdrawMoney } = bindActionCreators(
		actionCreators,
		dispatch
	)

	console.log(depositMoney, withdrawMoney)

	return (
		<div className='App'>
			<h1>{state}</h1>
			<button onClick={() => depositMoney(1000)}>Deposit</button>
			<button onClick={() => withdrawMoney(1000)}>Withdraw</button>
		</div>
	)
}

export default App

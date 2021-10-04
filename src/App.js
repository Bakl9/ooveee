import './App.css'
import s from './component/content/Content.module.css'
import Header from './component/header/Header'
import Content from './component/content/Content'
import NavBar from './component/navBar/NavBar'
import Dialogs from './component/Dialogs/Dialogs'
import { BrowserRouter,Route } from 'react-router-dom'

  


function App(props) {
	return (
		<BrowserRouter>
			<div className="App_wrapper">
				<Header />
				<NavBar />
				<div className={s.content}>
				<Route path='/Profile' render={() => <Content postData={props.State.postData}/>} />  
				<Route  path='/Message' render={() => <Dialogs State={props.State}/>} />
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App

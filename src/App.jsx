import './App.css'
import Profile from './components/profile/Profile'
import SideBar from './components/sidebar/SideBar'
import Theme from './components/Theme'

function App() {

  return (
    <div className="App ">
      <Theme />
      <SideBar />
      <section className=' main-section fixed right-0 w-[calc(100%-300px)] mt-[60px] h-full  '>
        <Profile />
      </section>
    </div>
  )
}

export default App

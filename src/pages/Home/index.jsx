//componentes
import Header from '../Components/Header'
import MenuProducts from '../Components/MenuProducts'
//estilos
import './home.css'

function Home() {

  return (
    <>
      {/* HEADER */}
      <div className="relative w-full h-[700px] bg-[#fff]" id="Home">
        <div className="w-full h-full bg-slate-600" id="Header"></div>
        <div className="absolute top-0 left-0 w-full h-[700px]">
          <Header></Header>
        </div>
      </div>

      {/**Menu*/}
      <div className=" relative w-full h-[700px] Z-200" >
        <MenuProducts />
      </div>
    </>
  )
}

export default Home

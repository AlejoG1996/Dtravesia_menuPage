//react y context
import React from "react";
import { DtravesiaContext } from "../../../Context";

const Header = () => {
    const { showMenu, toggleMenu, isScrolled,
        items, currentIndex, addProductsBuy, loading, activeMenu, setActiveMenu,
        openModalCar, setOpenModalCar
    } = React.useContext(DtravesiaContext);

    const handleMenuClick = (menuName, sectionId) => {
        // Establecer el menú activo
        setActiveMenu(menuName);
        // Obtener el elemento de la sección para hacer scroll
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <>
            {/*NAV*/}
            <nav className={`fixed w-full z-50 top-0 start-0 transition-all duration-300 !scroll-smooth
                ${isScrolled ? "bg-white shadow-lg" : "bg-transparent shadow-none"}`}>
                <div className="flex justify-between items-center py-4 px-6 md:px-16">
                    {/*logo section*/}
                    <div className="text-2xl flex items-center gap-2 font-bold uppercase">
                        <img src="logo_icono.png" className="h-14" alt="Logo" />
                        <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-[#c19d68] text-[#c19d68]">D'TRAVESIA</span>
                    </div>

                    {/* menu section */}
                    <div className="hidden lg:block">
                        <ul className="flex items-center gap-6 text-black">
                            <li>
                                <a
                                    href="#Home"
                                    className={`inline-block py-1 px-3 hover:text-[#59a13f] font-semibold ${activeMenu === 'Inicio' ? 'text-[#59a13f]' : 'text-black'}`}
                                    onClick={(e) => { e.preventDefault(); handleMenuClick('Inicio', 'Home'); }}
                                >
                                    Inicio
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#MenuPr"
                                    className={`inline-block py-1 px-3 hover:text-[#59a13f] font-semibold ${activeMenu === 'Menú' ? 'text-[#59a13f]' : 'text-black'}`}
                                    onClick={(e) => { e.preventDefault(); handleMenuClick('Menú', 'MenuPr'); }}
                                >
                                    Menú
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#Contact"
                                    className={`inline-block py-1 px-3 hover:text-[#59a13f] font-semibold ${activeMenu === 'Contacto' ? 'text-[#59a13f]' : 'text-black'}`}
                                    onClick={(e) => { e.preventDefault(); handleMenuClick('Contacto', 'Contact'); }}
                                >
                                    Contacto
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* icons section */}
                    <div className="items-center gap-4 text-white hidden lg:flex">
                        {loading &&
                            <button className={`relative fixed  font-semibold  rounded-full 
                            border-primary px-6 py-2 duration-200 hidden md:block text-2xl
                             ${isScrolled ? "text-black" : "text-white"}`}>
                                <div className="hover:bg-primary hover:text-white w-30 h-30 flex justify-center p-4 rounded-full">
                                    <i className="fa-solid fa-cart-shopping "></i>
                                </div>
                                <span className={`absolute top-4 right-6 bg-secondary text-xs rounded-full w-6 h-6 
                                                flex items-center justify-center buy_button hover:bg-primary hover:text-white`}>
                                    -
                                </span>
                            </button>}
                        {(!loading && addProductsBuy.length >= 0) &&
                            <button className={`relative fixed  font-semibold  rounded-full 
                                border-primary px-6 py-2 duration-200 hidden md:block text-2xl
                                 ${isScrolled ? "text-black" : "text-white"}`}
                                 onClick={() => { setOpenModalCar(true) }}>
                                <div className="hover:bg-primary hover:text-white w-30 h-30 flex justify-center p-4 rounded-full">
                                    <i className="fa-solid fa-cart-shopping "></i>
                                </div>
                                <span className={`absolute top-4 right-6 bg-secondary text-xs rounded-full w-6 h-6 
                               flex items-center justify-center `}>
                                    {addProductsBuy.length}
                                </span>
                            </button>
                        }


                        <button className={`font-semibold rounded-md border-[#2E8B57] px-6 py-2 duration-300 hidden 
                                md:block transition-colors  ease-linear
                                ${isScrolled ? "text-white hover:text-white bg-[#2E8B57] hover:bg-[#277C49] " :
                                "text-white hover:bg-primary "}`}>
                            Iniciar sesión
                        </button>
                    </div>

                    {/* mobile hamburguer menu section */}
                    <div className={`lg:hidden z-50 absolute  right-8 items-center gap-4
                         ${isScrolled ? "text-black" : "text-white"}`}>
                        <button onClick={toggleMenu} className="text-2xl z-50 p-2">
                            {showMenu ? <i className="fa-solid fa-x"></i> : <i className="fa-solid fa-bars-staggered"></i>}
                        </button>
                    </div>
                </div>
            </nav>

            {/* NAV MOBILE */}
            <div className={`fixed right-0 top-0 w-[200px] h-full flex flex-col justify-between
                py-6 rounded-tl-xl rounded-bl-xl z-50 transition-transform transform lg:hidden
                ${showMenu ? "translate-x-0" : "translate-x-full"}`}
                id="Navmobile">
                <div className="lg:hidden text-white z-50 absolute right-8 items-center gap-4">
                    <button onClick={toggleMenu} className="text-2xl z-50 p-2">
                        {showMenu ? <i className="fa-solid fa-x"></i> : <i className="fa-solid fa-bars-staggered"></i>}
                    </button>
                </div>
                <div className="flex flex-col justify-between h-full">
                    <ul className="pt-14 text-white text-2xl">
                        <li className={`p-4 pl-8 flex items-center gap-2 hover:border-b-[1px]
                            ml-4 mr-4 mb-2 hover:shadow-2xl
                            ${activeMenu === 'Inicio' ? 'border-b-[1px]' : 'border-b-[0px]'}`}>
                            <i className="fa-solid fa-house-chimney"></i>
                            <a href="#Home" className=""onClick={(e) => { e.preventDefault(); handleMenuClick('Inicio', 'Home'); }} >Inicio</a>
                        </li>
                        <li className={`p-4 pl-8 flex items-center gap-2 hover:border-b-[1px]
                            ml-4 mr-4 mb-2 hover:shadow-2xl
                            ${activeMenu === 'Menú' ? 'border-b-[1px]' : 'border-b-[0px]'}`}>
                            <i className="fa-solid fa-utensils"></i>
                            <a href="#MenuPr" onClick={(e) => { e.preventDefault(); handleMenuClick('Menú', 'MenuPr'); }}>Menú</a>
                        </li>
                        <li className={`p-4 pl-8 flex items-center gap-2 hover:border-b-[1px]
                            ml-4 mr-4 mb-2 hover:shadow-2xl
                            ${activeMenu === 'Contacto' ? 'border-b-[1px]' : 'border-b-[0px]'}`}>
                            <i className="fa-solid fa-mobile"></i>
                            <a href="#Contact" onClick={(e) => { e.preventDefault(); handleMenuClick('Contacto', 'Contact'); }}>Contacto</a>
                        </li>
                    </ul>
                    <button className="p-2  text-white rounded-lg ml-8 mr-8 border-[1px] hover:bg-primary hover: border-primary transition-all">
                        Iniciar sesión
                    </button>
                </div>
            </div>

            {/* BUTTON BUY MOBILE */}



            {loading &&
                <button className={`fixed left-4 bottom-4 p-4 z-40 text-3xl bg-secondary text-white 
                    rounded-full shadow-lg hover:bg-[#896a38] hover:text-white transition-colors 
                    duration-300 ease-in-out lg:hidden buy_button ${showMenu ? "left-0" : "-left-full"}`}>
                    <i className="fa-solid fa-cart-shopping"></i>
                    <span className="absolute top-0 right-0 bg-primary text-white text-xs rounded-full
                      w-6 h-6 flex items-center justify-center buy_button">
                        -
                    </span>
                </button>}
            {(!loading && addProductsBuy.length >= 0) &&
                <button className={`fixed left-4 bottom-4 p-4 z-40 text-3xl bg-secondary text-white 
                    rounded-full shadow-lg hover:bg-[#896a38] hover:text-white transition-colors 
                    duration-300 ease-in-out lg:hidden ${showMenu ? "left-0" : "-left-full"}`}>
                    <i className="fa-solid fa-cart-shopping"
                    onClick={() => { setOpenModalCar(true) }}></i>
                    <span className="absolute top-0 right-0 bg-primary text-white text-xs rounded-full
                      w-6 h-6 flex items-center justify-center">
                        {addProductsBuy.length}
                    </span>
                </button>
            }


            {/* TEXT */}
            <div className="absolute top-[290px] left-[-200px] rotate-90 text-8xl m-0 p-0 text-secondary opacity-[.1]">
                D'TRAVESIA
            </div>

            {/* CARROUSEL */}
            <div
                id="default-carousel"
                className="absolute w-full z-20 top-0 start-0 h-full left-0 md:items-center md:justify-center "
                data-carousel="slide"
            >
                <div className="relative h-full overflow-hidden rounded-lg ">
                    <div
                        className="flex transition-transform duration-1000 ease-in-out w-full "
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`,
                        }}
                    >
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-full h-full flex justify-between pl-24  
                                pr-14 pt-24 flex-col-reverse md:flex-row md:pt-48 "
                                data-carousel-item
                            >
                                {/* Contenido del texto */}
                                <div className="bg-white pb-8 shadow-2xl rounded-b-md w-full md:w-1/2 
                                  p-4 flex  md:text-left md:bg-inherit pr-8 md:shadow-none">
                                    <div className="w-full">
                                        <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl 
                                          font-bold mb-4 font-londrina text-secondary break-words">
                                            {item.title}
                                        </h2>
                                        <p className="text-gray-700 text-sm md:text-lg text-justify
                                           md:text-gray-700 md:font-normal break-words">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Imagen */}
                                <div className="shadow-2xl md:shadow-none w-full md:w-1/2 flex  md:mb-6">
                                    <img
                                        src={item.imgSrc}
                                        alt={item.title}
                                        className="object-cover rounded-t-md md:rounded-full w-full 
                                         h-[200px] sm:w-45 sm:h-45 md:w-52 md:h-52 lg:w-72 lg:h-72 
                                         shadow-2xl"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div>
                <svg className="absolute w-[101%] z-20 pt-[650px] bottom-[-40px] md:pt-[500px] md:bottom-[-70px] left-0"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff"
                        fillOpacity="1" d="M0,128L48,122.7C96,117,192,107,288,106.7C384,107,480,117,576,133.3C672,149,768,171,864,160C960,149,1056,107,1152,96C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            </div>
        </>
    )
}

export default Header

//react y context
import React, { useRef } from 'react';
import { DtravesiaContext } from "../../../Context";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

//componente
import { ErrorComponent } from './error';
import { NoProductComponent } from './notProduct';
import { LoadinComponent } from './loading';
import { Modal } from './modal';
import { ModalForm } from './modalForm';
import { ModalCar } from './modalCar';
import { ModalCarbuy } from './modalCarBuy';

const MenuProducts = () => {
    const { searchProduct, setSearchProduct, searchCategory,
        error, loading, searchedProducts, openModal, setOpenModal, setAddProduct, setSearchCategory,
        setTotalProduct, openModalCar, setOpenModalCar
    } = React.useContext(DtravesiaContext);


    //funciones para el desplazamiento de las categorias
    const swiperRef = useRef(null);
    const handlePrevClick = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slidePrev(); // Accedemos a la instancia de swiper
        }
    };

    const handleNextClick = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideNext(); // Accedemos a la instancia de swiper
        }
    };

    //abrir modal
    const onOpenModal = (index) => {
        setOpenModal(state => !state);
        setTotalProduct(searchedProducts[index].price)
        setAddProduct(searchedProducts[index])

    }

    return (
        <>
            <div id="MenuPr">
                {/* TITLE */}
                <div className="pt-[70px] md:pt-[100px]" >
                    <div className="py-4 px-6 md:px-16 text-left text-5xl font-bold uppercase text-gray-500">NUESTRO MENÚ</div>
                </div>

                {/*CATEGORIES*/}
                <div className="py-2 px-4 mb-0 md:px-16 w-full">
                    <div className="w-full md:w-[400px] relative">
                        <i className="fa-solid fa-magnifying-glass absolute left-6 top-1/2 -translate-y-1/2 text-gray-500"></i>
                        <input
                            type="text"
                            className="bg-gray-50 py-[9px] pl-[50px] pr-4 rounded-lg text-gray-500 outline-none w-full text-xl
                            hover:bg-gray-100 transition-all ease-in-out"
                            placeholder="Buscar"
                            value={searchProduct}
                            onChange={(event => {
                                setSearchProduct(event.target.value);

                            })}
                        >

                        </input>
                    </div>
                </div>

                <div className="py-2 px-4 md:px-16 w-full relative h-auto pt-0 mp-0">
                    {/* Botón flotante de "Previous" */}
                    <button
                        className={`absolute top-[60px] left-3 md:left-12 transform -translate-y-1/2 bg-[rgba(0,0,0,0.5)] 
                        hover:bg-primary text-white font-bold  rounded-full  h-10 w-10 text-3xl text-center z-10`}
                        onClick={handlePrevClick}
                    >
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>

                    {/* Botón flotante de "Next" */}
                    <button
                        className="absolute top-[60px] right-3 md:right-12 transform -translate-y-1/2 
                        bg-[rgba(0,0,0,0.5)] hover:bg-primary text-white font-bold rounded-full 
                        z-10 h-10 w-10 text-3xl text-center"
                        onClick={handleNextClick}
                    >
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>

                    {loading && <Swiper
                        ref={swiperRef}
                        slidesPerView={2}
                        spaceBetween={20}
                        pagination={{
                            clickable: true, // Hace que los puntos de la paginación sean clickeables
                            el: '.swiper-pagination', // Especificamos el contenedor donde se renderizará la paginación
                        }}
                        breakpoints={{
                            '@0.00': {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            '@0.75': {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            '@1.00': {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            '@1.50': {
                                slidesPerView: 5,
                                spaceBetween: 20,
                            },
                        }}
                        modules={[Pagination, Navigation]}
                        className="mySwiper overflow-visible"

                    >
                        <SwiperSlide className={`shadow-lg custom-slide rounded-lg flex flex-col justify-between 
                                transition-all ease-in-out duration-500 cursor-pointer cont_product text-white min-h-[110px]`}>
                            <div className="rounded-lg p-4 text-center flex-grow hover:scale-105 transition-transform duration-500 ease-linear">

                            </div>
                        </SwiperSlide>

                        <SwiperSlide className={`shadow-lg custom-slide rounded-lg flex flex-col justify-between 
                                transition-all ease-in-out duration-500 cursor-pointer cont_product text-white min-h-[110px]`}>
                            <div className="rounded-lg p-4 text-center flex-grow hover:scale-105 transition-transform duration-500 ease-linear">

                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={`shadow-lg custom-slide rounded-lg flex flex-col justify-between 
                                transition-all ease-in-out duration-500 cursor-pointer cont_product text-white min-h-[110px]`}>
                            <div className="rounded-lg p-4 text-center flex-grow hover:scale-105 transition-transform duration-500 ease-linear">

                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={`shadow-lg custom-slide rounded-lg flex flex-col justify-between 
                                transition-all ease-in-out duration-500 cursor-pointer cont_product text-white min-h-[110px]`}>
                            <div className="rounded-lg p-4 text-center flex-grow hover:scale-105 transition-transform duration-500 ease-linear">

                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={`shadow-lg custom-slide rounded-lg flex flex-col justify-between 
                                transition-all ease-in-out duration-500 cursor-pointer cont_product text-white min-h-[110px]`}>
                            <div className="rounded-lg p-4 text-center flex-grow hover:scale-105 transition-transform duration-500 ease-linear">

                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={`shadow-lg custom-slide rounded-lg flex flex-col justify-between 
                                transition-all ease-in-out duration-500 cursor-pointer cont_product text-white min-h-[110px]`}>
                            <div className="rounded-lg p-4 text-center flex-grow hover:scale-105 transition-transform duration-500 ease-linear">

                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={`shadow-lg custom-slide rounded-lg flex flex-col justify-between 
                                transition-all ease-in-out duration-500 cursor-pointer cont_product text-white min-h-[110px]`}>
                            <div className="rounded-lg p-4 text-center flex-grow hover:scale-105 transition-transform duration-500 ease-linear">

                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={`shadow-lg custom-slide rounded-lg flex flex-col justify-between 
                                transition-all ease-in-out duration-500 cursor-pointer cont_product text-white min-h-[110px]`}>
                            <div className="rounded-lg p-4 text-center flex-grow hover:scale-105 transition-transform duration-500 ease-linear">

                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={`shadow-lg custom-slide rounded-lg flex flex-col justify-between 
                                transition-all ease-in-out duration-500 cursor-pointer cont_product text-white min-h-[110px]`}>
                            <div className="rounded-lg p-4 text-center flex-grow hover:scale-105 transition-transform duration-500 ease-linear">

                            </div>
                        </SwiperSlide>
                    </Swiper>}

                    {!loading && <Swiper
                        ref={swiperRef}
                        slidesPerView={2}
                        spaceBetween={20}
                        pagination={{
                            clickable: true, // Hace que los puntos de la paginación sean clickeables
                            el: '.swiper-pagination', // Especificamos el contenedor donde se renderizará la paginación
                        }}
                        breakpoints={{
                            '@0.00': {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            '@0.75': {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            '@1.00': {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            '@1.50': {
                                slidesPerView: 5,
                                spaceBetween: 20,
                            },
                        }}
                        modules={[Pagination, Navigation]}
                        className="mySwiper overflow-visible"

                    >
                        <SwiperSlide className={`shadow-lg custom-slide rounded-lg flex flex-col justify-between 
                                transition-all ease-in-out duration-500 cursor-pointer
                                ${searchCategory == 'Todo' ? "bg-[#2E8B57] text-white" : "hover:bg-[#277C49] hover:text-white bg-gray-50 text-gray-600"}`}
                            onClick={() => setSearchCategory('Todo')}>
                            <div className="rounded-lg p-4 text-center flex-grow hover:scale-105 transition-transform duration-500 ease-linear">
                                <i className="fa-solid fa-list-check text-4xl "></i>
                                <h3 className="text-center mt-2 mb-2 font-semibold  uppercase">Todo</h3>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className={`shadow-lg custom-slide rounded-lg flex flex-col justify-between
                            transition-all ease-in-out duration-500 cursor-pointer'
                            ${searchCategory == 'Desayunos' ? "bg-[#2E8B57] text-white" : "hover:bg-[#277C49] hover:text-white  bg-gray-50 text-gray-600"}`}
                            onClick={() => setSearchCategory('Desayunos')}>
                            <div className="rounded-lg p-4 text-center flex-grow hover:scale-105 transition-all ease-in-out duration-500">
                                <i className="fa-solid fa-egg text-4xl"></i>
                                <h3 className="text-center mt-2 mb-2 font-semibold uppercase">Desayunos</h3>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={`shadow-lg custom-slide rounded-lg flex flex-col justify-between
                            transition-all ease-in-out duration-500 cursor-pointer'
                            ${searchCategory == 'Almuerzos' ? "bg-[#2E8B57] text-white" : "hover:bg-[#277C49] hover:text-white bg-gray-50 text-gray-600"}`}
                            onClick={() => setSearchCategory('Almuerzos')}>
                            <div className="rounded-lg p-4 text-center flex-grow hover:scale-105 transition-all ease-in-out duration-500">
                                <i className="fa-solid fa-drumstick-bite text-4xl "></i>
                                <h3 className="text-center mt-2 mb-2 font-semibold  uppercase">Almuerzos</h3>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={`shadow-lg custom-slide rounded-lg flex flex-col justify-between
                            transition-all ease-in-out duration-500 cursor-pointer'
                            ${searchCategory == 'Entradas' ? "bg-[#2E8B57] text-white" : "hover:bg-[#277C49] hover:text-white bg-gray-50 text-gray-600"}`}
                            onClick={() => setSearchCategory('Entradas')}>
                            <div className="rounded-lg p-4 text-center flex-grow hover:scale-105 transition-all ease-in-out duration-500">
                                <i className="fa-solid fa-stroopwafel text-4xl "></i>
                                <h3 className="text-center mt-2 mb-2 font-semibold  uppercase">Entradas</h3>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={`shadow-lg custom-slide rounded-lg flex flex-col justify-between
                            transition-all ease-in-out duration-500 cursor-pointer'
                            ${searchCategory == 'Parrila y Ahumado' ? "bg-[#2E8B57] text-white" : "hover:bg-[#277C49]  hover:text-white bg-gray-50 text-gray-600"}`}
                            onClick={() => setSearchCategory('Parrila y Ahumado')}>
                            <div className="rounded-lg p-4 text-center flex-grow hover:scale-105 transition-all ease-in-out duration-500">
                                <i className="fa-solid fa-fire text-4xl "></i>
                                <h3 className="text-center mt-2 mb-2 font-semibold  uppercase">Parrila y Ahumado</h3>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={`shadow-lg custom-slide rounded-lg flex flex-col justify-between
                            transition-all ease-in-out duration-500 cursor-pointer'
                            ${searchCategory == 'Para compartir' ? "bg-[#2E8B57] text-white" : "hover:bg-[#277C49] hover:text-white bg-gray-50 text-gray-600"}`}
                            onClick={() => setSearchCategory('Para compartir')}>
                            <div className="rounded-lg p-4 text-center flex-grow hover:scale-105 transition-all ease-in-out duration-500">
                                <i className="fa-solid fa-people-carry-box text-4xl "></i>
                                <h3 className="text-center mt-2 mb-2 font-semibold  uppercase">Para compartir</h3>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={`shadow-lg custom-slide rounded-lg flex flex-col justify-between
                            transition-all ease-in-out duration-500 cursor-pointer'
                            ${searchCategory == 'Bebidas' ? "bg-[#2E8B57] text-white" : "hover:bg-[#277C49] hover:text-white bg-gray-50 text-gray-600"}`}
                            onClick={() => setSearchCategory('Bebidas')}>
                            <div className="rounded-lg p-4 text-center flex-grow hover:scale-105 transition-all ease-in-out duration-500">
                                <i className="fa-solid fa-wine-glass text-4xl "></i>
                                <h3 className="text-center mt-2 mb-2 font-semibold  uppercase">Bebidas</h3>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={`shadow-lg custom-slide rounded-lg flex flex-col justify-between
                            transition-all ease-in-out duration-500 cursor-pointer'
                            ${searchCategory == 'Cocteles' ? "bg-[#2E8B57] text-white" : "hover:bg-[#277C49] hover:text-white bg-gray-50 text-gray-600"}`}
                            onClick={() => setSearchCategory('Cocteles')}>
                            <div className="rounded-lg p-4 text-center flex-grow hover:scale-105 transition-all ease-in-out duration-500">
                                <i className="fa-solid fa-martini-glass-citrus text-4xl "></i>
                                <h3 className="text-center mt-2 mb-2 font-semibold  uppercase">Cocteles</h3>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={`shadow-lg custom-slide rounded-lg flex flex-col justify-between
                            transition-all ease-in-out duration-500 cursor-pointer'
                            ${searchCategory == 'Promos' ? "bg-[#2E8B57] text-white" : "hover:bg-[#277C49] hover:text-white bg-gray-50 text-gray-600"}`}
                            onClick={() => setSearchCategory('Promos')}>
                            <div className="rounded-lg p-4 text-center flex-grow hover:scale-105 transition-all ease-in-out duration-500">
                                <i className="fa-solid fa-tags text-4xl "></i>
                                <h3 className="text-center mt-2 mb-2 font-semibold  uppercase">Promos</h3>
                            </div>
                        </SwiperSlide>
                    </Swiper>}

                    {/* Paginación debajo del Swiper */}
                    <div className="swiper-pagination mt-[10px]" />
                </div>

                {/* CARDS PRODUCTS */}
                <div className="py-2 px-4 mb-0 md:px-16 w-full">
                    {error && <ErrorComponent></ErrorComponent>}
                    {(!loading && searchedProducts.length == 0) && <NoProductComponent></NoProductComponent>}

                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-2 ">
                        {/* cards */}
                        {loading && <LoadinComponent></LoadinComponent>}
                        {(!loading && searchedProducts.length > 0) && searchedProducts.map((product, index) => (
                            <div key={index} className="h-[410px] max-h-[410px] min-h-[410px] bg-gray-50 p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300 mt-[70px] relative shadow-lg">
                                <div className="relative object-cover -mt-16">
                                    <img src={product.img}
                                        alt="" className="w-36 h-36 rounded-full object-cover shadow-2xl hover:scale-110 transition-transform duration-300 ease-linear" />

                                </div>
                                <p className="uppercase text-gray-700 font-bold text-3xl">{product.name}</p>
                                <span className="text-gray-600 text-justify">{product.description}</span>
                                <div className="absolute bottom-0 w-[90%] flex flex-row justify-between items-center p-2 border-t-2 px-4">
                                    <p className="text-lg font-bold text-gray-600">${new Intl.NumberFormat('es-CO').format(product.price)}</p>
                                    <button className="bg-primary hover:bg-[#125024] text-white rounded-full w-6 
                                h-6 flex items-center justify-center text-1xl transition-colors duration-500 ease-linear"
                                        onClick={
                                            () => { onOpenModal(index) }
                                        }>
                                        <i className="fa-solid fa-plus"></i>
                                    </button>
                                </div>
                            </div>

                        ))}

                    </div>
                </div>

                {openModal && (
                    <Modal className="">
                        <ModalForm></ModalForm>
                    </Modal>
                )}

                {openModalCar && (
                    <ModalCarbuy>
                        <ModalCar></ModalCar>
                    </ModalCarbuy>

                )}

                {/*Footer*/}
                <footer className=" ts-footer w-full bg-black mt-40 !scroll-smooth" id="Contact">


                    <div className="">
                        <div className="container p-4">
                            <div className="grid gap-4 lg:grid-cols-2">
                                <div className=" md:mb-0 flex justify-center mb-6 pb-10">
                                    <img src="logo_completoblanco.png"
                                        className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] mb-6" alt="Logo" />
                                </div>


                                <div className="mb-6 md:mb-0 text-gray-100  justify-start">
                                    <h6
                                        className="mb-4 justify-start flex text-gray-100  font-semibold uppercase  text-3xl border-b-[1px] border-gray-600">
                                        CONTACTO
                                    </h6>
                                    <div className="mb-4 text-gray-100">
                                        <p className="flex items-center  justify-start">
                                            <span className="me-3">
                                                <i className="fa-solid fa-location-dot text-3xl mr-4"></i>
                                            </span>
                                            <span className="text-2xl">
                                                UBICACIÓN:
                                            </span>
                                        </p>
                                        <p className="m-0 pl-14">CALLE 53 # 33 - 24 BARRIO SAN JOSE OBREO</p>
                                    </div>


                                    <div className="mb-4 text-gray-100">
                                        <p className="flex items-center  justify-start">
                                            <span className="me-3">
                                                <i className="fa-brands fa-instagram text-3xl mr-4"></i>
                                            </span>
                                            <span className="text-2xl">
                                                INSTAGRAM:
                                            </span>
                                        </p>
                                        <p className="m-0 pl-14">@d.travesia_</p>
                                    </div>

                                    <div className="mb-4 text-gray-100">
                                        <p className="flex items-center  justify-start">
                                            <span className="me-3">
                                                <i className="fa-brands fa-whatsapp text-3xl mr-4"></i>
                                            </span>
                                            <span className="text-2xl mr-20">
                                                WHATSAPP:
                                            </span>
                                        </p>
                                        <p className="m-0 pl-14">305 000 000</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="w-full  text-gray-50 p-4 text-center border-t-[1px] border-gray-600 mt-10">
                            © 2025 Copyright:
                            <a href="#"> AlejoG Code</a>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default MenuProducts

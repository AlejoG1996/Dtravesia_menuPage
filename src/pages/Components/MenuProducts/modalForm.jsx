
import React from "react";
import { DtravesiaContext } from "../../../Context";
import { MagicMotion } from "react-magic-motion";


function ModalForm() {
    const { openModal, setOpenModal, addProduct, openCompanios, setOpenCompanios, selectedCompanion,
        setSelectedCompanion, openAddictions, setOpenAddictions, totalProduct, setTotalProduct,
        selectedAddictions, setSelectedAddictions, companiosInfo, setCompaniosInfo, addictioncInfo,
        setaddictionInfo, addProductBuyLocal, errorModal, setErrorModal
    } = React.useContext(DtravesiaContext)

    //funcion para cerrar modal
    const onCancel = () => {
        const modal = document.getElementById("modal_container");
        // Quitar la clase "modal-sacaleIn" y agregar la clase "modal-sacaleOut"
        modal.classList.remove("modal-sacaleIn");
        modal.classList.add("modal-sacaleOut");
        const modalContainer = document.getElementById("default-modal");
        modalContainer.classList.remove("bg-fadeIn");
        modalContainer.classList.add("bg-fadeOut");

        setSelectedCompanion(null);
        setCompaniosInfo('')

        setSelectedAddictions([]);
        setaddictionInfo([]);
        setTotalProduct(0);

        setOpenCompanios(false);
        setOpenAddictions(false);
        setTimeout(() => {
            setOpenModal(false);
        }, 500);
    }

    //funcion para la seleccion de un unico acompañante
    const handleCheckboxChange = (id) => {
        setSelectedCompanion(selectedCompanion === id ? null : id);
        setCompaniosInfo({ name: addProduct.companios[id].name, id: addProduct.companios[id].id })
    };

    //funcion para seleccionar adicciones
    const handleCheckboxChangeAddictions = (id) => {
        // Comprobamos si el ID ya está en el array de adicciones seleccionadas
        const isSelected = selectedAddictions.includes(id);
       
        if (isSelected) {
            setSelectedAddictions(selectedAddictions.filter(item => item !== id));
            setaddictionInfo(addictioncInfo.filter(item => item.id !== addProduct.adictions[id].id));
            setTotalProduct(totalProduct - addProduct.adictions[id].price);
        } else {
            
            setSelectedAddictions([...selectedAddictions, id]);
            setaddictionInfo([
                ...addictioncInfo,
                { name: addProduct.adictions[id].name, id: addProduct.adictions[id].id, price:addProduct.adictions[id].price }
            ]);

            setTotalProduct(totalProduct + addProduct.adictions[id].price);
        }

    };

    //funcion para agregar producto al carrito
    const onSubmit = (event) => {
        event.preventDefault();

        const buy = {
            id: addProduct.id,
            name: addProduct.name,
            acompañante: companiosInfo,
            price:addProduct.price,
            adiciones: addictioncInfo,
            img: addProduct.img,
            description: addProduct.description,
            total: totalProduct
        }

        if (addProduct.companios.length > 0 && companiosInfo.length <=0) {
            setErrorModal(true)
        } else {
            setErrorModal(false)
            addProductBuyLocal(buy)
            setOpenModal(false)

            setSelectedCompanion(null);
            setCompaniosInfo([])

            setSelectedAddictions([]);
            setaddictionInfo([]);
            setTotalProduct(0);

            setOpenCompanios(false);
            setOpenAddictions(false);
        }

    }

    return (
        <div id="modal_container" className={`fixed inset-0 z-10 w-screen overflow-y-auto 
            ${openModal ? "modal-sacaleIn" : "modal-sacaleOut"}`}>
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 md:mr-6">
                <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-[90%]">
                    {/* encabezado */}
                    <div
                        className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200"
                        style={{ backgroundImage: "linear-gradient(to right, #125024, #195e30, #216d3c, #277c49, #2e8b57)", }}>
                        <h3 className="uppercase text-gray-50 font-bold text-2xl">
                            {addProduct.name}
                        </h3>
                        <button
                            type="button"
                            className="text-white bg-transparent hover:bg-red-600 hover:text-white rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center transition-all ease-out duration-300"
                            data-modal-hide="default-modal"
                            onClick={onCancel}>
                            <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>

                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 w-[98%] mx-auto">
                        {errorModal && (
                            <div className="w-[99%] bg-red-50 text-red-700 p-4 rounded-md text-2xl mb-4">
                                <p className="text-center">Debes seleccionar el acompañante del producto para poder agregarlo al carrito</p>
                            </div>
                        )}


                        <div className="flex flex-col md:flex-row h-auto md:max-h-[400px] overflow-hidden">
                            {/* Primer div (Imagen) */}
                            <div className="w-full md:w-1/2 max-h-[200px] md:max-h-[400px] overflow-hidden rounded-md">
                                <img
                                    src={addProduct.img}
                                    alt="Imagen"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Segundo div (Texto con scroll) */}
                            <div className="w-full md:w-1/2 h-auto custom-scroll md:overflow-y-auto pt-4 md:p-4 md:pt-0">
                                <div className="">
                                    <div className="bg-gray-50 p-4 rounded-md shadow-lg w-full relative h-auto">
                                        <p className="uppercase text-gray-700 font-bold text-2xl text-left">{addProduct.name}</p>
                                        <p className="text-gray-600 text-justify">{addProduct.description}</p>
                                        <div className="bottom-0 w-[100%] flex flex-row justify-start items-center p-2 border-t-2 mt-4">
                                            <p className="text-lg font-bold text-gray-600">
                                                ${new Intl.NumberFormat("es-CO").format(addProduct.price)}
                                            </p>
                                        </div>
                                    </div>
                                    {addProduct.companios.length > 0 && (
                                        <MagicMotion className="rounded-none"
                                            transition={{ type: "spring", stiffness: 180, damping: 20, mass: 1.1 }}>
                                            <div className="bg-gray-50 shadow-md p-4 overflow-hidden mt-4 ">
                                                <button
                                                    className="text-[1.1em] font-medium w-full text-left flex 
                                        justify-between items-center text-gray-700"
                                                    onClick={() => setOpenCompanios(!openCompanios)}>
                                                    ACOMPAÑANTES
                                                    <svg className="text-gray-700" key="exclude"
                                                        style={{ transform: `rotate(${openCompanios ? 180 : 0}deg)`, transition: "320ms ease-in-out", }}
                                                        width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4.5 10L15.6714 21L27.5 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </button>
                                                {openCompanios && (
                                                    <ul>
                                                        {addProduct.companios.map((companio, index) => {
                                                            const uniqueId = `choose-me-${index}`;
                                                            return (
                                                                <div key={index}
                                                                    className={`w-full text-left flex justify-between items-center text-gray-500 pl-2 pr-2 py-2 ${index === 0 ? 'border-t-[1px] border-b-[1px] mt-8' : 'border-b-[1px]'} `}>
                                                                    <label>{companio.name}</label>
                                                                    {/* Checkbox */}
                                                                    <input
                                                                        type="checkbox"
                                                                        checked={selectedCompanion === index}
                                                                        onChange={() => handleCheckboxChange(index)}
                                                                        id={uniqueId}
                                                                        className="peer hidden"
                                                                    />

                                                                    {/* Label que actúa como el checkbox visible */}
                                                                    <label
                                                                        htmlFor={uniqueId}
                                                                        className="select-none cursor-pointer rounded-lg border-2 border-gray-200 bg-gray-200 text-white h-6 w-6 m-1 text-center font-bold text-sm transition-all duration-200 ease-in-out peer-checked:bg-primary peer-checked:text-white peer-checked:border-none flex items-center justify-center">
                                                                        <i className="fa-solid fa-check"></i>
                                                                    </label>
                                                                </div>
                                                            );
                                                        })}
                                                    </ul>
                                                )}
                                            </div>
                                        </MagicMotion>
                                    )}

                                    {addProduct.adictions.length > 0 && (
                                        <MagicMotion className="rounded-none"
                                            transition={{ type: "spring", stiffness: 180, damping: 20, mass: 1.1 }}>
                                            <div className="bg-gray-50 shadow-md p-4 overflow-hidden mt-4 ">
                                                <button
                                                    className="text-[1.1em] font-medium w-full text-left flex 
                                        justify-between items-center text-gray-700"
                                                    onClick={() => setOpenAddictions(!openAddictions)}>
                                                    ADICCIONES
                                                    <svg className="text-gray-700" key="exclude"
                                                        style={{ transform: `rotate(${openAddictions ? 180 : 0}deg)`, transition: "320ms ease-in-out", }}
                                                        width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4.5 10L15.6714 21L27.5 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </button>
                                                {openAddictions && (
                                                    <ul>
                                                        {addProduct.adictions.map((adictions, index) => {
                                                            const uniqueId = `choose-me-adic-${index}`;
                                                            return (
                                                                <div key={index} className={`w-full text-left flex justify-between items-center text-gray-500 pl-2 pr-2 py-2 ${index === 0 ? 'border-t-[1px] border-b-[1px] mt-8' : 'border-b-[1px]'}`}>
                                                                    {/* Nombre alineado a la izquierda */}
                                                                    <label className="flex-1 text-left">{adictions.name}</label>

                                                                    {/* Precio centrado */}
                                                                    <label className="flex-shrink-0 mx-auto mr-10">${new Intl.NumberFormat("es-CO").format(adictions.price)}</label>

                                                                    {/* Checkbox */}
                                                                    <input
                                                                        type="checkbox"
                                                                        checked={selectedAddictions.includes(index)}
                                                                        onChange={() => handleCheckboxChangeAddictions(index)}
                                                                        id={uniqueId}
                                                                        className="peer hidden"
                                                                    />

                                                                    {/* Label que actúa como el checkbox visible, alineado a la derecha */}
                                                                    <label
                                                                        htmlFor={uniqueId} // Asocia este `label` con el input por id
                                                                        className="select-none cursor-pointer rounded-lg border-2 border-gray-200 bg-gray-200 text-white h-6 w-6 m-1 text-center font-bold text-sm transition-all duration-200 ease-in-out peer-checked:bg-primary peer-checked:text-white peer-checked:border-none flex items-center justify-center"
                                                                    >
                                                                        <i className="fa-solid fa-check"></i>
                                                                    </label>
                                                                </div>
                                                            );
                                                        })}
                                                    </ul>
                                                )}
                                            </div>
                                        </MagicMotion>
                                    )}
                                </div>
                                <div className="bg-gray-50 p-4 rounded-md shadow-lg w-full flex justify-between h-auto mt-4">
                                    <p className="uppercase text-gray-700 font-bold text-2xl text-left">TOTAL: </p>
                                    <p className="uppercase text-primary font-bold text-2xl">${new Intl.NumberFormat("es-CO").format(totalProduct)}</p>
                                </div>
                            </div>
                        </div>


                    </div>


                    <div className="flex flex-col gap-4 sm:justify-end justify-center sm:w-auto w-full 
                                bg-white py-3 sm:flex-row sm:px-6 sm:items-center p-4 md:mr-8">
                        <button onClick={onCancel} className="bg-gray-50 py-2 px-4 rounded sm:w-[250px] w-full text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-100 transition-colors ease-in-out duration-300">Cancelar</button>
                        <button onClick={onSubmit} className="bg-primary text-white py-2 px-4 rounded sm:w-[250px] w-full ring-1 shadow-xs border-none ring-inset ring-primary hover:bg-[#125024] transition-colors ease-in-out duration-300">Agregar</button>
                    </div>



                </div>
            </div>

        </div>

    );
}

export { ModalForm }
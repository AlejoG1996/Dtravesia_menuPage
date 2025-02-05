
import React from "react";
import { DtravesiaContext } from "../../../Context";
import { MagicMotion } from "react-magic-motion";
import { NavLink } from "react-router-dom";

function ModalCar() {
    const { openModalCar, setOpenModalCar, addProductsBuy, editProductCar, setEditProductCar,
        openCompanios, setOpenCompanios, selectedCompanion, openAddictions, setOpenAddictions,
        setSelectedCompanion, productCarEdit, setProductCarEdit, defaultProduct,
        selectedAddictions, setSelectedAddictions, addictioncInfo, setaddictionInfo, companiosInfo, setCompaniosInfo,
        totalProduct, setTotalProduct, edditProductBuyLocal
    } = React.useContext(DtravesiaContext)

    const onCancel = () => {
        const modal = document.getElementById("modal_container_p");
        // Quitar la clase "modal-sacaleIn" y agregar la clase "modal-sacaleOut"
        modal.classList.remove("modal-sacaleIn");
        modal.classList.add("modal-sacaleOut");
        const modalContainer = document.getElementById("default-modal_p");
        modalContainer.classList.remove("bg-fadeIn");
        modalContainer.classList.add("bg-fadeOut");


        setProductCarEdit([]);
        setSelectedCompanion(null)
        setaddictionInfo([])
        setSelectedAddictions([])
        setCompaniosInfo([])
        setTotalProduct(0)
        setEditProductCar(null)
        setOpenCompanios(false);
        setOpenAddictions(false);
        setTimeout(() => {
            setOpenModalCar(false);
        }, 500);


    }

    const onSubmit = (event) => {

    }

    //manejo del editar
    const handleCheckboxChangeProdut = (id) => {
        setEditProductCar(editProductCar === id ? null : id);


    };

    const handleCheckboxChange = (id) => {
        setSelectedCompanion(selectedCompanion === id ? null : id);
        const filteredProduct = defaultProduct.find(product => product.id === editProductCar);
        const compa = filteredProduct.companios;
        const foundAddictions = compa.filter(item => item.id === id);


        setCompaniosInfo({ name: foundAddictions[0].name, id: foundAddictions[0].id })

    };

    const saveproduct = () => {
       
      
        const updatedAddProductsBuy = addProductsBuy.map(product => {
            if (product.id === editProductCar) {
             
                return {
                    ...product,
                    acompañante: companiosInfo,  
                    adiciones: addictioncInfo,   
                    total: totalProduct         
                };
            }
            return product;  
        });

    
        edditProductBuyLocal(updatedAddProductsBuy)
        setProductCarEdit([]);
        setSelectedCompanion(null)
        setaddictionInfo([])
        setSelectedAddictions([])
        setCompaniosInfo([])
        setTotalProduct(0)
        setEditProductCar(null)
        setOpenCompanios(false);
        setOpenAddictions(false);
    }

    const handleDelete = (id) => {
        const filteredProducts = addProductsBuy.filter(product => product.id !== id);
        edditProductBuyLocal(filteredProducts)
       
    }
    //funcion para seleccionar adicciones
    const handleCheckboxChangeAddictions = (name) => {
        // Comprobamos si el name ya está en el array de adicciones seleccionadas
        const isSelected = addictioncInfo.some(item => item.name === name);
        const filteredProduct = defaultProduct.find(product => product.id === editProductCar);
        const adic = filteredProduct.adictions;
        const filteradic = adic.find(product => product.name === name);



        if (isSelected) {

            setaddictionInfo(addictioncInfo.filter(item => item.name !== filteradic.name));
            setTotalProduct(totalProduct - filteradic.price);
        } else {

            setaddictionInfo([
                ...addictioncInfo,
                { name: filteradic.name, id: filteradic.id, price: filteradic.price }
            ]);

            setTotalProduct(totalProduct + filteradic.price);
        }
    };


    const totalSum = addProductsBuy.reduce((acc, product) => acc + product.total, 0);

    return (
        <div id="modal_container_p" className={`fixed inset-0 z-10 w-screen overflow-y-auto max-h[500px]
                  ${openModalCar ? "modal-sacaleIn" : "modal-sacaleOut"}`}>
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 ">
                <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all 
                sm:my-8 sm:w-full sm:max-w-[90%]  mr-0 mb-10 md:mr-6  h-auto md:h-[580px]">
                    {/* encabezado */}
                    <div
                        className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200"
                        style={{ backgroundImage: "linear-gradient(to right, #1a1207, #3e3120, #675237, #93764f, #c19d68)", }}>
                        <h3 className="uppercase text-gray-50 font-bold text-2xl">
                            CARRITO DE COMPRAS
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
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 w-full mx-auto ">
                        {/* no hay productos */}
                        {addProductsBuy.length <= 0 && (
                            <div className="flex justify-center items-center   h-[400px] md:h-[400px]">
                                <p className="text-center text-gray-400 text-4xl font-semibold">No hay productos en el carrito de compras</p>
                            </div>


                        )}

                        {/* con productos */}
                        {addProductsBuy.length > 0 && (
                            <div className={` md:h-[400px] flex flex-col md:flex-row gap-4 p-2
                          ${editProductCar ? "h-[690px]" : "h-[360px]"}`}>

                                <div className={`flex flex-col w-full  gap-2 md:gap-4 order-2 md:order-1
                             md:p-4 rounded-md transition-all ease-out duration-500
                             ${editProductCar ? "md:w-1/2" : "md:w-full"}`}>

                                    <div className=" h-[200px] md:h-[70%] custom-scroll_m md:p-2">
                                        <p className="text-gray-400 text-xl md:text-2xl mb-2">PRODUCTOS AGREGADOS</p>
                                        {(addProductsBuy.length > 0) && addProductsBuy.map((product, index) => {
                                            const uniqueId = `choose-mep-${product.id}`;

                                            return (
                                                <div key={index} className="bg-gray-50 p-4 rounded-md shadow-md mb-4 mr-2 ml-2">
                                                    <div className="flex items-center justify-between">

                                                        <div className="flex items-center space-x-2 w-[70%] text-gray-600  md:text-lg text-xs">
                                                            <i className="fa-solid fa-utensils"></i>
                                                            <span className="uppercase">{product.name}</span>
                                                        </div>


                                                        <span className="w-[20%] text-center text-gray-700  text-xs md:text-lg pr-6">${new Intl.NumberFormat("es-CO").format(product.total)}</span>



                                                        <input
                                                            type="checkbox"
                                                            checked={editProductCar === product.id}
                                                            onChange={() => handleCheckboxChangeProdut(product.id)}
                                                            id={uniqueId}
                                                            className="peer hidden"
                                                        />

                                                        {/* Label que actúa como el checkbox visible */}
                                                        <label
                                                            htmlFor={uniqueId}
                                                            className="h-[28px] w-[28px] md:h-[28px] md:w-[38px] px-3 py-1 rounded-md select-none cursor-pointer border-2 border-gray-200 bg-gray-200 text-white 
                                                        text-center font-bold text-sm transition-all duration-200 ease-in-out peer-checked:bg-primary peer-checked:text-white peer-checked:border-none flex items-center justify-center">
                                                            <i className="fa-solid fa-pencil"></i>
                                                        </label>
                                                        <button onClick={() => handleDelete(product.id)} className="ml-2 text-sm bg-[#e74c3c] text-white px-2 md:px-3 py-1 rounded-md hover:bg-[#a93226] transition-all ease-in-out duration-300"><i className="fa-solid fa-trash"></i></button>
                                                    </div>
                                                </div>
                                            );
                                        })}

                                    </div>
                                    <div className=" h-[30%] md:h-[30%] md:p-2 mr-2 ml-2">
                                        <div className="flex bg-gray-100 p-4 mt-4 md:mt-0 rounded-md shadow-md mb-4 h-[100px]  w-full lg:ml-auto justify-center items-center">
                                            <div className="w-1/2 text-center">
                                                <p className="text-gray-600 text-sm md:text-2xl font-semibold"># PRODUCTOS</p>
                                                <p className="text-gray-600 text-sm md:text-2xl font-semibold">{addProductsBuy.length}</p>
                                            </div>
                                            <div className="w-1/2 text-center">
                                                <p className="text-gray-600 text-sm md:text-2xl font-semibold">TOTAL A PAGAR</p>
                                                <p className="text-gray-600 text-sm md:text-2xl font-semibold">${new Intl.NumberFormat("es-CO").format(totalSum)}</p>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                                {editProductCar && productCarEdit && (

                                    <div className=" flex w-full md:w-1/2 h-full order-1 md:order-2 transition-all ease-out duration-500 pb-[12px]">
                                        <div className="w-full  bg-gray-50 shadow-md p-4 h-[300px] md:h-[100%] custom-scroll_m " >
                                            <div className="flex items-center gap-4">

                                                <img
                                                    src={productCarEdit.img}
                                                    alt={productCarEdit.name}
                                                    className="w-16 h-16 rounded-full object-cover"
                                                />

                                                <div>
                                                    <p className="text-gray-400 text-xl md:text-2xl text-left uppercase">{productCarEdit.name}</p>

                                                </div>
                                            </div>
                                            <p className="text-gray-400 text-sm text-justify pt-4">{productCarEdit.description}</p>
                                            <hr className="mt-4" />
                                            <p className="text-gray-400 text-lg text-right">${new Intl.NumberFormat("es-CO").format(productCarEdit.price)}</p>

                                            {defaultProduct.filter(product => product.id === editProductCar && product.companios.length > 0).map(product => (

                                                <MagicMotion className="rounded-none" key={product}
                                                    transition={{ type: "spring", stiffness: 180, damping: 20, mass: 1.1 }}>
                                                    <div className="bg-gray-100 shadow-md p-4 overflow-hidden mt-4 ">
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

                                                                {product.companios.map((companio, index) => {
                                                                    const uniqueId = `choose-me-${index}`;


                                                                    return (
                                                                        <div key={index}
                                                                            className={`w-full text-left flex justify-between items-center text-gray-500 pl-2 pr-2 py-2 ${index === 0 ? 'border-t-[1px] border-b-[1px] mt-8' : 'border-b-[1px]'} `}>
                                                                            <label>{companio.name}</label>
                                                                            {/* Checkbox */}
                                                                            <input
                                                                                type="checkbox"
                                                                                checked={companio.id === selectedCompanion}
                                                                                onChange={() => handleCheckboxChange(companio.id)}
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
                                            ))
                                            }

                                            {defaultProduct.filter(product => product.id === editProductCar && product.adictions.length > 0).map(product => (
                                                <MagicMotion className="rounded-none" key={product}
                                                    transition={{ type: "spring", stiffness: 180, damping: 20, mass: 1.1 }}>
                                                    <div className="bg-gray-100 shadow-md p-4 overflow-hidden mt-4 ">
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

                                                                {product.adictions.map((adictions, index) => {
                                                                    const uniqueId = `choose-ad-${index}`;


                                                                    return (
                                                                        <div key={index} className={`w-full text-left flex justify-between items-center text-gray-500 pl-2 pr-2 py-2 ${index === 0 ? 'border-t-[1px] border-b-[1px] mt-8' : 'border-b-[1px]'}`}>
                                                                            {/* Nombre alineado a la izquierda */}
                                                                            <label className="flex-1 text-left">{adictions.name}</label>

                                                                            {/* Precio centrado */}
                                                                            <label className="flex-shrink-0 mx-auto mr-10">${new Intl.NumberFormat("es-CO").format(adictions.price)}</label>

                                                                            {/* Checkbox */}
                                                                            <input
                                                                                type="checkbox"
                                                                                checked={addictioncInfo.some(item => item.name === adictions.name)}
                                                                                onChange={() => handleCheckboxChangeAddictions(adictions.name)}
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
                                            ))
                                            }


                                            <div className="flex w-full pt-2">

                                                <p className="text-gray-600 text-xl md:text-2xl font-semibold mr-4">TOTAL PRODUCTO</p>
                                                <p className="text-gray-600 text-xl md:text-2xl font-semibold">${new Intl.NumberFormat("es-CO").format(totalProduct)}</p>

                                            </div>
                                            <div className="w-full flex justify-end">
                                                <button onClick={saveproduct} className="ml-2 text-sm bg-primary text-white px-2 md:px-3 py-1 rounded-md hover:bg-[#125024] transition-all ease-in-out duration-300">Guardar</button>
                                            </div>


                                        </div>
                                    </div>
                                )}

                            </div>
                        )}


                    </div>
                    <div className="flex flex-col gap-4 sm:justify-end justify-center sm:w-auto w-[90%] mx-auto bg-white py-3 sm:flex-row sm:px-6 sm:items-center p-4 border-t-[1px]">
                        <button onClick={onCancel} className="bg-gray-50 py-2 px-4 rounded sm:w-[250px] w-full text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-100 transition-colors ease-in-out duration-300">
                            Cancelar
                        </button>
                        {addProductsBuy.length > 0 && (
                            // <button onClick={onSubmit} className="bg-[#c19d68] text-white py-2 px-4 rounded sm:w-[250px] w-full shadow-xs border-none hover:bg-[#3e3120] hover:ring-[#3e3120] transition-colors ease-in-out duration-300">
                            //     Comprar
                            // </button>
                            <NavLink to="/login" className="bg-[#c19d68] text-white py-2 px-4 rounded sm:w-[250px] w-full shadow-xs border-none hover:bg-[#3e3120] hover:ring-[#3e3120] transition-colors ease-in-out duration-300 text-center">
                                Comprar
                            </NavLink>
                        )}

                    </div>


                </div>
            </div>

        </div>

    );
}

export { ModalCar }
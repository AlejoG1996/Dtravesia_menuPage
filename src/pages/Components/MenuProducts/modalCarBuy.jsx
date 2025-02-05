import React from "react";
import ReactDom from "react-dom";

import { DtravesiaContext } from "../../../Context";

function ModalCarbuy({ children  }) {
    const {openModalCar } = React.useContext(DtravesiaContext)
    return ReactDom.createPortal(

        <div id="default-modal_p"  className={`overflow-y-auto overflow-x-hidden fixed top-0 right-0 
        left-0 z-50 justify-center items-center w-full md:inset-0 h-full max-h-full bg-rgb bg-black bg-opacity-80 flex 
          ${openModalCar? "bg-fadeIn":"bg-fadeOut"}` }
        
        >
            {children}
        </div>,
        document.getElementById('modalCar')
    )
};

export { ModalCarbuy }
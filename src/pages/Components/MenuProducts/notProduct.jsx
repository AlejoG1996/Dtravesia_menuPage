import React from "react"
function NoProductComponent() {
    return (
        <>
            <div className="w-full bg-green-50 text-green-800 p-10 rounded-md text-3xl text-center">
                <p>No hay productos con los parametros de busqueda</p>
            </div>
        </>
    )
}

export { NoProductComponent }
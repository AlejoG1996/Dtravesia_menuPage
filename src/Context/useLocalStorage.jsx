import React from 'react';

//itemName  el nombre de la clave que se usará en localStorage
//initialValue  el valor inicial que se usará si no se encuentra el item en localStorage
function useLocalStorage(itemName, initialValue) {

    //item: guarda el valor que se obtiene de localStorage o el valor inicial (initialValue)
    const [item, setItem] = React.useState(initialValue);
    //loading: indica si los datos todavía están siendo cargados desde localStorage
    const [loading, setLoading] = React.useState(true);
    //error: se usa para manejar posibles errores durante la carga o el guardado de datos.
    const [error, setError] = React.useState(false);

    //useEffect: Este efecto se ejecuta solo una vez cuando el componente se monta (debido al [] como segundo argumento).
    //Nota: El setTimeout de 3 segundos no es necesario en un entorno de producción, pero en este caso simula un retraso en la carga de los datos
    React.useEffect(() => {
        setTimeout(() => {
            try {
                //obtiene el item de localStorage asociado a la clave itemName
                const localStorageItem = localStorage.getItem(itemName);

                //variable para productos
                let parsedItem;

                if (!localStorageItem) {
                    //si no existe el local storage me locrea por defecto puede ir vacio [] pero prefiero el array de productos
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    //si no es vacio asigane el local storage existente
                    parsedItem = JSON.parse(localStorageItem);
                    setItem(parsedItem);
                }

                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(true);
            }
        },3000)
    },[])

    //saveItem: Esta función se usa para guardar un nuevo item en localStorage y actualizar el estado de item
    const saveItem = (newItem,namelocal) => {
        localStorage.setItem(namelocal, JSON.stringify(newItem));
        setItem(newItem);
      };


    return { item, saveItem, loading, error }
}

export { useLocalStorage }
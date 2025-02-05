//react
import React from "react";
import { useLocalStorage } from "./useLocalStorage";

//productos
const defaultProduct = [
    {
        id: 1, name: 'Desayuno americano', category: 'Desayunos',
        description: 'Huevos al gusto, pan tostado, tocineta y chocolate, café o jugo de naranja.',
        price: 10000, img: 'desayunos.jpg', companios: [],
        adictions: [{ name: 'Huevo', id: 1, price: 1500 }, { name: 'Queso', id: 2, price: 2500 }, { name: 'Arepa', id: 3, price: 1500 }]
    },
    {
        id: 2, name: 'Calentado', category: 'Desayunos',
        description: 'Calentado con proteína a elección (res, cerdo, chicharrón, chorizo) arepa con queso, huevo y chocolate o café.',
        price: 15000, img: 'desayunos.jpg', companios: [],
        adictions: [{ name: 'Huevo', id: 1, price: 1500 }, { name: 'Queso', id: 2, price: 2500 }, { name: 'Arepa', id: 3, price: 1500 }]
    },
    {
        id: 3, name: 'Desayuno tradicional', category: 'Desayunos',
        description: 'Arepa con queso y proteína a elección (res, cerdo, chicharrón, chorizo) arepa con queso y chocolate o café.',
        price: 13000, img: 'desayunos.jpg', companios: [],
        adictions: [{ name: 'Huevo', id: 1, price: 1500 }, { name: 'Queso', id: 2, price: 2500 }, { name: 'Arepa', id: 3, price: 1500 }]
    },
    {
        id: 4, name: 'Empanada Paisa', category: 'Desayunos',
        description: 'Empanada paisa con arroz, frijol, madurito y chicharroón.',
        price: 4000, img: 'desayunos.jpg', companios: [],
        adictions: [{ name: 'Huevo', id: 1, price: 1500 }, { name: 'Queso', id: 2, price: 2500 }, { name: 'Arepa', id: 3, price: 1500 }]
    },
    {
        id: 5, name: 'Empanada', category: 'Desayunos',
        description: 'Empanada de arroz y carne o Empanada de papa y carne.',
        price: 3500, img: 'desayunos.jpg', companios: [],
        adictions: [{ name: 'Huevo', id: 1, price: 1500 }, { name: 'Queso', id: 2, price: 2500 }, { name: 'Arepa', id: 3, price: 1500 }]
    },
    {
        id: 6, name: 'Pastes de pollo', category: 'Desayunos',
        description: 'Delicioso pastel relleno de solo pollo.',
        price: 5000, img: 'desayunos.jpg', companios: [],
        adictions: [{ name: 'Huevo', id: 1, price: 1500 }, { name: 'Queso', id: 2, price: 2500 }, { name: 'Arepa', id: 3, price: 1500 }]
    },
    {
        id: 7, name: 'Arepa de huevo', category: 'Desayunos',
        description: 'Deliciosa arepa de huevo con carne desmechada.',
        price: 5000, img: 'desayunos.jpg', companios: [],
        adictions: [{ name: 'Huevo', id: 1, price: 1500 }, { name: 'Queso', id: 2, price: 2500 }, { name: 'Arepa', id: 3, price: 1500 }]
    },
    {
        id: 8, name: 'Panzerotti', category: 'Desayunos',
        description: 'Delicioso panzerorri ranchero,tocineta,pollo y maicitos o arequipe.',
        price: 5000, img: 'desayunos.jpg', companios: [],
        adictions: [{ name: 'Huevo', id: 1, price: 1500 }, { name: 'Queso', id: 2, price: 2500 }, { name: 'Arepa', id: 3, price: 1500 }]
    },
    {
        id: 9, name: 'Palito de queso', category: 'Desayunos',
        description: 'Delicioso palito relleno de puro queso.',
        price: 3500, img: 'desayunos.jpg', companios: [],
        adictions: [{ name: 'Huevo', id: 1, price: 1500 }, { name: 'Queso', id: 2, price: 2500 }, { name: 'Arepa', id: 3, price: 1500 }]
    },
    {
        id: 10, name: 'Arepa Carne desmechada', category: 'Desayunos',
        description: 'Arepa con queso motzarella, carne desmechada y ripio de papa.',
        price: 12000, img: 'desayunos.jpg', companios: [],
        adictions: [{ name: 'Huevo', id: 1, price: 1500 }, { name: 'Queso', id: 2, price: 2500 }, { name: 'Arepa', id: 3, price: 1500 }]
    },
    {
        id: 11, name: 'Patacón Carne desmechada', category: 'Desayunos',
        description: 'Patacón con queso motzarella, carne desmechada y ripio de papa.',
        price: 13000, img: 'desayunos.jpg', companios: [],
        adictions: [{ name: 'Huevo', id: 1, price: 1500 }, { name: 'Queso', id: 2, price: 2500 }, { name: 'Arepa', id: 3, price: 1500 }]
    },

    {
        id: 12, name: 'Menú ejecutivo', category: 'Almuerzos',
        description: 'Menu ejecutivo con sopa, arroz, proteína, acompañante y bebida.',
        price: 17000, img: 'almuerzo.png', companios: [],
        adictions: [{ name: 'Huevo', id: 1, price: 1500 }, { name: 'Proteína', id: 2, price: 8000 }, { name: 'Arepa', id: 3, price: 1500 }]
    },
    {
        id: 13, name: 'Bandeja paisa', category: 'Almuerzos',
        description: 'Arroz, frijoles, huevo, chorizo, carne molida, ensalada, morcilla, tajada de maduro,  agucate y bebida.',
        price: 35000, img: 'almuerzo.png', companios: [],
        adictions: [{ name: 'Huevo', id: 1, price: 1500 }, { name: 'Proteína', id: 2, price: 8000 }, { name: 'Arepa', id: 3, price: 1500 }]
    },
    {
        id: 14, name: 'Cazuela paisa', category: 'Almuerzos',
        description: 'Arroz, frijoles, chorizo, carne molida, morcilla, agucate,ripio de papa, amduritos y bebida.',
        price: 27000, img: 'almuerzo.png', companios: [],
        adictions: [{ name: 'Huevo', id: 1, price: 1500 }, { name: 'Proteína', id: 2, price: 8000 }, { name: 'Arepa', id: 3, price: 1500 }]
    },

    {
        id: 15, name: 'Patacones y arepas', category: 'Entradas',
        description: '3 patacones y 3 arepas pequeñas acompañado de hogao y guacamole de la casa.',
        price: 10000, img: 'parrillaahumado.JPG', companios: [],
        adictions: [{ name: 'Proteína', id: 1, price: 8000 }]
    },
    {
        id: 16, name: 'Chicharrón', category: 'Entradas',
        description: 'Chicharrón, papa criolla acompañado de hogao y guacamole de la casa.',
        price: 15000, img: 'parrillaahumado.JPG', companios: [],
        adictions: [{ name: 'Proteína', id: 1, price: 8000 }]
    },
    {
        id: 17, name: 'Chorizo', category: 'Entradas',
        description: 'Chorizo tipo santarrosano y arepas acompañado de hogao y guacamole de la casa.',
        price: 15000, img: 'parrillaahumado.JPG', companios: [],
        adictions: [{ name: 'Proteína', id: 1, price: 8000 }]
    },
    {
        id: 18, name: 'Empanadas y pasteles', category: 'Entradas',
        description: '4 empanadas y 4 Pasteles acompañado de hogao y guacamole de la casa.',
        price: 15000, img: 'parrillaahumado.JPG', companios: [],
        adictions: [{ name: 'Proteína', id: 1, price: 8000 }]
    },
    {
        id: 19, name: 'Trio de canastas de patacón', category: 'Entradas',
        description: '3 canastas de patacón rellenas de morcilla, chorizo y chicharrón acompañado de hogao y guacamole de la casa.',
        price: 18000, img: 'parrillaahumado.JPG', companios: [],
        adictions: [{ name: 'Proteína', id: 1, price: 8000 }]
    },

    {
        id: 20, name: 'Chorizo', category: 'Parrila y ahumado',
        description: 'Chorizo tipo santarrosano ahumado, ensalada, mazorca, papas a elección, arepa con queso.',
        price: 23000, img: 'parrillaahumado.JPG',
        companios: [{ name: 'Papas a la francesa', id: 1 }, { name: 'Papas criollas', id: 2 }, { name: 'Papas en casco', id: 3 }],
        adictions: [{ name: 'Papas', id: 1, price: 6000 }, { name: 'Arepa y queso', id: 2, price: 3000 }, { name: 'Ensalada', id: 3, price: 4000 }]
    },
    {
        id: 21, name: 'hamburguesa tradicional', category: 'Parrila y ahumado',
        description: 'Pan, tomate, lechuga, queso cheddar, 150 gr de carne de res acompañado de papas a elección.',
        price: 25000, img: 'parrillaahumado.JPG',
        companios: [{ name: 'Papas a la francesa', id: 1 }, { name: 'Papas criollas', id: 2 }, { name: 'Papas en casco', id: 3 }],
        adictions: [{ name: 'Papas', id: 1, price: 6000 }, { name: 'Arepa y queso', id: 2, price: 3000 }, { name: 'Ensalada', id: 3, price: 4000 }]
    },
    {
        id: 22, name: 'pechuga gratinada', category: 'Parrila y ahumado',
        description: '270 gr de pechuga gratinada, ensalada, mazorca, papas a elección, arepa con queso.',
        price: 30000, img: 'parrillaahumado.JPG',
        companios: [{ name: 'Papas a la francesa', id: 1 }, { name: 'Papas criollas', id: 2 }, { name: 'Papas en casco', id: 3 }],
        adictions: [{ name: 'Papas', id: 1, price: 6000 }, { name: 'Arepa y queso', id: 2, price: 3000 }, { name: 'Ensalada', id: 3, price: 4000 }]
    },
    {
        id: 23, name: 'Chicharrón ahumado', category: 'Parrila y ahumado',
        description: '300 gr de chicharrón ahumado, ensalada, mazorca, papas a elección, arepa con queso.',
        price: 35000, img: 'parrillaahumado.JPG',
        companios: [{ name: 'Papas a la francesa', id: 1 }, { name: 'Papas criollas', id: 2 }, { name: 'Papas en casco', id: 3 }],
        adictions: [{ name: 'Papas', id: 1, price: 6000 }, { name: 'Arepa y queso', id: 2, price: 3000 }, { name: 'Ensalada', id: 3, price: 4000 }]
    },
    {
        id: 24, name: 'Costillas ahumadas', category: 'Parrila y ahumado',
        description: '350 gr de costilla ahumada en salsa BBQ, ensalada, mazorca, papas a elección, arepa con queso.',
        price: 38000, img: 'parrillaahumado.JPG',
        companios: [{ name: 'Papas a la francesa', id: 1 }, { name: 'Papas criollas', id: 2 }, { name: 'Papas en casco', id: 3 }],
        adictions: [{ name: 'Papas', id: 1, price: 6000 }, { name: 'Arepa y queso', id: 2, price: 3000 }, { name: 'Ensalada', id: 1, price: 4000 }]
    },
    {
        id: 25, name: 'Punta de anca', category: 'Parrila y ahumado',
        description: '300 gr de punta de anca, ensalada, mazorca, papas a elección, arepa con queso.',
        price: 42000, img: 'parrillaahumado.JPG',
        companios: [{ name: 'Papas a la francesa', id: 1 }, { name: 'Papas criollas', id: 2 }, { name: 'Papas en casco', id: 3 }],
        adictions: [{ name: 'Papas', id: 1, price: 6000 }, { name: 'Arepa y queso', id: 2, price: 3000 }, { name: 'Ensalada', id: 3, price: 4000 }]
    },
    {
        id: 26, name: 'Churrasco', category: 'Parrila y ahumado',
        description: '300 gr de churrasco, ensalada, mazorca, papas a elección, arepa con queso.',
        price: 42000, img: 'parrillaahumado.JPG',
        companios: [{ name: 'Papas a la francesa', id: 1 }, { name: 'Papas criollas', id: 2 }, { name: 'Papas en casco', id: 3 }],
        adictions: [{ name: 'Papas', id: 1, price: 6000 }, { name: 'Arepa y queso', id: 2, price: 3000 }, { name: 'Ensalada', id: 3, price: 4000 }]
    },
    {
        id: 27, name: 'FILET MIGNON', category: 'Parrila y ahumado',
        description: '250 gr de solomito albardado en tocineta, bañado en salsa de champiñones sobre una cama de pure de papa y ensalada.',
        price: 18000, img: 'parrillaahumado.JPG',
        companios: [{ name: 'Papas a la francesa', id: 1 }, { name: 'Papas criollas', id: 2 }, { name: 'Papas en casco', id: 3 }],
        adictions: [{ name: 'Papas', id: 1, price: 6000 }, { name: 'Arepa y queso', id: 2, price: 3000 }, { name: 'Ensalada', id: 3, price: 4000 }]
    },
    {
        id: 28, name: 'Alitas', category: 'Parrila y ahumado',
        description: '10 alitas con papas a la francesa (salsas: BBQ, BBQ Picante, miel mostaza, miel mostaza maracuyá).',
        price: 28000, img: 'parrillaahumado.JPG',
        companios: [{ name: 'Papas a la francesa', id: 1 }, { name: 'Papas criollas', id: 2 }, { name: 'Papas en casco', id: 3 }],
        adictions: [{ name: 'Papas', id: 1, price: 6000 }, { name: 'Arepa y queso', id: 2, price: 3000 }, { name: 'Ensalada', id: 3, price: 4000 }]
    },

    {
        id: 29, name: 'Picada Personal', category: 'Para compartir',
        description: '300 gr de proteína (chorizo, chicharrón), 2 arepas, 2 patacones, papa criolla, acompañado de guacamole, BBQ de la casa y hogao.',
        price: 22000, img: 'parrillaahumado.JPG',
        companios: [],
        adictions: [{ name: 'Papas', id: 1, price: 6000 }, { name: 'Arepa y queso', id: 2, price: 3000 }, { name: 'Ensalada', id: 3, price: 4000 }, { name: 'Proteína', id: 4, price: 8000 }]
    },
    {
        id: 30, name: 'Picada Mediana', category: 'Para compartir',
        description: '600 gr de proteína (chorizo, chicharrón, morcilla, costilla), 4 arepas, 4 patacones, papa criolla, acompañado de guacamole, BBQ de la casa y hogao.',
        price: 50000, img: 'parrillaahumado.JPG',
        companios: [],
        adictions: [{ name: 'Papas', id: 1, price: 6000 }, { name: 'Arepa y queso', id: 2, price: 3000 }, { name: 'Ensalada', id: 3, price: 4000 }, { name: 'Proteína', id: 4, price: 8000 }]
    },
    {
        id: 31, name: 'Picada Familiar', category: 'Para compartir',
        description: '1200 gr de proteína (chorizo, chicharrón, morcilla, costilla), 8 arepas, 8 patacones, papa criolla, acompañado de guacamole, BBQ de la casa y hogao.',
        price: 90000, img: 'parrillaahumado.JPG',
        companios: [],
        adictions: [{ name: 'Papas', id: 1, price: 6000 }, { name: 'Arepa y queso', id: 2, price: 3000 }, { name: 'Ensalada', id: 3, price: 4000 }, { name: 'Proteína', id: 4, price: 8000 }]
    },

    {
        id: 32, name: 'Soda saborizada', category: 'Bebidas',
        description: 'Soda saborizada de frutos rojos, frutos amarillos, tamarindo o mandarina.',
        price: 12000, img: 'parrillaahumado.JPG',
        companios: [],
        adictions: []
    },
    {
        id: 33, name: 'Cerveza Aguila', category: 'Bebidas',
        description: 'cerveza aguila.', price: 5000,
        img: 'parrillaahumado.JPG',
        companios: [],
        adictions: []
    },
    {
        id: 34, name: 'Cerveza Pilsen', category: 'Bebidas',
        description: 'cerveza pilsen.', price: 5000,
        img: 'parrillaahumado.JPG',
        companios: [],
        adictions: []
    },
    {
        id: 35, name: 'Cerveza Reds', category: 'Bebidas',
        description: 'cerveza Reds.', price: 5000, img: 'parrillaahumado.JPG',
        companios: [],
        adictions: []
    },
    {
        id: 36, name: 'Cerveza Budweiser', category: 'Bebidas',
        description: 'cerveza Budweiser.', price: 7000, img: 'parrillaahumado.JPG',
        companios: [],
        adictions: []
    },
    {
        id: 37, name: 'Cerveza Coronita', category: 'Bebidas',
        description: 'cerveza Coronita.', price: 8000, img: 'parrillaahumado.JPG',
        companios: [],
        adictions: []
    },
    {
        id: 38, name: 'Michelada nacional', category: 'Bebidas',
        description: 'Michelada de cerveza cerveza aguila o pilsen', price: 8000, img: 'parrillaahumado.JPG',
        companios: [],
        adictions: []
    },
    {
        id: 39, name: 'Michelada saborizada', category: 'Bebidas',
        description: 'Michelada de reds con cerezas.', price: 10000, img: 'parrillaahumado.JPG',
        companios: [],
        adictions: []
    },
    {
        id: 40, name: 'Michelada de soda', category: 'Bebidas',
        description: 'Soda michelada.', price: 6000, img: 'parrillaahumado.JPG',
        companios: [],
        adictions: []
    },

    {
        id: 41, name: 'Margarita paisa', category: 'Cocteles',
        description: 'A base de aguardiente antioqueño sabores: mandarina, tamarindo, frutos rojos, maracuyá.',
        price: 18000, img: 'parrillaahumado.JPG',
        companios: [],
        adictions: []
    },
    {
        id: 42, name: 'Margarita tradicional', category: 'Cocteles',
        description: 'a base de tequila jose cuervo.', price: 25000, img: 'parrillaahumado.JPG',
        companios: [],
        adictions: []
    },
    {
        id: 43, name: 'Mojito', category: 'Cocteles',
        description: 'A base de ron Bacardí, hierba buena, limón.',
        price: 18000, img: 'parrillaahumado.JPG',
        companios: [],
        adictions: []
    },
    {
        id: 44, name: 'Cuba libre', category: 'Cocteles',
        description: 'A base de ron viejo de caldas, coca cola, limón.',
        price: 18000, img: 'parrillaahumado.JPG',
        companios: [],
        adictions: []
    },
    {
        id: 45, name: 'Maitai', category: 'Cocteles',
        description: 'A base de ron viejo de caldas, maracuyá, crema de coco, limón.',
        price: 23000, img: 'parrillaahumado.JPG',
        companios: [],
        adictions: []
    },
    {
        id: 46, name: 'Copa de vino', category: 'Cocteles',
        description: 'Copa de vino tinto.', price: 12000, img: 'parrillaahumado.JPG',
        companios: [],
        adictions: []
    },
    {
        id: 47, name: 'Copa de vino caliente', category: 'Cocteles',
        description: 'Copa de vino tinto caliente con canela.',
        price: 18000, img: 'parrillaahumado.JPG',
        companios: [],
        adictions: []
    },
    {
        id: 48, name: 'SANGRIA VINO TINTO', category: 'Cocteles',
        description: 'sangria de vino tinto x4 copas.', price: 35000,
        img: 'parrillaahumado.JPG',
        companios: [],
        adictions: []
    },
    {
        id: 49, name: 'SANGRIA VINO TINTO', category: 'Cocteles',
        description: 'sangria de vino tinto x6 copas.',
        price: 55000, img: 'parrillaahumado.JPG',
        companios: [],
        adictions: []
    },

    {
        id: 50, name: 'Promo hamburguesa', category: 'Promo',
        description: 'Dos hamburguesas más dos cocacola zero.', price: 50000, img: 'parrillaahumado.JPG',
        companios: [],
        adictions: [{ name: 'Papas', id: 1, price: 6000 }]
    },
    {
        id: 51, name: 'Promo margaritas paisas', category: 'Promo',
        description: '2 margaritas paisas de cualquier sabor.', price: 30000, img: 'parrillaahumado.JPG',
        companios: [],
        adictions: []
    },
    {
        id: 52, name: 'Promo mojitos', category: 'Promo',
        description: '2 mojitos tradicionales.', price: 30000, img: 'parrillaahumado.JPG',
        companios: [],
        adictions: []
    },
];


//crear context
const DtravesiaContext = React.createContext();

function DtravesiaProvider({ children }) {

    //Estado para mostrar menu mobile
    const [showMenu, setShowMenu] = React.useState(false);
    //estado para cambios al hacer scroll
    const [isScrolled, setIsScrolled] = React.useState(false);
    //estado que manje el slider del header
    const [currentIndex, setCurrentIndex] = React.useState(0);
    //estados para el buscador
    const [searchProduct, setSearchProduct] = React.useState('');
    const [searchCategory, setSearchCategory] = React.useState('Todo');
    // estado para el modal
    const [openModal, setOpenModal] = React.useState(false)
    //estados para modal info sobre el producto
    const [addProduct, setAddProduct] = React.useState([]);
    //estado para mostrar acompañantes
    const [openCompanios, setOpenCompanios] = React.useState(false)
    //estado para mostrar adicciones
    const [openAddictions, setOpenAddictions] = React.useState(false)
    //Estado para la seleccion de acompañantes
    const [selectedCompanion, setSelectedCompanion] = React.useState(null);
    //Estado para seleccion de adicciones
    const [selectedAddictions, setSelectedAddictions] = React.useState([]);
    //estado para el total de add product
    const [totalProduct, setTotalProduct] = React.useState(addProduct.price);
    //estados para guardar las selecciones
    const [companiosInfo, setCompaniosInfo] = React.useState([]);
    const [addictioncInfo, setaddictionInfo] = React.useState([]);
    //Estado para el manejo de activo menu
    const [activeMenu, setActiveMenu] = React.useState('Inicio');
    //Estado para manejo de error en modal
    const [errorModal, setErrorModal] = React.useState(false);
    //estado para abrir modal y ver productos del carrito
    const [openModalCar, setOpenModalCar] = React.useState(false);
    //Estado para editar *producto agregado al carro
    const [editProductCar, setEditProductCar] = React.useState(null);
    //estado para almacenar el producto a editar
    const [productCarEdit, setProductCarEdit] = React.useState([]);
    //estado para el total de add product
    const [totalEditProduct, setTotalEditProduct] = React.useState(0);

    //funcion para mostrar y ovultar menu mobile
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    //local storage de los productos
    const { item: products, loading, error } = useLocalStorage('Products_V2', defaultProduct);
    //estados para la busqueda de productos
    const [searchedProducts, setSearchedProducts] = React.useState(products);

    // Usamos useEffect para actualizar los productos filtrados cuando el valor de búsqueda cambie
    React.useEffect(() => {
        const filteredProducts = products.filter((product) => {
            const nameProduct = product.name.toLowerCase();
            const searchValue = searchProduct.toLowerCase();
            const categoryProduct = product.category.toLowerCase();
            const serachValueCategory = searchCategory.toLowerCase();

            // Filtra por categoría y nombre, revisando si la categoría es 'todo' o si la búsqueda corresponde
            if (serachValueCategory === 'todo') {
                return nameProduct.includes(searchValue);  // Solo filtra por el nombre si la categoría es 'todo'
            } else {
                return nameProduct.includes(searchValue) && categoryProduct.includes(serachValueCategory);
            }
        });

        // Actualiza el estado con los productos filtrados
        setSearchedProducts(filteredProducts);

    }, [searchProduct, searchCategory]);

    //efecto para el scroll
    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true); // Si la página se ha desplazado hacia abajo
            } else {
                setIsScrolled(false); // Si está en la parte superior
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    //array de elementos del slider del header
    const items = [
        {
            title: "DESAYUNOS",
            description: "Nuestros desayunos típicos celebran la rica tradición culinaria de nuestra región. Ofrecemos una variedad de platillos que combinan sabores autóctonos con un toque casero y delicioso, ideales para comenzar el día con energía",
            imgSrc: "desayunos.jpg"
        },
        {
            title: "ALMUERZOS",
            description: "Nuestros almuerzos caseros, inspirados en la tradición local, ofrecen platillos auténticos preparados con ingredientes frescos y de calidad. Son ideales para quienes buscan un sabor reconfortante, perfecto para compartir en buena compañía",
            imgSrc: "almuerzo.png"
        },
        {
            title: "PARRILLA",
            description: "Nuestros asados y cortes de carne ahumados destacan por su sabor intenso, gracias a técnicas tradicionales que realzan su jugosidad y sabor. Cada pieza es seleccionada y cocinada a la perfección para ofrecer una experiencia auténtica y deliciosa.",
            imgSrc: "parrillaahumado.JPG"
        },
    ];

    // effect para desplazamiento automatico del slider del header
    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, 10000); // Cambiar cada 3 segundos
        return () => clearInterval(interval);

    }, []);

    //local storage para add products
    const { item: productsBuy, saveItem: saveProductBuy } = useLocalStorage('ProductsBuy_V2', []);
    const [addProductsBuy, setAddProductsBuy] = React.useState(productsBuy);
    //funcion para gaudar el local storage
    const addProductBuyLocal = (elemento) => {
        const newProductBuy = [...productsBuy]
        newProductBuy.push(elemento);
        saveProductBuy(newProductBuy, 'ProductsBuy_V2')

    }

    const edditProductBuyLocal = (elemento) => {
        saveProductBuy(elemento, 'ProductsBuy_V2')

    }

    //cargar productos del carrito
    React.useEffect(() => {
        if (!loading) {
            setAddProductsBuy(productsBuy);
        }
    }, [loading, productsBuy]);

    //para el editar
    React.useEffect(() => {
        if (editProductCar) {
            const filteredProduct = addProductsBuy.find(product => product.id === editProductCar);
            setProductCarEdit(filteredProduct);
            setSelectedCompanion(filteredProduct.acompañante.id)
            setaddictionInfo(filteredProduct.adiciones)
            setSelectedAddictions(filteredProduct.adicione)
            setCompaniosInfo({ name: filteredProduct.acompañante.name, id: filteredProduct.acompañante.id })
            setTotalProduct(filteredProduct.total)

        }
    }, [editProductCar]);

   




    return (
        <DtravesiaContext.Provider value={{

            showMenu, setShowMenu,
            toggleMenu,
            isScrolled, setIsScrolled,
            items, currentIndex,
            error, loading, searchedProducts,

            searchProduct, setSearchProduct,
            searchCategory, setSearchCategory,
            openModal, setOpenModal,
            addProduct, setAddProduct,
            openCompanios, setOpenCompanios,
            openAddictions, setOpenAddictions,
            selectedCompanion, setSelectedCompanion,
            selectedAddictions, setSelectedAddictions,
            totalProduct, setTotalProduct,
            companiosInfo, setCompaniosInfo, addictioncInfo, setaddictionInfo,

            addProductsBuy, setAddProductsBuy,
            addProductBuyLocal,

            activeMenu, setActiveMenu,
            errorModal, setErrorModal,
            openModalCar, setOpenModalCar,

            editProductCar, setEditProductCar,

            setProductCarEdit, productCarEdit, defaultProduct,
            edditProductBuyLocal
           

        }}>
            {children}
        </DtravesiaContext.Provider>

    )
}

export { DtravesiaContext, DtravesiaProvider };
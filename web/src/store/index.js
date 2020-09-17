import { createStore } from 'redux';



// valor inicial do meu reducer 
function reducer() {
    return [
        { value: 1, label: 'Programação' },
        { value: 2, label: 'Redes' },
        { value: 3, label: 'Segurança' },
    ]
}

const Store = createStore(reducer);

export default Store;
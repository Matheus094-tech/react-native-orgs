import { useState, useEffect } from "react";

import { getProdutores } from "../servicos/getDados";

export default function Produtores() {
    const [titulo, setTitulo] = useState('');
    const [lista, setLista] = useState([]);

    useEffect(() => {
        const retorno = getProdutores();
        retorno.lista.sort(function (a, b) {
            return a.estrelas > b.estrelas ? -1 : a.estrelas < b.estrelas ? 1 : 0;
        });
        setTitulo(retorno.titulo);
        setLista(retorno.lista);
    }, []);

    return [titulo, lista]
}
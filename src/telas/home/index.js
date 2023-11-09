import React from "react";
import Topo from "./componentes/topo"
import Produtores from "./componentes/produtores";

export default function Home() {
    return <>
        <Produtores topo={Topo} />
    </>
}
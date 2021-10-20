import { useState } from "react";
import  AddCategory  from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {

    //const categorias = ['One punch', 'Samurai X', 'Dragon Ball'];
    const [categorias, setCategorias] = useState(['One punch']);

    return (

        <>

            <h2>GifExpertApp</h2>
            <AddCategory setCategorias = { setCategorias }/>
            <hr/>


            <ol>
                {

                   categorias.map( categoria =>  ( <GifGrid key = {categoria}  categoria = { categoria } /> ) )

                }
                
            </ol>

        </>

    );

};

export default GifExpertApp;
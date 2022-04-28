import { ReactElement } from "react";
import Cargando from "./cargando";

export default function ListadoGenerico(props: listadoGenericoProps){
    if (!props.listado){
        if(props.cargandoUI){
            return props.cargandoUI;
        }
        return <Cargando/>
    }else if( props.listado.length ===0){
        if (props.listadoVcioUI) {
            return props.listadoVcioUI
        }
        return <>NO hay elelementos para mostrar</>
    }else{
        return props.children;
    }
}

interface listadoGenericoProps{
    listado: any;
    children: ReactElement;
    cargandoUI?: ReactElement;
    listadoVcioUI?: ReactElement;
}
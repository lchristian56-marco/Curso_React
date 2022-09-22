import React from "react";  //importacion de react 
import ReactDOM from  'react-dom/client'; // paquete para renderizar el compoenente 
import { CounterApp2 } from "./CounterApp";
// import { SecondApp } from "./secondApp";
import './index.css';
// import { App } from './FirstApp';
//todo en react funciona con un functional componenet 

//property title del functional component 
// definimos en el padre todas las props o properties que le mandamos los hijos
// <SecondApp title="hola mierda" numero ={ 123 }/>  
ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <CounterApp2 value = { 11 }/>
    </React.StrictMode>
)


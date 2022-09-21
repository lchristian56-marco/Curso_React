import {useState} from 'react';
import PropTypes from 'prop-types';

export const CounterApp2 = ({ value }) => {

    const [ counter, setCounter ] = useState( value ); // el valor inicial ponerle en este caso el valor inicial es 0
                                                    //el segundo valor es una funcion en este caso es setCounter
                                                    //el setCounter lo qe hace es decirle que el estado cambio 
                                                    //por lo tanto tiene que volver hacer la renderizaciòn del 
                                                    //funcional component 
    //suma de a uno en el valor de salida
    const handleAdd = (event) => {
        setCounter( counter + 1);
    }
    //Resta de a no en el valor de salida
    const handleLess = (event) => {
        setCounter( counter - 1);
    }

    const handleReset = (event) =>{
        setCounter( value );
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>

            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleLess}>-1</button>
            <button onClick={ handleReset}>Reset</button>


        </>
    )
}

CounterApp2.propTypes = {
    value: PropTypes.number.isRequired,
}
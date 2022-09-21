
// import { Fragment } from "react";

// export const SecondApp = () => {
//     return (
//             <Fragment>
//                 <h4>Cristian Gomez</h4>
//                 <p>Soy un subtitulo</p>
//             </Fragment>
//             )
// };
import PropTypes from 'prop-types';

const newMessage = {
    message: 'Hola mundo' ,
    title: 'Cristian'
}
export const SecondApp = ( { title, numero } ) =>{

    const numero2 = 30;

    return(
        <>
            <h1>{ title }</h1>
            {/* <code>{ JSON.stringify( newMessage ) }</code> */}
            <p>{ numero + numero2 }</p>
        </>
    )
}

SecondApp.propTypes = {
    title: PropTypes.string.isRequired,   //definimos que la property title debe ser de tipo string y ademas isRequired nos indica que la property title es obligatoria mandarla
    numero: PropTypes.number.isRequired  //definimos que la property numero debe de tipo number y ademas isRequired nos indica que la property numero es obligatoria mandarla
}

//defnir los props por defecto 
SecondApp.defaultProps = {
    title: 'No hay titulo',
    subTitle: 'No hay subtitulo'
    //no solo se trabaha con las properties que estamos desectructurando 
}
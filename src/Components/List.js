import React from 'react';

const List = props => {
    const {tries} = props;
    let num = 0;

    tries.forEach(()=>{
        num++;
    })

    return(
        <p>Numero de intentos: {num}</p>
    )
}
export default List;

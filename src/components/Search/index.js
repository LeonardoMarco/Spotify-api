import React, { useState } from 'react';

const Albums = (props) => {
    const [value, setValue] = useState('')
    return (
        <form onSubmit={(e) => props.function(e, value)}>
            <input 
            className="input-form" 
            type="text" 
            onChange={(e) => setValue(e.target.value)} 
            placeholder="Comece a escrever"
            />
        </form>
    )
}


export default Albums
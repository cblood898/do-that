import React from 'react';

const Form = ({ add }) => {
    let input;

    return (
        <form
        onSubmit={ e => {
            e.preventDefault();
            add(input.value)
            input.value = null;
        }}
        >
            <input
                placeholder="Add a thing to do"
                ref={ n => input = n }
                required
                />
        </form>
    )
}

export default Form;

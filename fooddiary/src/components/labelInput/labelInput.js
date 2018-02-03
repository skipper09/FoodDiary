import React from 'react';

export default function LabelInput(props) {
    return (
        <div className="label-input">
            <label>{props.label}</label>
            <input name={props.name} value={props.value}
                onChange={props.onChange} />
        </div>
    )
}

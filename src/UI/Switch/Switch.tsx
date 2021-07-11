import React from 'react';
import "./Switch.scss";

interface SwitchProps {
    items: Array<{ value: string | number | boolean, label: string }>;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    currentValue: string | number | boolean;
}

const Switch: React.FC<SwitchProps> = ({items, onChange, currentValue}) => <div className="switch__container">
    {items.map(item => <div className="switch__item" key={item.value.toString()}>
        <input value={item.value.toString()} onChange={onChange} type="radio" name={item.value.toString()} id={item.value.toString()}
               checked={item.value === currentValue}/>
        <label htmlFor={item.value.toString()}>{item.label}</label>
    </div>)}
</div>

export default Switch;

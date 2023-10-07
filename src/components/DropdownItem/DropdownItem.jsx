import React, { useState } from 'react';
import style from './DropdownItem.module.scss';

export function DropdownItem({ selected, setSelected }) {

    const [isActive, setIsActive] = useState(false);
    const options = ["1", "2", "3"];

    return (
        <div>
            <div onClick={(e) => setIsActive(!isActive)}>
                {selected}
                <span></span>
            </div>
            {isActive && (
                <div>
                    {options.map((option) => {
                        <div
                            onClick={(e) => {
                                setSelected(option);
                                setIsActive(false);
                            }}
                        >
                            {option}
                        </div>
                    })}
                </div>
            )}
        </div>
    );
}
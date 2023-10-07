import React, { useState} from 'react';
import style from './DropdownItem.module.scss';

export function DropdownItem() {

    const [isActive, setIsActive] = useState(false);


    return (
        <div>
            <div>
                Choose one
                <span></span>
            </div>
        </div>
    );
}
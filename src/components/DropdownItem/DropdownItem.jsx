/* eslint-disable array-callback-return */
import React, { useState } from 'react';
import style from './DropdownItem.module.scss';

export function DropdownItem({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const options = ['1', '2', '3'];

  return (
    <>
      <select className={style.select} name="city" id="city-select">
        <option value="">-- Выберите город --</option>
        <option value="petersburg">Санкт-Петербург</option>
        <option value="samara">Самара</option>
        <option value="perm">Пермь</option>
        <option value="novosibirsk">Новосибирск</option>
      </select>
    </>
    // <div>
    //   <div onClick={(e) => setIsActive(!isActive)}>
    //     {selected}
    //     <span></span>
    //   </div>
    //   {isActive && (
    //     <div>
    //       {options.map((option) => {
    //         <div
    //           onClick={(e) => {
    //             setSelected(option);
    //             setIsActive(false);
    //           }}
    //         >
    //           {option}
    //         </div>;
    //       })}
    //     </div>
    //   )}
    // </div>
  );
}

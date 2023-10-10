import React from 'react';
import style from './Aside.module.scss';
import { DropdownItem } from '../DropdownItem/DropdownItem';
import { ButtonSizeL } from '../ButtonSizeL/ButtonSizeL';

function Aside() {
  return (
    <div className={style.aside}>
      <h2 className={style.aside__title}>Параметры прогноза</h2>
      < form className={style.form}>
        <DropdownItem />
        <DropdownItem />
        <DropdownItem />
        <DropdownItem />
        <DropdownItem />
        <DropdownItem />
        <DropdownItem />
        <div className={style.buttonWrapper}>
          <ButtonSizeL
            // disabled={!isValid}
            // onClick={(e) => sendData(e)}
            placeholder={'Построить прогноз'}
          >
          </ButtonSizeL>
        </div>
      </form>
    </div>
  );
}

export default Aside;

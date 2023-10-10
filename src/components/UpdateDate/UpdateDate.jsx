import style from './UpdateDate.module.scss';

export const UpdateDate = () => {
  // Due to the fact that there is currently no endpoint on the
  // backend about updated data, we embed a stub that will output
  // data updates for the current day.
  const update = new Date();
  const month = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ];
  return (
    <>
      <p className={style.text}>
        Данные системы обновлены {update.getDate()} {month[update.getMonth()]} в 00:10 (GMT+3)
      </p>
    </>
  );
};

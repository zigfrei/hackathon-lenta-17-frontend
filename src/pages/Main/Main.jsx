import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Table } from 'antd';
import { getUser } from '../../services/slices/userSlice';
import Charts from '../../components/Charts/Charts';
// import style from './Main.module.scss';

function Main() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [columns, setColumns] = useState([
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: 'Quote',
      dataIndex: 'quote',
    },
    {
      title: 'Author',
      dataIndex: 'author',
    },
  ]);
  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    fetch('https://dummyjson.com/quotes')
      .then((res) => res.json())
      .then((result) => {
        setDataSource(result.quotes);
      });
  }, []);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  // console.log(user);

  return (
    <>
      <div>
        <Table columns={columns} dataSource={dataSource}></Table>
        <Charts />
      </div>
    </>
  );
}

export default Main;

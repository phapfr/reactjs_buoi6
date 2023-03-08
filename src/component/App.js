import React, { useState } from 'react';
import '../App.css';
import AddUser from './AddUser';
import Header from './Header';
import List from './List';
import Search from './Search';
import dl from './data.json';

function App() {
  const [trangThaiForm, setTrangThaiForm] = useState(true);
  const [data, setData] = useState(dl);
  const thongBao = () => {
    alert("Ket Noi")
  }
  const doiTrangThaiForm = () => {
    setTrangThaiForm(!trangThaiForm);
  }
  // console.log(dl);
  return (
    <div>
      <Header />
      <div className='container'>
        <div className='row'>
          <Search
            ketNoi={() => doiTrangThaiForm()}
            trangThaiCha={trangThaiForm}
          />
          <List dataUser = {data}/>
          <AddUser trangthaiprop={trangThaiForm} />
        </div>
      </div>
    </div>
  );
}

export default App;

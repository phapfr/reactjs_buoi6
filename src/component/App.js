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
  const [infoSearch, setInfoSearch] = useState('');
  const thongBao = () => {
    alert("Ket Noi")
  }
  const doiTrangThaiForm = () => {
    setTrangThaiForm(!trangThaiForm);
  }
  const getInfoSearch = (info) => {
    // alert('Thông tin bố nhận được: ' + info);
    setInfoSearch(info); //gán thông tin cho state
  }

  //Khai báo 1 mảng để lưu thông tin cần tìm
  var ketQua = [] //khai báo mảng để lưu kết quả, ban đầu là mảng rỗng
  data.forEach((item) => {
    if (item.name.indexOf(infoSearch) !== -1) {
      { ketQua.push(item) }
    }
  })
  // console.log(dl);


  //hàm lấy thông tin cần thêm vào data
  const getNewUser = (name, tel, permission) => {
    alert("Tên: " + name);
    var item = {};
    item.id = '';
    item.name = name;
    item.tel = tel;
    item.permission = permission;
    // console.log(item);
    var newItem = data;
    newItem.push(item);
    // console.log(newItem);
    setData(newItem);
  }

  return (
    <div>
      <Header />
      <div className='container'>
        <div className='row'>
          <Search
            ketNoi={() => doiTrangThaiForm()}
            trangThaiCha={trangThaiForm}
            getInfoSearch={(info) => getInfoSearch(info)}
          />
          <List dataUser={ketQua} />
          <AddUser
            trangthaiprop={trangThaiForm}
            addInfoUser={(name, tel, permission) => getNewUser(name, tel, permission)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

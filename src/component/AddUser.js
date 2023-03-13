import React, { Component } from 'react'

export default class AddUser extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            trangthai: true,
            id: '',
            name: '',
            tel: '',
            permission: ''
        }
    }
    hienNut = () => {
        if (this.state.trangthai == true) {
            return <div onClick={() => this.doiTrangThai()} className="btn btn-outline-info btn-block">Thêm mới</div>;
        } else {
            return <div onClick={() => this.doiTrangThai()} className="btn btn-outline-secondary btn-block">Đóng</div>;
        }
    }
    doiTrangThai = () => {
        this.setState({ trangthai: !this.state.trangthai })
    }
    hienForm = () => {
        if (this.state.trangthai == false)
            return (
                <div className="card border-primary mb-3 mt-1" style={{ maxWidth: '18rem' }}>
                    <div className="card-header">Thêm thành viên</div>
                    <div className="card-body text-primary">
                        <div className="form-group">
                            <input type="text" className="form-control" name id placeholder="Tên user" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" name id placeholder="Số điện thoại" />
                        </div>
                        <div className="form-group">
                            <select className="form-control" name id>
                                <option selected>Choose...</option>
                                <option value={1}>Admin</option>
                                <option value={2}>User</option>
                                <option value={3}>Modrater</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <div className="btn btn-block btn-primary">Thêm</div>
                        </div>
                    </div>
                </div>
            )
    }
    hienForm1 = () => {
        if (this.props.trangthaiprop == false)
            return (
                <div className="card border-primary mb-3 mt-1" style={{ maxWidth: '18rem' }}>
                    <div className="card-header">Thêm thành viên</div>
                    <div className="card-body text-primary">
                        <div className="form-group">
                            <input onChange={(event) => this.isChange(event)} type="text" className="form-control" name='name' id placeholder="Tên user" />
                        </div>
                        <div className="form-group">
                            <input onChange={(event) => this.isChange(event)} type="text" className="form-control" name='tel' id placeholder="Số điện thoại" />
                        </div>
                        <div className="form-group">
                            <select onChange={(event) => this.isChange(event)} className="form-control" name='permission' id>
                                <option selected>Choose...</option>
                                <option value={1}>Admin</option>
                                <option value={2}>User</option>
                                <option value={3}>Modrater</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <div onClick={(name, tel, permission)=>this.props.addInfoUser(this.state.name, this.state.tel, this.state.permission)} className="btn btn-block btn-primary">Thêm</div>
                        </div>
                    </div>
                </div>
            )
    }
    //hàm lấy thông tin Thêm
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        // console.log(name);
        // console.log(value);
        this.setState({[name] : value })
        var pt={};
        pt.id=this.state.id;
        pt.name=this.state.name;
        pt.tel=this.state.tel;
        pt.permission=this.state.permission;
        // console.log(pt);
    }
    render() {
        // console.log(this.props.trangthaiprop);
        console.log(this.state);
        return (
            <div className="col-3">
                {/* {this.hienNut()} */}
                {/* {this.hienForm()} */}
                {this.hienForm1()}
            </div>
        )
    }
}

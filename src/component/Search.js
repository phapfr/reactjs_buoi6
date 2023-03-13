import React, { Component } from 'react'

export default class Search extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = { infoSearch: '' }
    }

    hienNut = () => {
        if (this.props.trangThaiCha === true) {
            return <div onClick={() => this.props.ketNoi()} className="btn btn-outline-info">Thêm mới</div>
        } else {
            return <div onClick={() => this.props.ketNoi()} className="btn btn-outline-secondary">Đóng</div>
        }
    }
    //hàm lấy thông tin cần tìm
    getInfo = (event) => {
        // console.log(event.target.value);
        this.setState({ infoSearch: event.target.value })
    }
    render() {
        // console.log(this.state.infoSearch);
        return (
            <div className="col-12">
                <div className='row'>
                    <div className='col-8'>
                        <div className="searchForm">
                            <div className="form-group">
                                <div className="btn-group">
                                    <input onChange={(event) => this.getInfo(event)} type="text" className="form-control" name id placeholder="Nhập từ khóa" style={{ width: '300px' }} />
                                    <div onClick={(info) => this.props.getInfoSearch(this.state.infoSearch)} className="btn btn-info">Tìm</div>
                                </div>
                            </div>
                        </div> {/* end tìm kiếm  */}
                    </div>
                    <div className='col-4 text-center'>
                        {this.hienNut()}
                    </div>
                </div>
            </div>
        )
    }
}

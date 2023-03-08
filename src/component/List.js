import React, { Component } from 'react'
import OneUser from './OneUser'

export default class List extends Component {
    render() {
        // console.log(this.props.dataUser);
        return (
            <div className="col-9">
                <table className="table table-hover table-inverse">
                    <thead className="thead-inverse">
                        <tr>
                            <th>STT</th>
                            <th>Họ tên</th>
                            <th>Số điện thoại</th>
                            <th>Phân quyền</th>
                            <th>Chức năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.dataUser.map((value, key) => {
                                return <OneUser
                                    stt={key}
                                    ten={value.name}
                                    sdt={value.tel}
                                    quyen={value.permission}
                                />
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

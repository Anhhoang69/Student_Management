
import React, { Component } from "react";
import "./ListTeacher.css";
import ListGV from "./Components/ListGV";
import { Link } from "react-router-dom";
import CallApi from "../API/CallApi";

class ListTeacher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teachers: [],
      lop: [],
      item: sessionStorage.getItem("item"),
    };
  }

  componentDidMount() {
    this.setState({
      lop: sessionStorage.getItem("lop").split(","),
    });
    var item = sessionStorage.getItem("item");
    CallApi(`teacher/all/${item}`, "GET", null).then((res) => {
      if (res.data.ListTeachers != null) {
        this.setState({
          teachers: res.data.ListTeachers,
        });
      } else {
        this.setState({
          teachers: [],
        });
      }
      console.log(this.state.teachers);
    });
  }
  

 ChooseClass = (item) => {
    sessionStorage.setItem("item", item);
    CallApi(`teacher/all/${item}`, "GET", null).then((res) => {
      if (res.data.ListTeachers != null) {
        this.setState({
          teachers: res.data.ListTeachers,
        });
      } else {
        this.setState({
          teachers: [],
        });
      }
    });
  };

  findIndex = (_id) => {
    var { teachers } = this.state;
    var result = -1;
    teachers.forEach((teacher, index) => {
      if (teacher._id === _id) result = index;
    });
    return result;
  };

  onDelete = (_id, ID) => {
    var { teachers } = this.state;
    CallApi(`teacher/delete/${_id}`, "DELETE", null).then((res) => {
      if (res.status === 200) {
        var index = this.findIndex(_id);
        if (index !== -1) {
          teachers.splice(index, 1);
          this.setState({
            teachers: teachers,
          });
        }
      }
    });
    CallApi(`delete-teacher-account/${ID}`, "DELETE", null);
  };
 
  render() {
    var { lop, teachers } = this.state;
    return (
      <div className='Container'>
        <div className='text_center'>
          <h1 id='qlsv'>Quản lý giảng viên</h1>
        </div>
        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
          &nbsp;
          <div className='dropdown'>
            <button
              type='button'
              className='btn dropdown-toggle'
              id='dropdownMsv'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='true'>
              Lớp &nbsp; <span className='fa fa-caret-square-o-down'></span>
            </button>
            <ul className='dropdown-menu' aria-labelledby='dropdownMenu1'>
            {lop.map((item) => (
                <li
                  to='/home/list-teachers'
                  key={item}
                  onClick={() => this.ChooseClass(item)}>
                  <a role='button'>{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <label
            style={{
              paddingTop: "8px",
              paddingBottom: "2px",
              marginRight: "10px",
            }}>
            {sessionStorage.getItem("item2")}
          </label>
          <Link to='/home/list-teachers/add' className='btn btn-primary custom'>
            <span className='fa fa-plus'></span> &nbsp; Thêm giảng viên
          </Link>{" "}
          &nbsp;
          <div className='row'>
            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
              <ListGV teachers={teachers} onDelete={this.onDelete} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListTeacher;

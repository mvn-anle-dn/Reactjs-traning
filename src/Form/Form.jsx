import React, { Component } from 'react'
import Table from '../Table/Table';
import './style.css'

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        name: '' ,
        age: '',
        address: '',
        phone: '',
        gender: '' ,
        country: '',
        description: ''
      },
      array: []
      
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleOnChange = this.handleOnChange.bind(this)
    this.deleteArr = this.deleteArr.bind(this)
    this.array = []
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.user);
    this.array.push(this.state.user);
    this.setState({array: this.array});
    
  }
  
  handleOnChange(e) {
    let value = e.target.value
    let key = e.target.name
    this.setState((state) => ({
      ...state , user: {...state.user , [key]: value}
    }))
  }

  deleteArr(index = null) {
    this.array.splice(index,1)
    this.setState({array: this.array});
  }

  render() {
    return (
      <div>
        <div className="component">
         <div className="left-form">
          <form action="" onSubmit={this.handleSubmit} className="form-css">
            <div className="title-text">
              <h1>
                ADD ITEM TABLE
              </h1>
            </div>
            <div className="add-form">
              <div className="box-input">
                <div className="title-label" >
                  <label htmlFor="" >Name</label>
                </div>
                <div className="boder-input" >
                  <input 
                   type="text"
                   name="name"
                   value={this.state.user.name}
                   onChange={this.handleOnChange}
                    className="add-input" />
                </div>
              </div>
  
              <div className="box-input">
                <div className="title-label" >
                  <label htmlFor="" >Age</label>
                </div>
                <div className="boder-input" >
                  <input 
                   type="number"
                   name="age"
                   value={this.state.user.age}
                   onChange={this.handleOnChange}
                  className="add-input" />
                </div>
              </div>
  
              <div className="box-input">
                <div className="title-label" >
                  <label htmlFor="" >Address</label>
                </div>
                <div className="boder-input" >
                  <input 
                   type="text"
                   name="address"
                   value={this.state.user.address}
                   onChange={this.handleOnChange}
                  className="add-input" />
                </div>
              </div>
  
              <div className="box-input">
                <div className="title-label" >
                  <label htmlFor="" >Phone Number</label>
                </div>
                <div className="boder-input" >
                  <input 
                  type="text"
                  name="phone"
                  value={this.state.user.phone}
                  onChange={this.handleOnChange}
                  className="add-input" />
                </div>
              </div>
  
              <div className="box-input">
                <div className="title-label" >
                  <label htmlFor="" >Gender </label>
                </div>
                <div className="boder-input-radio" >
                  <div className="radio-input">
                    <p>Male</p><input 
                    type="radio"
                    value={'Male'}
                    onChange={this.handleOnChange}
                    name='gender' className="add-input" />
                  </div>
                  <div className="radio-input">
                    <p>Fmale</p><input 
                     type="radio"
                     value={'Fmale'}
                     onChange={this.handleOnChange}
                     name='gender' className="add-input" />
                  </div>
                </div>
              </div>
  
              <div className="box-input">
                <div className="title-label" >
                  <label htmlFor="" >Country</label>
                </div>
                <div className="boder-input" >
                 <select 
                  name="country"
                  value={this.state.user.country}
                  onChange={this.handleOnChange}
                  id="" className="select-css">
                    <option value="VN">VN</option>
                    <option value="US">Mẽo</option>
                    <option value="TC">Tung Của</option>
                 </select>
                </div>
              </div>
  
              <div className="box-input-arena">
                <div className="title-label" >
                  <label htmlFor="" >Description</label>
                </div>
                <div className="boder-input" >
                  <textarea
                    type="text"
                    name="description"
                    value={this.state.user.description}
                    onChange={this.handleOnChange}
                    className="add-input" />
                </div>
              </div>
  
              <div className="checked-css">
                <input type="checkbox" name="" id="" /><p>I pledge to what is declared</p>
              </div>
  
              <div className="box-input">
                <button type="submit">SUBMIT</button>
              </div>
              
            </div>
           
          </form>
         </div>

         <div className="right-body">
            <div className="main-right">
            <h1>Table plus</h1>
            <Table array = {this.state.array} deleteItem = {this.deleteArr} />
            </div>
         </div>
        </div>
      </div>
    )
  }
}

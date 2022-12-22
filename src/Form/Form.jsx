import React, { useEffect, useState } from 'react'
import Table from '../Table/Table';
import List from './ShowList/List';
import './style.css'
import iconMenu from './ShowList/icon-menu.svg'

export default function Form() {
  const [state , setState] = useState(
    {
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
  )

  const [action , setAction] = useState('table')
  const [toggle , setToggle] = useState(true)


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state.user);
    setState(state =>
       {return {
          ...state ,
          array: [ ...state.array, state.user]
      }
    })
    console.log(state.array);
    
  }

  function show(tab = 'table') {
    console.log('oke');
    if (tab == 'table') {
      setAction('table')
    }else {
      setAction('list')
    }
  }
  
  const handleOnChange = (e) => {
    console.log('oke');
    let value = e.target.value
    let key = e.target.name
    setState((state) => ({
      ...state , user: {...state.user , [key]: value}
    }))
  }

  const deleteArr = (index = null) => {

    let list = state.array
    console.log(list);
    list.splice(index,1)
    console.log(list);
    setState(prevState => {
      return {
        ...prevState,
        array: list
      }
    });
  }

  return (
    <div>
      <div className="component">
       <div className={toggle ? 'left-form toggle' : 'left-form'}>
        <div className={action == 'list' ? 'over-lay' : ''}>

        </div>
        <form action="" onSubmit={handleSubmit} className="form-css">
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
                 value={state.user.name}
                 onChange={handleOnChange}
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
                 value={state.user.age}
                 onChange={handleOnChange}
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
                 value={state.user.address}
                 onChange={handleOnChange}
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
                value={state.user.phone}
                onChange={handleOnChange}
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
                  onChange={handleOnChange}
                  name='gender' className="add-input" />
                </div>
                <div className="radio-input">
                  <p>Fmale</p><input 
                   type="radio"
                   value={'Fmale'}
                   onChange={handleOnChange}
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
                value={state.user.country}
                onChange={handleOnChange}
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
                  value={state.user.description}
                  onChange={handleOnChange}
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
            <div className="title-table">
              <div className='title-left'>
               <div  className='icon-menu ' onClick={()=> setToggle(!toggle)} ><img src={iconMenu} alt="" /></div>
               <h1>Table plus</h1> 
              </div>
              <div className="title-right">
                <div id = 'show1' onClick={()=> show('table')} className={action == 'table' ? 'show-list active-list' : 'show-list' }><span>Table</span></div>
                <div className="line"></div>
                <div id = 'show2' onClick={()=>show('list')} className={action == 'list' ? 'show-list active-list' : 'show-list' }><span>List API</span></div>
              </div>
            </div>
          {action == 'table' ?  <Table array = {state.array} deleteItem = {deleteArr} /> : <List/>}
          </div>
       </div>
      </div>
    </div>
  )
}

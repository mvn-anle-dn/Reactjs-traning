import React, { Component } from 'react';
import './style.css'

class Table extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <div className="table-show">
          <table className='table-css' >
            <thead>
              <tr className="therad-css">
                <td className="td-css">index</td>
                <td className="td-css">Name</td>
                <td className="td-css">Age</td>
                <td className="td-css">Address</td>
                <td className="td-css">Phone</td>
                <td className="td-css">Gender</td>
                <td className="td-css">Country</td>
                <td className="td-css">Description</td>
                <td className="td-css">Edit</td>
                <td className="td-css">Delete</td>
              </tr>
            </thead>
            <tbody>
              { this.props.array.map( (user,index) =>
                <tr className="therad-css" key={index}>
                <td className="td-css">{index}</td>
                <td className="td-css">{user.name}</td>
                <td className="td-css">{user.age}</td>
                <td className="td-css">{user.address}</td>
                <td className="td-css">{user.phone}</td>
                <td className="td-css">{user.gender}</td>
                <td className="td-css">{user.country}</td>
                <td className="td-css">{user.description}</td>
                <td className="td-css">Edit</td>
                <td className="td-css"> <button onClick={()=>this.props.deleteItem(index)}>Delete</button> </td>
              </tr>
              ) }
              
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Table;
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class About extends Component {

  state = {
    books: []
  }


  componentDidMount() {
    fetch('http://localhost:3001/book').then((response) => {
      response.json().then((result) => {
        this.setState({
          books: result
        })
      })

    });
  }

  render() {



    return (
      <>

        <div className="card">
          <div className="card-body">
            <NavLink to="/create" className="btn btn-primary">Add New Book</NavLink>
            <br /><br />
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>NAME</th>
                  <th>AUTHOR</th>
                  <th>PRICE</th>
                  <th>OPERATIONS</th>
                </tr>
              </thead>
              <tbody>
                {this.state.books.map((book) =>
                  <tr key={book.id} >
                    <td>{book.id}</td>
                    <td>{book.name}</td>
                    <td>{book.author}</td>
                    <td>{book.price}</td>
                    <td>
                    &nbsp;&nbsp;&nbsp;
                    <NavLink to="/" className="btn btn-info">Edit</NavLink>
                    &nbsp;&nbsp;&nbsp;
                    <NavLink to="/" className="btn btn-success">Details</NavLink>
                    &nbsp;&nbsp;&nbsp;
                    <NavLink to="/" className="btn btn-danger">Delete</NavLink>
                    &nbsp;&nbsp;&nbsp;
                  </td>
                </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </>
    );
  }
}

export default About;
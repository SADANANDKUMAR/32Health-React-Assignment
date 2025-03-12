import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AssignmentOne = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.phone.includes(searchTerm)
  );

  return (
    <>
      <nav className="navbar bg-body-tertiary px-3">
        <div className="container-fluid">
          <a className="navbar-brand">Assignment 1</a>
          <form className="d-flex SearchNavbar" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search by name, email, or phone"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>
        </div>
      </nav>

      {/* Breadcrumb Navigation */}
      <nav className="px-3" aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Assignment 1
          </li>
        </ol>
      </nav>

      <div className="container mt-4">
        <div className="row">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <div key={user.id} className="col-12 mb-4">
                <div className="card mb-3 shadow-sm">
                  <div className="row g-0">
                    <div className="col-md-2 p-2 d-flex align-items-center">
                      <img
                        src={`https://i.pravatar.cc/200?img=${user.id}`}
                        alt={user.name}
                        className="img-fluid rounded-start"
                        style={{
                          width: "200px",
                          height: "200px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h2 className="card-title">{user.name}</h2>
                        <p className="card-text mb-0">
                          <strong>Email:</strong> {user.email}
                        </p>
                        <p className="card-text mb-0">
                          <strong>Phone:</strong> {user.phone}
                        </p>
                        <p className="card-text mb-0">
                          <strong>Company:</strong> {user.company.name}
                        </p>
                        <p className="card-text mb-0">
                          <strong>Website:</strong> {user.website}
                        </p>
                        <p className="card-text mb-0">
                          <small className="text-body-secondary">
                            <strong>Address:</strong> {user.address.street},{" "}
                            {user.address.suite}, {user.address.city},{" "}
                            {user.address.zipcode}
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center mt-4">
              <h5>No users found!</h5>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AssignmentOne;

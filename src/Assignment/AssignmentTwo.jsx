// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { FaEnvelope, FaPhone, FaGlobe } from "react-icons/fa";

// const AssignmentTwo = () => {
//   const [users, setUsers] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => setUsers(data));
//   }, []);

//   const filteredUsers = users.filter(
//     (user) =>
//       user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       user.phone.includes(searchTerm)
//   );

//   return (
//     <>
//       <nav className="navbar bg-body-tertiary px-3">
//         <div className="container-fluid">
//           <a className="navbar-brand">Assignment 2</a>
//           <form className="d-flex" role="search">
//             <input
//               className="form-control me-2"
//               type="search"
//               placeholder="Search by name, email, or phone"
//               aria-label="Search"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </form>
//         </div>
//       </nav>

//       {/* Breadcrumb Navigation */}
//       <nav className="px-3" aria-label="breadcrumb">
//         <ol className="breadcrumb">
//           <li className="breadcrumb-item">
//             <Link to="/">Home</Link>
//           </li>
//           <li className="breadcrumb-item active" aria-current="page">
//             Assignment 2
//           </li>
//         </ol>
//       </nav>

//       <div className="mt-4">
//         <div className="row">
//           {filteredUsers.length > 0 ? (
//             filteredUsers.map((user) => (
//               <div
//                 key={user.id}
//                 className="col-lg-3 col-md-6 col-sm-12 mb-4 d-flex justify-content-center"
//               >
//                 <div className="card shadow-sm" style={{ width: "18rem" }}>
//                   <img
//                     src={`https://i.pravatar.cc/200?img=${user.id}`}
//                     alt={user.name}
//                     className="card-img-top"
//                     style={{
//                       width: "100%",
//                       height: "200px",
//                       objectFit: "cover",
//                     }}
//                   />
//                   <div className="card-body">
//                     <h5 className="card-title">{user.name}</h5>
//                     <p className="card-text mb-0 detailtext">
//                       <FaEnvelope /> <strong>Email:</strong> {user.email}
//                     </p>
//                     <p className="card-text mb-0 detailtext">
//                       <FaPhone /> <strong>Phone:</strong> {user.phone}
//                     </p>
//                     <p className="card-text mb-0 detailtext">
//                       <FaGlobe /> <strong>Website:</strong> {user.website}
//                     </p>
//                   </div>
//                   <div className="card-footer text-body-secondary d-flex justify-content-around border-top">
//                     <button className="btn btn-outline-danger mx-2">❤</button>
//                     <div className="vr"></div>
//                     <button className="btn btn-outline-secondary mx-2">
//                       ✎
//                     </button>
//                     <div className="vr"></div>
//                     <button className="btn btn-outline-dark mx-2">🗑</button>
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div className="text-center mt-4">
//               <h5>No users found</h5>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default AssignmentTwo;

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { FaEnvelope, FaPhone, FaGlobe } from "react-icons/fa";
// import { Modal, Button, Form } from "react-bootstrap";

// const AssignmentTwo = () => {
//   const [users, setUsers] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [showModal, setShowModal] = useState(false);
//   const [currentUser, setCurrentUser] = useState(null);
//   const [editedUser, setEditedUser] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     website: "",
//   });

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => setUsers(data));
//   }, []);

//   const filteredUsers = users.filter(
//     (user) =>
//       user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       user.phone.includes(searchTerm)
//   );

//   const handleEdit = (user) => {
//     setCurrentUser(user);
//     setEditedUser(user);
//     setShowModal(true);
//   };

//   const handleDelete = (id) => {
//     setUsers(users.filter((user) => user.id !== id));
//   };

//   const handleSave = () => {
//     if (
//       !editedUser.name ||
//       !editedUser.email ||
//       !editedUser.phone ||
//       !editedUser.website
//     ) {
//       alert("All fields are required");
//       return;
//     }
//     setUsers(
//       users.map((user) => (user.id === currentUser.id ? editedUser : user))
//     );
//     setShowModal(false);
//   };

//   return (
//     <>
//       <nav className="navbar bg-body-tertiary px-3">
//         <div className="container-fluid">
//           <a className="navbar-brand">Assignment 2</a>
//           <form className="d-flex" role="search">
//             <input
//               className="form-control me-2"
//               type="search"
//               placeholder="Search by name, email, or phone"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </form>
//         </div>
//       </nav>

//       <nav className="px-3" aria-label="breadcrumb">
//         <ol className="breadcrumb">
//           <li className="breadcrumb-item">
//             <Link to="/">Home</Link>
//           </li>
//           <li className="breadcrumb-item active" aria-current="page">
//             Assignment 2
//           </li>
//         </ol>
//       </nav>

//       <div className="mt-4">
//         <div className="row">
//           {filteredUsers.length > 0 ? (
//             filteredUsers.map((user) => (
//               <div
//                 key={user.id}
//                 className="col-lg-3 col-md-6 col-sm-12 mb-4 d-flex justify-content-center"
//               >
//                 <div className="card shadow-sm" style={{ width: "18rem" }}>
//                   <img
//                     src={`https://i.pravatar.cc/200?img=${user.id}`}
//                     alt={user.name}
//                     className="card-img-top"
//                     style={{
//                       width: "100%",
//                       height: "200px",
//                       objectFit: "cover",
//                     }}
//                   />
//                   <div className="card-body">
//                     <h5 className="card-title">{user.name}</h5>
//                     <p className="card-text mb-0 detailtext">
//                       <FaEnvelope /> <strong>Email:</strong> {user.email}
//                     </p>
//                     <p className="card-text mb-0 detailtext">
//                       <FaPhone /> <strong>Phone:</strong> {user.phone}
//                     </p>
//                     <p className="card-text mb-0 detailtext">
//                       <FaGlobe /> <strong>Website:</strong> {user.website}
//                     </p>
//                   </div>
//                   <div className="card-footer text-body-secondary d-flex justify-content-around border-top">
//                     <button className="btn btn-outline-danger mx-2">❤</button>
//                     <div className="vr"></div>
//                     <button
//                       className="btn btn-outline-secondary mx-2"
//                       onClick={() => handleEdit(user)}
//                     >
//                       ✎
//                     </button>
//                     <div className="vr"></div>
//                     <button
//                       className="btn btn-outline-dark mx-2"
//                       onClick={() => handleDelete(user.id)}
//                     >
//                       🗑
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div className="text-center mt-4">
//               <h5>No users found</h5>
//             </div>
//           )}
//         </div>
//       </div>

//       <Modal show={showModal} onHide={() => setShowModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Edit User</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group className="mb-3">
//               <Form.Label>Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 value={editedUser.name}
//                 onChange={(e) =>
//                   setEditedUser({ ...editedUser, name: e.target.value })
//                 }
//                 required
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Email</Form.Label>
//               <Form.Control
//                 type="email"
//                 value={editedUser.email}
//                 onChange={(e) =>
//                   setEditedUser({ ...editedUser, email: e.target.value })
//                 }
//                 required
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Phone</Form.Label>
//               <Form.Control
//                 type="text"
//                 value={editedUser.phone}
//                 onChange={(e) =>
//                   setEditedUser({ ...editedUser, phone: e.target.value })
//                 }
//                 required
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Website</Form.Label>
//               <Form.Control
//                 type="text"
//                 value={editedUser.website}
//                 onChange={(e) =>
//                   setEditedUser({ ...editedUser, website: e.target.value })
//                 }
//                 required
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShowModal(false)}>
//             Cancel
//           </Button>
//           <Button variant="primary" onClick={handleSave}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// };

// export default AssignmentTwo;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaPhone, FaGlobe } from "react-icons/fa";
import { Modal, Button, Form } from "react-bootstrap";

const AssignmentTwo = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [editedUser, setEditedUser] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
  });
  const [likedUsers, setLikedUsers] = useState({});

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

  const handleEdit = (user) => {
    setCurrentUser(user);
    setEditedUser(user);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleSave = () => {
    if (
      !editedUser.name ||
      !editedUser.email ||
      !editedUser.phone ||
      !editedUser.website
    ) {
      alert("All fields are required");
      return;
    }
    setUsers(
      users.map((user) => (user.id === currentUser.id ? editedUser : user))
    );
    setShowModal(false);
  };

  const handleLike = (id) => {
    setLikedUsers((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
      <nav className="navbar bg-body-tertiary px-3">
        <div className="container-fluid">
          <a className="navbar-brand">Assignment 2</a>
          <form className="d-flex SearchNavbar" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search by name, email, or phone"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>
        </div>
      </nav>

      <nav className="px-3" aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Assignment 2
          </li>
        </ol>
      </nav>

      <div className="mt-4">
        <div className="row">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <div
                key={user.id}
                className="col-lg-3 col-md-6 col-sm-12 mb-4 d-flex justify-content-center"
              >
                <div className="card shadow-sm" style={{ width: "18rem" }}>
                  <img
                    src={`https://i.pravatar.cc/200?img=${user.id}`}
                    alt={user.name}
                    className="card-img-top"
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{user.name}</h5>
                    <p className="card-text mb-0 detailtext">
                      <FaEnvelope /> <strong>Email:</strong> {user.email}
                    </p>
                    <p className="card-text mb-0 detailtext">
                      <FaPhone /> <strong>Phone:</strong> {user.phone}
                    </p>
                    <p className="card-text mb-0 detailtext">
                      <FaGlobe /> <strong>Website:</strong> {user.website}
                    </p>
                  </div>
                  <div className="card-footer text-body-secondary d-flex justify-content-around border-top">
                    <button
                      className={`btn ${
                        likedUsers[user.id]
                          ? "btn-danger"
                          : "btn-outline-danger"
                      } mx-2`}
                      onClick={() => handleLike(user.id)}
                    >
                      ❤
                    </button>
                    <div className="vr"></div>
                    <button
                      className="btn btn-outline-secondary mx-2"
                      onClick={() => handleEdit(user)}
                    >
                      ✎
                    </button>
                    <div className="vr"></div>
                    <button
                      className="btn btn-outline-dark mx-2"
                      onClick={() => handleDelete(user.id)}
                    >
                      🗑
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center mt-4">
              <h5>No users found</h5>
            </div>
          )}
        </div>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={editedUser.name}
                onChange={(e) =>
                  setEditedUser({ ...editedUser, name: e.target.value })
                }
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={editedUser.email}
                onChange={(e) =>
                  setEditedUser({ ...editedUser, email: e.target.value })
                }
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                value={editedUser.phone}
                onChange={(e) =>
                  setEditedUser({ ...editedUser, phone: e.target.value })
                }
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Website</Form.Label>
              <Form.Control
                type="text"
                value={editedUser.website}
                onChange={(e) =>
                  setEditedUser({ ...editedUser, website: e.target.value })
                }
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AssignmentTwo;

// import "./styles.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import AssignmentOne from "./Assignment/AssignmentOne";
// import AssignmentTwo from "./Assignment/AssignmentTwo";

// export default function App() {
//   return (
//     <Router>
//       <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
//         <div className="row g-4 w-75">
//           <div className="col-md-6">
//             <div className="card text-center shadow-sm">
//               <div className="card-body">
//                 <h5 className="card-title">Assignment 1</h5>
//                 <p className="card-text">
//                   <strong>Beginner**</strong>: For applicants who have just
//                   learned React and have minimal to no experience in developing
//                   applications using React.
//                 </p>
//                 <Link to="/assignment-one" className="btn btn-primary">
//                   Visit assignment
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-6">
//             <div className="card text-center shadow-sm">
//               <div className="card-body">
//                 <h5 className="card-title">Assignment 2</h5>
//                 <p className="card-text">
//                   <strong>Advanced**</strong>: For applicants who have a good
//                   working knowledge of React and have worked on / developed at
//                   least one React application.
//                 </p>
//                 <Link to="/assignment-two" className="btn btn-primary">
//                   Visit assignment
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Routes>
//         <Route path="/assignment-one" element={<AssignmentOne />} />
//         <Route path="/assignment-two" element={<AssignmentTwo />} />
//       </Routes>
//     </Router>
//   );
// }

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AssignmentOne from "./Assignment/AssignmentOne";
import AssignmentTwo from "./Assignment/AssignmentTwo";

const Home = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="row g-4 w-75">
        <div className="col-md-6">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Assignment 1</h5>
              <p className="card-text">
                <strong>Beginner**</strong>: For applicants who have just
                learned React and have minimal to no experience in developing
                applications using React.
              </p>
              <Link to="/assignment-one" className="btn btn-primary">
                Visit assignment
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Assignment 2</h5>
              <p className="card-text">
                <strong>Advanced**</strong>: For applicants who have a good
                working knowledge of React and have worked on / developed at
                least one React application.
              </p>
              <Link to="/assignment-two" className="btn btn-primary">
                Visit assignment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assignment-one" element={<AssignmentOne />} />
        <Route path="/assignment-two" element={<AssignmentTwo />} />
      </Routes>
    </Router>
  );
}

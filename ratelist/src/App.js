import React from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import './App.css';

function App() {
  
  //return (
    // <Router>
    //   <div>
    //     <nav>
    //       <ul>
    //         <li>
    //           <Link to="/">Home</Link>
    //         </li>
    //         <li>
    //           <Link to="/about">About</Link>
    //         </li>
    //         <li>
    //           <Link to="/users">Users</Link>
    //         </li>
    //       </ul>
    //     </nav>

    //     {/* A <Switch> looks through its children <Route>s and
    //         renders the first one that matches the current URL. */}
    //     <Switch>
    //       <Route path="/about">
    //         <About />
    //       </Route>
    //       <Route path="/users">
    //         <Users />
    //       </Route>
    //       <Route path="/">
    //         <Home />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
 // );
  
  return (
    <div className="App">
      <header className="App-header">
        <button className="login_button" onClick={(e): void => {e.preventDefault(); window.location.href='http://localhost:3001/auth/spotify'}}>
        Login to Spotify
        </button>
      </header>
    </div>
  );
}


// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }

export default App;






// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Redirect,
//   useHistory,
//   useLocation
// } from "react-router-dom";

// // This example has 3 pages: a public page, a protected
// // page, and a login screen. In order to see the protected
// // page, you must first login. Pretty standard stuff.
// //
// // First, visit the public page. Then, visit the protected
// // page. You're not yet logged in, so you are redirected
// // to the login page. After you login, you are redirected
// // back to the protected page.
// //
// // Notice the URL change each time. If you click the back
// // button at this point, would you expect to go back to the
// // login page? No! You're already logged in. Try it out,
// // and you'll see you go back to the page you visited
// // just *before* logging in, the public page.

// export default function AuthExample() {
//   return (
//     <Router>
//       <div>
//         <AuthButton />

//         <ul>
//           <li>
//             <Link to="/public">Public Page</Link>
//           </li>
//           <li>
//             <Link to="/protected">Protected Page</Link>
//           </li>
//         </ul>

//         <Switch>
//           <Route path="/public">
//             <PublicPage />
//           </Route>
//           <Route path="/login">
//             <LoginPage />
//           </Route>
//           <PrivateRoute path="/protected">
//             <ProtectedPage />
//           </PrivateRoute>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// const fakeAuth = {
//   isAuthenticated: false,
//   authenticate(cb) {
//     fakeAuth.isAuthenticated = true;
//     setTimeout(cb, 100); // fake async
//   },
//   signout(cb) {
//     fakeAuth.isAuthenticated = false;
//     setTimeout(cb, 100);
//   }
// };

// function AuthButton() {
//   let history = useHistory();

//   return fakeAuth.isAuthenticated ? (
//     <p>
//       Welcome!{" "}
//       <button
//         onClick={() => {
//           fakeAuth.signout(() => history.push("/"));
//         }}
//       >
//         Sign out
//       </button>
//     </p>
//   ) : (
//     <p>You are not logged in.</p>
//   );
// }

// // A wrapper for <Route> that redirects to the login
// // screen if you're not yet authenticated.
// function PrivateRoute({ children, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         fakeAuth.isAuthenticated ? (
//           children
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/login",
//               state: { from: location }
//             }}
//           />
//         )
//       }
//     />
//   );
// }

// function PublicPage() {
//   return <h3>Public</h3>;
// }

// function ProtectedPage() {
//   return <h3>Protected</h3>;
// }

// function LoginPage() {
//   let history = useHistory();
//   let location = useLocation();

//   let { from } = location.state || { from: { pathname: "/" } };
//   let login = () => {
//     fakeAuth.authenticate(() => {
//       history.replace(from);
//     });
//   };

//   return (
//     <div>
//       <p>You must log in to view the page at {from.pathname}</p>
//       <button onClick={login}>Log in</button>
//     </div>
//   );
// }
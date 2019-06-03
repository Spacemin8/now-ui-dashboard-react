import React from "react";
import { Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
import { Alert } from "reactstrap";

class RoutingSystem extends React.Component {
  render() {
    return (
      <>
        <div className="bd-page-title">
          <h1 className="bd-title" id="content">
            Routing System
          </h1>
          <div className="avatar-group mt-3" />
        </div>
        <p className="bd-lead">
          We've created these dynamic routes, so we wouldn't have to write them
          in two places. On place would have been inside our{" "}
          <Link to="/documentation/sidebar">Sidebar</Link> and the onther one
          would be the{" "}
          <code className="highlighter-rouge">src/layouts/Admin.jsx</code>{" "}
          layout. You will find all our demo routes in{" "}
          <code className="highlighter-rouge">src/routes.js</code>
        </p>
        <hr />
        <Alert color="danger">
          Please note that these are just demo routes. You can delete them and
          create your own routing system, or you can easily replace them with
          normal{" "}
          <b>
            <a
              href="https://reacttraining.com/react-router/web/api/Route"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted"
            >
              Routes
            </a>
          </b>{" "}
          and{" "}
          <b>
            <a
              href="https://reacttraining.com/react-router/web/api/Link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted"
            >
              Links
            </a>
          </b>{" "}
          or{" "}
          <b>
            <a
              href="https://reacttraining.com/react-router/web/api/NavLink"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted"
            >
              NavLinks
            </a>
          </b>{" "}
          from{" "}
          <b>
            <a
              href="https://reacttraining.com/react-router/web/example/basic"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted"
            >
              react-router-dom
            </a>
          </b>
          .
          <br />
          If you do not understand them, please take in consideration replacing
          them with normal routes and use the <b>src/routes.js</b> just for
          rendering Links inside the{" "}
          <b>
            <Link to="/documentation/sidebar" className="text-muted">
              Sidebar
            </Link>
          </b>{" "}
          component.
        </Alert>
        <h2>Legend</h2>
        <ul>
          <li>
            <SyntaxHighlighter language="jsx" style={prism}>
              {`{ path: "/path-for-component", name: "ComponentName", icon: "iconClassName", component: YourComponent, layout: "/layout-path" },`}
            </SyntaxHighlighter>
            <ul>
              <li>
                <code className="highlighter-rouge">path</code> (path for your
                route - this will be seen in the browser url input - example{" "}
                <code className="highlighter-rouge">/dashboard</code>)
              </li>
              <li>
                <code className="highlighter-rouge">name</code> (name of your
                route - this will appear in the{" "}
                <code className="highlighter-rouge">Sidebar</code> and{" "}
                <code className="highlighter-rouge">AdminNavbar</code>{" "}
                components - example{" "}
                <code className="highlighter-rouge">Dashboard</code>)
              </li>
              <li>
                <code className="highlighter-rouge">icon</code> (icon to be
                displayed alongside with links in{" "}
                <code className="highlighter-rouge">Sidebar</code> component -
                example <code className="highlighter-rouge">fa fa-heart</code>)
              </li>
              <li>
                <code className="highlighter-rouge">component</code> (this is
                the View component that you want to be displayed on the
                specified route - example{" "}
                <code className="highlighter-rouge">Dashboard</code>)
              </li>
              <li>
                <code className="highlighter-rouge">layout</code> (path of the
                layout in which the View component you want to be rendered - in
                our template demo you only have to options:{" "}
                <code className="highlighter-rouge">/admin</code> and{" "}
                <code className="highlighter-rouge">/auth</code> - but due to
                this routing system you can add more, for example{" "}
                <code className="highlighter-rouge">/new-layout</code>)
              </li>
            </ul>
          </li>
        </ul>
        <p>
          For a better understanding, please take a look inside the file at
          hand, and also how the routes are rendered while the app si opened.
        </p>
        <h2>
          <code className="highlighter-rouge">Notice</code>
        </h2>
        <p>
          Because our routes are arrays of objects, and each route is an object,
          you can add what props you want in our routes and do what you want
          with them.
        </p>
        <p>
          For example, if you want to "hide" a route (you want it to not be
          displayed in sidebar), you could add a prop like{" "}
          <code className="highlighter-rouge">invisible: true</code> and then in
          sidebar add an if statement inside the{" "}
          <code className="highlighter-rouge">map</code> function of ours and do
          like this:
        </p>
        <SyntaxHighlighter language="jsx" style={prism}>
          {`if(prop.invisible) return null;`}
        </SyntaxHighlighter>
      </>
    );
  }
}

export default RoutingSystem;

import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";
// @material-ui/core components
// @material-ui/icons
//core components

const codeCheck = `npm run lint:check`;
const codeFix = `npm run lint:fix`;

class Styles extends React.Component {
  render() {
    return (
      <div>
        <h1 className="bd-title" id="content">
          Lint
        </h1>
        <p className="bd-lead">
          As per this request{" "}
          <a
            href="https://github.com/creativetimofficial/material-dashboard-react/issues/47"
            target="_blank"
            rel="noopener noreferrer"
          >
            issues/47
          </a>{" "}
          we've added some special commands so you can use lint inside our
          product.
        </p>
        <p>
          Manny thanks go to{" "}
          <a
            href="https://github.com/kdclaw3"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dee Clawson
          </a>{" "}
          for providing the necessary commands.
        </p>
        <p>These commands are as follows:</p>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeCheck}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeFix}
        </SyntaxHighlighter>
      </div>
    );
  }
}

export default Styles;

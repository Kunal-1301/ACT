import React from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("ACT Site Error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "4rem 1.5rem" }}>
          <div>
            <h1 style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>Something went wrong</h1>
            <p style={{ color: "#666", marginBottom: "2rem" }}>
              An unexpected error occurred. Please try refreshing the page.
            </p>
            <Link to="/" className="btn btn-primary" onClick={() => this.setState({ hasError: false })}>
              Back to home
            </Link>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

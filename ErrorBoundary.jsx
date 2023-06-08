import { Component } from “react”;

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  // bir " { " eksik olabilir, sondakini buraya al
  
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  
  render() { 
     if(this.state.hasError){
        return <p style={{ color: 'red' }}>{this.state.error.message}</p>;
     }
      return this.props.children;
    }
}

import "./App.css";
import FormA from "./components/formA";
import FormB from "./components/formB";
import FormC from "./components/formC";
import Form from "./components/form";
import React from "react";
import ReactDOM from "react-dom";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      etapa: 1
    };
  }

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <FormA />;
      case 2:
        return <FormB />;
      case 3:
        return <FormC />;
      case 4:
        return <Form />;
      default:
        return <Form />;
    }
  };

  proximaEtapa = () => {
    this.setState({ etapa: this.state.etapa + 1 });
  };

  render() {
    return (
      <div className="App">
        {this.renderizaEtapa()}
        <br />
        {this.state.etapa !== 4 && (
          <button className="botao" onClick={this.proximaEtapa}>Próxima etapa</button>
        )}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;

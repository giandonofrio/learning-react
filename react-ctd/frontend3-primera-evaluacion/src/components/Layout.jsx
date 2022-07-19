import React, { Component } from "react";
import data from "../database/data.json";
import Opciones from "../components/Opciones";
import Recordatorio from "./Recordatorio";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      seleccionPrevia: "",
      selecciones: [],
    };
  }
  handleOpciones = (e) => {
    switch (e.target.id) {
      case "A":
        if (this.state.selecciones.length < 4) {
          if (this.state.count % 2 === 0) {
            this.setState({
              count: this.state.count + 1,
              seleccionPrevia: "A",
            });
          } else {
            this.setState({
              count: this.state.count + 2,
              seleccionPrevia: "A",
            });
          }
        } else {
          alert("Fin.");
        }
        break;

      case "B":
        if (this.state.selecciones.length < 4) {
          if (this.state.count % 2 === 0) {
            this.setState({
              count: this.state.count + 2,
              seleccionPrevia: "B",
            });
          } else if (this.state.count) {
            this.setState({
              count: this.state.count + 3,
              seleccionPrevia: "B",
            });
          }
        } else {
          alert("Fin.");
        }
        break;

      default:
        break;
    }
  };
  componentDidUpdate() {
    if (this.state.count !== 0) {
      this.state.selecciones.push(this.state.seleccionPrevia);
    }
  }
  render() {
    return (
      <div className="layout">
        <h1 className="historia"> {data[this.state.count].historia} </h1>
        <Opciones
          opciones={data[this.state.count].opciones}
          handleOpciones={this.handleOpciones}
        />
        <Recordatorio
          selecciones={this.state.selecciones}
          seleccionPrevia={this.state.seleccionPrevia}
        />
      </div>
    );
  }
}

export default Layout;

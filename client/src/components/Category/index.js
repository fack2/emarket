import React from "react";
import "./style.css";
import axios from "axios";
class Category extends React.Component {
  state = {
    result: []
  };
  componentDidMount() {
    axios
      .get("/category")
      .then(data => {
        return data;
      })
      .then(data => {
        const resultArray = data.data.data.map(e => e);
        this.setState({ result: resultArray });
      });
  }

  render() {
    return (
      <div className="grid-container">
        {this.state.result.map(e => (
          <div onClick={this.props.onClick}>
            <img className="grid-item" src={e.img} />
            <p className="category">{e.name}</p>
          </div>
        ))}
      </div>
    );
  }
}
export default Category;

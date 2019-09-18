import React from 'react'
import './style.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
class Category extends React.Component {
  state = {
    result: []
  }
  componentDidMount() {
<<<<<<< HEAD
    const { history } = this.props
    axios
      .get('/category')
      .then(result => {
        const resultArray = result.data.map(e => e)
        this.setState({ result: resultArray })
      })
      .catch(response => {
        console.log(response)
        history.push('/500')
      })
=======
    axios.get('/category').then(result => {
      const resultArray = result.data.map(e => e)
      this.setState({ result: resultArray })
    })
>>>>>>> master
  }

  render() {
    return (
      <div className="grid-container">
        {!this.state.result.length ? (
          <img
            className="loading"
            src="https://media1.tenor.com/images/556e9ff845b7dd0c62dcdbbb00babb4b/tenor.gif?itemid=5300368"
            alt="loading"
          />
        ) : (
          this.state.result.map(e => (
<<<<<<< HEAD
            <Link to={'/shop/' + e.id}>
=======
            <Link to={'/shop/' + e.id} key={e.id}>
>>>>>>> master
              <div onClick={this.props.onClick}>
                <img
                  className="grid-item"
                  src={e.img}
                  alt={e.name + ' image'}
                />
                <p className="category">{e.name}</p>
              </div>
            </Link>
          ))
        )}
      </div>
    )
  }
}
export default Category

import React, {Component} from 'react';

// {
//     "name": "Pizza",
//     "calories": 400,
//     "image": "https://i.imgur.com/eTmWoAN.png",
//     "quantity": 0
//   },
class FoodBox extends Component {
    state = {
        quantity: this.props.quantity
    }
    render() {
        return (
            <div className="box">
            <article className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                            <img src={this.props.image} alt="img"/>
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                                <strong>{ this.props.name}</strong> <br />
                                <small>{ this.props.calories} cal</small>
                  </p>
                </div>
              </div>
              <div className="media-right">
                <div className="field has-addons">
                  <div className="control">
                    <input className="input" type="number" value={this.state.quantity} onChange={(e) => this.handelChange(e)} />
                  </div>
                  <div className="control">
                    <button className="button is-info">
                      +
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>
      )
  }
}
export default FoodBox;
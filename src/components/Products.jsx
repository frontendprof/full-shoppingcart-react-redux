
import React, { Component } from 'react'
import formatCurrency from "../util";




export default class Products extends Component {
    render() {
        return (
            <div>
                <ul className="products">
                    {this.props.products.map(p=>(
                        <li key={p._id}>
                            <div className="product">
                                <a href={"#"+p._id}>
                                    <img src={p.image} alt={p.title}/>
                                    <p>{p.title}</p>
                                </a>
                            </div>

                            <div className="product-price">
                                <div>
                                    {formatCurrency(p.price)}
                                </div>
                                <button className="button primary">Add to Cart</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

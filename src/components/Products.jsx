
import React, { Component } from 'react'
import formatCurrency from "../util";
import Fade from "react-reveal/Fade";




export default class Products extends Component {
    render() {
        return (
            <div>
                <Fade bottom cascade>
                
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
                                    <button className="button primary" onClick={()=>this.props.addToCart(p)}>Add to Cart</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </Fade>
            </div>
        )
    }
}

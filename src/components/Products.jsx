
import React, { Component } from 'react'
import formatCurrency from "../util";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Modal from 'react-modal';





export default class Products extends Component {
    constructor(props){
        super(props);
        this.state={
            product:null
        }
    }

    openModal=product=>{
        this.setState({product})
    }

    closeModal=()=>{
        this.setState({product:null})
    }

    render() {
        const {product}=this.state;
        return (
            <div>
                <Fade bottom cascade>
                
                    <ul className="products">
                        {this.props.products.map(p=>(
                            <li key={p._id}>
                                <div className="product">
                                    <a href={"#"+p._id} onClick={()=>this.openModal(product)}>
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

                {product && (
                    <Modal isOpen={true}>
                        <Zoom>
                            <button className="close-modal" onClick={this.closeModal}>X</button>
                            <div className="product-details">
                                <img src={product.image} alt={product.title}/>

                                <div className="product-details-description">
                                   <strong><p>{product.title}</p></strong>

                                   <p>{product.description}</p>
                                   <p>Available sizes: {" "} {product.availableSizes.map(x=>(
                                       <span>{" "} <button className="button">{x}</button></span>
                                   ))}</p>

                                   <div className="product-price">
                                       <div>{formatCurrency(product.price)}</div>
                                       <button className="button primary" 
                                        onClick={()=>{
                                            this.props.addToCart(product)
                                            this.closeModal()
                                        }}
                                        
                                       
                                       >
                                           Add To Cart
                                       </button>
                                   </div>
                                </div>

                            </div>
                            
                        </Zoom>
                    </Modal>
                )}
            </div>
        )
    }
}

import React, { Component } from 'react';
import Item from './item';
import ItemService from './../service/itemService';

class Catalog extends Component {
    
    state = { 
        items: []
     };
    render() { 
        return (
            <div className="catalog-page">
                <h2>Our amazing catalog</h2>

                <div className="categories"></div>

                <div className="products">
                    {
                        this.state.items.map(item => <Item key={item.id} produc={item}></Item>)
                    }
                </div>

            </div>
          );
    }

    componentDidMount() {
        let service = new ItemService();
        const data = service.getProducts();
        this.setState({items: data});
    }
}
 
export default Catalog;
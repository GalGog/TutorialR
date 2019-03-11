import React, { Component} from 'react';

class ShoppingList extends Component {
    render (){
        return(
            <div className="shopping list">
                <h1>Shopping list for {this.props.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Skype</li>
                </ul>
            </div>
        )
    }
}

export default ShoppingList;
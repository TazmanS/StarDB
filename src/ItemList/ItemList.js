import React,  {Component } from 'react'

class ItemList extends Component{
   
    render(){ 
        const item = this.props.items.map((item, index) => {
            return(
                <li key={index}
                onClick={() => this.props.displayItem(item.url) }>
                    {item.name}
                </li>
            )
        })

        return (
            <ul className="ItemList">
                {item}
            </ul>
        )  
    }
}

export default ItemList
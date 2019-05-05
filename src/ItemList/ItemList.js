import React, {Component} from 'react'

class ItemList extends Component{
   
    render(){ 
        const item = this.props.items.map((item, index) => {
            const arrIndex = index;
            return(
                <li key={index}
                onClick={() => this.props.displayItem(item.url, arrIndex) }>
                    {item.name}
                </li>
            )
        })

        return (
            <div className='col-12 col-md-6'>
                <ul className="ItemList">
                    {item}
                </ul>
            </div>
            
        )  
    }
}

export default ItemList
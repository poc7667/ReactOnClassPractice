import React from 'react';
import Card from './Card.jsx';

class List extends React.Component {
    
    render() {
        let cards = this.props.cards.map((card) => {
            return <Card
                        key={card._id}
                        id={card._id}
                        taskCallbacks={this.props.taskCallbacks}
                        cardCallbacks={this.props.cardCallbacks}
                        title={card.title}
                        description={card.description}
                        tasks={card.tasks}
                   />
        });
        
        return (
            <div id={this.props.id} className="list">
                <h3>{this.props.title}</h3>
                {cards}
            </div>
        )
    }
}

export default List;
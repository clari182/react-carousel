import React from 'react'
import Card from './Card'
import './index.scss'


class Carousel extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            activeCard: 0
        }
    }

    moveLeft = () => {
        const { activeCard } = this.state
        const { cardsCount } = this.props

        if (activeCard > 0) {
            this.setState(prevState => ({ activeCard: prevState.activeCard - 1 }))
        } else {
            this.setState({
                activeCard: cardsCount - 1
            })
        }

    }

    moveRight = () => {
        const { activeCard } = this.state
        const { cardsCount } = this.props
        if (activeCard < cardsCount - 1) {
            this.setState(prevState => ({ activeCard: prevState.activeCard + 1 }))
        } else {
            this.setState({
                activeCard: 0
            })
        }
    }

    render() {
        const { cardsCount } = this.props
        let cards = []
        for (let index = 0; index < cardsCount; index++) {
            cards.push(<Card key={`card-${index}`} active={index === this.state.activeCard ? 'active' : ''} index={index} />)

        }
        return <div className="carousel">
            <div onClick={this.moveLeft}>Left</div>
            <div className="cards-container">
                {cards}
            </div >
            <div onClick={this.moveRight}>Right</div>
        </div>
    }
}

export default Carousel
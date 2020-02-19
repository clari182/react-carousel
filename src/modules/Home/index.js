import React from 'react'
import Carousel from '../../Components/Carousel'


class Home extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            cardsCount: 3
        }
    }

    setCardCount = (ev) => {
        this.setState({
            cardsCount: ev.currentTarget.value
        })
    }

    render() {
        return <>
            <input onChange={this.setCardCount} value={this.state.cardsCount} />
            <Carousel cardsCount={this.state.cardsCount}/>
        </>
    }
}

export default Home
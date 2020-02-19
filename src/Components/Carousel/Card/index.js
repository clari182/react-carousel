import React from 'react'
import './index.scss'


class Card extends React.Component {

    render() {
        const { active, index } = this.props
        return <div className={`card-container ${active}`}>
            <header>Header {index + 1}</header>
            <div className="body">Body {index + 1}</div>
        </div>
    }
}

export default Card
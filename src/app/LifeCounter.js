import React from 'react'
import PlayerScoreCard from './components/PlayerScoreCard'

class LifeCounter extends React.Component {
    state = {
        gameInfo: {}
    }

    componentDidMount() {
        let gameInfo = localStorage.getItem('gameInfo') || {}
        if (Object.keys(this.state.gameInfo)[0]) {
            this.setState({gameInfo})
        }
    }

    render() {
        return (
            <React.Fragment>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <PlayerScoreCard/>
                    <PlayerScoreCard/>
                </div>
            </React.Fragment>
        )
    }
}

export default LifeCounter

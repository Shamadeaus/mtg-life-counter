import React from 'react'
import {range} from 'lodash'
import PlayerScoreCard from './components/PlayerScoreCard'

class LifeCounter extends React.Component {
    state = {}

    componentDidMount() {
        let gameInfo = localStorage.getItem('settings') || '{"players": 2}'
        let settings = JSON.parse(gameInfo)
        this.setState(settings)
    }

    render() {
        return (
            <React.Fragment>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    {
                        range(0, this.state.players).map((v, key) => <PlayerScoreCard key={key} playerNum={key}/>)
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default LifeCounter

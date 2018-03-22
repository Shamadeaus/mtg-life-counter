import React from 'react'
import PlayerScoreCard from './components/PlayerScoreCard'
import SettingsButton from './SettingsButton'
import Toolbar from 'material-ui/Toolbar'
import Divider from 'material-ui/Divider'

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
                <Toolbar>
                    <div style={{flex: 1}}/>
                    <SettingsButton/>
                </Toolbar>
                <Divider/>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <PlayerScoreCard/>
                    <PlayerScoreCard/>
                </div>
            </React.Fragment>
        )
    }
}

export default LifeCounter

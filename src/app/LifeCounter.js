import React from 'react'
import PlayerScoreCard from './components/PlayerScoreCard'
import Setup from './Setup'

class LifeCounter extends React.Component {
    state = {
        open: false,
        gameInfo: {}
    }

    handleClose = () => {
        this.setState({open: false})
    }

    componentDidMount() {
        let gameInfo = localStorage.getItem('gameInfo') || {}
        if (Object.keys(this.state.gameInfo)[0]) {
            this.setState({gameInfo})
        }
        this.setState({open: true})
    }

    render() {
        if (this.state.gameInfo.id) {
            return (
                <PlayerScoreCard/>
            )
        }

        return (
            <div>
                <Setup open={this.state.open} onClose={this.handleClose}/>
            </div>
        )
    }
}

export default LifeCounter

import React from 'react'
import Card, {CardContent, CardHeader} from 'material-ui/Card'
import {withStyles} from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'

class PlayerScoreCard extends React.Component {
    state = {
        lifeTotal: 40,
        editing: false,
        username: 'Name'
    }

    render() {
        const {classes, ...props} = this.props

        return (
            <Card className={classes.card} {...props}>
                <div className={classes.header}>
                    <CardHeader title={this.state.username} />
                </div>
                <CardContent>
                    <Typography className={classes.life}>
                        {this.state.lifeTotal}
                    </Typography>
                    <div className={classes.buttonContainer}>
                        <div className={classes.leftContainer}>
                            <Button className={classes.button} onClick={this.handleAddLife(1)}>
                                +1
                            </Button>
                            <Button className={classes.button} onClick={this.handleSubtractLife(1)}>
                                -1
                            </Button>
                        </div>
                        <div className={classes.rightContainer}>
                            <Button className={classes.button} onClick={this.handleAddLife(5)}>
                                +5
                            </Button>
                            <Button className={classes.button} onClick={this.handleSubtractLife(5)}>
                                -5
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        )
    }

    handleAddLife = increment => () => {
        this.setState({lifeTotal: this.state.lifeTotal + increment})
    }

    handleSubtractLife = decrement => () => {
        this.setState({lifeTotal: this.state.lifeTotal - decrement})
    }

}


const styles = {
    card: {
        width: 300,
        margin: 24
    },
    header: {
        display: 'flex',
        marginBottom: -12
    },
    buttonContainer: {
        display: 'flex',
        marginLeft: -12
    },
    button: {
        fontSize: 32
    },
    icons: {
        marginTop: 5
    },
    life: {
        fontSize: 120
    },
    leftContainer: {
        flexDirection: 'column'
    },
    rightContainer: {
        flexDirection: 'column'
    },
    textField: {
        marginLeft: 24
    }
}

export default withStyles(styles)(PlayerScoreCard)

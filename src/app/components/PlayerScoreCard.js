import React from 'react'
import Card, {CardContent} from 'material-ui/Card'
import {withStyles} from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import EditIcon from 'material-ui-icons/Edit'
import CloseIcon from 'material-ui-icons/Close'
import Input from 'material-ui/Input'

class PlayerScoreCard extends React.Component {
    state = {
        lifeTotal: 40,
        editing: false,
        username: 'Name'
    }

    handleEdit = () => this.setState({editing: !this.state.editing})

    render() {
        const {classes, ...props} = this.props

        return (
            <Card className={classes.card} {...props}>
                <div>
                    {
                        !this.state.editing &&
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                            <Typography variant='display1' style={{flex: 1}}>
                                {this.state.username}
                            </Typography>
                            <IconButton onClick={this.handleEdit}>
                                <EditIcon/>
                            </IconButton>
                        </div>
                    }
                    {
                        this.state.editing &&
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                            <Input
                                classes={{
                                    underline: classes.underLine,
                                    input: classes.input
                                }}
                                defaultValue={this.state.username}
                                inputProps={{
                                    'aria-label': 'name',
                                }}
                            />
                            <IconButton onClick={this.handleEdit}>
                                <CloseIcon/>
                            </IconButton>
                        </div>
                    }
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
    input: {
        flex: 1,
        marginTop: '-8px',
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: '2.125rem',
        fontWeight: 400,
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        lineHeight: '1.20588em',
        marginLeft: '-.04em',
        padding: '0'
    },
    underLine: {
        
    },
    card: {
        width: 300,
        margin: 24
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
        textAlign: 'center',
        fontSize: 120
    },
    leftContainer: {
        textAlign: 'center',
        flexDirection: 'column'
    },
    rightContainer: {
        textAlign: 'center',
        flexDirection: 'column'
    },
    textField: {
        marginLeft: 24
    }
}

export default withStyles(styles)(PlayerScoreCard)

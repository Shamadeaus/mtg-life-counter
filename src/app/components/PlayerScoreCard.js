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
        username: `Player ${this.props.playerNum+1}`
    }

    handleEdit = () => {
        this.state.editing ? this.input.blur() : this.input.focus()
        this.setState({editing: !this.state.editing})
    }
    handleChange = event => this.setState({username: event.target.value})

    render() {
        const {classes} = this.props

        return (
            <Card className={classes.card}>
                <div>
                    <div style={{display: 'flex', flexDirection: 'row', position: 'relative'}}>
                        <Typography variant='display1' className={this.state.editing ? classes.testHide : classes.testShow}>
                            {this.state.username}
                        </Typography>
                        <Input
                            inputRef={input => this.input = input}
                            style={{width: '100%'}}
                            classes={{
                                input: classes.input,
                                underline: this.state.editing ? classes.underlineShow : classes.underlineHide
                            }}
                            value={this.state.editing ? this.state.username : ''}
                            onChange={this.handleChange}
                            inputProps={{
                                'aria-label': 'name',
                            }}
                        />
                        {
                            this.state.editing &&
                            <IconButton className={classes.static} onClick={this.handleEdit}>
                                <CloseIcon/>
                            </IconButton>
                        }
                        {
                            !this.state.editing &&
                            <IconButton className={classes.static} onClick={this.handleEdit}>
                                <EditIcon/>
                            </IconButton>
                        }
                    </div>
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
    static: {
        position: 'absolute',
        right: 0
    },
    testShow: {
        paddingLeft: '8px',
        paddingTop: '4px',
        display: 'inherit',
        flex: 1,
        transition: 'flex 500ms ease 250ms'
    },
    testHide: {
        display: 'none',
        flex: 0,
        transition: 'flex 500ms ease 250ms'
    },
    input: {
        flex: 1,
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: '2.125rem',
        fontWeight: 400,
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        lineHeight: '1.20588em',
        marginLeft: '-.04em',
        padding: '4px 0 0 0'
    },
    underlineShow: {
        flex: 1,
        transition: 'flex 500ms',
        marginLeft: '8px',
        marginRight: '8px'
    },
    underlineHide: {
        flex: 0,
        transition: 'flex 500ms',
        marginLeft: '8px',
        marginRight: '8px'
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

import React from 'react'
import {withStyles} from 'material-ui/styles'
import Button from 'material-ui/Button'
import Dialog from 'material-ui/Dialog'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import Typography from 'material-ui/Typography'
import CloseIcon from 'material-ui-icons/Close'
import Slide from 'material-ui/transitions/Slide'
import SettingIcon from 'material-ui-icons/Settings'
import Select from 'material-ui/Select'
import FormControl from 'material-ui/Form/FormControl'
import InputLabel from 'material-ui/Input/InputLabel'
import MenuItem from 'material-ui/Menu/MenuItem'
import FormControlLabel from 'material-ui/Form/FormControlLabel'
import Switch from 'material-ui/Switch/Switch'
import Input from 'material-ui/Input/Input'
import Card from 'material-ui/Card'
import {omit} from 'lodash'

class Setup extends React.Component {
    state = {
        open: false,
        players: 2,
        edh: false,
        poison: false,
        custom: false,
        customAmount: 0
    }

    handleOpen = () => {
        let settings = JSON.parse(localStorage.getItem('settings') || '{}')
        this.setState({...settings, open: true})
    }
    handleClose = () => this.setState({open: false})
    handleSubmit = () => {
        localStorage.setItem('settings', JSON.stringify(omit(this.state, 'open')))
        this.handleClose()
    }

    handleChange = event => this.setState({[event.target.name]: event.target.value})

    handleGameTypeChange = name => event => this.setState({[name]: event.target.checked})
    handleCustomCounter = event => this.setState({customAmount: event.target.value})

    render() {
        const {classes} = this.props
        return (
            <React.Fragment>
                <IconButton onClick={this.handleOpen}>
                    <SettingIcon/>
                </IconButton>
                <Dialog
                    fullScreen
                    open={this.state.open}
                    onClose={this.handleClose}
                    transition={Transition}
                >
                    <AppBar className={classes.appBar} color='default'>
                        <Toolbar>
                            <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                                <CloseIcon/>
                            </IconButton>
                            <Typography variant="title" color="inherit" className={classes.flex}>
                                Settings
                            </Typography>
                            <Button color="inherit" onClick={this.handleSubmit}>
                                Save
                            </Button>
                        </Toolbar>
                    </AppBar>
                    <Card style={{padding: 24}}>
                        <div>
                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                <FormControlLabel
                                    control={
                                        <Switch
                                            checked={this.state.edh}
                                            onChange={this.handleGameTypeChange('edh')}
                                            color='primary'
                                        />
                                    }
                                    label='Commander/EDH'
                                />
                                <FormControl>
                                    <InputLabel htmlFor='id-players'>Players</InputLabel>
                                    <Select
                                        onChange={this.handleChange}
                                        value={this.state.players}
                                        inputProps={{
                                            name: 'players',
                                            id: 'id-players'
                                        }}
                                        disabled={!this.state.edh}
                                    >
                                        <MenuItem value={2}>2</MenuItem>
                                        <MenuItem value={3}>3</MenuItem>
                                        <MenuItem value={4}>4</MenuItem>
                                        <MenuItem value={5}>5</MenuItem>
                                        <MenuItem value={6}>6</MenuItem>
                                        <MenuItem value={7}>7</MenuItem>
                                        <MenuItem value={8}>8</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={this.state.poison}
                                        onChange={this.handleGameTypeChange('poison')}
                                        color='primary'
                                    />
                                }
                                label='Poison'
                            />
                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                <FormControlLabel
                                    control={
                                        <Switch
                                            checked={this.state.custom}
                                            onChange={this.handleGameTypeChange('custom')}
                                            color='primary'
                                        />
                                    }
                                    label='Custom Counters'
                                />
                                <FormControl>
                                    <InputLabel htmlFor='id-counter-amount'>Amount</InputLabel>
                                    <Input id='id-counter-amount'
                                           value={this.state.customAmount}
                                           onChange={this.handleChange}
                                           disabled={!this.state.custom}
                                    />
                                </FormControl>
                            </div>
                        </div>
                    </Card>
                </Dialog>
            </React.Fragment>
        )
    }
}

const styles = {
    appBar: {
        position: 'relative',
    },
    flex: {
        flex: 1,
    }
}

function Transition(props) {
    return <Slide direction="up" {...props} />
}

export default withStyles(styles)(Setup)

import React from 'react'
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'
import Dialog from 'material-ui/Dialog'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import Typography from 'material-ui/Typography'
import CloseIcon from 'material-ui-icons/Close'
import Slide from 'material-ui/transitions/Slide'
import SettingIcon from 'material-ui-icons/Settings'

class Setup extends React.Component {
    state = {
        open: false
    }

    handleOpen = () => this.setState({open: true})
    handleClose = () => this.setState({open: false})

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
                                <CloseIcon />
                            </IconButton>
                            <Typography variant="title" color="inherit" className={classes.flex}>
                                Settings
                            </Typography>
                            <Button color="inherit" onClick={this.handleClose}>
                                Save
                            </Button>
                        </Toolbar>
                    </AppBar>
                    <div/>
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

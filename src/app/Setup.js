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

class Setup extends React.Component {
    render() {
        const {classes} = this.props
        return (
            <React.Fragment>
                <Dialog
                    fullScreen
                    open={this.props.open}
                    onClose={this.props.onClose}
                    transition={Transition}
                >
                    <AppBar className={classes.appBar} color='default'>
                        <Toolbar>
                            <IconButton color="inherit" onClick={this.props.onClose} aria-label="Close">
                                <CloseIcon />
                            </IconButton>
                            <Typography variant="title" color="inherit" className={classes.flex}>
                                Setup Game
                            </Typography>
                            <Button color="inherit" onClick={this.props.onClose}>
                                Start Game
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

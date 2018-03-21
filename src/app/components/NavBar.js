import React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import GitHubIcon from '../resources/GitHubIcon'
import Drawer from 'material-ui/Drawer'
import {MenuItem} from 'material-ui/Menu'
import {ListItemText} from 'material-ui/List'
import {withStyles} from 'material-ui/styles'

class NavBar extends React.Component {
    state = {
        open: false
    }

    handleClick = () => this.setState({open: !this.state.open})

    render() {
        let {classes} = this.props
        return (
            <React.Fragment>
                <AppBar elevation={0} color='default' position='static'>
                    <Toolbar>
                        <IconButton className={classes.menuButton} onClick={this.handleClick}>
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant='title' className={classes.flex}>
                            MTG Life Counter
                        </Typography>
                        <IconButton href='https://github.com/Shamadeaus/mtg-life-counter'>
                            <GitHubIcon/>
                        </IconButton>
                    </Toolbar>
                </AppBar>

                <Drawer
                    open={this.state.open}
                    onClick={this.handleClick}
                >
                    <Toolbar className={classes.background}>
                        <Typography>
                            MTG Helper
                        </Typography>
                    </Toolbar>
                    <MenuItem component='a' href='/#/lifeCounter'>
                        <ListItemText primary='Life Counter'/>
                    </MenuItem>
                </Drawer>
            </React.Fragment>
        )
    }
}

const styles = {
    menuButton: {
        marginLeft: -16
    },
    flex: {
        flex: 1
    },
    background: {
        backgroundColor: '#000'
    }
}

export default withStyles(styles)(NavBar)

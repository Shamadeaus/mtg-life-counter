import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import GitHubIcon from './GitHubIcon'
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles'

class App extends Component {
    render() {
        const theme = createMuiTheme({palette: {type: 'dark'}})

        return (
            <MuiThemeProvider theme={theme}>
                <div>
                    <AppBar color='default' position='static'>
                        <Toolbar>
                            <IconButton>
                                <MenuIcon/>
                            </IconButton>
                            <Typography variant='title' color='inherit' style={{flex: 1}}>
                                MTG Life Counter
                            </Typography>
                            <IconButton>
                                <GitHubIcon/>
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default App

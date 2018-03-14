import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import GitHubIcon from '../GitHubIcon'
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles'
import {BrowserRouter, Route} from 'react-router-dom'
import Routes from './routes'

class App extends Component {
    getRootStyle(theme) {
        return `
            body {
                background-color: ${theme.palette.background.default};
                margin: 0;
                padding: 0;
                overflow-x: hidden;
            }
        `
    }

    render() {
        const theme = createMuiTheme({palette: {type: 'dark'}})

        return (
            <React.Fragment>
                <style>{this.getRootStyle(theme)}</style>
                <MuiThemeProvider theme={theme}>
                    <BrowserRouter>
                        <React.Fragment>
                            <AppBar color='default' position='static'>
                                <Toolbar>
                                    <IconButton>
                                        <MenuIcon/>
                                    </IconButton>
                                    <Typography variant='title' style={{flex: 1}}>
                                        MTG Life Counter
                                    </Typography>
                                    <IconButton href='https://github.com/Shamadeaus/mtg-life-counter'>
                                        <GitHubIcon/>
                                    </IconButton>
                                </Toolbar>
                            </AppBar>
                            {
                                Routes.map(route =>
                                    <Route
                                        exact={route.exact}
                                        path={route.path}
                                        component={route.component}
                                    />)
                            }
                        </React.Fragment>
                    </BrowserRouter>
                </MuiThemeProvider>
            </React.Fragment>
        )
    }
}

export default App

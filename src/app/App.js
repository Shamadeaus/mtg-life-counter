import React, {Component} from 'react'
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles'
import {HashRouter, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Routes from './routes'

class App extends Component {
    bodyStyle(theme) {
        return `
            body {
                background-color: ${theme.palette.background.default};
                margin: 0;
                padding: 0;
            }
        `
    }

    render() {
        const theme = createMuiTheme({palette: {type: 'dark'}})

        return (
            <React.Fragment>
                <style>{this.bodyStyle(theme)}</style>
                <MuiThemeProvider theme={theme}>
                    <HashRouter>
                        <React.Fragment>
                            <NavBar/>
                            {
                                Routes.map((route, key) =>
                                    <Route
                                        key={key}
                                        exact
                                        path={route.path}
                                        component={route.component}
                                    />)
                            }
                        </React.Fragment>
                    </HashRouter>
                </MuiThemeProvider>
            </React.Fragment>
        )
    }
}

export default App

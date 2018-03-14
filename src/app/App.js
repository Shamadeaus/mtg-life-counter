import React, {Component} from 'react'
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles'
import {BrowserRouter, Route} from 'react-router-dom'
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
                    <BrowserRouter>
                        <React.Fragment>
                            <NavBar/>
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

import React from 'react'
import Snackbar from 'material-ui/Snackbar'

const { ipcRenderer } = require('electron')

export default class Layout extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false,
      message: 'Message',
      autoHideDuration: 4000
    }
    ipcRenderer.on('chain-connection', (event, message, err) => {
      let snackMessage = ''
      if (message === 'err' && err) {
        snackMessage = `An error occurred! (Error code: ${err.code})`
      } else {
        snackMessage = 'Connected successfully!'
      }
      this.setState({ open: true, message: snackMessage })
    })
  }

  handleRequestClose () {
    this.setState({ open: false })
  }

  render () {
    return (
      <div style={{ height: '100%' }}>
        {this.props.children}
        <Snackbar
          open={this.state.open}
          message={this.state.message}
          autoHideDuration={this.state.autoHideDuration}
          onRequestClose={this.handleRequestClose.bind(this)}
        />
      </div>
    )
  }
}

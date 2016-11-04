import React from 'react'
import { hashHistory } from 'react-router'
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'

export default class List extends React.Component {
  constructor (props) {
    super(props)
    this.state = { 
      value: 2,
      elections: []
    }
  }

  componentDidMount () {
    hashHistory.push('/election/' + this.state.value)
  }

  handleClick () {
    hashHistory.push('/')
  }

  handleChange (event, index, value) {
    this.setState({value}, () => {
      hashHistory.push('/election/' + value)
    })
  }

  render () {
    return (
      <div>
        <Toolbar>
          <ToolbarGroup>
            <DropDownMenu value={this.state.value} onChange={this.handleChange.bind(this)}>
              <MenuItem value={1} primaryText='Election 1' />
              <MenuItem value={2} primaryText='Election 2' />
              <MenuItem value={3} primaryText='Election 3' />
            </DropDownMenu>
          </ToolbarGroup>
          <ToolbarGroup>
            <RaisedButton onClick={this.handleClick} label='Logout' />
          </ToolbarGroup>          
        </Toolbar>
        {this.props.children}
      </div>
    )
  }
}

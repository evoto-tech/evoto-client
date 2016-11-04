import React from 'react'
import { Link } from 'react-router'
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'

export default class Register extends React.Component {
  render () {
    return (
      <div className='aligner'>
        <div className='aligner-item'>
          <Card>
            <CardTitle className='thin-card-title' title='Register' subtitle='Register with your passport or national security number' />
            <CardText>
              <TextField floatingLabelText='Passport Number' />
              <TextField floatingLabelText='National Security Number' />
            </CardText>
            <CardActions>
              <Link to={'/list'}>
                <FlatButton label='Register' />
              </Link>
              <Link to={'/'}>
                <FlatButton label='Back' />
              </Link>
            </CardActions>
          </Card>
        </div>
      </div>
    )
  }
}

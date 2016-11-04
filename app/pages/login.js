import React from 'react'
import { Link } from 'react-router'
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'

export default class Login extends React.Component {
  render () {
    return (
      <div className='aligner'>
        <div className='aligner-item'>
          <Card>
            <CardTitle className='thin-card-title' title='Login' subtitle='Login with your account details' />
            <CardText>
              <TextField floatingLabelText='Your secret PIN' />
            </CardText>
            <CardActions>
              <Link to={'/list'}>
                <FlatButton label='Login' />
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

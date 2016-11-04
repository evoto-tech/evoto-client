import React from 'react'
import { Link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'

export default class Start extends React.Component {
  render () {
    /* eslint-disable react/jsx-boolean-value */
    return (
      <div className='aligner'>
        <div className='aligner-item'>
          <h1 className='title'>evoto</h1>
          <Link to={'/register'}>
            <RaisedButton primary={true} label='Register' fullWidth={true} />
          </Link>
          <Link to={'/login'}>
            <RaisedButton label='Login' fullWidth={true} />
          </Link>
        </div>
      </div>
    )
    /* eslint-disable react/jsx-boolean-value */
  }
}

import React from 'react'
import { Link } from 'react-router'
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import CommunicationPresentToAll from 'material-ui/svg-icons/communication/present-to-all'

export default class ElectionDetails extends React.Component {
  render () {
    return (
      <div className='aligner'>
        <div className='aligner-item'>
          <Card>
            <CardTitle className='thin-card-title' title={'Election ' + this.props.routeParams.id} subtitle='This is some election' />
            <CardText>
              This is some information about the election.
            </CardText>
            <CardActions>
              <Link to={'/election/' + this.props.routeParams.id + '/vote'}>
                <FlatButton icon={<CommunicationPresentToAll />} label='Vote' />
              </Link>
            </CardActions>
          </Card>
        </div>
      </div>
    )
  }
}

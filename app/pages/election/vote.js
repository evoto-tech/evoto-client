import React from 'react'
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import CommunicationPresentToAll from 'material-ui/svg-icons/communication/present-to-all'

export default class ElectionVote extends React.Component {
  render () {
    return (
      <div className='aligner'>
        <div className='aligner-item'>
          <Card>
            <CardTitle className='thin-card-title' title={'Election ' + this.props.routeParams.id} subtitle='This is some election' />
            <CardText>
              You are voting for Election {this.props.routeParams.id}
            </CardText>
            <CardActions>
              <FlatButton icon={<CommunicationPresentToAll />} label='Option 1' />
              <FlatButton icon={<CommunicationPresentToAll />} label='Option 2' />
              <FlatButton icon={<CommunicationPresentToAll />} label='Option 3' />
            </CardActions>
          </Card>
        </div>
      </div>
    )
  }
}

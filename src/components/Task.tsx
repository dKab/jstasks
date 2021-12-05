import React from 'react'
import { connect } from 'react-redux'
import { Store } from 'redux'

interface ITaskProps {
  index: number;
}

const Task: React.FC<ITaskProps> = ({index}) => {
  return (
    <div>
      <div>Task #{ index }</div>
    </div>
  )
}

const mapStateToProps = (_state: Store, ownProps: { match: { params: { id: any } } }) => {
  return {
    index: ownProps.match.params.id
  }
} 

export default connect(mapStateToProps)(Task); 

import React from 'react'
import { connect } from 'react-redux'
import { Dispatch, Store } from 'redux'

import {checkUserInput} from '../actions/check-user-input';

interface ITaskProps {
  index: string;
  runTests: (index: string, functionBody: string) => void;  
}

const taskMap: Record<string, string> = {
    1: 'sequencer',
};

const Task: React.FC<ITaskProps> = ({index, runTests}) => {
  const textAreaRef = React.createRef<HTMLTextAreaElement>();
  
  const onCheckButtonClick = React.useCallback(() => {
    const userInput = textAreaRef.current?.value;

    if (userInput) {
      runTests(index, userInput.replace(/\r?\n|\r/g, ' '));
    } else {
      console.log('This field is required!');
    }

  }, [index, runTests])
  
  return (
    <div>
      <div>Task #{ index }</div>
      <textarea ref={textAreaRef}></textarea>
      <button onClick={onCheckButtonClick}>Проверить</button>
    </div>
  )
}

const mapStateToProps = (_state: Store, ownProps: { match: { params: { id: any } } }) => {
  return {
    index: ownProps.match.params.id
  }
} 

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    runTests: (taskIndex: string, functionBody: string ) => dispatch(checkUserInput({suiteId: taskMap[taskIndex], functionBody }))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Task); 

import React, { useState } from "react";
import {MemoContainer} from "../Memo/MemoContainer";
import {useStore} from "../Utility/Hooks/useStore";
import {Actions} from "../../store/Actions";

export const EditBox = () => {
  const { editStory, dispatch } = useStore('EditBox');
  const [text, setText] = useState(editStory);

  const handleTextarea = event => {
    const {value} = event.target;
    setText(value);
  }

  const handleClickSave = () => {
    dispatch({
      type: Actions.SAVE_THAT_SHIT, // need this for saving
      payload: text,
    });
  }

  return <MemoContainer data={[editStory]}>
    <div>
      <textarea value={text} rows="10" cols="40" onChange={handleTextarea}/>
      <div>
        <button onClick={handleClickSave}>save</button>
        <button>cancel</button>
      </div>
    </div>
  </MemoContainer>
}
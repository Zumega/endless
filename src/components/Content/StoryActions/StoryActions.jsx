import React  from 'react';
import Actions from "../../../store/Actions";
import useStore from "../../Utility/Hooks/useStore";
import MemoContainer from "../../MemoContainer";

const StoryActions = () => {
  const {fullScreen, dispatch} = useStore('StoryActions');

  const handleFullScreen = () => {
    dispatch({type: Actions.FULL_SCREEN, payload: !fullScreen});
  };

  return (
    <MemoContainer data={[fullScreen]}>
      <div className="row">
        {/* Options for reader and editor */}
        <ul className="menu">
          <li className="col-4"><button onClick={handleFullScreen}>Full Screen</button></li>
          <li className="col-4"><button>Flag</button></li>
          <li className="col-4"><button>Thumb Up</button></li>
          <li className="col-4"><button>Thumb Down</button></li>
        </ul>
      </div>
    </MemoContainer>
  );
};

export default StoryActions;
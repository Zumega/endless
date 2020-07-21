import React, { useContext } from 'react';
import Actions from "../../../store/Actions";
import {Context} from "../../../store/Store";

const StoryActions = () => {
  const [{fullScreen}, dispatch] = useContext(Context);

  const handleFullScreen = () => {
    dispatch({type: Actions.FULL_SCREEN, payload: !fullScreen});
  };

  return (
    <div className="row">
      {/* Options for reader and editor */}
      <ul className="menu">
        <li className="col-4"><button onClick={handleFullScreen}>Full Screen</button></li>
        <li className="col-4"><button>Flag</button></li>
        <li className="col-4"><button>Thumb Up</button></li>
        <li className="col-4"><button>Thumb Down</button></li>
      </ul>
    </div>
  );
};

export default StoryActions;
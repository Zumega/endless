import React, { useContext } from 'react';
import { Context } from '../../../store/Store';

import {bbc} from '../../Utility/Utilities';

const Intro = () => {
  const [{intro}] = useContext(Context);

  return (
    <div>
      {intro.text.map((txt, key) => bbc(txt, key)) }
      <br/><br/><br/><br/>
      <p className="basic">{intro.byLine}</p>
    </div>
  );
};

export default Intro;
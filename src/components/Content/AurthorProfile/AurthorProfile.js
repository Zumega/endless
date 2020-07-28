import React from 'react';
import MemoContainer from "../../MemoContainer";
import useStore from "../../Utility/Hooks/useStore";

const AurthorProfile = () => {
  const {author} = useStore('AurthorProfile');

  return (
    <MemoContainer data={[author]}>
      <div>
        <div>WHATZ</div>
        <div>
          Profile image
        </div>
        <div>
          <ul>
            <li>bits</li>
            <li>stuff</li>
          </ul>
        </div>
      </div>
    </MemoContainer>
  );
};

export default AurthorProfile;
import React from 'react';
import MemoContainer from "../../MemoContainer";
import useStore from "../../Utility/Hooks/useStore";

const AuthorProfile = () => {
  const {author} = useStore('AuthorProfile');

  console.log('author', author);

  return (
    <MemoContainer data={[author]}>
      <div>
        <div>{author.about.bio || 'WHATZ'}</div>
        <div>
          {
            author.about.headshot && (
              <>
                <img src={`./path/${author.about.headshot.image}`} title={author.about.headshot.title} />
              </>
            )
          }
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

export default AuthorProfile;
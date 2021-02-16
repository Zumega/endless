import React from 'react';
import { MemoContainer } from '../Memo/MemoContainer';
import { useStore } from '../Utility/Hooks/useStore';

export const AuthorProfile = () => {
  const { author } = useStore('AuthorProfile');

  return (
    <MemoContainer data={[author]}>
      <div data-id="AuthorProfile">
        <div>{author.about.bio || 'WHATZ'}</div>
        <div>
          {author.about.headshot && (
            <>
              <img src={`./path/${author.about.headshot.image}`} title={author.about.headshot.title} alt={author.about.headshot.title} />
            </>
          )}
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

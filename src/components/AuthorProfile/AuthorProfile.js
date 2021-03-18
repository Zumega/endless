import React, {useRef, useState, useEffect} from 'react';
import { MemoContainer } from '../Memo/MemoContainer';
import { useStore } from '../Utility/Hooks/useStore';
import {AuthorStoriesSections} from "./AuthorStoriesSections";

export const AuthorProfile = () => {
  const { author } = useStore('AuthorProfile');
  const imageRef = useRef(null);
  const [imageDisplayValue, setImageDisplayValue] = useState('none');

  const checkLoaded = image => image.complete && image.naturalHeight !== 0;

  const imgLoadListener = () => {
    const image = imageRef.current;
    const isLoaded = checkLoaded(image);

    setImageDisplayValue(isLoaded ? 'block' : 'none');
  }

  useEffect(() => {
    const image = imageRef?.current;

    if(image && checkLoaded(image)) {
      setImageDisplayValue('block');
    } else {
      window.addEventListener('load', imgLoadListener);
    }

    return () =>
      window.removeEventListener('load', imgLoadListener);
  })

  return (
    <MemoContainer data={[author]}>
      <div data-id="AuthorProfile">
        <div>{author.about.bio || 'WHATZ'}</div>
        <div>
          {author.about.headshot && (
            <img
              src={`/img/${author.about.headshot.image}`}
              alt={author.about.headshot.title}
              title={author.about.headshot.title}
              style={{display: imageDisplayValue}}
              ref={imageRef}
            />
          )}
        </div>
        <div>
          {
            author?.stories && <AuthorStoriesSections stories={author?.stories} />
          }
        </div>
      </div>
    </MemoContainer>
  );
};

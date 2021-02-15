import React from 'react';
import { bbc } from '../Utility/Utilities';
import { useBaseStore } from '../Utility/Hooks/useBaseStore';
import { MemoContainer } from '../MemoContainer';
// what is Deco?
// import {Deco} from "./deco";

export const Intro = () => {
  const { intro } = useBaseStore('Intro');

  return (
    <MemoContainer data={[intro]}>
      <div data-id="Intro">
        {intro.text.map((txt, key) => bbc(txt, key))}
        <br />
        <br />
        <br />
        <br />
        <p className="basic">{intro.byLine}</p>
      </div>
    </MemoContainer>
  );
};

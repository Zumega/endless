import React from 'react';
import { Link } from 'react-router-dom';

export function simpleString (text) {
  return text.toLowerCase().replace(/[^a-z0-9]/g, "-");
}

export function bcc (text, key) {
  if (!text) {
    return text;
  }
  // text = text.replace(/\[color:(.+)\](.+)\[\/color\]/gi, "<span style='color:$1;'>$2</span>");
  // text = text.replace(/\[(b|i|q)\](.+?)\[\/(b|i|q)\]/gi, "<$1>$2</$3>");
  // text = text.replace(/\[(gnome|smilie|winkie|happie)\]/gi, "<img src='" + imageUrls.design + "$1.png' alt='$1' />");
  // text = text.replace(/\[br\]/gi, "<br>");

  const splitOn = /\[link \((.+?)\)\](.+)\[\/link\]/;
  const split = text.split(splitOn);

  if (split.length === 1) {
    return <p key={key}>{text}</p>;
  }

  let data = [];

  function forEach () {
    data = [];

    // This is not the best needs a refactor, what happens when it's not a link or the link is the first item?
    for (let i = 0, len = split.length; i < len; i += 4) {
      data.push((
        <p key={key}>
        { split[i] }
        { split[i + 1] && <Link to={'./' + split[i + 1]}>{split[i + 2]}</Link> }
        { split[i + 3] && split[i + 3] }
        </p>
      ));
    }

    return data;
  };

  return forEach();
}
import React from 'react';
import { Link } from 'react-router-dom';

export function simpleString (text) {
  return text.toLowerCase().replace(/[^a-z0-9]/g, "");
}

export function bcc (text, key) {
  if (!text) {
    return text;
  }
  // content = content.replace(/\[color:(.+)\](.+)\[\/color\]/gi, "<span style='color:$1;'>$2</span>");
  // content = content.replace(/\[(b|i|q)\](.+?)\[\/(b|i|q)\]/gi, "<$1>$2</$3>");
  // content = content.replace(/\[(gnome|smilie|winkie|happie)\]/gi, "<img src='" + imageUrls.design + "$1.png' alt='$1' />");
  // content = content.replace(/\[br\]/gi, "<br>");

  // text = text.replace(/\[link \((.+?)\)\](.+)\[\/link\]/gi, "{ <Link to={'$1'}>$2</Link> }");

  const splitOn = /\[link \((.+?)\)\](.+)\[\/link\]/;
  const split = text.split(splitOn);
  console.log();

  if (split.length === 1) {
    return <p key={key}>text</p>;
  }

  console.log(split);

  let data = [];
  let dataDom;

  function _forEach () {
    data = [];

    for (let i = 0, len = split.length; i < len; i += 3) {
      data.push(
        split[i]
        split[i + 1] && <Link to={split[i + 1]}>{split[i + 2]}</Link>
        split[i + 3] && split[i + 3]
      );
    }

    return data;
  };

  dataDom = (
    <p key={key}>
      {
        _forEach()
      }
    </p>
  );

  
  return data;

  // return <p key={key}>stuff</p>;
}
import React from "react";
import { Link } from "react-router-dom";
import Chance from "chance";

export const simpleString = text => {
  return (text || "").toLowerCase().replace(/[^a-z0-9]/g, "-");
};

export const markup = data => {
  if (!data) return data;

  const content = data
    .replace(/\*\*(.+?)\*\*/gm, "<strong>$1</strong>")
    .replace(/__(.+?)__/gm, "<em>$1</em>")
    .replace(/\n/gm, "<br /><br />");

  return content;
};

export const bbc = (text, key) => {
  if (!text) return text;

  // text = text.replace(/\[color:(.+)\](.+)\[\/color\]/gi, "<span style='color:$1;'>$2</span>");
  // text = text.replace(/\[(b|i|q)\](.+?)\[\/(b|i|q)\]/gi, "<$1>$2</$3>");
  // text = text.replace(/\[(gnome|smilie|winkie|happie)\]/gi, "<img src='" + imageUrls.design + "$1.png' alt='$1' />");
  // text = text.replace(/\[br\]/gi, "<br>");

  const splitOn = /\[link \((.+?)\)\](.+)\[\/link\]/;
  const split = text.split(splitOn);

  if (split.length === 1) return <p key={key}>{text}</p>;

  let data = [];

  const forEach = () => {
    data = [];

    // This is not the best needs a refactor, what happens when it's not a link or the link is the first item?
    for (let i = 0, len = split.length; i < len; i += 4) {
      data.push(
        <p key={`${key}_${i}`}>
          {split[i]}
          {split[i + 1] && <Link to={"./" + split[i + 1]}>{split[i + 2]}</Link>}
          {split[i + 3] && split[i + 3]}
        </p>
      );
    }

    return data;
  };

  return forEach();
};

export const guid = () => {
  const c = new Chance();
  return c.guid();
};

export const selection = dom => {
  const start = dom.selectionStart;
  const end = dom.selectionEnd;
  const selected = dom.value.substring(start, end);
  const ranges = [];

  if (selected.indexOf("\n") >= 0) {
    const bits = selected.split("\n");

    bits.reduce((full, data) => {
      if (data === "") return full + 6;

      const count = full + data.length;

      ranges.push({
        text: data,
        start: full,
        end: count
      });

      return count;
    }, start);
  } else {
    ranges.push({
      text: selected,
      start,
      end
    });
  }

  return {
    dom,
    ranges
  };
};

export const hashCode = (data) => {
  let hash = 0, i, chr;
  if (data.length === 0) return hash;

  for (i = 0; i < data.length; i++) {
    chr = data.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }

  return hash;
};

import React, { useState, useRef, useEffect } from 'react';
import { markup, selection, guid } from "../../Utility/Utilities";

const TmpSubmit = () => {
  const textareaRef = useRef(null);
  const [content, setContent] = useState(`**Lorem** __ipsum__ dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique senectus et netus et malesuada fames ac turpis egestas. Faucibus a pellentesque sit amet porttitor. Venenatis urna cursus eget nunc scelerisque viverra. Nullam non nisi est sit. Suspendisse in est ante in. In eu mi bibendum neque. Convallis a cras semper auctor neque vitae tempus. Tempus quam pellentesque nec nam aliquam sem et tortor. Posuere morbi leo urna molestie at elementum eu facilisis sed. Adipiscing vitae proin sagittis nisl rhoncus mattis. Tristique senectus et netus et malesuada fames ac turpis. Sed id semper risus in. Nibh ipsum consequat nisl vel pretium. Nulla aliquet porttitor lacus luctus. Mauris commodo quis imperdiet massa tincidunt nunc.

Quam pellentesque nec nam aliquam sem et tortor consequat. Elit sed vulputate mi sit amet mauris. Praesent tristique magna sit amet purus. Pellentesque nec nam aliquam sem et tortor consequat. Magna fermentum iaculis eu non diam phasellus vestibulum lorem sed. In vitae turpis massa sed. In cursus turpis massa tincidunt dui. Eu feugiat pretium nibh ipsum consequat nisl vel pretium. Amet massa vitae tortor condimentum lacinia quis vel. Ornare arcu odio ut sem nulla. Aliquam eleifend mi in nulla posuere sollicitudin. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Quis risus sed vulputate odio ut.

Vel facilisis volutpat est velit egestas dui id ornare. Consectetur lorem donec massa sapien faucibus et. Laoreet non curabitur gravida arcu ac tortor. Erat imperdiet sed euismod nisi porta. Ullamcorper eget nulla facilisi etiam dignissim. Consequat semper viverra nam libero justo laoreet sit amet cursus. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Ridiculus mus mauris vitae ultricies leo integer. Morbi blandit cursus risus at. Cras adipiscing enim eu turpis egestas. Viverra vitae congue eu consequat ac.

Faucibus et molestie ac feugiat sed lectus. Egestas erat imperdiet sed euismod nisi. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Enim blandit volutpat maecenas volutpat. Luctus venenatis lectus magna fringilla. Nisi lacus sed viverra tellus in hac habitasse platea. Nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Quis imperdiet massa tincidunt nunc. Aliquet enim tortor at auctor urna nunc id cursus. Vel facilisis volutpat est velit. Adipiscing enim eu turpis egestas pretium. Luctus accumsan tortor posuere ac ut consequat semper viverra.

Egestas diam in arcu cursus euismod. Lorem ipsum dolor sit amet consectetur adipiscing elit ut. Accumsan lacus vel facilisis volutpat. Et ultrices neque ornare aenean. Consequat mauris nunc congue nisi vitae. Velit dignissim sodales ut eu sem integer vitae. Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus. Cursus euismod quis viverra nibh cras pulvinar. Tortor consequat id porta nibh venenatis cras sed felis. Proin nibh nisl condimentum id venenatis a. Arcu dictum varius duis at consectetur lorem donec massa sapien. At varius vel pharetra vel turpis. Maecenas pharetra convallis posuere morbi leo urna molestie at. Eget nullam non nisi est sit amet facilisis. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo.

`);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (textareaRef.current) {
      setHeight();

    }
  }, [textareaRef, textareaRef.current]);

  const setHeight = () => {
    textareaRef.current.style.height = 0;
    textareaRef.current.style.height = textareaRef.current.scrollHeight + 16 + 'px';
  };

  const saveContent = txt => {
    setHeight();
    setContent(txt);
  };

  const handleContentChange = event => {
    saveContent(event.target.value);
  };

  const handlePreview = () => {
    setPreview(content);
  };

  const handleEdit = () => {
    setPreview(null);
  };

  const handleBold = () => {
    const { ranges } = selection(textareaRef.current);
    let txt = content;

    ranges.forEach(range => {
      txt = txt.slice(0, range.start) + `**${range.text}**` + txt.slice(range.end);
    });

    saveContent(txt);
  };

  const handleItalic = () => {
    const { ranges } = selection(textareaRef.current);
    let txt = content;

    ranges.forEach(range => {
      txt = txt.slice(0, range.start) + `__${range.text}__` + txt.slice(range.end);
    });

    saveContent(txt);
  };

  const handleResetFormatting = () => {
    const txt = content.replace(/\*\*|__/gm, '');
    saveContent(txt);
  };

  const handleResetSelectedFormatting = () => {
    const { ranges } = selection(textareaRef.current);
    let txt = content;

    ranges.forEach(range => {
      txt = txt.slice(0, range.start) + range.text.replace(/\*\*|__/gm, '') + txt.slice(range.end)
    });

    saveContent(txt);
  };

  const handleSplit = () => {
    const { ranges } = selection(textareaRef.current);

    if (ranges[0].start === ranges[0].end) {
      const txt = textareaRef.current.value;
      const current = txt.slice(0, ranges[0].end);
      const newChild = txt.slice(ranges[0].end);

      saveContent(current);
    }
  };

  return (
    <section>
      <h1>Write a story</h1>
      <div>
        <div style={{border: '1px solid #000'}}>
          {
            !preview &&
            <textarea
              ref={textareaRef}
              value={content}
              onChange={handleContentChange}
              style={{width: '100%', display:'block'}}
            />
          }
          {
            preview &&
            <div dangerouslySetInnerHTML={{__html: markup(preview)}}></div>
          }
        </div>
        {
          !preview &&
          <button onClick={handlePreview}>preview</button>
        }
        {
          preview &&
          <button onClick={handleEdit}>Edit</button>
        }
        <button>save</button>
        <button>publish</button>
        {
          !preview && <>
            <button onClick={handleBold}><strong>BOLD</strong></button>
            <button onClick={handleItalic}><em>Italic</em></button>
            <button onClick={handleResetFormatting}>Remove all Formating</button>
            <button onClick={handleResetSelectedFormatting}>Remove selected Formating</button>
            <button onClick={handleSplit}>Split</button>
          </>
        }
      </div>
    </section>
  );
};

export default TmpSubmit;
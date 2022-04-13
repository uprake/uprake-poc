import React, { useState } from 'react';
import { convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

import { tw } from 'twind';
const content = {
  entityMap: {},
  blocks: [
    {
      key: '637gr',
      text: 'Initialized from content state.',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
  ],
};

function ReactDraft() {
  const [contentState, setContentState] = useState(convertFromRaw(content));

  const onContentStateChange = (contentState: any) => {
    // this.setState({
    //   contentState,
    // });
    setContentState(contentState);
  };

  return (
    <>
      <div className={tw`h-[500px] w-[500px]`}>
        <Editor
          wrapperClassName={tw`h-full w-full`}
          editorClassName={tw`h-full w-full flex`}
          onContentStateChange={onContentStateChange}
        />
        <textarea disabled value={JSON.stringify(contentState, null, 4)} />
      </div>
    </>
  );
}

export default ReactDraft;

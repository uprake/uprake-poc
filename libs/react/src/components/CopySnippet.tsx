import React, { useEffect, useState } from 'react';
import { useCopyToClipboard } from 'react-use';
import { tw } from 'twind/style';

interface Props {
  snippet: string;
  btnText: string;
}
function CopySnippet({ snippet, ...props }: Props) {
  const [btnText, setBtnText] = useState(props.btnText);
  const [state, copyToClipboard] = useCopyToClipboard();

  function handleClick() {
    copyToClipboard(snippet);
    setBtnText('Copied');
    setTimeout(() => {
      setBtnText(props.btnText);
    }, 400);
  }

  return (
    <>
      <button
        className={tw`px-2.5 py-1 bg-indigo-600 text-white hover:bg-indigo-700 rounded`}
        onClick={handleClick}
      >
        {btnText}
      </button>
      {state.error && 'Error while Copying'}
    </>
  );
}

CopySnippet.defaultProps = {
  snippet: '',
  btnText: 'Copy Snippet',
};

export default CopySnippet;

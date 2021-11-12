import React from 'react'
import { useRef } from 'react';

export const Test = () => {
    const inputEl = useRef(null);
    const onButtonClick = () => {
      // `current` points to the mounted text input element
      inputEl.current.focus();
    };
    return (
      <>
        <input ref={inputEl} type="text" />
        <button onMouseEnter={onButtonClick}>Focus the input</button>
      </>
    );
}

   
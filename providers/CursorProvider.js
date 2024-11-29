'use client';

import React, { createContext, useContext, useState } from 'react';

const CursorContext = createContext();

const CursorProvider = ({ children }) => {
  const [cursorSize, setCursorSize] = useState(20);
  const [cursorContent, setCursorContent] = useState(null);
  const [cursorBg, setCursorBg] = useState('#F0EFEF');

  const updateCursor = ({ size, content, bgColor }) => {
    if (size !== undefined) setCursorSize(size);
    if (content !== undefined) setCursorContent(content);
    if (bgColor !== undefined) setCursorBg(bgColor);
  };

  const resetCursor = () => {
    setCursorSize(20);
    setCursorContent(null);
    setCursorBg('#F0EFEF');
  };

  return (
    <CursorContext.Provider
      value={{ cursorSize, cursorContent, cursorBg, updateCursor, resetCursor }}
    >
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => useContext(CursorContext);

export default CursorProvider;

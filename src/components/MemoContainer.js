import React, { useMemo } from 'react';

const MemoContainer = ({data, children}) => useMemo(() => children, [...data]);

export default MemoContainer;
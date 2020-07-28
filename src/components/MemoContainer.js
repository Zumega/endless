import { useMemo } from 'react';

const MemoContainer = ({data, children}) => useMemo(() => children, [...data, children]);

export default MemoContainer;
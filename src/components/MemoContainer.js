import { useMemo } from "react";

export const MemoContainer = ({ data, children }) => useMemo(() => children, [...data, children]);

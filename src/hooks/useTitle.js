import { useEffect } from "react";
export const useTitle = (title) => {
  useEffect(() => {
    console.log("Setting document title to:", title);
    document.title = `${title} - Frontend eHub`;
  }, [title]);
  return null;
};

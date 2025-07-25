import { useState } from "react";

export function useHandlePage(page) {
  const [statePage, setPage] = useState(page);

  const handlePageChange = (pageAction) => {
    switch (pageAction) {
      case "increment":
        setPage((oldState) => oldState + 1);
        window.scrollTo(0, 0);
        break;

      case "decrement":
        setPage((oldState) => oldState - 1);
        window.scrollTo(0, 0);
        break;

      default:
        setPage(pageAction);
        window.scrollTo(0, 0);
        break;
    }
  };

  return [statePage, handlePageChange];
}

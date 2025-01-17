import { useState } from "react";

export function useHandlePage() {

    const [statePage, setPage] = useState(1);
    
        const handlePageChange = (pageAction) => {
    
            switch (pageAction) {
    
                case 'increment': setPage(oldState => oldState + 1); window.scrollTo(0, 0); break;
    
                case 'decrement': setPage(oldState => oldState - 1); window.scrollTo(0, 0); break;
    
                default: setPage(pageAction); window.scrollTo(0, 0); break;
            }
            
        }

    return [statePage, handlePageChange];
    
}
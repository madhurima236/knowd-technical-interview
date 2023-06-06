import { useState, useEffect } from "react";
import { Search } from "../search-engine";

const getTextFromResults = (results, docs) => {
  const texts = [];

  for (const result of results) {
    const id = result[0];
    const index = parseInt(id, 10); // Convert id to a number
    if (index >= 0 && index < docs.length) {
      texts.push(docs[index]);
    } else {
      texts.push("Invalid index");
    }
  }

  return texts;
};

const useInfiniteScroll = (initialK, engine, ticketArray) => {
  const [tickets, setTickets] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [k, setK] = useState(initialK);
  const [query, setQuery] = useState("");

  const loadMore = () => {
    setK((prevK) => prevK + 10);
  };

  useEffect(() => {
    const fetchTickets = async () => {
      const results = Search(engine, query, k);
      const ticketTexts = getTextFromResults(results, ticketArray);
      setTickets(ticketTexts);
      console.log("ticketTexts.length", ticketTexts.length);
      setHasMore(ticketTexts.length < k ? false : true);
    };
    fetchTickets();
  }, [k, query]);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const { scrollHeight, clientHeight, scrollTop } = document.documentElement;
  //     console.log("scrollHeight", scrollHeight);
  //     console.log("clientHeight", clientHeight);
  //     console.log("scrollTop", scrollTop);
  //     if (scrollTop + clientHeight >= scrollHeight - 100) {
  //       loadMore();
  //     }
  //   };
  
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  

  return { tickets, hasMore, loadMore, setQuery };
};

export default useInfiniteScroll;

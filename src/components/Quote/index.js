import React, { useState, useEffect } from "react";
import Axios from "axios";

import { QuoteAuthor, QuoteBody, QuoteContainer } from "./QuoteElements";

const Quote = () => {
  const [quoteBody, setQuoteBody] = useState("");
  const [quoteAuthor, setQuoteAuthor] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const results = await Axios("https://api.quotable.io/random");
      // console.log(results.data.author);
      // console.log(results.data.content);
      setQuoteAuthor(results.data.author);
      setQuoteBody(results.data.content);
    };
    fetchData();
  }, []);

  return (
    <QuoteContainer>
      <QuoteBody>“{quoteBody}”</QuoteBody>
      <QuoteAuthor>{quoteAuthor}</QuoteAuthor>
    </QuoteContainer>
  );
};

export default Quote;

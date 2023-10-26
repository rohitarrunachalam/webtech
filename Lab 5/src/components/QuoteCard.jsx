
import React, { useEffect, useState } from "react";
import axios from "axios";
import copy from "../images/copy-logo.png";
import refresh from "../images/refresh-logo.png";



export default function QuoteCard() {

  const [quote, setQuote] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [loadingQuote, setLoadingQuote] = useState(false);
  const [quoteCopied, setQuoteCopied] = useState(false);

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  async function fetchRandomQuote() {
    try {
      setLoadingQuote(true);
      setErrorMessage("");
      setQuoteCopied(false);
      const quoteObject = await axios.get("https://api.quotable.io/random");
      setQuote(quoteObject.data);
      setLoadingQuote(false);
    } catch (error) {
      setErrorMessage(error.message);
      setLoadingQuote(false);
    }
  }

  function copyQuote() {
    navigator.clipboard.writeText(quote.content + " - " + quote.author);
    setQuoteCopied(true);
  }

  return (
    <>
      <div className="mt-8">
      
        <div class="w-[700px]  rounded-xl  p-5  bg-white  bg-opacity-60 backdrop-filter backdrop-blur-lg">
          <div class="w-full">
            <p class="text-gray-600 text-center px-5 outfit-400 text-[16px]"><span className="text-3xl text-teal-500 text-left leading-tight h-3">“</span>{quote.content}<span className="text-3xl text-teal-500 text-right leading-tight h-3 -mt-3">”</span></p>
          </div>
          <div class="w-full mt-4">
            <p class="text-[14px] text-teal-500  text-center outfit-500">- {quote.author}</p>
          </div>
          <div className="flex justify-between mt-2">
            <div>
              {quoteCopied ? (
                <p className="outfit-400 text-rose-500">Quote Copied To Clipboard</p>
              ) : (
                <button onClick={copyQuote}>
                  <img src={copy} className="w-6 transform
                                transition duration-500 hover:scale-110" alt="Copy" />
                </button>
              )}
            </div>

            <div>
              <button onClick={fetchRandomQuote}>
                <img src={refresh} className="w-6 ml-2 transform
                                transition duration-500 hover:scale-110" alt="Refresh" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}




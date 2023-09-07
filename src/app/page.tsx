'use client'
import { useEffect, useState} from 'react'
import {FaTwitter, FaQuoteLeft, FaQuoteRight} from 'react-icons/fa'


export default function Home() {

  const [quote, setQuote] = useState([]);

  useEffect(() =>{
    const getQuote = async () => {
      const request = await fetch('https://api.quotable.io/quotes/random');
      const response = await request.json();
      console.log('Response from api: ' ,response);
      setQuote(response);
    }
    getQuote();
  }, []);

  const  getNewQuote = async () => {
    const request = await fetch('https://api.quotable.io/quotes/random');
    const response = await request.json();
    console.log('Response from api: ' ,response);
    setQuote(response);
  }


  return (

          <div id='wrapper' className='flex items-center container mt-96 mx-auto w-96 '>

            {
              quote && quote.length && quote.map((item:any) => {
                const href = `https://twitter.com/intent/tweet?text=${item.content}%20%20%23${item.author}`;
                return (
                  <div id='quote-box' className=' container'>

                  <div id='text' key={item._id}><FaQuoteLeft className='inline-flex pr-1'/>{item.content} <FaQuoteRight className='inline-flex pl-1'/></div>
                  <div id='author' key={item.authorSlug} className='mt-3 mb-2  ' > -{item.author}</div>
                  <div className='flex mt-4 mb-4 '>
                      <a id='tweet-quote'
                        key={item.length}
                         href={href}
                         target='_blank'
                         className='
                                    pl-2
                                    flex-none
                                    bg-cyan-500
                                    hover:bg-cyan-700
                                    rounded-full
                                    w-8'><FaTwitter /> </a>
                  </div>

                  <div><button id='new-quote'
                             onClick={getNewQuote}
                             className=' px-1
                                        flex-auto
                                        rounded-full
                                        bg-cyan-500
                                        hover:bg-cyan-700'>Generate Quote</button></div>
                  </div>
                )
              })
            }

        </div>

  )
}

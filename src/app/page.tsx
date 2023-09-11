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
    // console.log('Response from api: ' ,response);
    setQuote(response);
  }


  return (

          <div id='wrapper' className='flex items-center container mx-auto mt-80 lg:mt-96  '>

            {
              quote && quote.length && quote.map((item:any, index: number) => {
                const href = `https://twitter.com/intent/tweet?text=${item.content}%20%20%23${item.author}`;
                return (
                  <div id='quote-box' className='container m-8 text-center' key={item._id}>

                  <div id='text'
                       key={index}

                  ><FaQuoteLeft className='inline-flex pr-1'/>{item.content} <FaQuoteRight className='inline-flex pl-1'/></div>
                  <div id='author' key={item.authorSlug} className='mt-3 mb-2 ' > -{item.author}</div>
                  <div className='flex space-x-1 container mt-4 mb-4  '>

                      <a id='tweet-quote'
                        key={index+"a1"}
                         href={href}
                         target='_blank'
                         className='

                                    pl-2
                                    pt-1
                                    inline-flex
                                    bg-cyan-500
                                    hover:bg-cyan-700
                                    rounded-full
                                    w-8'><FaTwitter /> </a>
                        <div><button id='new-quote'
                             onClick={getNewQuote}
                             className='px-auto

                                        inline-flex
                                        rounded-full
                                        bg-cyan-500
                                        hover:bg-cyan-700'>Generate Quote</button></div>
                  </div>
                  </div>


                )
              })
            }

        </div>

  )
}

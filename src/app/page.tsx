'use client'
import { useEffect, useState} from 'react'
import {FaTwitter} from 'react-icons/fa'


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

          <div id='wrapper' className='flex items-center'>

            {
              quote && quote.length && quote.map((item:any) => {
                const href = `https://twitter.com/intent/tweet?text=${item.content}%20%20%23${item.author}`;
                return (
                  <div id='quote-box'>
                  <div id='text'>{item.content}</div>
                  <div id='author'> -{item.author}</div>
                  <div className='inline-flex '>
                      <FaTwitter />
                      <a id='tweet-quote'
                         href={href}
                         target='_blank'
                         className='pl-2'>Tweet Quote</a>
                  </div>
                  <div><button id='new-quote' onClick={getNewQuote} >Generate Quote</button></div>
                  </div>
                )
              })
            }

        </div>

  )
}

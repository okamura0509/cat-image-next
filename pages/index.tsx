import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';
import styles from '../styles/Home.module.css'

const catImages: string[] = [
  "https://cdn2.thecatapi.com/images/bpc.jpg",
  "https://cdn2.thecatapi.com/images/eac.jpg",
  "https://cdn2.thecatapi.com/images/6qi.jpg",
];

const randomImage = ():string => {
  const index = Math.floor(Math.random() * catImages.length);
  return catImages[index];
}



const IndexPage:NextPage = () => {
  const [ImageUrl,setImageUrl] = useState<string>("https://cdn2.thecatapi.com/images/bpc.jpg");

  const handleClick = () => {
    setImageUrl(randomImage());
  }

  return (<>
  <h1>Hello, Next.js 👋</h1>
  <img src={ImageUrl} />
  <button onClick={ handleClick}>きょうのにゃんこ🐱</button>
  </>)
};
 
export default IndexPage;

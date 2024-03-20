import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/app/globals.css'
import { useEffect } from "react";
import express from 'express';
import scrapeNews from '@/pages/api/news_server';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  
  return <Component {...pageProps} />
}


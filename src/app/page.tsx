"use client";

import Image from 'next/image';
import Link from 'next/link';
import { SummerCard } from "@/components/summerCard";
import { MintCard } from "@/components/MintCard";
import { metadata } from "@/app/Metadata";
import { siteConfig } from "@/lib/site";


const Home = () => (
  <>
    <main className="flex flex-col items-center justify-center bg-blue-700">
      <div className="w-full flex justify-center items-center p-4 gap-4 flex-col">
        <h1 className="font-bold text-5xl sm:text-7xl onchainsummer-font mt-16 tracking-wide hover:tracking-tight">
          onchain <br /> summer <br /> blocks <br /> {/*<span className="text-yellow-400 text-7xl font-bold">OCSB</span>*/}
        </h1>
        {/*
        <h2 className="text-xl leading-3 p-8">
          Onchain Blocks for the Summer. 
          All the good blocks in their Summer version.
        </h2>
        */}
      </div>
      <div className="w-full flex-col justify-center space-y-4 mt-auto pt-16 pb-20">
        <MintCard />
      </div>
      <div id="explore" className="w-full sm:max-w-sm md:max-w-lg flex justify-center items-center p-4 gap-4 flex-col">
        <p className="onchainsummer-font text-3xl">explore ocsb</p>
        {/*<div className="w-full sm:max-w-lg flex flex-row justify-center bg-card/80 rounded-md p-4 gap-4">*/}
        <div className="flex flex-row justify-center bg-card/80 rounded-md p-4 gap-4">
          <Image
            src="/sample.svg"
            width={80}
            height={80}
            alt="Iteration sample."
          />
          <Image
            src="/sample_1.svg"
            width={80}
            height={80}
            alt="Iteration sample."
          />
          <Image
            src="/sample_2.svg"
            width={80}
            height={80}
            alt="Iteration sample."
          />
        </div>
        <div className="flex flex-row justify-center bg-card/80 rounded-md p-4 gap-4">
          <Image
            src="/sample_4.svg"
            width={80}
            height={80}
            alt="Iteration sample."
          />
          <Image
            src="/sample_3.svg"
            width={80}
            height={80}
            alt="Iteration sample."
          />
          <Image
            src="/sample_5.svg"
            width={80}
            height={80}
            alt="Iteration sample."
          />
        </div>
        <div className="flex flex-row justify-center bg-card/80 rounded-md p-4 gap-4">
          <Image
            src="/sample_1.svg"
            width={80}
            height={80}
            alt="Iteration sample."
          />
          <Image
            src="/sample_2.svg"
            width={80}
            height={80}
            alt="Iteration sample."
          />
          <Image
            src="/sample.svg"
            width={80}
            height={80}
            alt="Iteration sample."
          />
        </div>
          <Link href="https://opensea.io/collection/onchain-summer-blocks" target="_blank">
            <p className="onchainsummer-font text-xl">see all</p>
          </Link>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-2 p-16">
          <img
            src="/ocsb_blue.png"
            alt="Iteration sample."
            width={160}
            height={160}
          /> 
           & 
          <img
            src="/ob_logo_white.png"
            alt="Iteration sample."
            width={160}
            height={160}
          />
          
      </div>
    </main>
  </>
);

export default Home;




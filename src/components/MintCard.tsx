"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Summer from "@/public/sample.svg";
import { siteConfig } from "@/lib/site";
import Link from "next/link";
import CardImage from "@/public/summercard.png";
import { RefreshCcw } from "lucide-react";
import { RiGithubLine } from "react-icons/ri";
import { Badge } from "./ui/badge";

//import { Mint } from "@/lib/ocsb";


import { useAccount, useWriteContract } from 'wagmi';
import { Abi, parseEther } from 'viem';
import { base, baseSepolia } from 'viem/chains';

export const abi = [
  {
    type: 'function',
    name: 'mint',
    inputs: [],
    outputs: [],
    stateMutability: 'payable'
  },
  {
    type: 'function',
    name: 'mint',
    inputs: [],
    outputs: [],
    stateMutability: 'payable'
  }
] as const;


export function MintCard() {
  const { writeContract } = useWriteContract();

  return (
    <Card className="bg-card dark:border-zinc-800/50 border-zinc-800/20 w-10/12 md:w-2/3 sm:max-w-lg w-full sm:mx-auto relative overflow-hidden">
      <div className="absolute inset-0 bg-no-repeat bg-right bg-cover opacity-25" style={{ backgroundImage: `url(${CardImage.src})` }}></div>
      <CardHeader className="grid items-start gap-4 space-y-0 relative z-10">
        <div className="space-y-1">
          <CardTitle className="flex items-center justify-between text-md sm:text-lg">
            <span className="flex">
              <p>Onchain Summer Blocks</p>
              {/*<Image src={Summer} alt="Summer" width={22} height={22} className="ml-1.5 contrast-150" />*/}
            </span>
            <span className="space-x-1 ml-1">
               <Link href="https://wallet.coinbase.com/ocs" target="blank">
                <Badge className="dark:bg-zinc-800 hover:dark:bg-zinc-800/50 hover:bg-zinc-800/50 bg-zinc-400 dark:text-zinc-100 text-zinc-800">
                  Onchain Summer
                </Badge>
              </Link>
              <Link href="https://onchain-blocks.vercel.app" target="blank">
                <Badge className="bg-blue-500 hover:bg-blue-500/50 dark:text-zinc-100 text-zinc-800">
                  Onchain Blocks
                </Badge>
              </Link>
            </span>
          </CardTitle>
          <CardDescription className="text-xs text-foreground py-2">
           Mint Onchain Summer Blocks and celebrates the Summer.
            <br />
            Only available on Summer, may or may not evolve over the time.
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="relative z-10">
        <div className="flex justify-center items-center text-xxs text-muted-foreground">
          <div className="flex items-center bg-card/80 p-1 rounded-full">
            <Button variant="secondary" size="icon" className="gap-1 p-8 px-16" onClick={() => writeContract({ 
                abi,
                address: "0x3Fa6ec9b1A9534e9EfF22e0e6938Ce375a411285",
                chain: baseSepolia,
                functionName: 'mint',
                args: [],
                value: parseEther('0.000069') 
             })}>
              <p className="text-foreground text-3xl sm:text-5xl onchainsummer-font">mint ocsb</p>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

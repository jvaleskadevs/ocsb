/*
import { useAccount, useWriteContract } from 'wagmi';
import { parseEther } from 'viem';

export const ocsbAbi = [
  {
    type: 'function',
    name: 'mint',
    inputs: [],
    outputs: [],
    stateMutability: 'payable',
  },
] as const;

export const mintOCSB = async () => {
  const { address } = useAccount();
  if (!address) return;
  
  const { writeContract } = useWriteContract({
    abi: ocsbAbi,
    address: "0x3Fa6ec9b1A9534e9EfF22e0e6938Ce375a411285",
    functionName: 'mint',
    args: [],
    value: parseEther('0.000069')
  });
  
  writeContract();
} 
*/
import { useCallback } from 'react';
import { Avatar, Name } from '@coinbase/onchainkit/identity';
import { 
  Transaction, 
  TransactionButton, 
  TransactionSponsor, 
  TransactionStatus, 
  TransactionStatusAction, 
  TransactionStatusLabel
} from '@coinbase/onchainkit/transaction'; 
import { Wallet, ConnectWallet } from '@coinbase/onchainkit/wallet';
import { parseEther } from 'viem';
import { useAccount } from 'wagmi';
import { base, baseSepolia } from 'wagmi/chains';
 
export const clickContractAddress = '0x3Fa6ec9b1A9534e9EfF22e0e6938Ce375a411285';
export const clickContractAbi = [
  {
    type: 'function',
    name: 'mint',
    inputs: [],
    outputs: [],
    stateMutability: 'payable',
  },
] as const;
 
export function Mint() {
  const { address } = useAccount();
 
  const contracts = [
    {
      address: clickContractAddress,
      abi: clickContractAbi,
      functionName: 'mint',
      args: [],
      value: parseEther('0.000069')
    },
  ];
 
  return (
    <Transaction address={address} chainId={baseSepolia.id} contracts={contracts}>
      <TransactionButton />
      <TransactionSponsor />
      <TransactionStatus>
        <TransactionStatusLabel />
        <TransactionStatusAction />
      </TransactionStatus>
    </Transaction>  
  );
}

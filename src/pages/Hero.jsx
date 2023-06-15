import React, { useEffect } from 'react'
import {contract_address} from '../data/file.js';
import {abi} from '../data/file.js'
const {ethers}= require("ethers");

function Hero() {
  const wallet_address =`0x2169E26D2E171D6D3DB3924b989F6727Db85f628`;
  const provider = new ethers.providers.JsonRpcBatchProvider(`https://sepolia.infura.io/v3/b93c94691af24bbf88d4eae7f1d8dede`);
  const contract = new ethers.Contract(wallet_address,abi,provider);
  const occasiond=[];
 
    const name=async()=>{
    const accounts = await window.ethereum.request({method:'eth_requestAccounts'});
    const totaloccasions = await contract.maxoccasion();
    for(let i=0;i<=totaloccasions;i++){
      const l = await contract.printnew(i);
      occasiond.push(l);
      console.log(occasiond[i].date);
      
    }


  
    
    

  }
  useEffect(()=>{
    name();
  },[])
  const Pag=()=>{
    return(
      <div>
        {occasiond[0]}
      </div>
    )

  }
  const payment=async(n)=>{
    const pay=await contract.mint(n);
    pay.wait();

  }

  return (
    <div>
    <div>ho</div>
    <Pag/>
    <button onClick={payment(1)}>Press here to pay through metamaks bro</button>

    </div>
  )
}

export default Hero
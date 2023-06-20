import React, { useEffect, useState } from 'react';
import {contract_address} from '../data/file.js';
import {abi} from '../data/file.js'
const {ethers}= require("ethers");

function Hero() {
  const wallet_address =`0x2169E26D2E171D6D3DB3924b989F6727Db85f628`;
  const [occasionName, setOccasionName] = useState([]);
  const [sendaddr,setsendaddr]=useState('');
  const providers = new ethers.providers.Web3Provider(window.ethereum);
  const signer = providers.getSigner();

  const provider = new ethers.providers.JsonRpcBatchProvider(`https://sepolia.infura.io/v3/b93c94691af24bbf88d4eae7f1d8dede`);
  const contract = new ethers.Contract(wallet_address,abi,providers);
  console.log(contract.address)
  let addr;


    const name=async()=>{
      const occasionName=[];

    const accounts = await window.ethereum.request({method:'eth_requestAccounts'});
    const totaloccasions = await contract.maxoccasion();
    for(let i=0;i<=totaloccasions;i++){
      const l = await contract.printnew(i);
      occasionName.push(l);
      console.log(occasionName)

    }
    setOccasionName(occasionName);
    console.log(addr);
   addr =await signer.getAddress();
   setsendaddr(addr);

  
    
    

  }
  const startpayment = async()=>{
    const tx = await signer.sendTransaction({
      to: sendaddr,
      value: ethers.utils.parseEther('0.01')
    })
  } 
  useEffect(()=>{
    name();
  },[])
  

  
  return (
    <div>
    <div>ho</div>
    <button>Press here to pay through metamaks bro</button>
    <div>
    {occasionName.map((occasions,index)=>(
      <p key={index}>{occasions.name}</p>
    ))}
    </div>
    </div>
  )
}

export default Hero
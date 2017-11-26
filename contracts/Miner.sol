pragma solidity ^0.4.13;

import './Mine.sol';

contract Miner is Mine {
  string public id;
  string public name;
  bool public verified;
  string public verifID;

  mapping (string => uint256) public Mines;
  // trust score -- compute of different events

  function Miner (string ide, string nameT, string miner){
      id = ide;
      name = nameT;
      verified = isVerif;
      verifID = proof;
  }
}

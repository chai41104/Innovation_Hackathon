pragma solidity ^0.4.13;

import './Mine.sol';

contract Miner is Mine {
  string public id;
  string public name;
  bool public verified;
  string public verifID;

  mapping (string => uint256) internal Mines;
  // trust score -- compute as results of different events
  mapping (string => uint256) internal trustScore;

  function Miner (string genId, string guysName, bool isVerif, string proof){
      id = genId;
      name = guysName;
      verified = isVerif;
      verifID = proof;
  }
}

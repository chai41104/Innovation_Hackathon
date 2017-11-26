pragma solidity ^0.4.13;

import './Verified.sol';

contract Grantor is Verified {
  string public id;
  bool public isInvested;
  uint256 public investedQ;
  uint256 public verificationId;

  function Grantor(string ide, bool hasInvested, uint256 quantity, uint256 processID) {
    id = ide;
    isInvested = hasInvested;
    investedQ = quantity;
    verificationId = processID;
  }
}

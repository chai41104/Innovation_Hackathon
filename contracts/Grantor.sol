pragma solidity ^0.4.13;

contract Grantor {
  // internal id
  string public id;
  bool public isInvested;
  uint256 public investedQ;
  // processID so we can actually go to the process later
  uint256 public verificationId;

  // process ID comes from the KYC process//
  function Grantor(string ide, bool hasInvested, uint256 quantity, uint256 processID) {
    id = ide;
    isInvested = hasInvested;
    investedQ = quantity;
    verificationId = processID;
  }
}

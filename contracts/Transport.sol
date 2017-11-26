pragma solidity ^0.4.13;

contract Transport {
  bool public isTransportistVerified;
  string public transportistID;
  uint256 public collectionPlaceCode;
  uint256 public depositPlaceCode;
  uint256 public transportID;
  uint256 public recountedAmount;

  function Transport(bool verified, string id, uint256 collectionID, uint256 depositID) {
    isTransportistVerified = verified;
    transportistID = id;
    collectionPlaceCode = collectionID;
    depositPlaceCode = depositID;
  }
}

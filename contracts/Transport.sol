pragma solidity ^0.4.13;

contract Transport {
  bool public isTransporterVerified;
  string public transportistID;
  uint256 public collectionPlaceCode;
  uint256 public depositPlaceCode;
  uint256 public transporterID;
  uint256 public recountedAmount;

  // CollectionID and DepositID should come from a
  function Transport(bool verified, string id, uint256 collectionID, uint256 depositID, uint256 transporter, uint256 recount) {
    isTransporterVerified = verified;
    transportistID = id;
    collectionPlaceCode = collectionID;
    depositPlaceCode = depositID;
    transporterID = transporter;
    recountedAmount = recount;
  }
}

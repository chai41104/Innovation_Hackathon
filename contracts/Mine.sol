pragma solidity ^0.4.13;

contract Mine {
  string public id;
  string public loc;

  //  we have to check for this and more illegal stuff
  bool public usingMercury;
  bool public usingWomen;
  bool public usingSlaves;
  bool public usingChildren;


  function Mine(string ide, string location, bool isClean) {
    id = ide;
    loc = location;
    usingMercury = isClean;
  }
}

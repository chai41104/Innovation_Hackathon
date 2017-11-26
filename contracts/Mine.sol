pragma solidity ^0.4.13;

contract Mine {
  string public id;
  string public loc;

  //  
  bool public usingMercury;

  function Mine(string ide, string location, bool isClean) {
    id = ide;
    loc = location;
    usingMercury = isClean;
  }
}

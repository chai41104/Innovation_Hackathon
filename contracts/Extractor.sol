pragma solidity ^0.4.13;

contract Extractor {
   string public extractionMethod;
   string public imageUrl;

   function Extractor(string methods, string proofURL) {
     extractionMethod = methods;
     imageUrl = proofURL;
   }
}

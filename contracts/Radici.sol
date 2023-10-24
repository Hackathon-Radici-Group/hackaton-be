// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.5.0;

contract Radici {
    uint private entryCount = 0;
    mapping(uint => Entry) private entries;

    struct Entry {
        uint id;
        string value;
        string ipfs;
        address owner;
    }

    constructor() public {
    }

    function createEntry(string memory _value, string memory _ipfs) public returns (uint) {
        require(bytes(_value).length > 0);
        require(bytes(_ipfs).length > 0);
        entryCount++;
        entries[entryCount] = Entry(entryCount, _value, _ipfs, msg.sender);
        return (entryCount);
    }

    function getOwnerOf(uint id) public view returns (address) {
        return entries[id].owner;
    }

    function getEntryCount() public view returns (uint) {
        return entryCount;
    }

    function reviewEntry(uint id, string memory _value) public {
        require(bytes(_value).length > 0);

        Entry memory entry = entries[id];

        require(msg.sender == entry.owner);

        entries[id] = Entry(id, _value, entry.ipfs, entry.owner);
    }

    function getEntry(uint id) public view returns (string memory, string memory, address){
        Entry memory entry = entries[id];
        return (entry.value, entry.ipfs, entry.owner);
    }
}

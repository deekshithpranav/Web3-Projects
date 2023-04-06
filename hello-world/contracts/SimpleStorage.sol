// SPDX-License-Identifier: MIT
pragma solidity >= 0.8.7 <0.9.0;



contract SimpleStorage{
    uint favNum;

    People[] public people;
    mapping(string => uint256) public nameToFavNum;
    struct People {
        uint favNum;
        string name;
    }

    function addPerson(string memory _name, uint256 _favNum) public {
        people.push(People(_favNum, _name));
        nameToFavNum[_name] = _favNum;
    }

    function store(uint _favNum) public virtual {
        favNum = _favNum;
    }

    function retrieve() public view returns (uint256){
        return favNum;
    }
}
// 0xd9145CCE52D386f254917e481eB44e9943F39138
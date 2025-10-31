// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract TipJar {
    address public owner;

    struct Tip {
        address from;
        uint amount;
        string message;
    }

    Tip[] public tips;

    constructor() {
        owner = msg.sender;
    }

    function sendTip(string memory _message) public payable {
        require(msg.value > 0, "No ETH sent");
        tips.push(Tip(msg.sender, msg.value, _message));
    }

    function withdrawTips() public {
        require(msg.sender == owner, "Only owner");
        payable(owner).transfer(address(this).balance);
    }

    function getAllTips() public view returns (Tip[] memory) {
        return tips;
    }
}

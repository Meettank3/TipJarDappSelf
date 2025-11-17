// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title TipJar
 * @dev A peer-to-peer tipping contract where received Ether is immediately 
 * forwarded to the contract owner, and the tip history is recorded.
 */
contract TipJar {
    // The address of the contract deployer (the tip recipient).
    address public owner;

    // Structure to hold the details of each tip.
    struct Tip {
        address from;
        // Stores the actual ETH amount sent with the transaction (msg.value).
        uint amount; 
        string message;
    }

    // Array to store the history of all received tips.
    Tip[] public tips;

    /**
     * @dev Sets the owner to the deployer address.
     */
    constructor() {
        owner = msg.sender;
    }

    /**
     * @dev Allows users to send a tip to the owner.
     * The actual Ether sent (msg.value) is immediately forwarded to the owner's address.
     * @param _message An optional message from the tipper.
     * @param _desiredAmount The minimum amount of Ether the tipper intends to send.
     */
    function sendTip(string memory _message, uint256 _desiredAmount) public payable {
        // Validation: The desired amount must be greater than zero.
        require(_desiredAmount > 0, "Desired amount must be greater than 0.");
        
        // Validation: Ensure the sender has attached at least the desired amount of ETH.
        require(msg.value >= _desiredAmount, "Please send at least the desired amount of ETH."); 
        
        // 1. Record the tip history, using the actual Ether sent (msg.value) as the amount.
        tips.push(Tip(msg.sender, msg.value, _message));
        
        // 2. Peer-to-Peer Transfer: Immediately forward the entire Ether amount (msg.value) to the owner.
        // We use the low-level .call for safety and to forward enough gas to the recipient.
        // Since the entire balance is immediately transferred, the contract balance remains zero.
        (bool success, ) = payable(owner).call{value: msg.value}("");
        require(success, "Tip transfer to owner failed.");
    }

    /**
     * @dev Returns the full history of all tips received by the contract.
     * @return An array of Tip structs.
     */
    function getAllTips() public view returns (Tip[] memory) {
        return tips;
    }

    /**
     * @dev Prevents users from sending Ether directly to the contract without calling sendTip().
     * This ensures that all tips are recorded in the history.
     */
    receive() external payable {
        revert("Use the sendTip function to leave a message and ensure your tip is recorded."); 
    }
}

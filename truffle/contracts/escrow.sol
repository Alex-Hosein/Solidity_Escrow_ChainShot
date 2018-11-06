pragma solidity ^0.4.19; // TODO: declare version ^0.4.19

contract EscrowContract {
	// TODO: create member variables
	address public depositor;
	address public beneficiary;
	address public arbiter;
	function EscrowContract(address _arbiter,address _beneficiary ) payable{
		 arbiter = _arbiter ;
		 beneficiary = _beneficiary ;
		 depositor = msg.sender;
	}

	function approve(){
		require(msg.sender == arbiter);
		Approved(this.balance);
		depositor.transfer(this.balance);
	}
	event Approved(uint num);
}


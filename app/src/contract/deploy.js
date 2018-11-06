import {bytecode, abi} from './EscrowContract.json';
import {web3} from './web3Util.js';

const EscrowContract = new web3.eth.Contract(abi)// web3 contract instance

const deploy = (value, arbiterAddress, beneficiaryAddress, depositorAddress) => {
    const deployParameters = {
        // TODO: fill in the arguments and bytecode parameters 
        arguments: [beneficiaryAddress, depositorAddress],
        data: bytecode,
        
    }
    return EscrowContract.deploy(deployParameters).estimateGas().then((gas) => {
        return EscrowContract.deploy(deployParameters).send({
            // TODO: fill in the from address and gas estimate
            from: depositorAddress,
            gas: gas,
            value:value
        });
    })
}

export default deploy;
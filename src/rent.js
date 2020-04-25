import web3 from './web3'
const address = "0x20b97cddd47d50d42dc75a5a7e2ab31079a4a431"

const abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "fd",
				"type": "address"
			}
		],
		"name": "bookFlat",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "searchFlats",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "landlordName",
				"type": "string"
			},
			{
				"name": "email",
				"type": "string"
			},
			{
				"name": "phoneno",
				"type": "int256"
			},
			{
				"name": "Houseaddress",
				"type": "string"
			},
			{
				"name": "city",
				"type": "string"
			},
			{
				"name": "rentAmount",
				"type": "int256"
			},
			{
				"name": "BHK",
				"type": "int256"
			},
			{
				"name": "securityFee",
				"type": "int256"
			},
			{
				"name": "negotiable",
				"type": "bool"
			},
			{
				"name": "furnished",
				"type": "bool"
			}
		],
		"name": "setFlatInfo",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "email",
				"type": "string"
			},
			{
				"name": "phoneno",
				"type": "int256"
			},
			{
				"name": "city",
				"type": "string"
			},
			{
				"name": "startRentRange",
				"type": "int256"
			},
			{
				"name": "endRentRange",
				"type": "int256"
			},
			{
				"name": "BHK",
				"type": "int256"
			},
			{
				"name": "durationStay",
				"type": "int256"
			}
		],
		"name": "setTenant",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "flats",
		"outputs": [
			{
				"name": "landlordAddress",
				"type": "address"
			},
			{
				"name": "landlordName",
				"type": "string"
			},
			{
				"name": "email",
				"type": "string"
			},
			{
				"name": "phoneno",
				"type": "int256"
			},
			{
				"name": "Houseaddress",
				"type": "string"
			},
			{
				"name": "city",
				"type": "string"
			},
			{
				"name": "rentAmount",
				"type": "int256"
			},
			{
				"name": "BHK",
				"type": "int256"
			},
			{
				"name": "securityFee",
				"type": "int256"
			},
			{
				"name": "negotiable",
				"type": "bool"
			},
			{
				"name": "furnished",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "searchedFlats",
		"outputs": [
			{
				"name": "landlordAddress",
				"type": "address"
			},
			{
				"name": "landlordName",
				"type": "string"
			},
			{
				"name": "email",
				"type": "string"
			},
			{
				"name": "phoneno",
				"type": "int256"
			},
			{
				"name": "Houseaddress",
				"type": "string"
			},
			{
				"name": "city",
				"type": "string"
			},
			{
				"name": "rentAmount",
				"type": "int256"
			},
			{
				"name": "BHK",
				"type": "int256"
			},
			{
				"name": "securityFee",
				"type": "int256"
			},
			{
				"name": "negotiable",
				"type": "bool"
			},
			{
				"name": "furnished",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "stenant",
		"outputs": [
			{
				"name": "tenantAddress",
				"type": "address"
			},
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "email",
				"type": "string"
			},
			{
				"name": "phoneno",
				"type": "int256"
			},
			{
				"name": "city",
				"type": "string"
			},
			{
				"name": "startRentRange",
				"type": "int256"
			},
			{
				"name": "endRentRange",
				"type": "int256"
			},
			{
				"name": "BHK",
				"type": "int256"
			},
			{
				"name": "durationStay",
				"type": "int256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "tempFlat",
		"outputs": [
			{
				"name": "landlordAddress",
				"type": "address"
			},
			{
				"name": "landlordName",
				"type": "string"
			},
			{
				"name": "email",
				"type": "string"
			},
			{
				"name": "phoneno",
				"type": "int256"
			},
			{
				"name": "Houseaddress",
				"type": "string"
			},
			{
				"name": "city",
				"type": "string"
			},
			{
				"name": "rentAmount",
				"type": "int256"
			},
			{
				"name": "BHK",
				"type": "int256"
			},
			{
				"name": "securityFee",
				"type": "int256"
			},
			{
				"name": "negotiable",
				"type": "bool"
			},
			{
				"name": "furnished",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "tempTenant",
		"outputs": [
			{
				"name": "tenantAddress",
				"type": "address"
			},
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "email",
				"type": "string"
			},
			{
				"name": "phoneno",
				"type": "int256"
			},
			{
				"name": "city",
				"type": "string"
			},
			{
				"name": "startRentRange",
				"type": "int256"
			},
			{
				"name": "endRentRange",
				"type": "int256"
			},
			{
				"name": "BHK",
				"type": "int256"
			},
			{
				"name": "durationStay",
				"type": "int256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "tenant",
		"outputs": [
			{
				"name": "tenantAddress",
				"type": "address"
			},
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "email",
				"type": "string"
			},
			{
				"name": "phoneno",
				"type": "int256"
			},
			{
				"name": "city",
				"type": "string"
			},
			{
				"name": "startRentRange",
				"type": "int256"
			},
			{
				"name": "endRentRange",
				"type": "int256"
			},
			{
				"name": "BHK",
				"type": "int256"
			},
			{
				"name": "durationStay",
				"type": "int256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]

const contract = new web3.eth.Contract(abi,address);

export default contract
import web3 from './web3'
const address = "0x7a470a28e19e62fcd92cf3714259d7f0d57a048c"

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
				"name": "booked",
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
				"name": "booked",
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
				"name": "booked",
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
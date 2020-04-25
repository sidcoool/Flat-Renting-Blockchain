pragma solidity ^0.4.17;

contract rent{
   
    struct FlatInfo {
        
        string landlordName;
        string email;
        int phoneno;
        string Houseaddress;
        string city;
        int rentAmount;
        int BHK;
        int securityFee;
        bool negotiable;
        bool booked;
        address landlordAddress;
        
    }
   
    struct Tenant {
    string name;
    string email;
    int phoneno;
    string city;
    int startRentRange;
    int endRentRange;
    int BHK;
    int durationStay;
    address tenantAddress;
    }
   
    FlatInfo[] public flats;
    FlatInfo[] public searchedFlats;
    Tenant[] public tenant;
    FlatInfo public tempFlat;
    Tenant public tempTenant;
    mapping(string => uint) mp;
   
    function setFlatInfo(string landlordName, string email, int phoneno, string Houseaddress, string city, int rentAmount,int BHK ,int securityFee,bool negotiable) public
    {
        tempFlat.landlordAddress = msg.sender;
        tempFlat.landlordName = landlordName;
        tempFlat.phoneno = phoneno;
        tempFlat.email = email;
        tempFlat.Houseaddress = Houseaddress;
        tempFlat.city = city;
        tempFlat.rentAmount = rentAmount;
        tempFlat.BHK = BHK;
        tempFlat.securityFee = securityFee;
        tempFlat.negotiable = negotiable;
        tempFlat.landlordName = landlordName;
        if(mp[city]>5)
        {
            tempFlat.rentAmount = tempFlat.rentAmount + 500;
        }
        flats.push(tempFlat);

    }
       
    function setTenant(string name,string email, int phoneno, string city, int startRentRange, int endRentRange, int BHK, int durationStay) public
    {
        mp[city] = mp[city] + 1;
        for(uint k=0; k< flats.length; k++)
        {
            if(flats[k].booked == false && keccak256(bytes(city)) == keccak256(bytes(flats[k].city)) 
            && startRentRange <= flats[k].rentAmount && tempTenant.endRentRange >= flats[k].rentAmount)
            {
                searchedFlats.push(flats[k]);
            }
        }

        tempTenant.tenantAddress = msg.sender;
        tempTenant.name=name;
        tempTenant.email=email;
        tempTenant.phoneno=phoneno;
        tempTenant.city=city;
        tempTenant.startRentRange=startRentRange;
        tempTenant.endRentRange=endRentRange;
        tempTenant.BHK=BHK;
        tempTenant.durationStay=durationStay;
        tenant.push(tempTenant);

    }
   
    function bookFlat(address fd) public payable {
        fd.transfer(msg.value);
        for(uint i=0;i<flats.length;i++)
        {
            if(flats[i].landlordAddress == fd)
            {
                flats[i].booked = true;
                break;
            }
        }
        
    }
}

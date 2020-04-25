pragma solidity ^0.4.17;

contract rent{
   
    struct FlatInfo {
    address landlordAddress;
    string landlordName;
    string email;
    int phoneno;
    string Houseaddress;
    string city;
    int rentAmount;
    int BHK;
    int securityFee;
    bool negotiable;
    bool furnished;
   
    }
   
   
    struct Tenant {
    address tenantAddress;
    string name;
    string email;
    int phoneno;
    string city;
    int startRentRange;
    int endRentRange;
    int BHK;
    int durationStay;
    }
   
   
    FlatInfo[] public flats;
    FlatInfo[] public searchedFlats;
    Tenant[] public tenant;
    FlatInfo public tempFlat;
    Tenant public tempTenant;
    Tenant public stenant;
   
   
    function setFlatInfo(string landlordName, string email, int phoneno, string Houseaddress, string city, int rentAmount,int BHK ,int securityFee,bool negotiable,bool furnished) public
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
    tempFlat.furnished = furnished;
    tempFlat.landlordName = landlordName;
    flats.push(tempFlat);
   
        }
       
        function setTenant(string name,string email, int phoneno, string city, int startRentRange, int endRentRange, int BHK, int durationStay) public
        {
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
   
    function searchFlats() public returns (FlatInfo[])
    {
       uint j=0;
   
   
    for(uint i=0;i<tenant.length;i++)
    {
    if(tenant[i].tenantAddress == msg.sender)
    {
    stenant = tenant[i];
    break;
    }
   
    }
   
   
       for(uint k=0; k< flats.length; k++)
       {
           if(stenant.startRentRange < flats[k].rentAmount && stenant.endRentRange > flats[k].rentAmount)
           {
               searchedFlats[j]=flats[k];
               j++;
           }
       }
       return searchedFlats;
    }
   
    function bookFlat(address fd) public payable {
    fd.transfer(msg.value);
    }
}
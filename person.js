class Person
{
    constructor(firstName,location)
    {
        this.firstName=firstName;
        this.location=location;
    }
    display()
    {
        console.log(this.firstName +" is my first name");
        console.log(this.location +" is my location");
    }
}
module.exports=Person
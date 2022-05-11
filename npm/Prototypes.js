function car(make, model, year) {
    //use the "this" keyword to reference each object
    //that is created from this constructor
    this.make = make;
    this.model = model;
    this.year = year;
}
function employees(Employee){
    console.log(Employee.name + "Doctor")
}
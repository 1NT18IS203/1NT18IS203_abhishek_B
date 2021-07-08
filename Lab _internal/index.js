let globalIndex = 3;

let details = [
    {
        "index":1,
        "type":"Major Appliances",
        "name":"Ramesh",
        "number":"1111122222",
        "area":"Rajendra Nagar"
    },
    {
        "index":2,
        "type":"Small Appliances",
        "name":"Abhishek",
        "number":"3333344444",
        "area":"Danapur"
    },
    {
        "index":3,
        "type":"Telecom Appliances",
        "name":"Raju",
        "number":"5555566666",
        "area":"Kankarbagh"
    }
]

function getValues() {
    let res = document.getElementById("waste-type").value;
    console.log(res);
    let indexValue = 0;
    if (res === "Major Appliances") indexValue = 1;
    else if (res === "Small Appliances") indexValue = 2;
    else if (res === "Telecom Appliances") indexValue = 3;
    console.log(indexValue);
    let person = details.find(person => person.index == indexValue);
    // console.log(person.name);
    document.getElementById("name").value = person.name;
    document.getElementById("contact-number").value = person.number;
    document.getElementById("area").value = person.area;
}

function submitDetails() {
    let newPerson = {
        "index": globalIndex+1,
        "type": document.getElementById("new-waste-type").value,
        "name": document.getElementById("newname").value,
        "number": document.getElementById("new-contact-number").value,
        "area": document.getElementById("newarea").value
    };

    details.push(newPerson);

    console.log(details);
}
let arr = [1, 7, 3, 1, 0, 20, 77];
let startindexele = document.getElementById("startIndexInput");
let deletecountele = document.getElementById("deleteCountInput");
let itemtoaddele = document.getElementById("itemToAddInput");
let splicebuttonele = document.getElementById("spliceBtn");
let updatedarrayele = document.getElementById("updatedArray");

let stringifiedarray = JSON.stringify(arr);

updatedarrayele.textContent = stringifiedarray;

splicebuttonele.onclick = function() {
    let deletecountval = deletecountele.value;
    let itemtoaddval = itemtoaddele.value;
    if (deletecountval === "") {
        deletecountval = 0;
    }
    let startindexval = startindexele.value;
    if (startindexval === "") {
        alert("enter start index");
    } else {
        if (itemtoaddval === "") {
            let updatedarray = arr.splice(parseInt(startindexval), parseInt(deletecountval));
            let parsedarray = JSON.stringify(arr);
            updatedarrayele.textContent = parsedarray;
            deletecountele.value = "";
            startindexele.value = "";
            itemtoaddele.value = "";
        } else {
            let updatedarray = arr.splice(parseInt(startindexval), parseInt(deletecountval), itemtoaddval);
            let parsedarray = JSON.stringify(arr);
            updatedarrayele.textContent = parsedarray;
            deletecountele.value = "";
            startindexele.value = "";
            itemtoaddele.value = "";
        }
    }
};
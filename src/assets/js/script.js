/* jshint esversion: 6 */

var app = new Vue({
    el: "#pageTitle",
    data: {
        title: "simple VueJS app"
    }
});

var app2 = new Vue({
    el: "#mainList",
    data: {
        fruits: [
            { name: "Jabłko" },
            { name: "Gruszka" },
            { name: "Grapefruit" },
            { name: "Banan" },
            { name: "Truskawka" }
        ]
    }
});

function checkIfContains(elem, array) {
    for (var i = 0; i < array.length; i++)
        if (array[i].name.localeCompare(elem) === 0) return true;
    return false;
}

function addNewItem() {
    const newItem = document.getElementById("newItemInput").value;
    const addInfo = document.getElementById("addInfo");
    if (newItem !== null && newItem !== "") {
        if (!checkIfContains(newItem, app2.fruits)) {
            app2.fruits.push({ name: newItem });
            addInfo.innerHTML = "Element dodano pomyślnie!";
        } else {
            addInfo.innerHTML = "Taki element znajduje się już na liście!";
        }
    } else {
        addInfo.innerHTML = "Nic nie wpisano!";
    }
}

function removeItem(item) {
    item = item.parentElement.parentElement;
    const itemValue = item.firstChild.textContent;

    var decision = confirm("Czy na pewno chcesz usunąć \"" + itemValue + "\"?");
    if (decision) {
        const addInfo = document.getElementById("addInfo");
        app2.fruits = app2.fruits.filter(elem => elem.name.localeCompare(itemValue));
        addInfo.innerHTML = "Element został usunięty!";
    } else {
        addInfo.innerHTML = "Element nie został usunięty!";
    }
}

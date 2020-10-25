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

const checkIfContains = (elem, array) => {
    for (var i = 0; i < array.length; i++)
        if (array[i].name.localeCompare(elem) === 0) return true;
    return false;
};

const addNewItem = () => {
    const newItem = document.getElementById("newItemInput").value;
    const addInfo = document.getElementById("addInfo");
    if (newItem !== null && newItem !== "") {
        if (!checkIfContains(newItem, app2.fruits)) {
            app2.fruits.push({ name: newItem });
            addInfo.innerHTML = "Element \"" + newItem + "\"  dodano pomyślnie!";
        } else {
            addInfo.innerHTML = "Taki element (\"" + newItem + "\") znajduje się już na liście!";
        }
    } else {
        addInfo.innerHTML = "Nic nie wpisano!";
    }
};

const removeItem = (item) => {
    item = item.parentElement.parentElement;
    const itemValue = item.firstChild.textContent;

    var decision = confirm("Czy na pewno chcesz usunąć \"" + itemValue + "\"?");
    if (decision) {
        const addInfo = document.getElementById("addInfo");
        app2.fruits = app2.fruits.filter(elem => elem.name.localeCompare(itemValue));
        addInfo.innerHTML = "Element \"" + itemValue + "\" został usunięty!";
    } else {
        addInfo.innerHTML = "Element  \"" + itemValue + "\" nie został usunięty!";
    }
};

const submitFormWithEnterKey = () => {
    var input = document.getElementById("newItemInput");
    input.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("newItemButton").click();
        }
    });
};
submitFormWithEnterKey();

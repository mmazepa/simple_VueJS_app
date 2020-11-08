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
            { name: "Apple" },
            { name: "Pear" },
            { name: "Grapefruit" },
            { name: "Banana" },
            { name: "Strawberry" }
        ]
    }
});

const checkIfContains = (elem, array) => {
    for (var i = 0; i < array.length; i++)
        if (array[i].name.localeCompare(elem, undefined, { sensitivity: "accent" }) === 0)
            return true;
    return false;
};

const firstUppercaseRestLowercase = (fruitName) => {
    return fruitName.charAt(0).toUpperCase() + fruitName.slice(1).toLowerCase();
};

const prepareText = (text) => {
    text = text.trim();
    text = text.replace(/\s{2,}/g, " ");
    text = firstUppercaseRestLowercase(text);
    return text;
};

const addNewItem = () => {
    let newItem = document.getElementById("newItemInput").value;
    const addInfo = document.getElementById("addInfo");
    if (newItem !== null && newItem !== "") {
        newItem = prepareText(newItem);
        if (!checkIfContains(newItem, app2.fruits)) {
            app2.fruits.push({ name: newItem });
            addInfo.innerHTML = "Item \"" + newItem + "\"  have been added successfully!";
        } else {
            addInfo.innerHTML = "This item (\"" + newItem + "\") is already in the database!";
        }
    } else {
        addInfo.innerHTML = "Nothing was entered!";
    }
};

const removeItem = (item) => {
    item = item.parentElement.parentElement;
    const itemValue = item.firstChild.textContent;

    var decision = confirm("Are you sure you want to delete \"" + itemValue + "\"?");
    if (decision) {
        const addInfo = document.getElementById("addInfo");
        app2.fruits = app2.fruits.filter(elem => elem.name.localeCompare(itemValue));
        addInfo.innerHTML = "Item \"" + itemValue + "\" has been deleted successfully!";
    } else {
        addInfo.innerHTML = "Item  \"" + itemValue + "\" has not been deleted!";
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

<!DOCTYPE html>
<html lang="pl-PL">
    <head>
        <meta charset="UTF-8">
        <title>simple VueJS app</title>
        <link rel="stylesheet" type="text/css" href="assets/css/style.css">
        <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    </head>
    <body>
        <div id="pageTitle">
            <h1>{{ title }}</h1>
        </div>
        <div id="mainList">
            <h3>Table of fruits</h3>
            <table>
                <tr>
                    <th>Fruit name</th>
                    <th>Delete</th>
                </tr>
                <tr v-if="fruits.length" v-for="fruit in fruits">
                    <td>
                        <span class="fruit">{{ fruit.name }}</span>
                    </td>
                    <td>
                        <button onClick="removeItem(this)">✗</button>
                    </td>
                </tr>
                <tr v-if="!fruits.length">
                  <td colspan="2">
                    <span>Nie ma żadnych owoców!</span>
                  </td>
                </tr>
            </table>
            <div class="form">
                <input  id="newItemInput"
                        type="text"
                        onkeypress="return /[a-zA-ZąćęłńóśżźĄĆĘŁŃÓŚŻŹ ]/i.test(event.key)" />
                <button id="newItemButton" onClick="addNewItem()">ADD</button>
            </div>
            <p id="addInfo">...</p>
        </div>
    </body>
    <script src="assets/js/script.js"></script>
</html>

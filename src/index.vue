<!DOCTYPE html>
<html lang="pl-PL">
    <head>
        <meta charset="UTF-8">
        <title>simple VueJS app</title>
        <link rel="stylesheet" type="text/css" href="assets/css/style.css">
        <script src="https://cdn.jsdelivr.net/npm/vue"></script>
    </head>
    <body>
        <div id="pageTitle">
            <h1>{{ title }}</h1>
        </div>
        <div id="mainList">
            <h3>Tabela owoców</h3>
            <table>
                <tr>
                    <th>Nazwa</th>
                    <th>Usuń</th>
                </tr>
                <tr v-for="fruit in fruits">
                    <td>
                        <span>{{ fruit.name }}</span>
                    </td>
                    <td>
                        <button onClick="removeItem(this)">✗</button>
                    </td>
                </tr>
            </table>
            <div class="form">
                <input id="newItemInput" type="text" />
                <button onClick="addNewItem()">ADD</button>
            </div>
            <p id="addInfo">...</p>
        </div>
    </body>
    <script src="assets/js/script.js"></script>
</html>

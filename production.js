let product = ["", "", ""];
showAllProduct();

function showAllProduct() {
    let content = "";
    for (let i = 0; i < product.length; i++) {
        content += '        <tr>\n' +

            '            <td>' + product[i] + '</td>\n' +
            '            <td><button onclick="editProduct(' + i + ')">Edit</button></td>\n' +
            '            <td><button onclick="deleteProduct(' + i + ')">Delete</button></td>\n' +
            '        </tr>'
    }
    document.getElementById("list").innerHTML = content;
}

function addNewProduct() {
    let newP = document.getElementById("newProduct").value;
    product.push(newP);
    showAllProduct();
    document.getElementById("newProduct").value = "";
}

function editProduct(index) {
    let newName = prompt("Nhập giá trị :", product[index]);
    product[index] = newName;
    showAllProduct();
}

function deleteProduct(index) {
    let splice = product.splice(index, 1)
    showAllProduct();
}
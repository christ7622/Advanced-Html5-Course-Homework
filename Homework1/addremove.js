/* addremove.js
 * 
 * 
 */

$(document).ready(function() {
    init();
    $("#addButton").click(function() {
        addItem();
    });
    $("#removeButton").click(function() {
        removeItem();
    });
    $("#clearButton").click(function() {
        clearItems();
    });
});

function init() {
    for (key in localStorage) {
        addItemToDOM(key, localStorage[key]);
    }
}

function addItem() {
    var key = $("#key").val();
    var value = $("#value").val();

    if (key) {
        var existItem = $("#items").find('#' + key);
        localStorage.setItem(key, value);
        if (existItem.size() > 0) {
            existItem.replaceWith("<li id='" + key + "'>" + key + ": " + value + "</li>");
        } else
            addItemToDOM(key, value);
    }
}

function addItemToDOM(key, value) {
    var liContent = "<li id='" + key + "'>" + key + ": " + value + "</li>";
    $("#items").append(liContent);
}

function removeItem() {
    var key = document.getElementById("key").value;
    localStorage.removeItem(key);
    removeItemFromDOM(key);
}

function removeItemFromDOM(key) {
    $("#items").find('#' + key).remove();
}


function clearItems() {
    localStorage.clear();
    $("#items").children().remove();
}

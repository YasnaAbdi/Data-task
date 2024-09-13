
//clear table function
$(document).ready(function () {
    $('#resetbtn').on('click', function (e) {
        let $el = $('#infileid');
        $el.wrap('<form>').closest(
            'form').get(0).reset();
        $el.unwrap();
    });
});

//insert row for table
var tbodyRef = document.getElementById('table').getElementsByTagName('tbody')[0];
var newRow = tbodyRef.insertRow();
var newCell = newRow.insertCell();
var newText = document.createTextNode('new row');
newCell.appendChild(newText);

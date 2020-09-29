window.onload = function () {
    document.getElementById('menulink').onclick = function () {
        var menu = document.getElementById('menu');
        if (menu.className != 'shownmenu') {
            menu.className = 'shownmenu';
        }
        else {
            menu.className = 'hiddenmenu';
        }
    }
}
function check_web_storage_support() {
    if (typeof (Storage) !== "undefined") {
        return (true);
    }
    else {
        alert("Web storage unsupported!");
        return (false);
    }
}
function display_saved_note() {
    if (check_web_storage_support() == true) {
        result = localStorage.getItem('note');
    }
    if (result === null) {
        result = "No note saved";
    }
    document.getElementById('area').value = result;
}
function save() {
    if (check_web_storage_support() == true) {
        var area = document.getElementById("area");
        if (area.value != '') {
			alert("Saved text");
			var content = area.value;
            localStorage.setItem("note", area.value);
        }
        else {
            alert("Nothing to save");
        }
    }	
}
	
function clear() {
    document.getElementById('area').value = "";
}
function copy() {
	var id = this.id;
	alert(id);
    //document.getElementById('area').select();
	document.getElementById('area').value = id;
    document.execCommand('copy');
}
//var counter = 0
function make() {
	
	var btn = document.createElement("Button");
	btn.innerHTML = document.getElementById('area').value;
	btn.id = btn.innerHTML.value;
	btn.paddings = "20px 20px 20px 20px";
	btn.addEventListener('click', copy(btn.id));
	notegrid.appendChild(btn);
	//counter += 1;
	
	
	
}
 
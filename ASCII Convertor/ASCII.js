function convert() {
    var str = document.getElementById("id1");
    if (str.value == "") {
        str.focus();
        return;
    }
    var a = "ASCII kód je ==> ";
    document.getElementById("demo").innerHTML = a + str.value.charCodeAt(0);
}
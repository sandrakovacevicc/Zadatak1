function getInputValue(){
    var ime = document.getElementById('ip').value;
    var ljudi = document.getElementById('brljudi');
    var vrednost=ljudi.value;
    var datum = document.querySelector(".datum").value;
    var tekst = document.getElementById('poruka').value;
    var pol = $("input:radio[name=pol_]:checked").val()

    if(ime === "" || datum === "" || pol === undefined){
        alert("Morate da unesete sve obavezne podatke!");
        return;
    }
    else
        if(vrednost < 0){
            alert("Broj ljudi ne sme biti negativan!");
            return;
        }
    if(document.querySelector(".potrebe").value === "")
        tekst = "Ne postoje";

    if(ime.length < 5){
        alert("Ime mora imati najmanje 5 karaktera");
        return;
    }
    var date = $('#datum').val().split("-");
    day = date[2];
    month = date[1];
    year = date[0];

    window.alert('Name : '+ime+'\n Gender : '+pol+'\n People number: ' + vrednost+
    '\n Date : '+day+'-'+month+'-'+year+
    '\n Other wishes : '+tekst
)
}
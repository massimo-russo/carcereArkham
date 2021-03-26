//classe di GUARDIE
class Guardie{
    constructor (idGuardie,nomeGuardia,nascitaGuardia){
    this.idGuardie=idGuardie;
    this.nomeGuardia=nomeGuardia;
    this.nascitaGuardia=nascitaGuardia;
    }
}

//class di CARCERATI
class Carcerati{
    constructor (idCarcerato,dataCarcerazione, dataScarcerazione, crimini ){
    this.idCarcerato=idCarcerato;
    this.dataCarcerazione=dataCarcerazione;
    this.dataScarcerazione=dataScarcerazione;
    this.crimini=crimini;
    }
}




class UI{
    addGuardieToList(guardie){
        //creo gli <th> tramite funzione
        this.createListGuardie = function(valoreLi){
            let li = document.createElement('td');
            li.textContent = valoreLi;
            return li;
        }
        //creo array che contiene i valori guardie
        const itemsGuardie = [
            this.createListGuardie(guardie.idGuardie),
            this.createListGuardie(guardie.nomeGuardia),
            this.createListGuardie(guardie.nascitaGuardia)
        ]
        //aggangio HTML
        this.appendChildren =  function(parent, children){
            if(Array.isArray(children)){
                children.map((child) => {
                    parent.appendChild(child);//<th> <tr></tr></th>
                })
           }else{
               parent.appendChild(children);//<div> <th> <tr> ...
           }
        } 
        // seleziono la parte in cui inserisco HTML
        const listGuardie = document.querySelector('#guardie-lista');
        let riga = document.createElement('tr'); //<th> </th>
        riga.className = "rigaGuardia"
        this.appendChildren(riga,itemsGuardie);//<tr><th></th></tr>
        this.appendChildren(listGuardie, riga); //<div> <tr> <th>
    }
        clearListGuardie(){
            document.getElementById('idGuardie').value ='';
            document.getElementById('nomeGuardia').value = '';
            document.getElementById('nascitaGuardia').value = '';
        }
}
//dobbiamo selezionare e generare un evento per il submit
document.getElementById('form-guardie').addEventListener('submit', addEvento);

//funzione addEvento
function addEvento (e) {
    console.log(e.target)
    const idGuardie = document.getElementById('idGuardie').value;
    const nomeGuardia = document.getElementById('nomeGuardia').value;
    const nascitaGuardia =  document.getElementById('nascitaGuardia').value;
  
    //istanziare l'oggetto Guardie  
    let guardie = new Guardie(idGuardie,nomeGuardia, nascitaGuardia);

    //istanzio UI
    let ui = new UI;
    
    //validazione
     if(idGuardie == '' || nomeGuardia == '' || nascitaGuardia == ''){
        alert('attenzione i campi non possono essere nulli');
        }else{
        ui.addGuardieToList(guardie);
        ui.clearListGuardie();
    e.preventDefault();
    } 
}
    

// // CARCERATI
class UA{
    addCarceratoToList(carcerato){
        //creo gli <th> tramite funzione
        this.createListCarcerati = function(valoreLi){
            let li = document.createElement('td');
            li.textContent = valoreLi;
            return li;
        }
       
        //creo array che contiene i valori carcerati
        const itemsCarcerati = [
            this.createListCarcerati(carcerato.idCarcerato),
            this.createListCarcerati(carcerato.dataCarcerazione),
            this.createListCarcerati(carcerato.dataScarcerazione),
            this.createListCarcerati(carcerato.crimini)
        ]
        
        //aggangio HTML
        this.appendChildren =  function(parent, children){
            if(Array.isArray(children)){
                children.map((child) => {
                    parent.appendChild(child);//<tr> <th></th></tr>
                })
           }else{
               parent.appendChild(children);//<div> <tr> <th> ...
           }
        } 
        // seleziono la parte in cui inserisco HTML
        const listCarcerati = document.querySelector('#criminali-lista');
        let riga = document.createElement('tr'); //<th> </th>
        riga.className = "rigaCarcerati"
        this.appendChildren(riga,itemsCarcerati);//<tr><th></th></tr>
        this.appendChildren(listCarcerati, riga); //<div> <tr> <th>
    }
        clearListCarcerati(){
            document.getElementById('idCarcerato').value ='';
            document.getElementById('dataCarcerazione').value = '';
            document.getElementById('dataScarcerazione').value = '';
            document.getElementById('crimini').value = '';
        }
}
// //dobbiamo selezionare e generare un evento per il submit
document.getElementById('form-carcerati').addEventListener('submit', addEventoC);

// //funzione addEvento
function addEventoC (e) {
    console.log(e.target)
    const idCarcerato = document.getElementById('idCarcerato').value;
    const dataCarcerazione = document.getElementById('dataCarcerazione').value;
    const dataScarcerazione =  document.getElementById('dataScarcerazione').value;
    const crimini =  document.getElementById('crimini').value;

    //istanziare l'oggetto Criminali  
    let carcerati = new Carcerati(idCarcerato,dataCarcerazione, dataScarcerazione, crimini);

    //istanzio UI
    let ua = new UA;
    
   //validazione
     if(idCarcerato == '' || dataCarcerazione == '' || dataScarcerazione == '' || crimini == ''){
        alert('attenzione i campi non possono essere nulli');
        }else{
        ua.addCarceratoToList(carcerati);
        ua.clearListCarcerati();
    e.preventDefault();
    }
}

// filtro ricerca //aggiustare

function filterElement(e){
    const term = e.target.value.idCarcerato;
    const list = document.getElementById('idCarcerato');
    const tasks = list.getElementsByTagName('id-carcerato');
    Array.from(tasks).forEach( task => {
        console.log(term);
        console.log(task);
        let title = task.firstChild.textContent;
        if(title.idCarcerato().indexOf(term) > -1){
            task.style.display = 'block';
        }else{
            task.style.display ='none';
        }
    })
}


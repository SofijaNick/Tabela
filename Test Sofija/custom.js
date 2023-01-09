const table = document.querySelector('#table');
const ime = document.querySelector('#ime');
const prezime = document.querySelector('#prezime');
const pol = document.querySelector('#pol');
const godiste = document.querySelector('#godiste');
const post = document.querySelector('#post');
const tbody = document.querySelector('#tbody');
const imeF = document.querySelector('#imeF');
const prezimeF = document.querySelector('#prezimeF');
const polF = document.querySelector('#polF');
const godisteF = document.querySelector('#godisteF');
const filter = document.querySelector('#filter');
const reset = document.querySelector('#reset');
const godisteDo = document.querySelector('#godisteDo');
pol.value = ''
polF.value = '';

post.addEventListener('click', function(){
    let tr = document.createElement('tr');
    let tdOne = document.createElement('td');
    tdOne.innerHTML = ime.value;
    tr.append(tdOne);
    let tdTwo = document.createElement('td');
    tdTwo.innerHTML = prezime.value;
    tr.append(tdTwo);
    let tdThree = document.createElement('td');
    tdThree.innerHTML = pol.value;
    tr.append(tdThree);
    let tdFour = document.createElement('td');
    tdFour.innerHTML = godiste.value;
    tr.append(tdFour);
    const dlt = document.createElement('button');
    const upd = document.createElement('button');
    const dlts = document.querySelectorAll('.delete');
    const upds = document.querySelectorAll('.update');
    function removeRow(){
        tr.remove(event.target.parentElement);
        sum();
    }
    dlt.onclick = removeRow;
    function update(){
        let answer1 = prompt('ime');
        let answer2 = prompt('prezime');
        let answer3 = prompt('pol');
        let answer4 = prompt('Unesite datum u godina-mesec-dan formatu.')
        let firstTd = event.target.parentElement.firstChild;
        firstTd.innerHTML = answer1;
        firstTd.nextSibling.innerHTML = answer2;
        firstTd.parentElement.childNodes[2].innerHTML = answer3;
        firstTd.parentElement.childNodes[3].innerHTML = answer4;
        console.log(firstTd.parentElement.childNodes[0])
        console.log(firstTd.parentElement.childNodes[1])
        console.log(firstTd.parentElement.childNodes[2])
        console.log(firstTd.parentElement.childNodes[3])

    }
    upd.onclick = update;
    dlt.innerHTML = 'Delete';
    upd.innerHTML = 'Update';
    tr.append(dlt);
    tr.append(upd)
    tbody.append(tr);
    ime.value = '';
    prezime.value = '';
    pol.value = '';
    godiste.value = '';

    sum();
})

function sum(){
    let arrName = [];
    let arrLastname = [];
    let arrGender = [];
    let allTrs = document.querySelectorAll('tr');
    let sumTr = document.createElement('tr');
    let sumImeTd = document.createElement('td');
    let sumPrezimeTd = document.createElement('td');
    let sumPolTd = document.createElement('td');
    sumTr.classList.add('new');

    // Ime Summary
    for(let i = 1; i < allTrs.length; i++){
        if(allTrs[i].classList.contains('new') === false && allTrs[i].style.display !== 'none'){
            let obj = {};
            obj.ime = allTrs[i].children[0].textContent;
            obj.broj = 0;
           
            for(let k = 0; k < allTrs.length; k++){
                if(allTrs[k].children[0].textContent === obj.ime && allTrs[k].style.display !== 'none'){
                    obj.broj++;
                }
            }
            if(arrName.some(o => o.ime === obj.ime)){
            }else{
                arrName.push(obj);
            }
        }else if(allTrs[i].classList.contains('new') === true && allTrs[i].style.display !== 'none'){
            allTrs[i].remove();
        }
        }

        // Prezime Summary
        for(let i = 1; i < allTrs.length; i++){
            if(allTrs[i].classList.contains('new') === false && allTrs[i].style.display !== 'none'){
                let obj = {};
                obj.prezime = allTrs[i].children[1].textContent;
                obj.broj = 0;
               
                for(let k = 0; k < allTrs.length; k++){
                    if(allTrs[k].children[1].textContent === obj.prezime && allTrs[k].style.display !== 'none'){
                        obj.broj++;
                    }
                }
                if(arrLastname.some(o => o.prezime === obj.prezime)){
                }else{
                    arrLastname.push(obj);
                }
            }else if(allTrs[i].classList.contains('new') === true && allTrs[i].style.display !== 'none'){
                allTrs[i].remove();
            }
        }

        // Pol Summary
        for(let i = 1; i < allTrs.length; i++){
            if(allTrs[i].classList.contains('new') === false && allTrs[i].style.display !== 'none'){
                let obj = {};
                obj.pol = allTrs[i].children[2].textContent;
                obj.broj = 0;
                   
                for(let k = 0; k < allTrs.length; k++){
                    if(allTrs[k].children[2].textContent === obj.pol && allTrs[k].style.display !== 'none'){
                        obj.broj++;
                    }
                }
                if(arrGender.some(o => o.pol === obj.pol)){
                }else{
                    arrGender.push(obj);
                }
            }else if(allTrs[i].classList.contains('new') === true && allTrs[i].style.display !== 'none'){
                allTrs[i].remove();
            }
        }

    for(j = 0; j < arrName.length; j++){
        sumImeTd.innerHTML += `${arrName[j].broj}: ${arrName[j].ime} <br>`
    }
    for(j = 0; j < arrLastname.length; j++){
        sumPrezimeTd.innerHTML += `${arrLastname[j].broj}: ${arrLastname[j].prezime} <br>`
    }
    for(j = 0; j < arrGender.length; j++){
        sumPolTd.innerHTML += `${arrGender[j].broj}: ${arrGender[j].pol} <br>`
    }

    sumTr.append(sumImeTd)
    sumTr.append(sumPrezimeTd)
    sumTr.append(sumPolTd)
    sumTr.append(sumPolTd)
    table.append(sumTr)

    return (arrName, arrLastname, arrGender);
    
}


function search(){
    let name = true;
    let lastName = true;
    let gender = true;
    let birthOd = true;
    let birthDo = true;

    let rows = [];

    if(imeF.value){
        rows.push(name);
    }else{
        name = false;
        rows.push(name)
    };
    if(prezimeF.value){
        rows.push(lastName);
    }else{
        lastName = false;
        rows.push(lastName)
    }
    if(polF.value){
        rows.push(gender);
    }else{
        gender = false;
        rows.push(gender)
    };
    if(godisteF.value){
        rows.push(birthOd);
    }else{
        birthOd = false;
        rows.push(birthOd);
    }
    if(godisteDo.value){
        rows.push(birthDo);
    }else{
        birthDo = false;
        rows.push(birthDo);
    }
    return(rows);
}

filter.addEventListener('click', function(){
    sum();
    let rows = search();
    let trs = document.querySelectorAll('tr');
    for(let i = 1; i < trs.length - 1; i++){
        let rowIme = trs[i].getElementsByTagName("td")[0].textContent;
        let rowPrezime = trs[i].getElementsByTagName("td")[1].textContent;
        let rowPol = trs[i].getElementsByTagName("td")[2].textContent;
        let rowGodiste = trs[i].getElementsByTagName("td")[3].textContent;
        if(rows[0]===true){
            if(imeF.value !== rowIme){
                trs[i].style.display = 'none'
            }
        }
        if(rows[1]===true){
            if(prezimeF.value !== rowPrezime){
                trs[i].style.display = 'none'
            }
        }
        if(rows[2]===true){
            if(polF.value !== rowPol){
                trs[i].style.display = 'none'
            }
        }
        if(rows[3]===true){
            if(godisteF.value > rowGodiste){
                trs[i].style.display = 'none';
            }
        }
        if(rows[4] === true){
            if(godisteDo.value < rowGodiste){
                trs[i].style.display = 'none';
            }
        }
    }
    pol.value = '';
    sum();
})

reset.addEventListener('click', function(){
    const trz = document.querySelectorAll('tr');
    for(i = 1; i < trz.length; i++){
        trz[i].style.display = '';
    }
    sum();
})
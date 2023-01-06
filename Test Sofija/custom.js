const table = document.querySelector('#table');
const table2 = document.querySelector('#table2');
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
    let one = document.createElement('td');
    one.innerHTML = ime.value;
    tr.append(one);
    let two = document.createElement('td');
    two.innerHTML = prezime.value;
    tr.append(two);
    let three = document.createElement('td');
    three.innerHTML = pol.value;
    tr.append(three);
    let four = document.createElement('td');
    four.innerHTML = godiste.value;
    tr.append(four);
    const dlt = document.createElement('button');
    const upd = document.createElement('button');
    const dlts = document.querySelectorAll('.delete');
    const upds = document.querySelectorAll('.update');
    function remove(){
        tr.remove(event.target.parentElement);
    }
    dlt.onclick = remove;
    function update(){
        let answer1 = prompt('ime');
        let answer2 = prompt('prezime');
        let answer3 = prompt('pol');
        let answer4 = prompt('godiste')
        console.log(answer1, answer2, answer3, answer4);
        console.log(event.target.parentElement.firstChild);
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

})

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

function brojac(){
    let arrName = [];
    let arrLastname = [];
    let arrGender = [];
    let allTrs = document.querySelectorAll('tr');

    // for(let i = 1; i < allTrs.length; i++){
    //     let rowIme = allTrs[i].getElementsByTagName("td")[0].innerHTML;
    //     let rowPrezime = allTrs[i].getElementsByTagName("td")[1].innerHTML;
    //     let rowPol = allTrs[i].getElementsByTagName("td")[2].innerHTML;
    //     arrName.push(rowIme)
    //     arrLastname.push(rowPrezime)
    //     arrGender.push(rowPol)
    // }
    // console.log(arrName)
    // console.log(arrLastname)
    // console.log(arrGender)
}


filter.addEventListener('click', function(e){
    let rows = search();
    const trs = document.querySelectorAll('tr');
    for(let i = 1; i < trs.length; i++){
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
})

reset.addEventListener('click', function(){
    const trz = document.querySelectorAll('tr');
    for(i = 1; i < trz.length; i++){
        trz[i].style.display = '';
    }
})


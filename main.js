let input=document.querySelector('input[type="text"]');
let submit =document.querySelector('input[type="submit"]');
let table=document.querySelector('.table');
let tableHead=document.querySelector('.table-head')
submit.onclick=()=>{
    if(input.value==''){
        table.innerHTML="no data to show"
    }
    else{
    fetch(`https://api.github.com/users/${input.value}`+'/repos')
    .then(res=>res.json())
    .then(data=>getNameOfRepo(data,input.value))
    .catch(error=>console.log(error))
}
}

function getNameOfRepo(object,repo){
    if(object===[]){
        console.log("object")
    }
   table.innerHTML=""
    table.appendChild(tableHead);
   
    tableHead.classList.remove('hide')

    for(let i=0;i<object.length;++i){
        let tableRow=document.createElement('tr'); //create row
         
        let number=document.createElement('td'); //number of repo
        number.textContent=i+1;
        tableRow.appendChild(number)

        let name=document.createElement('td'); //name of repo
        name.textContent=object[i].name;
        tableRow.appendChild(name);

        let stars=document.createElement('td');//stars of repo
        tableRow.appendChild(stars)
        stars.textContent=object[i].stargazers_count;

        let link=document.createElement('td'); //link of repo
        let a=document.createElement('a');
        a.textContent='link';
        a.target="_blank"
        a.href=`https://github.com/${repo}/${object[i].name}`
        link.appendChild(a);
        tableRow.appendChild(link);
        table.appendChild(tableRow);
       
      
    }
}
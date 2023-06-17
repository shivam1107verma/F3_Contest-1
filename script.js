
// object template
const employee1 = {
    id : 1,
    name : "Aditya",
    profession : "Developer" ,
    Age : 22 ,
}


//--------------------------------------------------------------------------------------------------------------------

let container = document.getElementById("emp-list");
let userList ="" ;
let deleteButtons ="" ;
let empArr = [] ;
let dft = document.getElementById("default");
let message = document.getElementsByClassName("message")[0] ;

let index = 1 ;

  //---------------------------------------------------------------------------------------------------------------------
function fetchData(){
    
    dft.style.display = 'none' ;
    let name = document.getElementById("name") ;
    let profession = document.getElementById("profession") ;
    let age =  document.getElementById("age") ;  
   
    
    if(name.value ==""  || profession.value == "" || age.value == ""){
        
        message.innerText = 'Please Make sure All the fields are filled before adding in an employee !';
        message.style.display = 'block' ;
        message.style.color='red' ;
    }
    else{
        // got all values ;
        message.innerText = 'Employee Added!';
        message.style.display = 'block' ;
        message.style.color='green' ;

        let temp = {
            id : index ++ ,
            name : name.value ,
            profession : profession.value ,
            age : age.value ,
        } ;

       fillArray(temp)
    
    }
}

//----------------------------------------------------------------------------------------------------------------------------
function fillArray(obj){
    empArr.push(obj) ;
    updateList(empArr) ;
}
//----------------------------------------------------------------------------------------------------------------------------
function updateList(arr){
    container.innerHTML = `` ;
    for(let i = 0 ; i < arr.length ; i ++){
            const curr_obj  = arr[i] ;
            // console.log(curr_obj) ;
            let curr = document.createElement("div") ;
            curr.className = 'item' ;
            curr.innerHTML = `
                <p class="id">${curr_obj.id}</p>
                <p  >name : ${curr_obj.name}</p>
                <p>profession : ${curr_obj.profession}</p>
                <p>age : ${curr_obj.age}</p>
                <button onclick="deletebtn()" class="btn" data-id="${curr_obj.id}" >Deletedata</button>
            `
            container.appendChild(curr) ;      
    }
            userList = document.getElementById('emp-list');
            deleteButtons = document.getElementsByClassName('btn');
            update() ;
}
//----------------------------------------------------------------------------------------------------------------------------
function deletebtn(){
        //  console.log(this.parentNode) ;
        //  const userDiv = this.parentNode; 
        //  const userId = userDiv.querySelector('.id').innerText;
        //  console.log(userId) ;
}
//----------------------------------------------------------------------------------------------------------------------------
//Adding event listner on each and evry delete data btn
function update(){
    Array.from(deleteButtons).forEach((button) => {
     button.addEventListener('click', function() {
     console.log(this.parentNode) ;
    const userDiv = this.parentNode;  // items
    const userId = userDiv.querySelector('.id').innerText;
    console.log(userId) ;
    deleteData(userId) ;
  });
});
}



//----------------------------------------------------------------------------------------------------------------------------

function deleteData(userId){
    let id =  userId;
    console.log(id) ;
    // let temp = [] ;
    // for(let  i = 0 ; i < empArr.length ; i++){
    //     let curr_obj = empArr[i] ;
    //     console.log(`${curr_obj.id}=====>${id}`) ;
    //     if(curr_obj.id == id){
    //         console.log("dont push") ;
    //     }
    //     else{
    //         temp.push(curr_obj) ;
    //     }
    // }
   temp = empArr.filter((curr) => {
            return curr.id != userId ;
    })
    console.log(temp) ;
    if(temp.length == 0)  dft.style.display = 'block' ;
    empArr = temp ;
    updateList(empArr) ;
}

//----------------------------------------------------------------------------------------------------------------------------
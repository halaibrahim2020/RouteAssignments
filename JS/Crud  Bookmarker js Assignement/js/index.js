// alert('hello');
var ElmH1 = document.querySelector('h1');
var tableContent = document.getElementById('tableContent')
var submitBtn = document.getElementById('submitBtn')
var bookmarkName = document.getElementById('bookmarkName');
var bookmarkURL = document.getElementById('bookmarkURL');
var updateBookMarkBtn = document.getElementById('updateBookMarkBtn');

var bookMarkNameInput = document.getElementById('bookMarkNameInput');
var bookMarkURLInput = document.getElementById('bookMarkURLInput');

var bookmarkId ;
var allBookMarks;
var searchSiteName = document.getElementById('searchSiteName');


if (localStorage.getItem('BookMarks')!=null){

    allBookMarks = JSON.parse(localStorage.getItem('BookMarks'));
    displayBookMarks(allBookMarks);
    console.log('in local storage not null - allBookMarks ',allBookMarks);
}
else{
    allBookMarks = [];
    console.log('in local storage is null');

}

var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));

console.log('tableContent',tableContent);
console.log('submitBtn',submitBtn);
console.log('ElmH1',ElmH1);
ElmH1.addEventListener('mouseenter',function(){
    console.log('in addEventListener hove')
    moveShadow();
})


function moveShadow(){
    console.log('in moveShadow');
    // ElmH1::before {
    //     content: "";
    //     position: absolute;
    //     width: 100%;
    //     height: 25%;
    //     left: 0;
    //     bottom:10px;
    //     background-color: #fec260;
    //     transition: height 350ms;
    //     z-index: -1;
    // }
}


submitBtn.addEventListener('click',function(){
    addSiteFn();
});

function addSiteFn(){
   console.log('in addSiteFn')
   bookMark= {
    bookmarkName:bookmarkName.value,
    bookmarkURL:bookmarkURL.value,
   };
   allBookMarks.push(bookMark);
   console.log('allBookMarks',allBookMarks);
   localStorage.setItem('BookMarks',JSON.stringify(allBookMarks));
   clearForm();
   displayBookMarks(allBookMarks);
}

function displayBookMarks(allBookMarks){
    console.log('in displayBookMarks  kokoo- allBookMarks ',allBookMarks)
    var cartona = '';
    for(var i=0 ;i<allBookMarks.length;i++ ){
        cartona+=`
        <tr>
            <td>${i+1}</td>
            <td>${allBookMarks[i].bookmarkName}</td>
            <td><a href=${allBookMarks[i].bookmarkURL}></a>${allBookMarks[i].bookmarkName}</td>
            <td> <button class="btn text-danger text-center fs-5" onclick="deleteItem(${i})"  >
                <i class="fa fa-trash"></i>
            </button></td>
            <td>
                <button class="btn" id='editBtn' onclick="showfields(${i})" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <i class="fa fa-edit fs-5 text-warning"></i>
                </button>
            </td>
        </tr>
        `
    }

    tableContent.innerHTML=cartona;

}

function clearForm(){
    bookmarkName.value = null;
    bookmarkURL.value = null;
}

function deleteItem(id){
    console.log('in delete jjjjjjjj - id ',id)
    bookMark = allBookMarks[id];
    console.log('in delete jjjjjjjj - idbookMark to delete  ',bookMark)
    allBookMarks.splice(id,1);
    localStorage.setItem('BookMarks',JSON.stringify(allBookMarks));
    displayBookMarks(allBookMarks);

}

function showfields(id){
    console.log('in showfields  id is = ',id);
    bookmarkId = id;
    bookMarkNameInput.value = allBookMarks[id].bookmarkName;
    bookMarkURLInput.value = allBookMarks[id].bookmarkURL;
    myModal.show();    
}

updateBookMarkBtn.addEventListener('click',function(){
    updateBookMarkFun();
})
function updateBookMarkFun(){
    console.log('in updateBookMarkFun bookmarkId is ',bookmarkId);
    // alert(bookmarkId);
    allBookMarks[bookmarkId]={
        bookmarkName:bookMarkNameInput.value,
        bookmarkURL:bookMarkURLInput.value,
    }
    localStorage.setItem('BookMarks',JSON.stringify(allBookMarks));
    myModal.hide(); 
    displayBookMarks(allBookMarks);
    bookMarkNameInput.value=null;
    bookMarkURLInput.value= null;
}

searchSiteName.addEventListener('input',function(){
    searchSiteNameFn();
})

function searchSiteNameFn(){
    // alert('in searchSiteNameFn');
    term = searchSiteName.value;
    var allReturnedBookMarks = [];
    console.log('in searchSiteNameFn - term ',term);
    for(i=0;i<allBookMarks.length;i++){
        if (allBookMarks[i].bookmarkName.toLowerCase().includes(term.toLowerCase())){
            allReturnedBookMarks.push(allBookMarks[i]);
        }
        
    }
    console.log('allReturnedBookMarks in search websites ',allReturnedBookMarks);
    displayBookMarks(allReturnedBookMarks);


    

}


// ========= validation ===========
// bookmarkName 
// bookmarkURL
bookmarkName.addEventListener('input',function(){
    validation(bookmarkName);
})
bookmarkURL.addEventListener('input',function(){
    validation(bookmarkURL);
})
function validation(term){
    console.log('in validation ',term)
    var regex = {
        bookmarkName:/^[a-z]{3,10}$/,
        bookmarkURL:/^www\.[a-z]{3,8}\.[a-z]{3,5}\.{0,1}[a-z]{0,3}$/
    }
    if(regex[term.id].test(term.value)){
        item = term.id
        console.log('validation okkkkkkkk item',item);
        site = document.getElementById(item)
        site.classList.add('is-valid');
        site.classList.remove('is-invalid');
        site.nextElementSibling.classList.replace('d-block','d-none');
    }
    else{

       
        item = term.id
        console.log('validation nooooooooooo- item',item);
        site = document.getElementById(item)
        site.classList.add('is-invalid');
        site.classList.remove('is-valid');
        site.nextElementSibling.classList.replace('d-none','d-block')
    }

}

// alert('hello');

var productName = document.getElementById('productName');
var productPrice = document.getElementById('productPrice');
var productDesc = document.getElementById('productDesc');
var productCat = document.getElementById('productCat');
var productImage = document.getElementById('productImage');
var updateProductBtn = document.getElementById('updateProduct');
// var allproducts=[];
var allproducts;
var productId ;

var divDisplayProducts = document.getElementById('divDisplayProducts');
var searchProductBtn =  document.getElementById('searchProduct');
console.log('search product byn is ',searchProductBtn);
if (localStorage.getItem('products')!=null){
    allproducts=JSON.parse(localStorage.getItem('products'));
    console.log('allproducts isssssssss before display products',allproducts)
    displayProducts(allproducts)
}
else{
    allproducts=[];
}
   

var btnAddProduct = document.querySelector('#addProduct');

btnAddProduct.addEventListener('click',function(){
    addProduct();
})

updateProductBtn.style.display="none";

updateProductBtn.addEventListener('click',function(){
    updateProductFunction();

})

function addProduct(){
    var product = {
        name:productName.value,
        price:productPrice.value,
        description:productDesc.value,
        category:productCat.value,
        Image:productImage.files[0].name,
       };

    console.log('product',product);
    allproducts.push(product);
    console.log('all products after push',allproducts);
    localStorage.setItem('products',JSON.stringify(allproducts));
  
    displayProducts(allproducts);
    clearForm();
    

}

function displayProducts(allproducts){
    console.log('in display products');
    // allproducts=JSON.parse(localStorage.getItem('allproducts'));
    console.log('in display products - allproducts after get fron localstorage',allproducts);
    var cartona='';
    for (var i=0;i<allproducts.length;i++){
        cartona+=`
            <div class="col-md-3 bg-info text-center">
                <img src="./Images/${allproducts[i].Image}" class="w-50" alt=""/>
                <h2>${allproducts[i].name}</h2>
                <h2>${allproducts[i].price}</h2>    
                <h2>${allproducts[i].description}</h2>
                <h2>${allproducts[i].category}</h2>
                <button class="btn text-danger text-center fs-5 fy-3 my-3" onclick="DeleteProduct(${i})">
                    <i class="fa fa-trash"></i>
                </button>
                <button class="btn" onclick="showuUpdateProduct(${i})">
                    <i class="fa fa-edit fs-5 bg-warning"></i>
                </button>
        
            </div>
        `
    }
    console.log('in dispay product =divDisplayProducts ',divDisplayProducts)
    divDisplayProducts.innerHTML=cartona;
}

function clearForm (){
    console.log('in clearForm');
    productName.value=null;
    productPrice.value=null;
    productDesc.value=null;
    productCat.value=null;
    productImage.value=null;
}

function DeleteProduct(productId){
    console.log('in delete product id is',productId);
    allproducts.splice(productId,1);
    localStorage.setItem('products',JSON.stringify(allproducts));
    displayProducts(allproducts);

}

function showuUpdateProduct(id){
    console.log('in showuUpdateProduct id ',id);
    productId = id;
    var product = allproducts[id];
    console.log('in showuUpdateProduct id update product is ',product);
    productName.value = allproducts[id].name;
    productPrice.value = allproducts[id].price;
    productDesc.value = allproducts[id].description;
    productCat.value = allproducts[id].category;

    updateProductBtn.style.display="block";
    btnAddProduct.style.display="none";
    

    // var product = {
    //     name:productName.value,
    //     price:productPrice.value,
    //     description:productDesc.value,
    //     category:productCat.value,
    //     // Image:productImage.value,
    //    };
    

}

function updateProductFunction(){
    // alert('in updateProductFunction');
    console.log('in updateProductFunction productId',productId);
    
    // var updatedImage = productImage.files.length > 0 ? `Images/${productImage.files[0].name}` : allproducts[productId].Image;
    var updatedImage = productImage.files.length > 0 ? productImage.files[0].name : allproducts[productId].Image;
    allproducts[productId]=
    {
        name:productName.value,
        price:productPrice.value,
        description:productDesc.value,
        category:productCat.value,
        Image:updatedImage,
    };

    localStorage.setItem('products',JSON.stringify(allproducts));
    displayProducts(allproducts);

    btnAddProduct.style.display="block";
    updateProductBtn.style.display="none";
    
}

// ========== Regex ============
// productName.addEventListener('input',function(e){
//     console.log('product name valudation e',e);
//     console.log('product name valudation e.id',e.id);
//     console.log('product name valudation e.value',e.value);
//     validationProduct(e.id,e.value);
// });

function validationProduct(term){
    // console.log('in validationProduct term,id first');
    //     // console.log('in validationProduct term.value',term.value);
    // var productById;
    // var regex = {
    //     productName:/^[A-Z][a-z]{3,6}$/,
    //     productPrice:/^[1-9][0-9][0-9]$/,
    //     productDesc:/^.{3,5}$/,
    //     productCat:/^(TV|Mobile|Sports|Music|Reading)$/,

    // }
    // if (regex[term.id].test(term.value)){
    //     // var product = term.id;

    //     console.log('validationProduct term.id true' ,term.id);
    //     productById = document.getElementById(term.id);
    //     console.log('validationProduct - productById' ,productById);
    //     productById.classList.add('is-valid');
    //     productById.classList.remove('is-invalid');;
    // }
    // else{
    //     productById = document.getElementById(term.id);
    //     console.log('validationProduct not valuede');
    //     productById.classList.add('is-invalid');
    //     productById.classList.remove('is-valid');
    // }

    var regex = {
        productName:/^[A-Z][a-z]{3,8}$/,
        productPrice:/^[1-9][0-9][0-9]$/,
        productDesc:/^.{5}$/,
        productCat:/^(TV|Mobile|Sports|LapTop)$/,
    }
    if (regex[term.id].test(term.value)){
        term.classList.add('is-valid');
        term.classList.remove('is-invalid');
        term.nextElementSibling.classList.replace('d-block','d-none');
    }
    else{
        term.classList.add('is-invalid');
        term.classList.remove('is-valid');
        term.nextElementSibling.classList.replace('d-none','d-block');
    }

}

searchProductBtn.addEventListener('input',function(){
    console.log('in search product xxxxxxxxx');
    // searchProductBtn.value

    term = searchProductBtn.value;
    var allproductsSearch=[];
    for (var i=0;i<allproducts.length;i++){
        if(allproducts[i].name.toLowerCase().includes(term.toLowerCase())){
            allproductsSearch.push(allproducts[i]);
        }

    }
    displayProducts(allproductsSearch);
})


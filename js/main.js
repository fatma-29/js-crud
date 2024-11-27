 var markName = document.getElementById('markName');
 var markUrl = document.getElementById('markUrl');
 var dataTable = document.getElementById('dataTable'); 
 var productList = []
 if(localStorage.getItem("products")){
  productList= JSON.parse(localStorage.getItem('products'));
  disply()
 }

 function addproduct(){
  if(validation(markName)&&validation(markUrl)){
  var pProduct=
  {
  pName : markName.value,
 pUrl : markUrl.value,
  }
  productList.push(pProduct);
  console.log(productList)
  localStorage.setItem('products',JSON.stringify(productList))
  clear()
  disply()
}
 }
 function clear() {
  markName.value = null;
  markUrl.value = null;
 }
 function disply (){
  var box = ''
  for( var i=0 ; i<productList.length ; i++){
  box+=`<tr>
                <th scope="row">${i+1}</th>
                <td>${productList[i].pName }</td>
                <td> <button class="btn btn-outline-success" onclick="addUrl(${productList[i].pUrl})">visit<i class="fa-solid fa-eye"></i></button></td>
                <td><button class="btn btn-outline-danger" onclick="deleteFun (${i})">delete<i class="fa-solid fa-trash"></i></button></td>
              </tr>           `
  }
  dataTable.innerHTML=box
 }
 function addUrl(url){
  window.open(url,"_blank");
 }
 function deleteFun(index){
  productList.splice(index,1)
  localStorage.setItem('products',JSON.stringify(productList))
  disply()
 }
 function validation(input){
  Regex={
    markName:/^[a-z]{3}|[A-Z]{3,}$/,
    markUrl:/(?:http[s]?:\/\/.)?(?:www\.)?[-a-zA-Z0-9@%._\+~#=]{2,256}\.[a-z]{2,6}\b(?:[-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)/gm
  }
  if(Regex[input.id].test(input.value)){
    input.nextElementSibling.classList.replace('d-block','d-none')
    input.classList.add('is-valid')
    input.classList.remove('is-invalid')
    return true;
  }
  else{
    input.nextElementSibling.classList.replace('d-none','d-block')
    input.classList.add('is-invalid')
    input.classList.remove('is-valid')
    return false;
  }
 }
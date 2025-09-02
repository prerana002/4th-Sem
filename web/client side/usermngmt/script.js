/**
* js selector with names
* -document.from_name
* -document.form_name.field_name
*/
let form=document.user_form;
    uname=form.username, //document.user_form.username
    pwd=form.password
    ;  //document.user_form.password
// console.log(form,uname,pwd)

let fieldArr=[uname,pwd]
fieldArr.forEach((item)=>{
    if(item!=undefined){
        //creating element
        let span=document.createElement("span");
        span.classList.add("error");
        //adding to the DOM structure
        item.parentNode.appendChild(span);
    }
});

/*submit event with addEventListner() mehtod of DOM
-form.addEventListener("event",callback-function());
*/
form.addEventListener("submit",function(e){
    // if(uname.value == ''){
    //     e.preventDefault();
    //     uname.nextElementSibling.innerText="*username is required.*";
    // }
    // else uname.nextElementSibling.innerText="";

    // if(pwd.value == ''){
    //     e.preventDefault();
    //     pwd.nextElementSibling.innerText="*username is required.*";
    // }
    // else uname.nextElementSibling.innerText="";

    //use of array and foreach
    fieldArr.forEach((item)=>{
        if(item!=undefined){
        if(item.value==''){
            e.preventDefault();
            item.nextElementSibling.innerText="*This field is required.*";
        }else{
             item.nextElementSibling.innerText="";
        }
        }
    })
});
// aru sabai add garne##########

/*regex official:(regualar expression)
-regex101.document
-regex.com(use)

test method:
-regexValue.test(fieldValue)
-fieldVa;ue.match(regexValue)
*/

let emailRegex=/^[a-z0-9]+(@)[a-z]+\.[a-z}{2,3}$/g;
     uname.addEventListener('keyup',function(){
    //text methods:test(), match()
    if(this.value.match(emailRegex)==null){
        this.nextElementSibling.innerText="e-mail is invalid.";
    }
    else{
        this.nextElementSibling.innerText=""
    }
 });
 //alert haru sikne
 // wondow ra document herne
 //cookie herera aune
 //crud operation ra session
// Author : Stefano Corra https://www.linkedin.com/in/stefanocorra/

// add data into multiselect
function myAdd() {

    var x = document.getElementById("myList");
    var name = document.getElementById("name");
    var lastname = document.getElementById("lastname");
    var phone = document.getElementById("phone");
    var email = document.getElementById("email");

    if (validData(name,lastname,phone,email) === true){

        var option = document.createElement("option");
        var str = name.value.concat(", ",lastname.value,", ",phone.value,", ",email.value);
        option.text = str ;
        name.value="";
        lastname.value="";
        phone.value="";
        email.value="";
        str="";
        x.add(option);
      }

}


// delete records
function myDelete()
{
  var x = document.getElementById('myList');
  var i;
  for (i = x.length - 1; i>=0; i--) {
    if (x.options[i].selected) {
      x.remove(i);
    }
  }
}

//sort by name
function mySortName(){

  var listarray = new Array();

  var x = document.getElementById('myList');

  for(var i = 0; i < x.options.length; i++){
     listarray.push(x.options[i].value);
   }
  listarray.sort();
  console.log(listarray);

  var option = document.createElement("option");

  for(var i = 0; i < listarray.length; i++){
    x.options[i].text = listarray[i];

   }
}
   //sort by name
   function mySortLastName(){

     var listarray = new Array();

     var x = document.getElementById('myList');

      console.log(x.options.text);

     for(var i = 0; i < x.options.length; i++){
        listarray.push(x.options[i].value);
      }
     listarray.sort();
     console.log(listarray);

     var option = document.createElement("option");

     for(var i = 0; i < listarray.length; i++){
       x.options[i].text = listarray[i];
      }
    }

    function validData(name,lastname,phone,email){

      var regex_phone = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
      var regex_name = /^[A-Z][-a-zA-Z]+$/;
      var regex_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


      if (!(name.value.match(regex_name))){
        alert("Please add a valid Name")
        return false;
      }else if(!(lastname.value.match(regex_name))){
        alert ("Please add a valid Lastname")
        return false;
      }else if(!(phone.value.match(regex_phone))){
        alert ("Please add a valid Telephone")
        return false;
      }else if(!(email.value.match(regex_email))){
        alert ("Please add a valid Email")
        return false;
      }else{
        return true;
      }
    }

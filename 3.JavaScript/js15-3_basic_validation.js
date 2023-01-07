function validdata(e,spnid){

    //console.log(e.value)
    if(e.value == "")
    {
        document.getElementById(spnid).style.color="red";
        document.getElementById(spnid).innerHTML="please enter data";
    }
    else
    {
        document.getElementById(spnid).innerHTML="";
    }
}
function namevalid(e,spnid)
{
    // Name regular expression.

    var name=/^[a-zA-Z]+$/
    if(name.test(e.value))
    {
        document.getElementById(spnid).innerHTML="";
    }
    else{
        document.getElementById(spnid).style.color="red";
        document.getElementById(spnid).innerHTML="please enter valid data";
    }
   
}
function emailvalid(e,spnid)
{
    // Email regular expression.
    
    var name=/^[a-zA-Z0-9.'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(name.test(e.value))
    {
        document.getElementById(spnid).innerHTML="";
    }
    else{
        document.getElementById(spnid).style.color="red";
        document.getElementById(spnid).innerHTML="please enter valid data";
    }
   
}
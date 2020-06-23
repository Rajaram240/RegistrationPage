function callName()
{
    var name=document.getElementById('nameinput').value;
    // var requir=document.getElementById('nameinput').required;
    // document.getElementById("nameerror").innerHTML= requir;

    var pattern="[A-Z]{1}[a-zA-Z]+";
            if(name.match(pattern))
            {
                document.getElementById("nameerror").innerHTML= "you have entered "+name;
                document.getElementById("nameerror").style.color="blue";
                return true;
            }
            else{
                document.getElementById("nameerror").innerHTML="please enter char only starting with capital letter";
                document.getElementById("nameerror").style.color="red";
                return false;
            }
        }
        //radio button
        function callgender()
        {
            var gender=document.getElementsByClassName("genderinput");
    var radioValue="";
    for(i=0;i<gender.length;i++)
    {
        if(gender[i].checked){
                  radioValue=gender[i].value;
	
		    document.getElementById("genderror").innerHTML="gender is:"+radioValue;
            document.getElementById("genderror").style.color="brown";
            radioValue=true;
        break;
    } 
	else
	{
	document.getElementById("genderror").innerHTML="please select radio button";
	radioValue=false;}
    }
}
//checkkbox
function callCity()
{var citylive=document.getElementsByClassName("city");
    var disp="";
    for(i=0;i<citylive.length;i++)
    {
        if(citylive[i].checked){
            
        disp=disp+","+citylive[i].value;
        document.getElementById("cityerror").innerHTML="city lived in"+disp;
        document.getElementById("cityerror").style.color="violet";
    }
    
    }
}

function callCars()
{
    var car=document.getElementsByClassName("cars");
    var drop="";
    for(i=0;i<car.length;i++)
    {
        if(car[i].selected)
        {
            drop=drop+","+car[i].value;
            document.getElementById("droperror").innerHTML="cars used"+drop;
            document.getElementById("droperror").style.color="red";
        }
    }
}
//email validation
function callEmail()
{
    var email=document.getElementById('emailinput').value;
    
    var pattern=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if(email.match(pattern))
            {
                document.getElementById("emailerror").innerHTML= "you have entered "+email;
                document.getElementById("emailerror").style.color="blue";
                return true;
            }
            else{
                document.getElementById("emailerror").innerHTML="please enter valid syntax";
                document.getElementById("emailerror").style.color="red";
                return false;
            }
        }
//phone validation
function callPhone()
{
 
    var phone=document.getElementById('phoneinput').value;
    
    var pattern=/^[0-9]{10}/;
            if(phone.match(pattern))
            {
                document.getElementById("phoneerror").innerHTML= "your phone number is "+phone;
                document.getElementById("phoneerror").style.color="blue";
                return true;
            }
            else{
                document.getElementById("phoneerror").innerHTML="please enter valid please enter 10 digit number";
                document.getElementById("phoneerror").style.color="red";
                return false;
            }
        }

        function callPercentage()
        {
            var percent=document.getElementById("percentage").value;
            if(isNaN(percent)||percent<0||percent>100)
            {
                document.getElementById("percentageerror").innerHTML="your travel percenatge is out of range";
                document.getElementById("percentageerror").style.color="red";
                return false;

            }
            else{
                document.getElementById("percentageerror").innerHTML="your travel percenatge is:"+percent;
                return true;
   
            }
        }
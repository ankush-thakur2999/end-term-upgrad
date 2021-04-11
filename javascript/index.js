
  function abc(event){
event.preventDefault();
var country = document.getElementById("country").value;
var dateOne = document.getElementById("dateOne").value;
var dateTwo = document.getElementById("dateTwo").value;




if(country=='' || dateOne=='' || dateTwo=='')
alert("please fill all fields");

else
{
    var url="https://api.covid19api.com/country/"+country+"?from="+dateOne+"T00:00:00Z&to="+dateTwo+"T00:00:00Z";

    fetch(url)
    .then((res) => res.json())
    .then((res) => {
        console.log(res);

        var length=res.length;
        for(var i =0; i<length;i++){
            var div1 = document.createElement("div");
            div1.className="row";
            var div2= document.createElement("div");
            div2.className="col-sm-4";
            var div3= document.createElement("div");
            div3.className="col-sm-5";
            var div4= document.createElement("div");
            div4.className="col-sm-5";
            var div5= document.createElement("div");
            div5.id="main";
            
            var p0 = document.createElement("p");
            var p1 = document.createElement("p");
            var p2 = document.createElement("p");
            var p3 = document.createElement("p");
            var p4= document.createElement("p");
            p0.innerText="Country:";
            p1.innerText="Confirmed Cases:";
            p2.innerText="Active Cases:";
            p3.innerText="Death Cases: ";
            p4.innerText="Date:";
            var span0 = document.createElement("span");
            span0.id="country"+i;
            p0.appendChild(span0);
            var span1 = document.createElement("span");
            span1.id="confirmed"+i;
            p1.appendChild(span1);
            var span2 = document.createElement("span");
            span2.id="active"+i;
            p2.appendChild(span2);
            var span3 = document.createElement("span");
            span3.id="deaths"+i;
            p3.appendChild(span3);
            var span4 = document.createElement("span");
            span4.id="date"+i;
            p4.appendChild(span4);
            div5.appendChild(p0);
            div5.appendChild(p1);
            div5.appendChild(p2);
            div5.appendChild(p3);
            div5.appendChild(p4);
            div3.appendChild(div5);
            div1.appendChild(div2);
            div1.appendChild(div3);
            div1.appendChild(div4);
            document.getElementById("abcdef").append(div1);
         var a = res[i].Country ;  
        var b=res[i].Confirmed;
        var c=res[i].Active;
        var d=res[i].Deaths; 
        var e = res[i].Date;
        var f =e.slice(0,10);
        console.log(typeof(e));

            var country = document.getElementById("country"+i);
            var confirmed=document.getElementById("confirmed"+i);
            var active=document.getElementById("active"+i);
             var deaths=document.getElementById("deaths"+i);
             var date=document.getElementById("date"+i);
             country.innerHTML=a;
             confirmed.innerHTML=b;
             active.innerHTML=c;
             deaths.innerHTML=d;
             date.innerHTML=f;
             
        }
        
        
    })
}
}




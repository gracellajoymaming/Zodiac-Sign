function zodiac(){
  var bMonth = document.getElementById("month").value;
   var bDay = document.getElementById("day").value;
 var zSign = "not available. Enter your bithdate first!";


if (bMonth == 1&& bDay >= 20 || bMonth == 2 && bDay <= 18
    ){
        zSign = ("Aquarius");
		document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-aquarius.png'width=20%>";
    }

    if (bMonth == 2&& bDay >= 19 || bMonth == 3&& bDay <= 20){
       zSign = ("Pisces");
       document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-pisces.png'width=20%>";
      
    }
   if (bMonth == 3&& bDay >= 21 || bMonth == 4 && bDay <= 19){
      zSign = ("Aries");
      document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-aries.png'width=20%>";
    
   }
  
    if (bMonth == 4&& bDay >= 20|| bMonth == 5 && bDay <= 20){
       zSign = ("Taurus");
       document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-taurus.png'width=20%>";
       
    }
  
    if (bMonth == 5&& bDay >= 21 || bMonth == 6 && bDay <= 20
     ){
       zSign = ("Gemini");
       document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-gemini.png'width=20%>";
      
    }
  
    if (bMonth == 6&& bDay >= 21 || bMonth == 7&& bDay <= 22){
        zSign = ("Cancer");
       document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-cancer.png'width=20%>";
     
    }
    if (bMonth == 7&& bDay >= 23 || bMonth == 8 && bDay <= 22){
       zSign = ("Leo");
       document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-leo.png'width=20%>";
         
    }
    if (bMonth == 8 && bDay >= 23 || bMonth == 9 && bDay <= 22){
        zSign = ("Virgo");
       document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-virgo.png'width=20%>";
 
    }
    if (bMonth == 9&& bDay >= 23 || bMonth == 10&& bDay <= 22){
      zSign = ("Libra");
       document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-libra.png'width=20%>";
       
    }
    if (bMonth == 10 && bDay >= 23|| bMonth == 11 && bDay <= 21){
      zSign = ("Scorpio");
       document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-scorpio.png'width=20%>";
        
    }
    if (bMonth == 11 && bDay >= 22 || bMonth == 12 && bDay <= 21){
       zSign = ("Sagittarius");
       document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-sagittarius.png'width=20%>";
    
    }
  
  if(bMonth == 12 && bDay >= 22 || bMonth == 1 && bDay <= 19){
 
       zSign = ("Capricorn");
     document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-capricorn.png'width=20%>";
     
    }else if (bMonth>12||bDay>31){
       alert("Please enter an accurate date ! ");
    }
 document.getElementById("output").innerHTML= zSign;
}
  
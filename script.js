const zodiac=document.getElementById("zodiac");

const colorGenerator=()=>{

    switch(zodiac.value){

        
        case "aries":
            document.body.style.backgroundColor="#f50505";
            break; 
            
            case "taurus":
                document.body.style.backgroundColor="#bafc03";
                break; 
                
            case "gemini":
                document.body.style.backgroundColor="#fceb03";
                break; 
            
            case "cancer":
                document.body.style.backgroundColor="#f58d05";
                break;             
            
            case "leo":
                document.body.style.backgroundColor="#FFA500";
                break; 
                
            case "virgo":
                document.body.style.backgroundColor="#8B4513";
                break; 
            
            case "libra":
                document.body.style.backgroundColor="#FFC0CB";
                break;

            case "scorpio":
                document.body.style.backgroundColor="#A020F0";
                break;
                    
            case "capricorn":
                document.body.style.backgroundColor="#808080";
                break;       
                
            case "pisces":
                document.body.style.backgroundColor="#00FFFF";
                break;    
    }
};
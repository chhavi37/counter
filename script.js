
        const decbtn = document.getElementById("dec");
        const incbtn = document.getElementById("inc");
        const resetbtn = document.getElementById("reset");
        const countlabel = document.getElementById("labelid");
        let count =0;
        incbtn.onclick=function(){
            count++;
            countlabel.textContent=count;
        }
        decbtn.onclick=function(){
            count--;
            countlabel.textContent=count;
        }
        resetbtn.onclick=function(){
            count=0;
            countlabel.textContent=count;
        }
  

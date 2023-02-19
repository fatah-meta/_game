// javascript code goes here
for(let i=1;i<=81;i++){
    let div= document.createElement('div');
    div.id= `${i}`;
    div.classList.add('cells');
    let container=document.getElementById('container-grid');
    container.appendChild(div);
}
let allCells=document.querySelectorAll('div[class="cells"]');

const bombs= new Set();
    while(true){
        if(bombs.size==10){
            break;
        }
        let bomb_div=Math.floor(Math.random()*(81-1)+1);
        if(bombs.size<10){
            bombs.add(bomb_div);
        }
        
    }
    const bomb=[];
    for(const b of bombs){
        bomb.push(b);
    }
    console.log(bomb);
    let score=0;
    let isValid=true;
    let points= new Set();
    for(const cell of allCells){
        cell.addEventListener('click', (e)=>{
        if(!isValid){
            return;
        }
        let step=e.target;
        let val=parseInt(step.id);
        if(!points.has(val) && !bombs.has(val)){
            points.add(val);
            score++;
            document.getElementById('gameScore').textContent=score;
            if(score==71){
            document.getElementById('resultDisplay').textContent="Congratulations You Win";
            return;
            }
        }
        if(bombs.has(val)==true){
            for(let ele of bombs){
                document.getElementById(`${ele}`).style.backgroundImage='url(https://img.icons8.com/emoji/48/000000/bomb-emoji.png)';
                document.getElementById(`${ele}`).style.backgroundColor="red";
                document.getElementById('resultDisplay').textContent="Game Over!";
                document.getElementById('happy').style.display="none";
                document.getElementById('sad').style.display="inline";
                isValid= false;
            }
        }
        else{
            e.target.style.backgroundColor="green";
        }
    });
}
function restart(){
    window.location.reload();
    return false;
}
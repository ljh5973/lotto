
$(document).ready(function(){

    let ranCon=document.querySelector(".ran_num_con");
    let numList=document.querySelector(".num_list");
    let check=document.querySelector(".check");
    let add=document.querySelector(".add");
    let addList=document.querySelector(".addlist");
    let fiveadd=document.querySelector(".fiveadd");

  
    let total;
    
    check.addEventListener("click", function(){   
      total=resultNum(numList,lottoNum());
        

    })
    
   
    
    
    interval(ranCon);
    
    
    
    
    add.addEventListener("click", function(){

        let newList=createList(total.length, total);

        addList.appendChild(newList);
        total=[];

        
    })
    fiveadd.addEventListener("click",function(){

        for(let i=1; i<=5; i++){

            total=resultNum(numList,lottoNum());
            let newList=createList(total.length, total);
    
            addList.appendChild(newList);
            total=[];
        }
    } )
    
    
})

// 중앙 번호 변화
function interval(ranCon){
    const interval=setInterval(function(){
        ranCon.innerHTML= getRandom();
        
    }, 500)

}

// 버블정렬 번호 정렬하기
function bubbleSort(arr){
    for(let i =0; i< arr.length -1; i++){
        for(let j =0; j<arr.length-i; j++){
            if(arr[j+1]<arr[j]){
                let temp= arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return arr;
}

// 랜덤번호
function getRandom() {
    return Math.floor(Math.random()*45) +1;
}

// 로또번호 6자리
function lottoNum(){
    let lotto=[];
    
    for(let i =0; i<6; ){
        ranNum=Math.floor(Math.random()*45)+1;
        if(sameNum(ranNum)){
            lotto.push(ranNum);
            i++;
        }
    }
    // 중복제거
    function sameNum(n){
        for(let i =0;i<6; i++ ){
            if(lotto[i]===n){
                return false;
            } 
        }
        return true;
    }

  
    
    return bubbleSort(lotto);
}

// 리스트 색변화
function resultNum(numList,lottoNum){

    for(let i=0; i<6; i++){
        
        if(lottoNum[i]>0&&lottoNum[i]<11){
            numList.children[i].style.backgroundColor="rgb(251, 196, 0)";
        }else if(lottoNum[i]>10&&lottoNum[i]<21){
            numList.children[i].style.backgroundColor="rgb(105, 200, 242)";
        }else if(lottoNum[i]>20&&lottoNum[i]<31){
            numList.children[i].style.backgroundColor="rgb(255, 114, 114)";
        }else if(lottoNum[i]>30&&lottoNum[i]<41){
            numList.children[i].style.backgroundColor="rgb(170, 170, 170)";
        }else{
            numList.children[i].style.backgroundColor="rgb(176, 216, 64)";
        }
        numList.children[i].innerHTML=lottoNum[i];

    }
    return lottoNum;
}

// 리스트 생성
function createList(n, lottoNum){

    let ul;
    if(n!=0){
        ul=document.createElement("ul");
        
    
        let i=0;
        while(i<lottoNum.length){
            let li= document.createElement("li");
            li.innerHTML=lottoNum[i];
            ul.appendChild(li);
            i++;
        }
        for(let i=0; i<6; i++){
        
            if(lottoNum[i]>0&&lottoNum[i]<11){
                ul.children[i].style.backgroundColor="rgb(251, 196, 0)";
            }else if(lottoNum[i]>10&&lottoNum[i]<21){
                ul.children[i].style.backgroundColor="rgb(105, 200, 242)";
            }else if(lottoNum[i]>20&&lottoNum[i]<31){
                ul.children[i].style.backgroundColor="rgb(255, 114, 114)";
            }else if(lottoNum[i]>30&&lottoNum[i]<41){
                ul.children[i].style.backgroundColor="rgb(170, 170, 170)";
            }else{
                ul.children[i].style.backgroundColor="rgb(176, 216, 64)";
            }
            ul.children[i].innerHTML=lottoNum[i];
    
        }
        
    }
    return ul;
}


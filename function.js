let userScore=0;
let botScore=0;


const choices = document.querySelectorAll(".choice") 
const msg = document.querySelector("#msg")
const scorebot=document.querySelector("#botscore")
const scoreuser=document.querySelector("#userscore")

const showwinner=(userwin,userChose,botchose)=>{
   if(userwin){
   msg.innerText=`you:-"${userChose}"  bots:-"${botchose}" you win`
   msg.style.backgroundColor="green"
   scoreuser.innerText=userScore++
   }else{
      msg.innerText=`bot:-"${botchose}" you:-"${userChose}"  you lose`
      msg.style.backgroundColor="red"
      scorebot.innerText=botScore++
   }
}

const draw=()=>{
   msg.innerText="match is draw";
   msg.style.backgroundColor="gray"
}

const botGen=()=>{
   const options=["rock","paper","sissor"]
   const random= Math.floor(Math.random()*3)
   return options[random]
}

const playgame=(userChose)=>{
   console.log("user choice=",userChose)
   const botchose=botGen()
   console.log("bot choice=",botchose)
   if(userChose===botchose){
      draw();
   }else{
      let userwin = true;
      if(userChose==="rock"){
         userwin=botchose==="paper"? false : true
      }else if(userChose==="paper"){
         userwin=botchose==="sissor"? false : true
      }else{
         userwin=botchose==="rock" ? false : true
      }
      showwinner(userwin,userChose,botchose)
   }
}

choices.forEach((choice)=>{
   choice.addEventListener("click", ()=>{
      const userChose= choice.getAttribute("id")
      playgame(userChose)
   })
})

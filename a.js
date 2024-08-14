const next = document.querySelector("#next-button");
const popupResponse = document.querySelector("#pop-up");
const popupDiv = document.querySelector(".pop-up-wrapper");
const bgWrapper = document.querySelector(".bg-wrapper");
const cubes = document.querySelectorAll(".cubes");

const spriteResponse = ['the the spirits of darkness are near. can you feel them?', 'Hardly a day passes by in the city of spells where one doesnt come across creatures of the night', 'can you help us put an end to this hell on earth?', 'find as many spirits as you can and help me save my home'];

const gameEndResponse = ['congratulations! you have saved my home from destruction.For this i shall reward you'];

let click = 0, track = 0;

next.addEventListener("click", sResponse);
bgWrapper.addEventListener("click", validate);


function sResponse()
{
  click++;
  popupResponse.innerHTML = spriteResponse[click];
  if(click == 4)
    {
      popupDiv.style.display = "none";
      console.log(cubes.length)
      for(i=0; i<cubes.length; i++)
        {
      cubes[i].style.display = "flex";
        }
    }
}

function validate(event)
{
  //track how many time correct elem is selected
  if(event.target.id != "spirit-sprites")
    {
      alert("wrong");
    } else {
      track++;
       event.target.style.background = "var(--green)"
      if(track == 4)
        {
          endGame();
        }
    }
}

function endGame()
{
  let click = 0;
  popupDiv.style.display = "flex";
  popupResponse.innerHTML = gameEndResponse;
  next.innerHTML = "claim reward";
  next.addEventListener("click", function(){
    popupResponse.innerHTML = "💎 x4";
    next.innerHTML = "game ended";
  })
}

 



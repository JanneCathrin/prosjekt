function updateViewForside(){
    let html = `

    
    
    <div class="bg-img">
    <div class="container">
      <div class="topnav">
        <a href="#home">RIOT GAMES ''LOGO'' ▼</a>
        <a href="#game"> GAME </a>
        <a href="#who"> NEWS▼</a>
        <a href="#Work">PATCH NOTES ▼ </a>
        <a href="#News"> DISCOVER ▼ </a>
        <a href="#who"> ESPORTS ▼ </a>
        <a href="#who"> UNIVERSE ▼ </a>
        <a href="#who"> MERCH ▼ </a>
        <a href="#who"> SUPPORT ▼</a>
        
        
      </div>
    </div>
  </div>

  <div class="main">

  <img class="mainbilde" src="/bilder/giphy(7).gif"/>


    </div>



  
  
    
    `;


    document.getElementById('app').innerHTML = html;
}
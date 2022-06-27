export const MainPage = () =>{
    return(
      <div> 
    <div className="d-flex p-5 mx-auto flex-column">
        <div className="header ">
       <h1 className="display-1">Rod Lessa</h1>
       <h4 className="display-5">Desenvolvedor Front-End<span className="blink">.</span><span className="blink2">.</span><span className="blink3">.</span></h4>
        </div>
     </div>
     <div>
        </div>
  <div className="cont-1 p-5 center-content">
       <div className="container">
       <div className="row">
         <div className="col ">
           <img src="https://miro.medium.com/max/1400/1*RAqzCGUoC13Y7EeE04HZxA.png" alt="" className="img-thumbnail" width="500px"/>
         </div>
         <div className="col p-5 rounded bg-alt">
           Desenvolvedor Front-End
           <p className="">Formado em Jogos Digitais, apaixonado por desenvolvimento Web e tecnologia.</p>
           <p>Utilizando as tecnologias mais atuais para seu negocio, HTML5, SASS, JavaScript, React.</p>
         </div>
       </div>
       </div>
     </div>
     <div class="cont-2 p-5 center-content">
        <div class="container">
            <div class="row">
                <div class="col p-5 text-light rounded bg-dark ">
                    Focando em desenvolver o visual da sua marca para seu cliente. De modo profissional e atualizado com as tecnologias atuais.
                  </div>
              <div class="col">
                <img src="https://www.datocms-assets.com/14946/1590690690-front-end.jpg" alt="" class="img-thumbnail" width="500px" />
              </div>         
            </div>
            </div>
          </div>
      </div>
    );
}
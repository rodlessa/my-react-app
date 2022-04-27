import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


function Portfolio(){
  return (
    <div className="container bg-portfolio rounded-3">
       <div className="m-2 p-5 text-black bg-branco rounded-3 shadow ">
        <h1>NG+ Roleplay Classes Database</h1>
          <h3>Ferramenta criada com React, MongoDB Atalas e hospedado com AWS</h3>
          <p> Ferramenta colaborativa para roleplay de classes do jogo Elden Ring</p>
          <Box textAlign='center'>
          <Button variant="contained"><a href="http://ngpclasses.rodlessa.tech/" className="link-light">Acessar</a></Button>   
          </Box>
        </div>
      <div className="row align-items-md-stretch">
     

      <div className="m-2"></div>
      <div className="col-md-6">
        <div className="m-1 p-5 text-white bg-preto rounded-3 shadow">
          <p>React.</p>
          <p>Framework com foco em interface de usuario. Utilizado nas maiores plataformas como Netflix, Imgur, Airbnb, etc.</p>
        </div>
      </div>
      <div className="col-md-6">
        <div className="m-1 p-5 text-black bg-branco rounded-3 shadow ">
          <p>NodeJS</p>
          <p>Ferramenta utilizda pare execução de codigo Javascript fora de um navegador.</p>
        </div>
      </div>
      <div className="col-md-6">
        <div className="m-1  p-5 text-white bg-preto rounded-3 shadow ">
          <p>React Native</p>
          <p>Voltado para App em Android e iOS.</p>
        </div>
      </div>
      <div className="col-md-6">
        <div className="m-1 p-5 text-black bg-branco rounded-3 shadow ">
          <p>Bootstrap</p>
          <p>Framework mais popular voltado para front-end</p>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Portfolio;

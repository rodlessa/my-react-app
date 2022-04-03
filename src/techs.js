import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function techs(){
  return(
    <div id="techs" class="container">
    <ul class="list-group list-group-horizontal m-5">
    <li class="w-50 text-center"><Button href="https://pt-br.reactjs.org/" variant="text m-3 shadow">REACT</Button></li>
    <li class="w-50 text-center"><Button href="https://getbootstrap.com/" variant="text m-3 shadow">Bootstrap</Button></li>
    <li class="w-50 text-center"><Button href="https://mui.com/pt/" variant="text m-3 shadow">MUI</Button></li>
    <li class="w-50 text-center"><Button href="https://nodejs.org/en/" variant="text m-3 shadow">NodeJS</Button></li>
    </ul>
    </div>

  )
}
export default techs;

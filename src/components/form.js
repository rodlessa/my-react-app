export const Contato = () => {
    return(
        <div class="cont-3 p-5 center-content">
        <div class="container">
            Contato:
            <form>
                <div class="mb-3">
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="seu@email.com"/>
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Assunto</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                  </div>
                
              <button type="submit" class="btn btn-primary content-center">Submit</button>
              </form>
        </div>
        </div>
    );
}
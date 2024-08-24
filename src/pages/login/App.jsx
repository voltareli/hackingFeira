import './App.scss';
import './global.scss';

function App() {
  return (
    <div className="App">
        <div className='interativo'>

          <div className='quadradoUm'>

            <img className='instagramEscrita' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png" alt="" />
            
            <div className='campos'>
              <input type="text" />
              <input type="text" />
            </div>

            <button className='entrar'>Entrar</button>
            <div className='face'>
              <a href="#"><img src="https://seeklogo.com/images/F/facebook-icon-logo-C61047A9E7-seeklogo.com.png" alt=""/> Entrar com o Facebook</a>
            </div>
            <a href="#">Esqueceu a senha?</a>
          </div>

          <div className='quadradoDois'>
            <p>Não tem uma conta?</p><a href="#">Cadastre-se</a>
          </div>

          <div className='obter'>
          <p>Obtenha o aplicativo.</p>
          <div className='baixar'>
            <button className='play'><img src="https://static.cdninstagram.com/rsrc.php/v3/y_/r/tUzYKZ-xrQK.png" alt="" /></button>
            <button className='micro'><img src="https://static.cdninstagram.com/rsrc.php/v3/yE/r/QQnPXT5YsC4.png" alt="" /></button>
          </div>
          </div>
      </div>
      <footer>
          <div className='rodape'>
          <nav>
            <a href="">Meta</a>
            <a href="">Sobre</a>
            <a href="">Blog</a>
            <a href="">Carreiras</a>
            <a href="">Ajuda</a>
            <a href="">API</a>
            <a href="">Privacidade</a>
            <a href="">Termos</a>
            <a href="">Localizações</a>
            <a href="">Instagram Lite</a>
            <a href="">Threads</a>
            <a href="">Carregamento de contatos e não usuários</a>
            <a href="">Meta Verified</a>
          </nav>
          <div className='final'>
            <p>Português (Brasil)</p>
            <p>© 2024 Instagram from Meta</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

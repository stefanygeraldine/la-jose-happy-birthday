import foto from './assets/foto.jpg'
const Modal = ({setShowModal})=>{
  return(
    <div class="modal">
    <div class="modal__content">
    <div class="modal__wrapper">
    <div class="modal__wrapper--title">


  <h3 style={{textAlign: 'center'}}>Feliz cumpleaños Jose</h3>
</div>
  <div class="modal__wrapper--body">
    <img src={foto} alt="foto" className="foto"/>
    <p>
      Gracias por ser una persona tan especial. Cuando te conocí no podía entender por qué eras tan genial conmigo
      sin siquiera conocerme, pero al poco tiempo de tratar contigo pude darme cuenta de eras una persona especial,
      llena de amor y de buenas vibras y que no te estabas esforzando por agradarme, simplemente eras tú,
      con tu forma única de ser. Y me sentí muy afortunada de haberte conocido y de tener el gran privilegio de que
      me llamaras "Amiga". Perdón por estos días de ausencia.
      Te quiero mucho. Y espero que hayas tenido un día maravilloso.

    </p>
    <button
      className="button"
      onClick={() => setShowModal(false)}
    >
      Close
    </button>
  </div>
  <div class="modal__wrapper--footer">

</div>
</div>
</div>
</div>
  )
}

export default Modal
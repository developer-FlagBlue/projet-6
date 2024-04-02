import { keyDownHandler } from "../../services/utils/keyDown.js";
import { _formModal } from "./_formModal.js";
import { _mainSection } from "./_photographerMain.js";


const photographer_Html = ` <header>
<img src="assets/images/logo.png" class="logo" alt="Fisheye Home page" />
</header>
<main id="main">

<div class="photograph-header" id="profile">
  <!-- template photographer.js -- (change name to index.js) -->
  <button class="contact_button">Contactez-moi</button>
  <!-- onclick="displayModal()" -->
</div>
<section id="menu">

</section>
<section id="gallery">

</section>
</main>
<!-- contact_modal -->
<div id="contact_modal" aria-describedby="contact me">
<div class="modal">
  <header>
    <h2>Contactez-moi
    </h2>
    <!-- onclick="closeModal()" -->
    <img src="assets/icons/close.svg" class="closeModal" role="button" aria-label="Close Contact form " />
  </header>
  <!-- form -->
  <form id="contact me">
    <div>
      <label for="firstName">Prénom</label>
      <input type="text" name="Prénom" id="firstName" aria-label="First name">
      <label for="name">nom</label>
      <input type="text" name="nom" id="name" aria-label="Last name">
      <label for="email">email</label>
      <input type="email" name="email" id="email" aria-label="Email">
      <label for="message">votre message</label>
      <textarea name="message" id="message" cols="30" rows="10" aria-label="Your message"></textarea>
    </div>
    <button class="contact_button" aria-label="Send">Envoyer</button>
  </form>
</div>
</div>
<!-- lightbox -->
<div class="lightbox">
</div>

<script type="module" src="/scripts/pages/controllers/photographes/photographe.js" type="module"></script>

`;

export const pageBuilder = (MediasData, phData) => {
  //charge structure of page
  const $root_app = document.querySelector('#root');
  const $title_page = document.querySelector('#title');
  $root_app.innerHTML = photographer_Html;
  $title_page.textContent = 'Fisheye - photographe'


  //page part main
  _mainSection(MediasData, phData)

  _formModal();

  // bind event  keydown global
  document.addEventListener("keydown", keyDownHandler);
};


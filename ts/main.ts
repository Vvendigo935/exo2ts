import { Contact, calculateAge } from "./Contact.js";
import { Annuaire } from "./Annuaire.js";

const listEl = document.getElementById("contact-list")!;
const annuaire = new Annuaire(listEl, renderDetails);

const formEl = document.getElementById("add-form") as HTMLFormElement;

formEl.addEventListener("submit", e => {
  e.preventDefault();
  const data = new FormData(formEl);
  const contact: Contact = {
    id: Date.now().toString(),
    firstname: data.get("firstname") as string,
    lastname: data.get("lastname") as string,
    dateOfBirth: data.get("dob") as string,
    email: data.get("email") as string,
    phone: data.get("phone") as string,
    
  };
  annuaire.add(contact);
  formEl.reset();
  (document.querySelector("#addModal .btn-close") as HTMLElement).click(); // ferme la modale
});

function renderDetails(contact: Contact | null) {
  if (!contact) return;

  (document.getElementById("detail-firstname") as HTMLInputElement).value = contact.firstname;
  (document.getElementById("detail-lastname") as HTMLInputElement).value = contact.lastname;
  (document.getElementById("detail-dob") as HTMLInputElement).value = contact.dateOfBirth;
  (document.getElementById("detail-email") as HTMLInputElement).value = contact.email;
  (document.getElementById("detail-phone") as HTMLInputElement).value = contact.phone;
  (document.getElementById("detail-age") as HTMLElement).textContent = `${calculateAge(contact.dateOfBirth)}yo`;
  
}

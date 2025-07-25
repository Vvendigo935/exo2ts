import { Contact } from "./Contact.js";

export class Annuaire {
  private contacts: Contact[] = [];
  private selectedId: string | null = null;

  constructor(
    private listEl: HTMLElement,
    private detailCallback: (contact: Contact | null) => void
  ) {}

  add(contact: Contact) {
    this.contacts.push(contact);
    this.renderList();
  }

  select(id: string) {
    this.selectedId = id;
    const contact = this.contacts.find(c => c.id === id) || null;
    this.detailCallback(contact);
    this.renderList();
  }

  getSelected(): Contact | null {
    return this.contacts.find(c => c.id === this.selectedId) || null;
  }

  renderList() {
    this.listEl.innerHTML = "";
    this.contacts.forEach(c => {
      const btn = document.createElement("button");
      btn.className = `btn btn-sm ${this.selectedId === c.id ? "btn-light" : "btn-outline-light"} mb-1`;
      btn.textContent = `${c.firstname} ${c.lastname.toUpperCase()}`;
      btn.onclick = () => this.select(c.id);
      this.listEl.appendChild(btn);
    });
  }
}

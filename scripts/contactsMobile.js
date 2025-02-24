/**
 * Displays the contact information on mobile devices.
 * This function loads the contact information and displays it in the mobile view.
 * @param {number} contactId - The ID of the contact whose information is to be displayed.
 */
async function displayContactInfoMobile(contactId) {
  let infoDiv = document.getElementById("mobile_contact_info");
  infoDiv.classList.remove("d-none");
  infoDiv.classList.add("pos-abs");
  let contact = await getContact(contactId);
  let contactInfoDiv = document.querySelector(".mobile-contacts-info-box");
  let contactInfoButtons = document.getElementById("button_edit_dialog");
  contactInfoDiv.innerHTML = generateContactInfo(contact);
  if (contact.id === 0) {
    document
      .getElementById("for_active_user")
      .classList.add("letter-circel-user");
    document.getElementById("user_delete_display_info").classList.add("d-none");
  }
  contactInfoButtons.innerHTML = generateButtonsInContactInfo(contact);
  mobileEditContact();
  let menu = document.getElementById("mobile_menu");
  menu.innerHTML = generateMobileMenu(contact);
  if (contact.id === 0) {
    document.getElementById("user_delete_mobile").classList.add("d-none");
  }
}

/**
 * Hides the edit button in the mobile view.
 * This function disables the edit button in the mobile contact view.
 */
function mobileEditContact() {
  let contactMobileButton = document.querySelector(".contact-box-edit-delete");
  contactMobileButton.classList.add("d-none");
}

/**
 * Opens the mobile menu for a contact.
 * This function displays the menu and allows closing it by clicking outside the menu.
 */
function openMobileMenu() {
  let menu = document.getElementById("mobile_menu");
  menu.classList.add("d-flex");
  menu.classList.remove("d-none");
  let handleClickOutside = (event) => {
    if (!menu.contains(event.target)) {
      menu.classList.remove("d-flex");
      menu.classList.add("d-none");
      document.removeEventListener("click", handleClickOutside);
    }
  };
  setTimeout(() => {
    document.addEventListener("click", handleClickOutside);
  }, 0);
}

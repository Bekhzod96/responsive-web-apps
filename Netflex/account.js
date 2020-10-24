function cancelSubscription() {
  const modalHeader = document.querySelector(".modal-header");
  const modalBody = document.querySelector(".modal-body");
  const modalFooter = document.querySelector(".modal-footer");
  const yesButton = document.querySelector("#cancel-button");
  const noButton = document.querySelector("#close-button");

  modalHeader.remove();
  noButton.remove();
  yesButton.remove();
  modalBody.innerText =
    "You cant do that, we are Netflix the almighty. Rejected.";
}

let elemScroll = document.querySelector(".scroll");
let elemContainer = elemScroll.querySelector(".scroll__container");
let elemChildren = Array.from(elemContainer.children);

elemChildren.forEach((item) => {
  let itemDuplicado = item.cloneNode(true);

  elemContainer.appendChild(itemDuplicado);
});
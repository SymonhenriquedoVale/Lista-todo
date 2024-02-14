const localStorageKey = "to-do-list-gn";

function validateExist() {
  let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
  let inputAlert = document.getElementById("input-tex").value;
  let exist = values.find((x) => x.name == inputAlert);
  return !exist ? false : true;
}

function newTask(item) {
  let input = document.getElementById("input-tex");
  input.style.border = "";

  if (!input.value) {
    input.style.border = "2px solid red";
    alert("digite algo");
  } else if (validateExist()) {
    alert("já existe um outro nome assim");
  } else {
    // incremet to localStorage

    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    values.push({
      name: input.value,
    });
    localStorage.setItem(localStorageKey, JSON.stringify(values));
    mostrarValues();
  }
  input.value = "";
}

function mostrarValues() {
  let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
  let lista = document.querySelector(".to-do-list");
  lista.innerHTML = "";
  for (let i = 0; i < values.length; i++) {
    lista.innerHTML += `<li><button id='btnOk'onclick='removeItem("${values[i]["name"]}")'>✓</button>${values[i]["name"]}</li>`;
  }
}

function removeItem(data) {
  let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
  let index = values.find((x) => x.name == data);
  values.splice(index, 1);
  localStorage.setItem(localStorageKey, JSON.stringify(values));
  mostrarValues();
}

function removeAll(data) {
  let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
  let index = values.find((x) => x.name == data);
  values.splice(index);
  localStorage.setItem(localStorageKey, JSON.stringify(values));
  mostrarValues();
}

function mudarStyl(data) {
  let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
  let index = values.find((x) => x.name == data);
  values.splice(index);
  localStorage.setItem(localStorageKey, JSON.stringify(values));
  mostrarValues();
}

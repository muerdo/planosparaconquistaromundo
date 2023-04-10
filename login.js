const users = [
  {
    username: "mileninha",
    password: "2023ppcm",
    whatsapp: "+559991072162"
  },
  {
    username: "pedroca",
    password: "2023ppcm",
    whatsapp: "+559999999999"
  }
];

function login() {
  const username = document.getElementById("username").value.trim(); // Remove espaços em branco no início e fim da string

  const user = users.find(u => u.username === username);

  if (user) {
    alert(`Olá, ${user.username}!`);
    localStorage.setItem("username", user.username);
    localStorage.setItem("whatsapp", user.whatsapp);
    window.location.href = `welcome/welcome.html`;
  } else {
    // Usuário não encontrado
    alert("Usuário não encontrado.");
  }
}

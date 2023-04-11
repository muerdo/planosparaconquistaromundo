
				const username = localStorage.getItem("username");
				document.getElementById("username").textContent = username;
				
				const users = [
				  {
					username: "mileninha",
					password: "2023ppcm",
					whatsapp: "+559991072162"
				  },
				  {
					username: "pedroca",
					password: "2023ppcm",
					whatsapp: "+552167255827"
				  }
				];
				
				const perguntasPedroca = [
				  "Qual é a sua cor favorita?",
				  "Qual é a sua comida favorita?",
				  "Qual é o seu hobby favorito?",
				  "Qual é o seu livro favorito?",
				  "Qual é o seu filme favorito?",
				  "Qual é a sua música favorita?",
				  "Qual é o seu animal favorito?",
				  "Qual é o seu lugar favorito para viajar?",
				  "Qual é o seu jogo favorito?",
				  "Qual é a sua série de TV favorita?"
				];
				
				const perguntasMileninha = [
				  "Qual foi o pior momento do nosso relacionamento?",
				  "Qual a coisa que mais te encanta no Pedro?",
				  "Qual o melhor presente que ja te dei?",
				  "Você tem algum medo?",
				  "Qual é o seu filme favorito?",
				  "Qual é a sua música favorita?",
				  "Algo que sempre me encantou no Pedro:",
				  "Qual é o seu lugar favorito para viajar?",
				  "Você tem algum medo?",
				  "Algo que voce gostaria de dizer e nunca disse?"
				];
				
				function responder() {
			  const perguntas = username === "mileninha" ? perguntasMileninha : perguntasPedroca;
			  const randomIndex = Math.floor(Math.random() * perguntas.length);
			  const pergunta = perguntas[randomIndex];
			  const resposta = prompt(pergunta);
			  const user = users.find(user => user.username === username);
			  const message = `Pergunta: ${pergunta}\nResposta: ${resposta}`;
			  
			  let whatsappNumber = "";
			  if (username === "mileninha") {
				whatsappNumber = "+5521967255827";
			  } else if (username === "pedroca") {
				whatsappNumber = "+5599991072162";
			  }
			  
			  const url = `https://api.whatsapp.com/send?phone=${encodeURIComponent(whatsappNumber)}&text=${encodeURIComponent(message)}`;
			  window.open(url, "_blank");
			}
			
				
				function perguntar() {
				  const user = users.find(user => user.username === username);
				  const message = prompt("Digite a sua pergunta:");
				  const url = `https://api.whatsapp.com/send?phone=55219672558272&text=${encodeURIComponent(message)}`;
				  window.open(url, "_blank");
				}

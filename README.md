<p align="center">
<h1>
Internship Test
</h1> 
</p>

### 🛠  Descrição

</br>

Projeto desenvolvido para o processo seletivo da Geopost Energy.

link do projeto: https://internshiptest-ten.vercel.app/

## Preview
Interface do usuário.
</br> 

<p align="center">
  <kbd>
 <img width="auto" style="border-radius: 10px" height="auto" 
 src="https://github.com/edersonpaixao21/InternshipTest/blob/master/public/imgs/Preview.gif" alt="Intro">
  </kbd>
  </br>
</p>

</br>

### ⌨ Instalação
Para a utilização é preciso clonar o repositório, instalar as depedências e rodar o projeto.

```bash
# Abra o terminal/cmd e em seguida Clone este repositório
$ git clone https://github.com/edersonpaixao21/InternshipTest.git

# Acesse a pasta do projeto no terminal/cmd
$ cd InternshipTest

# Instale as dependências
$ npm install ou apenas npm

# Execute a aplicação em modo de desenvolvimento
$ npm start

# O servidor inciará na porta:3000 - acesse <http://localhost:3000/>

```

### ⌨ Simulação
Simulação de envio para API

```bash
const sendPostApi = [
  {
    "equipeA": class_semi[0],
    "equipeB": class_semi[1],
    "golsEquipeA": r.golsA,
    "golsEquipeB": r.golsB,
    "golsPenaltyTimeA": r.penaltisA,
    "golsPenaltyTimeB": r.penaltisB,
   }
]

useEffect(() => {
  axios.post('https://estagio.geopostenergy.com/WorldCup/InsertFinalResult',
  sendPostApi,
    {
      headers: {
          'git-user': 'edersonpaixao21'
      }
    }).then(console.log("success"));
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

```

</br>

### ⌨ Pilha de tecnologias e bibliotecas

-   [React](https://github.com/facebook/react)
-   [JavaScript](https://www.javascript.com/)
-   [CSS](https://purecss.io/)

</br>

👨‍💻 **Author** 💻

Developed by [_Ederson Paixão_](https://www.linkedin.com/in/ederson-paix%C3%A3o-a14051242/)

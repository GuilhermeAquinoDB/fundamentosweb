let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')

let nomeOk = false
let emailOk = false
let assuntoOk = false

nome.style.width = '50%'
nome.style.height = '30px'

function validaNome() {
  let txtNome = document.querySelector('#txtNome')

  if (nome.value.length < 5) {
    txtNome.innerHTML = 'Nome inválido!'
    txtNome.style.color = 'red'
  } else {
    txtNome.innerHTML = ''
    txtNome.style.color = ''
    nomeOk = true
  }
}

email.style.width = '50%'
email.style.height = '30px'

function validaEmail() {
  let txtEmail = document.querySelector('#email')
  if (email.value.indexOF('@') == -1 || email.value.indexOF('.')) {
    txtEmail.innerHTML = 'Email Invalido'
    txtEmail.style.color = 'red'
  } else {
    txtEmail.innerHTML = ''
    txtEmail.style.color = ''
    emailOK = true
  }
}

email.style.width = '50%'
email.style.height = '30px'

function validaAssunto() {
  let txtAssunto = document.querySelector('#assunto')
  if (assunto.value.length >= 300) {
    txtAssunto.innerHTML = 'Limite de caracteres ultrapassado'
    txtAssunto.style.color = 'red'
  } else {
    txtAssunto.innerHTML = ''
    txtAssunto.style.color = ''
    assuntoOK = true
  }
}

function enviar() {
  if (nomeOK == true && emailOK == true && assuntoOK == true) {
    alert('Formulario enviado com sucesso')
  } else {
    alert('Formulario incorreto')
  }
}

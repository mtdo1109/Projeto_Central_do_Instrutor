function operacao() {
    document.getElementById("mensagem").value =
        "Oi, (Nome do Aluno)! Tudo bem com você? Aqui é o xxxxx instrutor da Onbyte! Nos últimos dias tivemos notícias sobre as operações que aconteceram na Penha e no Complexo do Alemão, e fiquei preocupado com a segurança de todos. Independente da região em que você e sua família moram, espero que esteja bem e seguros. Se estiver precisar de apoio, pode nos comunicar! O importante é saber que vocês estejam bem. Atenciosamente *Laboratório Onbyte*"
}

function prazoencerrado() {
    document.getElementById("mensagem").value =
        "Olá xxxx, boa tarde, tudo bem? Aqui é o xxxx, Instrutor da Onbyte. Motivo do meu contato é para alertar sobre a situação atual do curso. Verifiquei que já encerrou o prazo do seu curso, você ainda está no *xxxx*, com *xx* aula"
}

function atrasado() {
    document.getElementById("mensagem").value =
        "Olá xxx, boa xxx, tudo bem? Aqui é o Gabriel, instrutor da Onbyte. Vi que você está no *xxx* mês e também terá o mês grátis. Precisamos encontrar uma maneira de você avançar mais rápido nos módulos, pois você ainda está no *xxx*, com *xxx* aulas para terminar. Peço que na sua próxima aula você fale com o instrutor mais próximo de você que ele irá te explicar o seu novo plano de aula para você terminar o curso no prazo. Caso não consiga terminar o curso a tempo você terá duas opções, finalizar e receber o certificado dos módulos que você concluiu, ou renovar, a renovação consiste em continuar pagando parcelas mensais enquanto você estiver estudando."
}

function faltosoatrasado() {
    document.getElementById("mensagem").value =
        "Olá xxx, boa xxx, tudo bem? Aqui é o xxxx, Instrutor da Onbyte. Motivo do meu contato é para alertar sobre a situação atual do curso. Verifiquei aqui que tem algumas aulas para repor, faltam xxx meses para o término do prazo do curso, ainda está no xxx, com xx aulas para terminar. *Peço que na sua próxima aula fale com o instrutor mais próximo de que ele irá te explicar o seu novo plano de aula para você terminar o curso no prazo* *É super importante que coloque as aulas de reposição em dia para seguir em ordem com o prazo de término do contrato* *Entre em contato com o nosso setor da recepção para que consiga repor as suas aulas pendentes.* Consegue marcar suas aulas entre 08h e 20h de segunda a sexta e sábado de 08h até as 16h. Caso não consiga terminar o curso a tempo terá duas opções, finalizar e receber o certificado dos módulos que concluiu, ou renovar, a renovação consiste em continuar pagando parcelas mensais enquanto estiver estudando!"
}

function reposicao() {
    document.getElementById("mensagem").value =
        "Olá xxx, boa xxx, tudo bem? Aqui é o Instrutor xxxx da On Byte. Motivo do meu contato é para notificar que tem algumas aulas para repor. É super importante que mantenha suas aulas em dia para ficar em ordem com o prazo de duração do curso, consegue marcar suas aulas com o nosso setor da recepção. Qualquer dúvida estou a disposição!"
}

function responsavel() {
    document.getElementById("mensagem").value =
        "Olá xxx, boa xxx, tudo bem? Aqui é o instrutor xxxx da On Byte Penha. Gostaria de conversar sobre a situação atual do curso do(a) xxxxx. Poderia me dar um retorno quando possível? Fico à disposição para conversarmos."
}

function comportamento() {
    document.getElementById("mensagem").value =
        "Olá xxx, bom(a) xxx! Aqui é o xxx, instrutor da On Byte Penha. O motivo do meu contato é fazer algumas observações sobre o comportamento do xxx.: (Reclamação)"
}

function desempenhoprova() {
    document.getElementById("mensagem").value =
        "Olá xxx, bom(a) xxx! Aqui é o xxx, instrutor da On Byte Penha. O motivo da minha mensagem é para comunicar que você tirou (nota) na sua avaliação de xxx. Nós do laboratório gostaríamos de parabenizá-lo(a) pelo seu ótimo desempenho!"
}

function desempenho() {
    document.getElementById("mensagem").value =
        "Olá xxx, bom(a) xxx! Aqui é o xxx, instrutor da On Byte Penha. O motivo da minha mensagem é para comunicá-lo(a) que seu filho(a) está tendo um ótimo desempenho no curso. (observação sobre o aluno)"
}

function VoltasasAulas() {
    document.getElementById("mensagem").value =
        "Olá xxxx, aqui é o instrutor xxxxxx. É com muita alegria que iniciamos mais um ano letivo na On Byte Penha. Este é o momento de renovar energias, retomar os estudos e mergulhar em novos aprendizados que vão abrir portas para o futuro. A tecnologia não para de evoluir, e juntos vamos explorar ferramentas, desenvolver habilidades e transformar conhecimento em oportunidades. Desejamos a todos um ano letivo produtivo, cheio de descobertas e conquistas. Vamos construir, inovar e aprender lado a lado!"
}

function BoasVindas() {
    document.getElementById("mensagem").value =
        "Bem vindo a OnByte Penha. Olá xxxxxx, Aqui é o xxxxxx Instrutor da OnByte Penha, Ficamos contentes em participar de sua trajetória profissional e acadêmica."
}

function abrirsistema() {
    window.open("https://app.cgd.com.br/login");
}

function abrirplanilha() {
    window.open("https://excel.cloud.microsoft/open/onedrive/?docId=14B417347F702AF7%21s2926805e9ccf4a468ec02e9b1e06c30e&driveId=14b417347f702af7");
}

function mensagemFalta() {
    document.getElementById("mensagem").value =
        "Olá xxx, boa xxx, tudo bem? Aqui é o xxxx, instrutor da Onbyte. Vi que a sua última vinda ao curso foi no dia xx/xx. Depois disso, não tivemos mais notícias suas. Aconteceu algo?";
}

function mensagemAtraso() {
    document.getElementById("mensagem").value =
        "Olá! tem atraso(exemplo)";
}

function mensagemRemarcacao() {
    document.getElementById("mensagem").value =
        "Olá! tem remarcação(exemplo)";
}

function copiarMensagem() {
    const texto = document.getElementById("mensagem");
    texto.select();
    document.execCommand("copy");
    alert("Mensagem copiada!");
}

function copiarCodigo(id) {
    const codigo = document.getElementById(id).innerText;

    navigator.clipboard.writeText(codigo)
        .then(() => {
            alert("Código copiado: " + codigo);
        })
        .catch(() => {
            alert("Erro ao copiar!");
        });
}
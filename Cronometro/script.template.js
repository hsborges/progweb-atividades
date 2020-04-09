/*
 *  Script com a lógica do cronometro.
 *  Ele possui o esqueleto dos método essenciais.
 *  Modifique este arquivo o quanto for necessário.
 *
 */

// Funcao para atualizar o display do cronometro no html.
// Dica: use do método 'setInterval' para executálo a cada 50 milissegundos.
function updateVisualization() {
  // As próximas linhas buscam pelos respectivos espacos de hora, minuto, segundo e milissegundos
  // Basta implementar a lógica e alterar o conteúdo (innerHTML) com os valores
  var hora = document.getElementsByClassName('hora')[0];
  var minuto = document.getElementsByClassName('minuto')[0];
  var segundo = document.getElementsByClassName('segundo')[0];
  var milissegundo = document.getElementsByClassName('milissegundo')[0];
  // TODO (continuar implementacao) ...
}

// Funcao executada quando o botão 'Inicar' é clicado
// - se o cronometro estiver parado, iniciar contagem.
// - se estiver ativo, reiniciar a contagem
function start() {
  // TODO (implementar)
}

// Funcao executada quando o botão 'Parar' é clicado
// - se o cronometro estiver ativo, parar na contagem atual
function stop() {
  // TODO (implementar)
}

// Funcao executada quando o botão 'Reiniciar' é clicado
// - se o cronometro estiver ativo, reiniciar contagem
// - se estiver parado, zerar e permanecer zerado
function reiniciar() {
  // TODO (implementar)
}

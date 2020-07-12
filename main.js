$(document).ready(function () {
  // Cette ligne génère aléatoirement un nombre entre 1 et 100
  let solution = Math.floor(Math.random() * 100) + 1;

  let nombre = $("#reponse");
  let submit = $("#validation");
  let wronganswer = $("#mauvaisereponse");

  let hautbas = $("#hautOuBas");
  let resultat = $("#resultat");

  let compteur = 1;
  let rejouer;

  function verif() {
    let reponse = Number(nombre.val());

    if (reponse === solution) {
      resultat.text("Vous avez trouvé !");
      resultat.css({
        color: "green",
      });
      hautbas.empty();
      gameOver();
    } else if (compteur === 7) {
      resultat.text("PERDU");
      resultat.css({
        color: "blue",
      });
      hautbas.empty();
      gameOver();
    } else {
      wronganswer.text("Mauvaise réponse !");
      wronganswer.css({
        color: "red",
      });
      if (reponse > solution) {
        hautbas.text("Le nombre saisi est trop grand !");
      } else if (reponse < solution) {
        hautbas.text("Le nombre saisi est trop petit !");
      }
    }

    compteur++;
    nombre.empty();
  }

  submit.click(verif);

  function gameOver() {
    wronganswer.empty();

    nombre.prop("disabled", true);
    submit.prop("disabled", true);

    rejouer = $("#quizz").append("<button>Rejouer ?</button>");

    rejouer = $("button");

    rejouer.addClass("btn btn-info");
    rejouer.css({
      "max-width": "40%",
      "margin": "0 auto",
    });

    rejouer.click(replay);
  }

  function replay() {
    compteur = 1;

    hautbas.empty();
    resultat.empty();

    rejouer.remove();

    nombre.prop("disabled", false);
    submit.prop("disabled", false);
    nombre.empty();

    solution = Math.floor(Math.random() * 100) + 1;
  }
});

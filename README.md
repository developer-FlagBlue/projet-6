# Base de code du projet P6 - Parcours Front-end

## Démarrer le projet


-	 forker son repo pour te lancer dans le code.

-	le site web soit un prototype,  correspondre aux maquettes et fonctionner correctement (pas d'erreur dans la console).

-	construire le site conformément aux exigences d'accessibilité indiquées dans mes notes.


-	démonstration de la navigation du site au moyen du clavier pour qu’on s’assure qu'il est utilisable par les lecteurs d'écran.  

-	respecte bien les contraintes techniques indiquées dans mes notes de réunion.

-  utilises un pattern Factory Method, ça sera idéal pour créer les media en distinguant les vidéos des photos.

1. Assurer l'accessibilité d'un site web

Validé

Commentaires :

❒ Les balises ARIA sont utilisées pour décrire des éléments personnalisés.

❒ Les balises d'accessibilité passent le test AChecker sans "known issues".

❒ Le site est navigable avec un clavier.

❒ La lightbox est navigable avec un clavier.

❒ Le site fournit un texte alternatif pour toutes les images et vidéos afin de garantir l'accessibilité aux lecteurs d'écran. 

2. Développer une application web modulaire avec des design patterns

Validé

Commentaires :

❒ Aucun bug n'est rencontré.

❒ Aucune erreur n'est affichée dans la console.  

❒ Le pattern Factory est utilisé pour générer différents éléments de DOM pour les vidéos ou les photos.

❒ Le DOM est généré via du JavaScript basé sur le fichier JSON fourni, au lieu d'être écrit à la main.

❒ Il comprend tous les photographes et les images fournies. 

❒ Les pages des photographes sont générées en utilisant un unique fichier HTML.

❒ Le design correspond aux maquettes.

3. Ecrire du code JavaScript maintenable

Validé

Commentaires :

❒ Le code est bien commenté, ce qui signifie que toute intention qui ne peut être immédiatement comprise en regardant le code lui-même peut être comprise en lisant les commentaires.

❒ Les identificateurs tels que les noms de classe, de méthode et de variable décrivent leur but avec exactitude et précision.

❒ Les versions récentes de JavaScript sont utilisées sans caractéristiques dépréciées

4. Gérer les évènements d'un site avec JavaScript

Validé

Commentaires :

❒ Les event listeners sont utilisés pour répondre à toutes les interactions au clavier ou à la souris.

❒ Lorsque l'utilisateur clique sur la vignette d'un photographe sur la page d'accueil, il est amené sur une page spécifique à ce photographe.

❒ Lorsque l'utilisateur clique sur l'icône "like" sur la page du photographe, il incrémente le nombre de "like". 

❒ Les médias peuvent être triés par popularité, date ou titre en cliquant sur le filtre de tri souhaité. 

❒ Lorsque l'utilisateur clique sur un élément média sur la page du photographe, l’élément est affiché dans une modale type lightbox.

❒ La lightbox peut être fermée en cliquant sur une croix dans le coin. 

❒ La lightbox présente des boutons de navigation sur le côté pour passer d'un média à un autre (les utilisateurs peuvent cliquer sur ces boutons pour naviguer).

❒ Un bouton de contact cliquable sur la page du photographe lance une modale, qui comprend des champs pour le nom, l'e-mail et le message.

❒ L'envoi du formulaire (via le bouton Envoyer) permet d’afficher le contenu des 3 champs dans la console. 

❒ La page d'accueil répertorie tous les photographes avec leur nom, leur slogan, leur lieu, leur prix/heure et une image miniature.

❒ La page de chaque photographe présente une galerie avec des photos et des vidéos.

❒ Chaque média sur la page du photographe comprend le titre et le nombre de likes.

❒ Le nombre total de photos aimées par un photographe est indiqué. 

❒ Toutes les pages demandées sont cohérentes avec les maquettes.

Livrable

Points forts :

bonne présentation et correction des points remontés aprés la soutenance


Soutenance

Remarques :

validé et bon courage pour la suite
































































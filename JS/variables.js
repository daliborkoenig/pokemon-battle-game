let plPoke
let cpPoke

let body = document.getElementsByTagName("BODY")[0]

// ############## PROGRESS BAR VARIABLES #############

let plHpProgress = document.getElementById("player-health")
let plMagicProgress = document.getElementById("player-magic")
let cpHpProgress = document.getElementById("computer-health")
let cpMagicProgress = document.getElementById("computer-magic")

// ############## PLAYER CHOICE VARIABLES #############

let plChoice = "You have chosen "
let plPokeImg = document.getElementById("player-choice-img")
let plBattleImg = document.getElementById("player-battle-img")
let plChoiceStats = document.getElementById("player-choice-stats")
let plChoiceText = document.getElementsByClassName("player-choice-text")[0]
let plStats = document.getElementById("player-battle-stats")
let plSkills = document.getElementById("player-battle-skills")
let plVs = document.getElementById("vs1")
let cpPokeImg = document.getElementById("computer-choice-img")
let cpBattleImg = document.getElementById("computer-battle-img")
let cpChoice = "A.I. has chosen "
let cpChoiceText = document.getElementsByClassName("computer-choice-text")[0]
let cpStatus = document.getElementById("computer-choice-stats")
let choiceBox = document.getElementsByClassName("choice-box")
let cpStats = document.getElementById("computer-battle-stats")
let cpSkills = document.getElementById("computer-battle-skills")
let cpVs = document.getElementById("vs3")

// ############## COIN TOSS VARIABLES #############

let sideA = document.getElementsByClassName("side-a")[0]
let sideB = document.getElementsByClassName("side-b")[0]
let element = document.getElementById("coin")
let hidden = document.getElementById("hide-skills")
let coinTossText = document.getElementById("coin-toss").childNodes[1]

// ############## BATTLE TEXT VARIABLES #############

let battleText = document.getElementById("battle-information")
let battleTextOne = document.getElementById("battle-line-one")
let battleTextTwo = document.getElementById("battle-line-two")
let battleTextThree = document.getElementById("battle-line-three")
let battleTextFour = document.getElementById("battle-line-four")

// ############## HIT DAMAGE VARIABLES #############

let plHitAnimation = document.getElementById("plHitBox")
let cpHitAnimation = document.getElementById("cpHitBox")
let hitAnimationText = document.getElementsByClassName("dmgAnim")

// let plPokeImg = document.getElementById("plPokemon")
// let cpPokeImg = document.getElementById("cpPokemon")

// let hidden = document.getElementById("hide-skills")
// let coinTossText = document.getElementById("coin-toss").childNodes[1]

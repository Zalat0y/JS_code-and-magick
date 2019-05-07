'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
.content
.querySelector('.setup-similar-item');

var WIZARDS_NAMES = ['Pendalf', 'Gendalf', 'Vasia', 'Loxoboy434'];

var wizards = [
{
  name: WIZARDS_NAMES[0],
  coatColor: 'red'
},
{
  name: WIZARDS_NAMES[1],
  coatColor: 'blue'
},
{
  name: WIZARDS_NAMES[2],
  coatColor: 'yellow'
},
{
  name: WIZARDS_NAMES[3],
  coatColor: 'white'
}
];




var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;

  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;

  return wizardElement;

}


var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('setup-similar').classList.remove('.hidden');




// for (var i = 0; i < 4; i++) {
//   var wizardElement = similarWizardTemplate.cloneNode(true);

//   similarListElement.appendChild(wizardElement);
// }

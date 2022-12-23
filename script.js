import { arrayIcons } from './icons.js';

const container = document.getElementById('container');

let iconsHTML = '';

arrayIcons.forEach((icon) => {
   iconsHTML += `
     <div class="icon-container">
       <i class="${icon}"></i><span>${icon}</span>
     </div>
  `;
});

container.innerHTML = iconsHTML;

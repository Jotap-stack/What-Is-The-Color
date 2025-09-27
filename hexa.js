const colors = [
  '#008000', // green
  '#FF0000', // red
  '#0000FF', // blue
  '#FFFF00', // yellow
  '#800080', // purple
  '#FFA500', // orange
  '#FFC0CB', // pink
  '#00FFFF', // cyan
  '#00FF00', // lime
  '#A52A2A', // brown
  '#FFD700', // gold
  '#C0C0C0', // silver
  '#EE82EE', // violet
  '#4B0082', // indigo
  '#F5F5DC', // beige
  '#FF7F50', // coral
  '#DC143C', // crimson
  '#F0E68C', // khaki
  '#FA8072', // salmon
  '#008080'  // teal
];


const btn = document.getElementById('btn')
const color = document.querySelector('.span-color')

btn.addEventListener('click', function(){
  const RandomNumber = getRandomNumber()
  const mainColor = document.querySelector('#main-color')

  mainColor.style.backgroundColor = colors[RandomNumber]
  color.textContent = colors[RandomNumber]
 
})

function getRandomNumber(){
  return Math.floor(Math.random() * colors.length)
}
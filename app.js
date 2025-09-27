const colors = [
  'green',
  'red',
  'blue',
  'yellow',
  'purple',
  'orange',
  'pink',
  'cyan',
  'lime',
  'brown',
  'gold',
  'silver',
  'violet',
  'indigo',
  'beige',
  'coral',
  'crimson',
  'khaki',
  'salmon',
  'teal'
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
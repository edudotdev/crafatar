

const caja = document.querySelector('.skin')
const skin = document.createElement('img')
fetch('https://playerdb.co/api/player/minecraft/poke_saiyan')
.then(response => response.json())
.then(data => {
  skin.src = `https://crafatar.com/renders/head/${data.data.player.raw_id}`
  console.log(data.data.player.raw_id);
  caja.appendChild(skin)
})

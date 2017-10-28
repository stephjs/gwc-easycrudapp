/* globals fetch */
var update = document.getElementById('update')
var del = document.getElementById('delete')

update.addEventListener('click', function () {
  fetch('quotes', {
    method: 'put',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
        'name': 'fox',
        'quote': 'Ring-ding-ding-ding-dingeringeding! Gering-ding-ding-ding-dingeringeding! \
		    Gering-ding-ding-ding-dingeringeding! Wa-pa-pa-pa-pa-pa-pow! \
			Wa-pa-pa-pa-pa-pa-pow! \
			Wa-pa-pa-pa-pa-pa-pow \
			Joff-tchoff-tchoffo-tchoffo-tchoff! \
			Tchoff-tchoff-tchoffo-tchoffo-tchoff! \
			Joff-tchoff-tchoffo-tchoffo-tchoff!'
    })
  })
  .then(response => {
    if (response.ok) return response.json()
  })
  .then(data => {
    console.log(data)
  })
  setTimeout(function(){
   window.location.reload(1);
}, 200);
})

del.addEventListener('click', function () {
  fetch('quotes', {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'name': 'fox'
    })
  }).then(function (response) {
    window.location.reload()
  })
})
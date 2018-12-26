function init() {
 Tabletop.init( { key: ‘https://docs.google.com/spreadsheets/d/10QRvh9jL24iLknhlSXIJnvLCaBaSZpVwAI0hve1Khik/pubhtml',
 callback: function(data, tabletop) { 
 console.log(data)
 },
 simpleSheet: true } )
}
window.addEventListener(‘DOMContentLoaded’, init)
var zone = document.querySelector('.zone');
var list = document.querySelector('.list');
var btn  = document.querySelector('.button');
var nowZone = document.querySelector('.nowZone');

//xhr
var xhr = new XMLHttpRequest;
xhr.open('get','https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97',false);
xhr.send(null);
var data = JSON.parse(xhr.responseText).result.records;

btn.addEventListener('click',updatelist);
zone.addEventListener('change',updatelist);

function updatelist(e){
    var str = '';
    var nowPlace = e.target.value;
    console.log(nowPlace);
    var len = data.length;
    for(var i = 0;i < len;i++){
        if(nowPlace == data[i].Zone){
           str += '<li class="place">'+
           '<img class="photo" src="'+data[i].Picture1+'">'+
           '<p class="name">'+data[i].Name+'</p>'+
           '<p class="Zone">'+data[i].Zone+'</p>'+
           '<p class="openTime"><img src="img/clock.png">'+data[i].Opentime+'</p>'+
           '<p class="location"><img src="img/pin.png">'+data[i].Add+'</p>'+
           '<p class="tel"><img src="img/phone.png">'+data[i].Tel+'</p>'+
           '<p class="ticket"><img src="img/tag.png">'+data[i].Ticketinfo+'</p>'
           '</li>'
        }
    }
    list.innerHTML = str;
    nowZone.innerHTML = nowPlace;
}












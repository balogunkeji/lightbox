const modal = document.getElementById('myModal');
const img = document.getElementById('img01');

Array.from(document.querySelectorAll('#myImg')).forEach(item => {
    item.addEventListener('click',event => {
        modal.style.display = 'block';
      img.src = event.target.src;
    });
});


// const modal = document.getElementById('myModal')
// const img = document.getElementById('myImg');
// const imgModel = document.getElementById('img');
// img.addEventListener('click', imgModal);
//  function imgModal (){
//      var images = document.getElementsByClassName('img')
//      modal.style.display = 'block';
//      imgModel.src = this.src;
//  }

 const span = document.getElementsByClassName('close')[0];
 span.addEventListener('click', closeBut);
 function closeBut(){
     modal.style.display = 'none';
 }
function scrollTo(element){
	window.scroll({
	  left: 0,
	  top: element.offsetTop,
	  behavior:'smooth'
	});
  }
  
  var button = document.querySelector('#all');
  var footer = document.querySelector('#section__all');
  
  button.addEventListener('click', () => {
	scrollTo(footer);
  })
  
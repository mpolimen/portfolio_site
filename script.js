// https://stackoverflow.com/questions/27809922/in-html-how-can-you-make-an-image-appear-while-you-are-hovering-over-text/27809947
// https://stackoverflow.com/questions/25934817/how-to-let-a-div-stick-to-cursor


// About me moving pictures
document.addEventListener('mousemove', function(ev){
  document.getElementById('stevens_img').style.transform = 'translateY('+(ev.clientY-550)+'px)';
  document.getElementById('stevens_img').style.transform += 'translateX('+(ev.clientX-100)+'px)';
  
  document.getElementById('resume_src').style.transform = 'translateY('+(ev.clientY-650)+'px)';
  document.getElementById('resume_src').style.transform += 'translateX('+(ev.clientX-100)+'px)';
  
  document.getElementById('scsc_img').style.transform = 'translateY('+(ev.clientY-650)+'px)';
  document.getElementById('scsc_img').style.transform += 'translateX('+(ev.clientX-100)+'px)';

  document.getElementById('sigep_img').style.transform = 'translateY('+(ev.clientY-850)+'px)';
  document.getElementById('sigep_img').style.transform += 'translateX('+(ev.clientX-100)+'px)';

  document.getElementById('blackrock_img').style.transform = 'translateY('+(ev.clientY-750)+'px)';
  document.getElementById('blackrock_img').style.transform += 'translateX('+(ev.clientX-100)+'px)';

  document.getElementById('xc_img').style.transform = 'translateY('+(ev.clientY-1050)+'px)';
  document.getElementById('xc_img').style.transform += 'translateX('+(ev.clientX-100)+'px)';
},false);
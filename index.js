function studyJavaScript()
{
    alert('Я учу Javascript!');
}

studyJavaScript();


function istudyJavaScript(message = 'Я учу JavaScript'){
    alert(`${message}`);
}

istudyJavaScript('Я учу JavaScript!');

function ilearnJavaScript(message = 'Я учу JavaScript'){
    return(`${message}`);
}

let learn = ilearnJavaScript();
alert(learn);

function myFunc(){
    event.target.src="/jsfunctions/assets/cat2.jpeg"
  }
  

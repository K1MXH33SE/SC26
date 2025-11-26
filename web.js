function toggleContent(id){
    const elementOne =  document.getElementById(id);

    if(elementOne.style.display === 'block'){
        elementOne.style.display = 'hide';
    }
    else{
        elementOne.style.display = 'block';
    }
}


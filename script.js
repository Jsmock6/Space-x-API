const URL = 'https://api.spacexdata.com/v3/dragons';

function displayResults(dragons) {
    const [dragon1, dragon2] = dragons;

console.log(dragons)
// const x = dragons.map(dragon => dragon.id)
// console.log(x)
dragons.forEach((dragon) => {
    const para = document.createElement('div');
    const para2 = document.createElement('div');
    const para3 = document.createElement('img');

    para.textContent = dragon.name 
    para2.textContent = dragon.active
    para3.src = dragon.flickr_images[0]

    const submitbt = document.querySelector('.results');
    submitbt.appendChild(para);
    submitbt.appendChild(para2);
    submitbt.appendChild(para3);

    
 

})

}


const submitbt = document.querySelector('.submit');
submitbt.addEventListener('click',  wrap );

function wrap() {
    fetch(URL).then(function (result) {
        return result.json(); 
    }).then(function (json) {
        displayResults(json); 
    })
}





// write your code here
fetch('http://localhost:9000/ramens')
.then(function(response){
    return response.json();
})
.then(function(ramenMenu){
    
    ramen_images=document.getElementById("ramen-menu")
    ramenMenu.map((ramens)=>{
       
        ramen_images.innerHTML+= `<div class ="separate">
        <p class="hidden name"> ${ramens.name}</p>
        <p class="hidden restaurant"> ${ramens.restaurant}</p>
        <p><img class="image" src=" ${ramens.image}"></p>
        <p class="hidden rating"> ${ramens.rating}</p>  
        <p class="hidden comment"> ${ramens.comment}</p>  
        </div>`
        
    });
    let images = document.querySelectorAll('.image');

    for(let i=0; i<images.length;i++){
        images[i].addEventListener('click',function(e){
            let image = e.target;   
            let parent = e.target.closest('.separate'); 
            let name = parent.querySelector('.name').innerText;
            let restaurant = parent.querySelector('.restaurant').innerText;
            let rating = parent.querySelector('.rating').innerText;
            let comment = parent.querySelector('.comment').innerText;

            //populate div
            document.querySelector('#ramen-detail .detail-image').setAttribute("src", image.getAttribute("src"));
            document.querySelector('#ramen-detail .name').innerText = name;
            document.querySelector('#ramen-detail .restaurant').innerText=restaurant;
            //rating
            document.querySelector('#rating-display').innerText=rating;
            //comment
            document.querySelector('#comment-display').innerText=comment;
        })

    }
})

    



            
//new ramen-menu
let newRamenForm=document.querySelector("form");
    newRamenForm.addEventListener('submit', (e) => {
    e.preventDefault() 
    
    
    
   let  name = document.querySelector('#new-name').value
    let  restaurant = document.querySelector('#new-restaurant').value
     let image = document.querySelector('#new-image').value
     let rating = document.querySelector('#new-rating').value
     let comment = document.querySelector('#new-comment').value


    // post new ramen object to server
    fetch('http://localhost:9000/ramens', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name:name,
            restaurant:restaurant,
            image:image,
            rating:rating,
            comment:comment,
        }),
    })
    .then(res => res.json())
    .then(console.log)



 
    })

    

    


    
    
        

    

        
          
    

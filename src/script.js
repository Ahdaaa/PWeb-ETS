const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
} )

const hiddenElements = document.querySelectorAll('.transition')
hiddenElements.forEach((el) => observer.observe(el));

const categoryTitle = document.querySelectorAll('.category-title');
const allCategoryPosts = document.querySelectorAll('.all');

for (let i = 0; i < categoryTitle.length; i++){
    categoryTitle[i].addEventListener('click',
    filterPosts.bind(this, categoryTitle[i]));
}

function filterPosts(item){
    changeActivePosition(item);
    // alert(item.attributes.id.value);
    for (let i = 0; i < allCategoryPosts.length; i++){
        if(item.attributes.id.value == 'all'){
            if (allCategoryPosts[i].classList.contains('titles')){
                allCategoryPosts[i].classList.remove('hidden');
            }else{
                allCategoryPosts[i].classList.add('hidden');
            }
        }else{
            if(allCategoryPosts[i].classList.contains(item.attributes.id.value)){
                allCategoryPosts[i].classList.remove('hidden');
            } else {
                // allCategoryPosts[i].style.display = "none";
                allCategoryPosts[i].classList.add('hidden');
            }
        }
        
       
    }
}

function changeActivePosition(activeItem){

    for (let i = 0; i < categoryTitle.length; i++){
        categoryTitle[i].classList.remove('active');
    }
    activeItem.classList.add('active')
}

function validateForm(){
    const email = document.forms["form1"]["Username"].value;
    const pass = document.forms["form1"]["Suggestion"].value;

    if (email == "" || pass == ""){
        alert("Please fill all the required data");
    } 
    else {
        alert("Success to submit suggestion");
    }

}
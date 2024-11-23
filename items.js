fetch('data/db.json')
.then(res => res.json())
.then(data => {
    const swiper_items_sale = document.getElementById("swiper_items_sale")

    data.array.forEach(element => {
        
    });
})
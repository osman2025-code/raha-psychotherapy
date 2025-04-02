

 function adjustIframeHeight() {
                var iframe = document.getElementById("googleForm");
    
                iframe.onload = function() {
                    window.scrollTo({ top: 200, behavior: 'smooth' }); // التمرير إلى أعلى الصفحة
    
                    // تغيير ارتفاع الفورم عند الانتقال إلى صفحة جديدة
                    setTimeout(() => {
                        iframe.style.minHeight = "1500px"; // زيادة الارتفاع
                    }, 500); // التأخير قليلاً لضمان التحميل
                };
            }
 //******************nav-bar*******************************


let menuBar=document.querySelector("#menu-bar");
let amenu=document.querySelector("#nav-pages");

function showMenu(){
    menuBar.classList.toggle("fa-times")
    amenu.classList.toggle("active")
}

//********************صفحة الكتب****************************** */

async function fetchBooks() {
    try {
        let response = await fetch('books.json'); // تحميل ملف JSON
        let books = await response.json(); // تحويله إلى JSON

        let bookList = document.getElementById('book-list');
        bookList.innerHTML = '';

        books.forEach(book => {
            let bookItem = document.createElement('div');
            bookItem.className = 'book';
            bookItem.innerHTML = `
                <img src="${book.image}" alt="غلاف ${book.title}">
                <div class="book-info">
                    <h3>${book.title}</h3>
                    <p>✍️ المؤلف: ${book.author}</p>
                    <p>${book.description}</p>
                    <a href="${book.download_link}" target="_blank">📥 تحميل الكتاب</a>
                </div>
            `;
            bookList.appendChild(bookItem);
        });
    } catch (error) {
        console.error('❌ حدث خطأ أثناء تحميل الكتب:', error);
        document.getElementById('book-list').innerHTML = '❌ فشل في تحميل قائمة الكتب.';
    }
}

fetchBooks();
















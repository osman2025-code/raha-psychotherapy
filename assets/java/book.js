

 function adjustIframeHeight() {
                var iframe = document.getElementById("googleForm");
    
                iframe.onload = function() {
                    window.scrollTo({ top: 200, behavior: 'smooth' }); // التمرير إلى أعلى الصفحة
    
                    // تغيير ارتفاع الفورم عند الانتقال إلى صفحة جديدة
                    setTimeout(() => {
                        iframe.style.minHeight = "1350px"; // زيادة الارتفاع
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

//**************************************************************************** */


//الاعلان الجانبي في صفحة الحجز

 // تبديل حالة القسم
 function togglePanel(panelId) {
    const panel = document.getElementById(panelId);
    const isHidden = panel.classList.contains('hidden');
    
    if (isHidden) {
        // إظهار القسم
        panel.classList.remove('hidden');
        document.getElementById('restoreBtn').classList.add('hidden');
    } else {
        // إخفاء القسم
        panel.classList.add('hidden');
        updateRestoreButton();
    }
}

// تحديث زر الاستعادة
function updateRestoreButton() {
    const resourcesHidden = document.getElementById('resourcesPanel').classList.contains('hidden');
    const paymentHidden = document.getElementById('paymentPanel').classList.contains('hidden');
    const restoreBtn = document.getElementById('restoreBtn');
    
    if (resourcesHidden || paymentHidden) {
        restoreBtn.classList.remove('hidden');
        
        // تحديد موقع الزر حسب الأقسام المخفية
        if (resourcesHidden && paymentHidden) {
            restoreBtn.style.bottom = '70px';
            restoreBtn.innerHTML = '<i class="fas fa-plus"></i>';
        } else if (resourcesHidden) {
            restoreBtn.style.bottom = '195px';
            restoreBtn.innerHTML = '<i class="fas fa-plus"></i>';
        } else if (paymentHidden) {
            restoreBtn.style.bottom = '20px';
            restoreBtn.innerHTML = '<i class="fas fa-plus"></i>';
        }
    } else {
        restoreBtn.classList.add('hidden');
    }
}

// استعادة جميع الأقسام
function restoreAllPanels() {
    document.getElementById('resourcesPanel').classList.remove('hidden');
    document.getElementById('paymentPanel').classList.remove('hidden');
    document.getElementById('restoreBtn').classList.add('hidden');
}

// تهيئة الصفحة
window.onload = function() {
    // تعريف حدث زر الاستعادة
    document.getElementById('restoreBtn').addEventListener('click', restoreAllPanels);

    //تديل لجعل المصادر مخفية في اول الامر
    document.getElementById('resourcesPanel').classList.add('hidden');
    const restoreBtn = document.getElementById('restoreBtn');
    restoreBtn.classList.remove('hidden')
    restoreBtn.style.bottom = '195px';
    restoreBtn.innerHTML = '<i class="fas fa-plus"></i>';


    // تحسينات للشاشات الصغيرة جداً
    if (window.innerWidth < 400) {
        const panels = document.querySelectorAll('.side-panel');
        panels.forEach(panel => {
            panel.style.width = '120px';
            panel.style.padding = '6px';
        });
        
        document.querySelectorAll('.resource-link').forEach(link => {
            link.style.fontSize = '11px';
            link.style.padding = '5px 6px';
        });
    }
};










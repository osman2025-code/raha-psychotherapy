

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

//************************************************** */


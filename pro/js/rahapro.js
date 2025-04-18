//الاسئلة الشائعة.....................

document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      
      question.addEventListener('click', () => {
        // إغلاق جميع العناصر الأخرى
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
          }
        });
        
        // تبديل العنصر الحالي
        item.classList.toggle('active');
      });
    });
  });


  //تبويبات التطوير المهني الاسئلة الشائعة....................


  function showFaqTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tab-button');
  
    tabs.forEach(tab => {
      tab.classList.remove('active');
    });
  
    buttons.forEach(btn => {
      btn.classList.remove('active');
    });
  
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
  }
  
  // فتح وغلق الأجوبة
  document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq-question");
    faqItems.forEach(btn => {
      btn.addEventListener("click", () => {
        const parent = btn.parentElement;
        parent.classList.toggle("open");
      });
    });
  });
  


  //تبويبات بوتفوليو....................

  document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
  
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // إزالة النشط من جميع الأزرار
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // إضافة النشط للزر المضغوط
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
          if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  });



  // في ملف main.js
document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
  toggle.addEventListener('click', (e) => {
    if (window.innerWidth < 992) {
      e.preventDefault();
      const menu = toggle.nextElementSibling;
      menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    }
  });
});



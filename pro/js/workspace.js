document.addEventListener('DOMContentLoaded', function() {
    // تأثير التمرير السلس للروابط
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // تفعيل معرض الصور (إذا أردت إضافة lightbox)
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        // يمكنك إضافة lightbox هنا
        console.log('فتح صورة مكبرة');
      });
    });
  
    // إرسال نموذج الحجز
    const bookingForm = document.querySelector('.booking-form form');
    if (bookingForm) {
      bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('تم استلام طلبك، سنتواصل معك خلال 24 ساعة');
        this.reset();
      });
    }
  });
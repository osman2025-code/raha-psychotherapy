      document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault(); // منع الإرسال العادي
    
        // جلب البيانات من النموذج
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const service = document.getElementById("service").value.trim();
        const message = document.getElementById("message").value.trim();
    
        // رقم الواتساب الذي تريد إرسال الرسالة إليه (ابدأ بـ 2+ لرمز الدولة)
        const whatsappNumber = "201507578139"; // مثال: رقمك على واتساب بدون "+" أو مسافات
    
        // إنشاء نص الرسالة
        const text = `مرحبا، لدي رسالة جديدة من نموذج التواصل:
        
    الاسم: ${name}
    البريد الإلكتروني: ${email}
    رقم الهاتف: ${phone}
    الخدمة المطلوبة: ${service}
    الرسالة: ${message}`;
    
        // ترميز النص للرابط
        const encodedText = encodeURIComponent(text);
    
        // إنشاء رابط واتساب
        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
    
        // فتح واتساب
        window.open(whatsappLink, '_blank');
      });

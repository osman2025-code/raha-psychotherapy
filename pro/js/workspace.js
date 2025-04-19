document.getElementById('bookingForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // جمع بيانات النموذج
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const spaceType = document.getElementById('space-type').value;
  const date = document.getElementById('date').value;
  const message = document.getElementById('message').value;
  
  // نص الرسالة لواتساب
  const whatsappMessage = 
      `طلب حجز جديد في Raha Pro%0A%0A
      🏢 *نوع المساحة:* ${spaceType}%0A
      👤 *الاسم:* ${name}%0A
      📧 *البريد الإلكتروني:* ${email}%0A
      📞 *رقم الهاتف:* ${phone}%0A
      📅 *تاريخ الحجز:* ${date}%0A
      📝 *ملاحظات:* ${message || 'لا توجد ملاحظات'}%0A%0A
      شكراً لاختياركم Raha Pro`;
  
  // رقم الهاتف الذي سيتم إرسال الرسالة إليه
  const whatsappNumber = "201507578139";
  
  // إنشاء رابط واتساب
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  
  // فتح واتساب في نافذة جديدة
  window.open(whatsappUrl, '_blank');
});




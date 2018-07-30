function Validateform(theForm)
{
   var regexp;
   if (theForm.customer_name.value == "")
   {
      alert("請輸入姓名！");
      theForm.customer_name.focus();
      return false;
   }

   regexp = /^[-+]?\d*\.?\d*$/;
   if (!regexp.test(theForm.mobile.value))
   {
      alert("請輸入正確之手機號碼！（輸入範例：0988123456）");
      theForm.mobile.focus();
      return false;
   }
   if (theForm.mobile.value == "")
   {
      alert("請輸入正確之手機號碼！（輸入範例：0988123456）");
      theForm.mobile.focus();
      return false;
   }
   regexp = /^([0-9a-z]([-.\w]*[0-9a-z])*@(([0-9a-z])+([-\w]*[0-9a-z])*\.)+[a-z]{2,6})$/i;
   if (!regexp.test(theForm.email_o.value))
   {
      alert("請輸入正確格式之電子郵件！（輸入範例：xxx@xxx.xxx）");
      theForm.email_o.focus();
      return false;
   }
   if (theForm.n_4.value == "")
   {
      alert("請輸入正確格式之電子郵件！（輸入範例：xxx@xxx.xxx）");
      theForm.email_o.focus();
      return false;
   }
   
}

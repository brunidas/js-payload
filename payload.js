const url = 'https://bp-saas-tst.sin-cola.com/user_admin/edit_user_ajax';
const params = new URLSearchParams({
    utf8: '✓',
    '/user_admin/edit_user_ajax[first_name]': 'Manager modifiedWithJS',
    '/user_admin/edit_user_ajax[id]': '3',
    '/user_admin/edit_user_ajax[last_name]': 'Sede Principal',
    '/user_admin/edit_user_ajax[document_number]': '',
    'original_document_number': '',
    '/user_admin/edit_user_ajax[email]': 'manager-ppal@sin-cola.com',
    'original_email': '',
    '/user_admin/edit_user_ajax[phone_number]': '',
    '/user_admin/edit_user_ajax[address]': '',
    '/user_admin/edit_user_ajax[nickname]': '',
    '/user_admin/edit_user_ajax[active]': 'true',
    '/user_admin/edit_user_ajax[type]': 'Manager',
    'branches[]': '1',
    '/user_admin/edit_user_ajax[hierarchy]': '',
    '/user_admin/edit_user_ajax[division]': ''
}).toString();

const xhr = new XMLHttpRequest();
xhr.open("POST", url, true);
xhr.setRequestHeader('Cookie', '_web_session=eyJzZXNzaW9uX2lkIjoiYzEwZTc1Nzc4NmZjM2VmMTIwOWMxZTkwODU1NzRhZTAiLCJmb3JtIjp7fSwiX2NzcmZfdG9rZW4iOiJoKzFYK2s4K2YvWEwrdUlhVHVNNlkrNEN1cFcwaTBuYWNTUDJsN2VLajZvPSIsInVzZXJfZW1haWwiOiJicnVubytvcGVyYWRvcjFAaGFja2VtdHJpeC5jb20iLCJjbGllbnRfc2V0dGluZ3MiOlt7InNldHRpbmdfY2xpZW50X29wZXJhdG9yIjp7ImlkIjozLCJjbGllbnRfaWQiOjEsIm9wZXJhdG9yX2lkIjpudWxsLCJuYW1lIjoiaGlkZV9vcGVyYXRlZF9nYXRlc192aWV3IiwidmFsdWUiOiJmYWxzZSIsImRlc2NyaXB0aW9uIjpudWxsfX0seyJzZXR0aW5nX2NsaWVudF9vcGVyYXRvciI6eyJpZCI6NCwiY2xpZW50X2lkIjoxLCJvcGVyYXRvcl9pZCI6bnVsbCwibmFtZSI6ImhpZGVfbXlfc2VydmljZV9wcm92aWRlcl92aWV3IiwidmFsdWUiOiJmYWxzZSIsImRlc2NyaXB0aW9uIjpudWxsfX0seyJzZXR0aW5nX2NsaWVudF9vcGVyYXRvciI6eyJpZCI6NSwiY2xpZW50X2lkIjoxLCJvcGVyYXRvcl9pZCI6bnVsbCwibmFtZSI6ImhpZGVfbXlfbGluZXNfdmlldyIsInZhbHVlIjoiZmFsc2UiLCJkZXNjcmlwdGlvbiI6bnVsbH19LHsic2V0dGluZ19jbGllbnRfb3BlcmF0b3IiOnsiaWQiOjYsImNsaWVudF9pZCI6MSwib3BlcmF0b3JfaWQiOm51bGwsIm5hbWUiOiJoaWRlX215X2F0dGVuZGVkX3RpY2tldHNfdmlldyIsInZhbHVlIjoiZmFsc2UiLCJkZXNjcmlwdGlvbiI6bnVsbH19LHsic2V0dGluZ19jbGllbnRfb3BlcmF0b3IiOnsiaWQiOjcsImNsaWVudF9pZCI6MSwib3BlcmF0b3JfaWQiOm51bGwsIm5hbWUiOiJoaWRlX215X2FwcG9pbnRtZW50c192aWV3IiwidmFsdWUiOiJmYWxzZSIsImRlc2NyaXB0aW9uIjpudWxsfX1dLCJzaG93X3NlbGZfYXR0ZW50aW9uX3RpY2tldF9zd2l0Y2giOmZhbHNlLCJwYXNzd29yZF92YWxpZGl0eSI6dHJ1ZSwiZXh0ZXJuYWxfbG9naW4iOmZhbHNlLCJhdXRoX3Rva2VuIjoiR0tlWG9oQ2hIdzFyYTdwamtIek4iLCJ1c2VyX2RhdGEiOnsidXNlciI6eyJpZCI6Mzc1MywiZmlyc3RfbmFtZSI6IkJydW5vIiwibGFzdF9uYW1lIjoib3BlcmFkb3JUZXN0IiwiZW1haWwiOiJicnVubytvcGVyYWRvcjFAaGFja2VtdHJpeC5jb20iLCJhZGRyZXNzIjpudWxsLCJwaG9uZV9udW1iZXIiOm51bGwsIm5pY2tuYW1lIjpudWxsLCJ0eXBlIjoiT3BlcmF0b3IiLCJ0aW1lX3pvbmUiOiJBbWVyaWNhL0NhcmFjYXMiLCJhY3RpdmUiOnRydWUsImxhc3RfcGFzc3dvcmRfY2hhbmdlIjoiMjAyNC0wNS0xNlQxNzowNToyMloifX0sImN1cnJlbnRfcm9sZSI6Im9wZXJhdG9yIiwic2V0dGluZ19jbGllbnRfaWQiOjEsInNldHRpbmdfb3BlcmF0b3JfaWQiOjM3NTMsIm9wZXJhdG9yX3NldHRpbmdzIjpbXSwibWFuYWdlcl9vcGVyYXRvciI6ZmFsc2UsInNlbGVjdGVkX2dhdGVfaWQiOiIxIn0%3D--366a9f5487f4723378257590330a4afeee7384d0');
xhr.setRequestHeader('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:126.0) Gecko/20100101 Firefox/126.0');
xhr.setRequestHeader('Accept', '*/*');
xhr.setRequestHeader('Accept-Language', 'en-US,en;q=0.5');
xhr.setRequestHeader('Accept-Encoding', 'gzip, deflate, br');
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
xhr.setRequestHeader('X-Csrf-Token', 'muFawosI/PT5AKa6xEvvzf/Q4v+DmLtW+howkUH+VfcdDA04xDaDATL6RKCKqNWuEdJYajcT8oyLOcYG9nTaXQ==');

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300) {
            console.log(xhr.responseText);
        } else {
            console.error('Error:', xhr.statusText);
        }
    }
};

xhr.send(params);

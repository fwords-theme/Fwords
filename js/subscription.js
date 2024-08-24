// Verify email for newsletter updates
async function validateEmail() {
    const verify = document.getElementById('email_verify');
    const deskVerify = document.getElementById('desk_email_verify');
    let email;
    if (window.innerWidth < 768) { email = document.getElementById('email').value; }
    else { email = document.getElementById('desktop_email').value; }

    if (!email || email.trim() === '') {
        if (window.innerWidth < 768) { verify.innerHTML = 'Email is required'; }
        else { deskVerify.innerHTML = 'Email is required'; }
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        if (window.innerWidth < 768) { verify.innerHTML = 'Invalid email format'; }
        else { deskVerify.innerHTML = 'Invalid email format'; }
        return;
    }

    const domain = email.split('@')[1];
    try {
        const response = await fetch(`https://dns.google/resolve?name=${domain}&type=MX`);
        const data = await response.json();

        if (data.Status === 0 && data.Answer && data.Answer.length > 0) {
            console.log('Trying to send subscription to Klaviyo');
            sendSubscription(email);
            openModal();
            return;
        } else {
            if (window.innerWidth < 768) { verify.innerHTML = 'Invalid email domain'; }
            else { deskVerify.innerHTML = 'Invalid email domain'; }
            return;
        }
    } catch (error) {
        if (window.innerWidth < 768) { verify.innerHTML = 'Error validating email domain'; }
        else { deskVerify.innerHTML = 'Error validating email domain'; }
        return;
    }
}

//Send verified email to Klaviyo
function sendSubscription(email) {
    const options = {
        method: 'POST',
        headers: {revision: '2024-07-15', 'content-type': 'application/json'},
        body: JSON.stringify({
          data: {
            type: 'subscription',
            attributes: {
              profile: {data: {type: 'profile', attributes: {email: `${email}`}}}
            },
            relationships: {list: {data: {type: 'list', id: 'SaTakW'}}}
          }
        })
      };
      
      fetch('https://a.klaviyo.com/client/subscriptions/?company_id=VcqFNC', options)
        .then(console.log('Subscription made successfully'));
}

// Modal open and close functionality after successful subscription
function openModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'block';

  const closeModal = document.getElementById('close_modal');
  closeModal.onclick = () => {
    modal.style.display = 'none';
  }
}
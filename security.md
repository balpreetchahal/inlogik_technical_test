# OWASP Security vulnerabilities on OWASP Juice shop

## Details:
- The demo site is : https://juice-shop.herokuapp.com/ for OWASP Juice shop. This site appeared to be down with 503 error. so i tried to clone the repo locally with below steps but install command resulted in error:
git clone https://github.com/juice-shop/juice-shop.git
cd juice-shop
npm install
npm start
visit http://localhost:3000

- hence i am listing few security vulnerabilities which i am aware of but could not try on demo site.
- bypassing authentication with SQL injection payloads using admin'--, ' OR 1=1--, ' OR '1'='1 in login fields
- CSS attacks like <script>alert('XSS')</script> or  <img src=x onerror=alert('XSS')>. Input fields that don't properly sanitize HTML/JavaScript
- weak/easy to guess passwords
- Session management vulnerabilities


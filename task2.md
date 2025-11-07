# UI Tests

## Happy path tests:
Test 1: The Page where user/admin can start registration process loads fine (assuming it is navigated to via some dashboard where a link/button says register).

Test 2: Two options appear on registration page i.e "register as customer" and "register as administrator". validate both of them can be selected and further registration options show accordingly.

Test 3: When clicked on "register as customer".  Email, Password textbox's and service plan (radio button or dropdown) appears (or they might appear one by one and click of Next takes user to password and service plan control).
validate user can enter valid data in all three controls, press next to go to next page and submit the form. Upon registration the Unique registration id is displayed on confirmation screen along with user details.

Test 4: When clicked on "register as administrator".  Email and Password textbox's appears (or they might appear one by one and click of Next takes user to password control).
validate admin can enter valid data in 2 textbox's, press next to go to next page and submit the form. Upon registration the Unique registration id is displayed on confirmation screen along with admin user details.

Test 5: While performing the entire registration flow (Step 1 → Step 2 → Step 3 → Submit → Confirmation), page reload does not happen.
i.e The initial page load triggers one HTML document (e.g., index.html).
During navigation between steps the browser address (URL) might change slightly (e.g., /register/step2), but the page doesn’t fully reload (no flicker, no white refresh flash).

Test 6: When navigating back and forth during registration page, the state is saved as draft. i.e user can go back and edit email and come back to submit the form.

## Negative or Additional tests:
Test 1: validate Next button appears only when data is in valid state i.e Email format is correct. Password complexity requirements are met. Else shows inline error correctly to user with details.

Test 2: Test mutiple registrations and reference id should be unique everytime and shows correctly on submission screen.

Test 3: Test Existing Email cannot be used again for registring. It should show appropriate inline or pop-up error.

Test 4: Test while one application registration is in progress (i.e in draft state), another one can/cannot (depending on requirements) be completed with same Email.

# API Tests:

Test 1: POST /api/registration/
- Send valid request with user type (customer/admin). 201 Created, body includes registrationId and other user details as per requierments.
- Validate JSON response schema fields are as per design
- validate no duplicates saved as registration id in db.
- send request without essential or required detail like userType and it should return 400 bad request

Test 2: PUT /api/registration/{id}/email
- Send valid request with valid email. 201 Created, response shows email saved
- Validate sending same email twice. 409 conflict. or 400 bad request
- email like abc.com gives 400 Bad Request, message “Invalid email format”

Similar to Test 2 , Test 3 can be written for service-plan.

Test 4: GET /api/registration/{id}
- Get request should return all user's details fine.
- This should need a valid token (depends on implementation) to authorise the user before showing details. Invalid token gives 401
- nonexisting reg-id , should return 404

## Some more detailed/advanced cases can be:

- API rate limiting testing. i.e how many users concurrently are allowed to register. can be tested using load testing tools like jmeter, k6
- session timeout behavior. i.e using auth token which is expired.
- using my auth token , i should not be able to get details of different user.
- detailed JSON schema validation in responses using libraries like zod.

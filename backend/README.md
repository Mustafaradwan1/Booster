# Authentication API Documentation

## Base URL
```
any api start with this
<your-domain>/api
url contain by 
method /router
```

---

## 1. Sign In

**Endpoint:**  
```
POST /sign-in
```

**Description:**  
Allows a registered user to log in. Sets a cookie `token` if successful.

**Request Body:**  
```json
{
  "email": "user@example.com",
  "password": "yourpassword"
}
```

**Responses and curl examples:**

- **200 Success**
```bash
curl -X POST <your-domain>/api/sign-in \
-H "Content-Type: application/json" \
-d '{"email":"user@example.com","password":"yourpassword"}'
```
Response:
```json
{ "message": "success" }
```

- **400 Email not provided**
```bash
curl -X POST <your-domain>/api/sign-in \
-H "Content-Type: application/json" \
-d '{"password":"yourpassword"}'
```
Response:
```json
{ "message": "email not provided" }
```

- **400 Password not provided**
```bash
curl -X POST <your-domain>/api/sign-in \
-H "Content-Type: application/json" \
-d '{"email":"user@example.com"}'
```
Response:
```json
{ "message": "password not provided" }
```

- **400 Invalid email**
- **400 Invalid password**
- **401 Not verified**

*(Modify payload to test each case.)*

---

## 2. Sign Out

**Endpoint:**  
```
POST /sign-out
```

**Description:**  
Logs out the user by clearing the `token` cookie.

**Request Body:**  
_No body required._

**curl Example:**
```bash
curl -X POST <your-domain>/api/sign-out
```
Response:
```json
{ "message": "success" }
```

---

## 3. Sign Up

**Endpoint:**  
```
POST /sign-up
```

**Description:**  
Registers a new user. Sends OTP to the provided email for verification.

**Request Body:**  
```json
{
  "email": "user@example.com",
  "password": "yourpassword",
  "username": "yourusername"
}
```

**Responses and curl examples:**

- **200 OTP sent**
```bash
curl -X POST <your-domain>/api/sign-up \
-H "Content-Type: application/json" \
-d '{"email":"user@example.com","password":"yourpassword","username":"user"}'
```
Response:
```json
{ "message": "please enter otp" }
```

- **400 Email not provided**
- **400 Password not provided**
- **400 Username not provided**
- **401 Not email**
- **400 Email already exists**
- **400 Unknown error**

*(Modify payload to test each case.)*

---

## 4. Verify OTP

**Endpoint:**  
```
POST /sign-up/verify-otp
```

**Description:**  
Verifies the OTP sent to the user email. Sets a cookie `token` if successful.

**Request Body:**  
```json
{
  "email": "user@example.com",
  "otp": 123456
}
```

**Responses and curl examples:**

- **200 OTP verified**
```bash
curl -X POST <your-domain>/api/sign-up/verify-otp \
-H "Content-Type: application/json" \
-d '{"email":"user@example.com","otp":123456}'
```
Response:
```json
{ "message": "Done" }
```

- **401 OTP not correct**
- **410 OTP timeout**
- **400 User not found**

*(Modify payload to test each case.)*

---

## Notes

- Cookies (`token`) are HTTP-only and expire in 7 days.  
- Passwords are hashed using bcrypt.  
- OTPs are deleted after verification or timeout.  
- All endpoints return JSON responses with `status` and `message`.  

---------------------------------------------------------------------------------------------
# POST /upgrade
## Description
This endpoint upgrades a user’s role in the system. Only users with Admin or Super Admin
privileges can perform this action.
Depending on the request body, it can promote a user to Admin, Booster, or Seller.
## Authorization
Requires a JWT token in cookies (req.cookies.token). The token must belong to a user who is
either IsAdmin or IsSuperAdmin.
## Request Body
```
{
"userId": "string",
"role": "string" // "admin", "isbooster", or "isseller" ==> "i dont care about the case of letter UPPERCASE or lowercase just in role"
}
```
## Process Logic
1. Verify token presence and validity.
2. Fetch the signed-in user.
3. Verify both signed-in and target users exist.
4. Ensure requester has admin/super admin privileges.
5. Apply role update (only super admin can make admin).
6. Save and respond with success.
## Example Request
```
POST /upgrade
Cookie: token=eyJhbGciOi...
{
"userId": "670e3c6b12a51a0f57d3a19a",
"role": "isbooster"
}
```
## Responses
### ■ 200 OK — Success
```
{ "message": "success" }
```
### ■ 401 — Token Not Provided
```
{ "message": "Token not Provides you should sign in" }
```
### ■ 401 — No User Found
```
{ "message": "no user found" }
```
### ■ 401 — Not Admin or Super Admin
```
{ "message": "you are not admin or super you have not access to do it" }
```
### ■ 401 — Only Super Admin Can Make Admin
```
{ "message": "you are not super admin you have not access to do it" }
```
### ■ 400 — Missing Data
```
{ "message": "the userid or role was not provides" }
```
### ■ 400 — Unknown Error
```
{ "message": "error" }
```
## Roles Summary
| Role | Who Can Assign It |
|-------|------------------|
| admin | Only Super Admin |
| isbooster | Admin or Super Admin |
| isseller | Admin or Super Admin |
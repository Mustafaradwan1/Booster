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
"role": "string" // "admin","Issupporter", "isbooster", or "isseller" ==> "i dont care about the case of letter UPPERCASE or lowercase just in role"
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
POST /admin/upgrade
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
| issupporter | Admin or Super Admin

# Remove Role Endpoint (Express.js)

This README explains the functionality of the provided Express.js route, which handles removing specific roles from a user in the database.

---

## 📌 Overview

This endpoint is available at:

**Route:** `/admin/downgrade`
**Method:** `POST`

Only the **Super Admin** can downgrade (remove Admin role). All other roles (Booster, Seller) can be downgraded by **Admin or Super Admin**.
This route removes a role (Admin, Booster, Seller) from a user. It is protected by an authentication middleware (`Auth`) and interacts with a Users database model.

**HTTP Method:** `POST`
**Route:** `/`
**Middleware:** `Auth`

---

## 📂 File Purpose

The file exports an Express router that:

1. Ensures the request is authenticated.
2. Accepts a user ID and a role name.
3. Finds the user in the database.
4. Removes the specified role.
5. Returns a success or error message.

---

## 📥 Request Body

The request body must contain:

```json
{
  "userId": "string",
  "role": "string"
}
```

Example:

```json
{
  "userId": "67321b29f8e5acd515bc30f1",
  "role": "admin"
}
```

---

## 🔄 Workflow

1. Authenticate request.
2. Extract `userId` + `role` from request body.
3. Find user in database.
4. Validate user existence.
5. Remove the role.
6. Save user.
7. Return success message.

---

## 📤 Success Response

```json
{
  "message": "successful"
}
```

---

## ❌ Error Responses

### User Not Found

```json
{
  "message": "No users found"
}
```

### Any Internal Error

Handled by Express `next(err)`.

---

## ✅ Summary

This route is used to **revoke a user's role** in a secure, authenticated manner. It supports removing:

## Roles Summary
| Role | Who Can remove It    |
|-------|----------------------|
| admin | Only Super Admin     |
| isbooster | Admin or Super Admin |
| isseller | Admin or Super Admin |
| issupporter | Admin or Super Admin 


The request must be authenticated and the user must exist.


---

```md
# 📦 Add Product Endpoint — README

## 🚀 Overview
This endpoint allows **Supporter** users to add new products to the system.  
It requires authentication and proper role permissions.

---

## 🔗 Endpoint
**POST** `/api/add-product/`

---

## 🔐 Authorization
This route uses authentication middleware (`Auth`).  
Only users with:

```

IsSupporter === true

````

are allowed to add products.

Authentication is done via **JWT token stored in cookies**.

---

## 📝 Request Body (JSON)

```json
{
  "ProductName": "string",
  "Count": 10,
  "Price": 9.99,
  "Description": "string",
  "Img": "string",
  "TheGame": "string"
}
````

### Required Fields

* `ProductName`
* `Count`
* `Price`

### Optional Fields

* `Description`
* `Img`
* `TheGame`

---

## ✅ Successful Response (201 Created)

```json
{
  "message": "Success",
  "product": {
    "_id": "example_id",
    "ProductName": "Magic Sword",
    "Count": 5,
    "Price": 49.99,
    "Description": "A sharp sword",
    "Img": "https://example.com/sword.png",
    "TheGame": "RPG",
    "createdAt": "2025-11-28T17:00:00.000Z",
    "updatedAt": "2025-11-28T17:00:00.000Z"
  }
}
```

---

## ❌ Error Responses

### 401 — Not Authenticated

```json
{ "message": "Token not provided" }
```

### 403 — No Permission

```json
{ "message": "You do not have access (supporter)" }
```

### 400 — Invalid Input

```json
{ "message": "ProductName is required" }
```

### 500 — Server Error

```json
{ "message": "Internal server error" }
```

---

## 🧪 Example Request (cURL)

```bash
curl -X POST "https://your-domain.com/api/products/" \
  -H "Content-Type: application/json" \
  --cookie "token=YOUR_JWT_TOKEN" \
  -d '{
    "ProductName": "Magic Wand",
    "Count": 3,
    "Price": 29.99,
    "Description": "A wand for wizards",
    "Img": "https://example.com/wand.png",
    "TheGame": "MagicWorld"
  }'
```

---

## 🧱 Notes

* Only Supporter accounts can create products.
* Price and Count must be valid numbers.
* Product data is stored in MongoDB using Mongoose models.

---

## 📚 Suggested Improvements

* Add validation using `express-validator`
* Support image uploads (multer)
* Add product categories / tags

---

## 🎉 Done!

```

---


# GMCI24-25

Important mention:
For the login page to be able to access your endpoints, you need to install couchDB and have a view(endpoint) and Document (data) to be fetched correctly.

CouchDB was recommended by the GMCI course in a previous assignment and is needed to demonstrate the SSP feature for Tutors and Students so please download it.

Steps:

-> Download CouchDB from the website https://neighbourhood.ie/download-apache-couchdb-win/
-> set Credentials as "admin" for password and email
-> in your browser navigate to http://127.0.0.1:5984/_utils
-> Create a database called gmci
-> create a document and write this inside:
{
"\_id": "f4525befa1925f599aabe65e6a000bda",
"\_rev": "2-b682e45a39aa02d9777550dcf8bb11e9",
"email": "test@test.com",
"name": "Squidward",
"lastname": "Tenticles",
"password": "test",
"role": "student"
}

-> Create view and set it like shown in the file "settings" in this repo.
-> All done !

# My First App on Heroku!

## https://genshins-blog.herokuapp.com/

This project is done following react tutorial by thenetninja for frontend, then I built the backend rest API using node,express and mysql with crud for the posts in the blog.

Notes for myself:
-CORS issue: put the Access-Control-Allow-Origin headers
-events.js issue: use pool instead of direct connection with mysql to make sure server does not crash time to time
-POSTMAN to test API calls
-for some reason if decomposing json directly doesnt work in react, use the map function even the json array has one element only

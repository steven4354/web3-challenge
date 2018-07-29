# web3-challenge routefire

you can use postman, curl or your favorite post method to access the routes.

the **/balance** POST route requires a body **payload**

```
{
  address: "YOUR-ADDRESS",
  contract: "ECR20-TOKEN-CONTRACT-ADDRESS"
}
```

the folowing **/balance** POST routes are also available

/balance/eos
/balance/thedao
/balance/bancor

and **payload** for these are

```
{
  address: "YOUR-ADDRESS"
}
```

See these images for more details: 

GET route for /balance displays instructions on using the route
![Image](./03.png?raw=true)

Test post
![Image](./01.png?raw=true)

Test post
![Image](./02.png?raw=true)




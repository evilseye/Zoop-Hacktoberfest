##Abhay Singh Verma CSE 200104003
##I prefered HTML,CSS,js
## know about zoop Through my friend

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Navbar</title>
  
<style>
body{
    background-color:rgb(174 189 88);;
}



.navbar{
    position:absolute;
    background-color: rgb(135 181 115);
    height: 57px; 
    width: 100%;
   display: flex;
   flex-direction: row;
   justify-content: center;
   border-radius: 10px;
 
}


.Home{
 text-align: center;
 margin: 128px;
 padding: 8px;
 width: 304px;
 font-size: large;
 font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
text-decoration: none;
background-color: white;
color: black;
border: 2px solid yellow;
border-radius: 10px;
}


.container{
    color: black;
}
</style>
</head>
<body>
    <div class="navbar">
        <ul >
            <a class="Home" href="#">Home</a>
            <a class="Home" href="#">About Us</a>
            <a class="Home" href="#">Contact Us</a>
            <a class="Home" href="#">Email Us</a>
        </ul>
    </div>

    <!-- <section id="Container">
        <h1 class="h-primary">
            Welcome to my onlineMeal
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus aliquid doloremque dicta, provident dolor
            velit perspiciatis</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus aliquid doloremque </p>
        <button class="btn">Order Now</button>
    </section> -->
</body>
</html>

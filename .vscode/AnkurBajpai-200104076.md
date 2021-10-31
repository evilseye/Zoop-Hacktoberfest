### Ankur Bajpai 2nd cse

### HTML, CSS,C, C++

### How did I discover Zoop?
From my friend

Project Create Google

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Google</title>
    <style>
        .google{
             position: relative; 
            border-top: 100px solid #EA4335;
            border-right: 100px solid #4285F4 ;
             border-bottom: 100px solid #34A853 ;
            border-left:  100px solid #FBBC05; 
            border-radius: 50%;
            background-color: #ffffff;
             width: 300px;
            height: 300px; 
             padding: 0; 
            margin: 5vh auto 0;
        }
        .google::before{
            content: "";
            z-index: 101;
            position: absolute;
           top: 33%;
           right: -192px;
           transform: translate(-50%);
           width: 245px;
           height: 100px;
            background: #4285F4; 
        }
        .google::after{
            content: "";
            z-index: 101;
            position: absolute;
            border-top: 200px solid transparent;
              border-right: 200px solid #ffffff; 
             top: -101px;
              right: -100px; 
              width: 0;
              height: 0; 
        }
    </style>
</head>
<body>
    <div class="google"></div>
</body>
</html>

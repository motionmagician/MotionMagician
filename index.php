<!DOCTYPE html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="index.css">
    <link rel="stylesheet"href="https://fonts.googleapis.com/css?family=Bebas+Neue">
        
    <title>Test</title>
</head>

<body>

<div class="top-logo">
    <img src="images/logo1.png" alt="Logo">
</div>


  <div class="container2">
   <video autoplay muted loop id="bgVideo" class="logo">
      <source src="/utility/f4.mp4" type="video/mp4">
    </video>
  </div>

  <div class="container">
    
    <form class="login-form" method="POST" action="process.php" onsubmit="return validate()">
      <h2>Motion Magician</h2>

      <input type="text" placeholder="email" class="input-field" id = "username" required name="email">

      <input type="text" placeholder="password" class="input-field" id = "password" required name="password">
      <button type="submit" id="addBtn" name="submit" >REGISTER</button>
     <h1 id="demo" align="center"></h1>
    </form>
  
    <script src="index.js"></script>
  </div>
  
</body>
</html>


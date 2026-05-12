<?php
$conn = mysqli_connect("localhost", "root", "", "userdata");

if (isset($_POST['submit'])) {
    $username = $_POST['email'];
    $password = $_POST['password'];

    
        $sql = "INSERT INTO users (name, password) VALUES ('$username', '$pass')";
        if (mysqli_query($conn, $sql)) {
            header("Location: /pages/success.php");
            exit();
        
        }
}
?>






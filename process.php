<?php
$conn = mysqli_connect("localhost", "root", "", "userdata");

if (isset($_POST['submit'])) {
    $username = $_POST['email'];
    $pass = $_POST['password'];

    $sql = "INSERT INTO users (name, password) VALUES ('$username', '$pass')";
     if (mysqli_query($conn, $sql)) {

        // ✅ REDIRECT HERE
        header("Location: success.php");
        exit();
}
}

?>






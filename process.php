<?php
$conn = mysqli_connect("localhost", "root", "", "userdata");

if (isset($_POST['submit'])) {
    $username = $_POST['email'];
    $extract = substr($username, -10);
    $check = "@gmail.com";
    $pass = $_POST['password'];

    if ($extract === $check) {
        $sql = "INSERT INTO users (name, password) VALUES ('$username', '$pass')";
        if (mysqli_query($conn, $sql)) {
            header("Location: success.php");
            exit();
        }
    }else {
        echo "<h1>Invalid email address. Please use a Gmail account.</h1>";
        exit();
    }
}
?>






<?php
session_start();
$conn = mysqli_connect("localhost", "root", "", "userdata");

$message = "";

if (isset($_POST['login'])) {

    $email = $_POST['email'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM users WHERE name='$email'";
    $result = mysqli_query($conn, $sql);

    if ($row = mysqli_fetch_assoc($result)) {

        if ($password == $row['password']) {
            $_SESSION['user'] = $row['name'];
            header("Location: dashboard.php");
            exit();
        } else {
            $message = "Wrong password!";
        }

    } else {
        $message = "User not found!";
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Login</title>
    <link rel="stylesheet" href="login.css">
</head>

<body>

<div class="login-container">

    <form method="POST" class="login-box">

        <h2>Login</h2>

        <input type="text" name="email" placeholder="Email / Username" required>

        <input type="password" name="password" placeholder="Password" required>

        <button type="submit" name="login" class>Login</button>

        <p class="error"><?php echo $message; ?></p>

    </form>

</div>

</body>
</html>
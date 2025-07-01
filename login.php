<?php
session_start();
require 'config.php';

// Check if form submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Fetch user
    $stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->execute([$email]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user && password_verify($password, $user['password'])) {
        // Login successful
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['fullname'] = $user['fullname'];
        header("Location: dashboard.php");
        exit;
    } else {
        // Login failed
        echo "<script>alert('Invalid email or password.'); window.location.href='login.html';</script>";
        exit;
    }
} else {
    // If accessed without POST
    header("Location: login.html");
    exit;
}
?>

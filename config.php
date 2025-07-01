<?php
// Database connection settings
$host = "sql100.infinityfree.com";
$dbname = "if0_39366275_formula5_db";
$username = "if0_39366275";
$password = "Jameskasky101"; // Replace with your real cPanel password

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    // Enable error reporting
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Database connection failed: " . $e->getMessage());
}
?>

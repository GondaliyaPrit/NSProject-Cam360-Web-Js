<?php
// Database configuration
$dbHost     = "localhost";
$dbUsername = "u761907464_root";
$dbPassword = "Prit@99790";
$dbName     = "u761907464_prit360";

// Create database connection
$db = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);

// Check connection
if ($db->connect_error) {
    die("Connection failed: " . $db->connect_error);
}
?>
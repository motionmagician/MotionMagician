<?php
session_start();
$username = $_SESSION['username'] ?? "Guest";
?>

<!DOCTYPE html>
<html>
<head>
    <title>Dashboard</title>
    <link rel="stylesheet" href="dashboard.css">
</head>

<body>

<!-- ✅ NAVBAR -->
<div class="navbar">

    <div class="logo">Motion Magician</div>

    <input type="text" placeholder="Search videos..." class="search">

    <div class="nav-user">
        👤 <?php echo $username; ?>
    </div>

</div>

<div class="profile-card">

    <!-- LEFT: PROFILE IMAGE (CLICKABLE) -->
    <label class="profile-preview">

        <img id="profileImg" src="https://placehold.co/400" alt="Profile">

        <input type="file" accept="image/*" class="profile-input" onchange="previewProfile(event)">

    </label>

    <!-- RIGHT: EDIT INFO -->
    <div class="profile-info">

        <input type="text" placeholder="Channel Name" class="field">

        <textarea placeholder="Channel Description" class="field"></textarea>

    </div>

</div>

<!-- MAIN DASHBOARD -->
<div class="dashboard">

    <!-- UPLOAD -->
    <div class="panel">

        <h3>Upload Video</h3>

        <input type="text" placeholder="Title" class="field">
        <textarea placeholder="Description" class="field"></textarea>

    <div class="upload-box">

    <p>📤 Drag & Drop your video here</p>
    <small>or click to select file</small>

    <input type="file" class="file-input">

    </div>

        <button class = "btn">Upload</button>

    </div>

    <!-- VIDEOS -->
    <div class="panel">

        <h3>Your Videos</h3>

        <div class="grid">
            <div class="card">🎬 Video 1</div>
            <div class="card">🎬 Video 2</div>
        </div>

    </div>

</div>

<!-- IMAGE PREVIEW SCRIPT -->
<script>
function loadImage(event) {
    const output = document.getElementById('preview');
    output.src = URL.createObjectURL(event.target.files[0]);
}
</script>

</body>
</html>
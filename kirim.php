<?php
include("connect.php");

$nama   = $_POST['Nama'];
$email  = $_POST['Email'];
$subjek = $_POST['Subjek'];
$pesan  = $_POST['Pesan'];

$sql = "INSERT INTO lutfi_porto (nama, email, subjek, pesan, waktu_kirim) VALUES ('$nama', '$email', '$subjek', '$pesan', CURRENT_TIMESTAMP)";
$query = mysqli_query($koneksi, $sql);

if ($query) {
    echo "<script>
        alert('Message sent successfully!');
        window.location.href = 'index.php';
    </script>";
} else {
    echo "<script>
        alert('Gagal menyimpan data: " . mysqli_error($koneksi) . "');
        window.location.href = 'index.php';
    </script>";
}
?>

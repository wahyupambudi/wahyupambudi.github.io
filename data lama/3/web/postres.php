<?php 
	$npm = $_POST['npm'];
	$nama = $_POST['nama'];
	$alamat = $_POST['alamat'];
	$jurusan = $_POST['jurusan'];
?>

<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
	<title>Latihan GET dan POST</title>
</head>
<body>
	<h4 class="bg-success text-white" style="padding: 10px">Penggunaan POST <a href="index.php" class="text-light" style="margin-left: 10px">Home</a></h4><br>
	<!-- hasil form get -->

	<div class="container" align="center" id="gas">

		<table class="table table-striped text-center">
		  <thead>
		    <tr>
		      <th scope="col">NPM</th>
		      <th scope="col">:</th>
		      <th scope="col"><?= $npm; ?></th>
		    </tr>
		  </thead>
		  <tbody>
		    <tr>
		      <th scope="row">Nama</th>
		      <th scope="col">:</th>
		      <th scope="col"><?= $nama; ?></th>
		  </tr>
		   <tr>
		      <th scope="row">Alamat</th>
		      <th scope="col">:</th>
		      <th scope="col"><?= $alamat; ?></th>
		  </tr>
		   <tr>
		      <th scope="row">Jurusan</th>
		      <th scope="col">:</th>
		      <th scope="col"><?= $jurusan; ?></th>
		  </tr>
		  </tbody>
		</table>
		<a href="postfile.php" title="" class="btn btn-primary">Kembali</a>
		<a href="index.php" title="" class="btn btn-danger">Home</a>
	</div>
</body>
</html>
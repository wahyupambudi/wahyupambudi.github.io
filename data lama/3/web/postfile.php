<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
	<title>Latihan POST dan POST</title>
</head>
<body>
	<h4 class="bg-success text-white" style="padding: 10px">Penggunaan POST <a href="index.php" class="text-light" style="margin-left: 10px">Home</a></h4><br>
	<div class="container" align="center">

		<!-- form method POST -->
		<form method="POST" action="postres.php">
		  <div class="form-group">
		    <label>NPM</label>
		    <input type="text" class="form-control" name="npm" placeholder="Masukkan NPM" required>
		  </div>
		  <div class="form-group">
		    <label>Nama</label>
		    <input type="text" class="form-control" name="nama" placeholder="Masukkan Nama" required>
		  </div>
		  <div class="form-group">
		    <label>Alamat</label>
		    <input type="text" class="form-control" name="alamat" placeholder="Masukkan Alamat" required>
		  </div>
		  <div class="form-group">
		    <label>Jurusan</label>
		    <input type="text" class="form-control" name="jurusan" placeholder="Masukkan jurusan " required>
		  </div>

		  <button type="submit" class="btn btn-primary" style="width: 100%;">Kirim Data</button>
		</form>
	</div>
</body>
</html>
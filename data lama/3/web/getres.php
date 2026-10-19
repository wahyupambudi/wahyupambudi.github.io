<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
	<title>Latihan GET dan POST</title>
</head>
<body>
	<h4 class="bg-success text-white" style="padding: 10px">Penggunaan GET <a href="index.php" class="text-light" style="margin-left: 10px">Home</a></h4><br>
	<!-- hasil form get -->

	<div class="container" align="center" id="gas">

		<table class="table table-striped text-center">
		  <thead>
		    <tr>
		      <th scope="col">NPM</th>
		      <th scope="col">:</th>
		      <th scope="col"><?= $_GET['npm']; ?></th>
		    </tr>
		  </thead>
		  <tbody>
		    <tr>
		      <th scope="row">Nama</th>
		      <th scope="col">:</th>
		      <th scope="col"><?= $_GET['nama']; ?></th>
		  </tr>
		   <tr>
		      <th scope="row">Alamat</th>
		      <th scope="col">:</th>
		      <th scope="col"><?= $_GET['alamat']; ?></th>
		  </tr>
		   <tr>
		      <th scope="row">Jurusan</th>
		      <th scope="col">:</th>
		      <th scope="col"><?= $_GET['jurusan']; ?></th>
		  </tr>
		  </tbody>
		</table>
		<a href="getfile.php" title="" class="btn btn-primary">Kembali</a>
		<a href="index.php" title="" class="btn btn-danger">Home</a>
	</div>
</body>
</html>
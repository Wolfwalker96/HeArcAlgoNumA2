<html>
<head>
</head>
<body>
	<script src="typeTeamTwo.js" ></script>
	<script src="arrayFunc.js" ></script>
	<script>
		var dump = new TeamTwo();
		dump.sgn = 1;
		fill(dump.exp, 1);
		fill(dump.mant, 1);

		var dada = dump.getNumeric();
		document.write(dada + "</br>");

		document.write("End file");


		/*
			Merci de faire les tests ainsi.
				instant -> F5 (pas de presse bouton)
				easy	-> change 2 var
				propre  -> propre
		*/
	</script>
</body>
</html>

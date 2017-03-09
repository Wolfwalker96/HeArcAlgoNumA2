<script>
<?php 
	require_once("arrayFunc.js");
	require_once("typeTeamTwo.js");
?>
var dump = new TeamTwo();
dump.sgn = 0;
fill(dump.exp, 1);
fill(dump.mant, 0);

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
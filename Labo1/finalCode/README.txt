	
	Numeric Algorithm course, team2 
	HES-SO HE-ARC - 09.03.2017
	
	Marc Friedli
	Paul Ami Jean-Bourquin
	Florian Fasmeyer

Description:	

	TeamTwo is a floating type of 37 pseudo bits.
	bit are being simulated with arrays, get/set
	functions ensure that they behave as such. 
	
	Numerical operations:
		
		declaration			var num = new TeamTwo;
		initialisation		num.equ = n;
		addition			num.add(n);
		Reading				num.getNumeric();	return n
		
	Binary operations:
		
		num.init(sgn, exp, mant);
		
		num.setSgn(n); 		n = {1,0}
		num.setExp(t[]);	[n x 9]
		num.setMant(t[]);	[n x 28]
		
		num.getSgn();		return 1 or 0
		num.getExp();		return an array of 9 length
		num.getMant();		return an array of 28 length (hidden bit)
		

	Special cases:
					<sgn 1>	<exp 9>	<mant 27>	info
		 0 			0	 	0 		0
		-0 			1	 	0 		0
		NaN			0		1		X			X>0	
		INF+		0		1		0
		INF-		1		1 		0
		
		note: any value returned is compatible with js std,
		-0 even if only displayed as 0 will behave properly
		as 1/(-0) = -Infinity

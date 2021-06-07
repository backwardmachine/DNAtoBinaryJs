function dna2binary( sequence )
{
	var str = '';
	for ( let char of sequence )
	{
		switch( char )
		{
			case 'A':
			case 'a':
				str += '00';
				break;
			case 'C':
			case 'c':
				str += '01';
				break;
			case 'G':
			case 'g':
				str += '10';
				break;
			case 'T':
			case 't':
				str += '11';
				break;
		}
	}
	return str;
}

function binary2dna( sequence )
{
	var word = '';
	var words = new Array();
	var k = 0;
	for( let char of sequence )
	{
		if ( k == 2 ) {
			words.push( word );
			word = '';
			k = 0;
		}
		word += char;
		k++;
	}
	if ( k == 2 ) {
		words.push( word );
		word = '';
		k = 0;
	}

	var str = '';
	for ( let word of words )
	{
		switch( word )
		{
			case '00':
				str += 'A';
				break;
			case '01':
				str += 'C';
				break;
			case '10':
				str += 'G';
				break;
			case '11':
				str += 'T';
				break;
		}
	}

	return str;
}

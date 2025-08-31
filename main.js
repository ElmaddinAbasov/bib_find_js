"use strict"
const prompt = require('prompt-sync')();
let authorIndexVal = 0;
class entry
{
	#authorName;
	#univercityName;
	#publicationDate;
	#paperName;
	#author_key;
        bib_key()
        {       
                this.#author_key = authorIndexVal;
                authorIndexVal++;
        }	
	bib_entry()
	{
		let decision;
		this.#authorName = prompt('');
		this.#univercityName = prompt('');
		this.#publicationDate = prompt('');
		this.#paperName = prompt('');
		decision = prompt('');
		switch (decision)
		{
			case "alter" :
				bib_key();
				console.log("alter");	
				break;
			case "submit" :
				bib_key();
				console.log("submit");				//later add to a database or write to a file
				break;
		}
	}
	get get_author_name()
	{
		console.log(`Author name - ${this.#authorName}\n`);
	}
	get get_univercity_name()
	{
		console.log(`Univercity name - ${this.#univercityName}\n`);
	}
	get get_publication_date()
	{
		console.log(`Publication date - ${this.#publicationDate}`);
	}
	get get_paper_name()
	{
		console.log(`Paper name - ${this.#paperName}\n`);
	}
};
let e = new entry();
e.bib_entry();
e.get_author_name;
e.get_univercity_name;
e.get_publication_date;
e.get_paper_name;
e.bib_key();

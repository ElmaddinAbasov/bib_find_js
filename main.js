"use strict"
const prompt = require('prompt-sync')();
let authorIndexVal = 0;
class temporary
{
	#temp = [];
	saveTemp(object)
	{
		this.#temp.push(object);
	}
	get get_length()
	{
		return this.#temp.length;
	}
	get get_temp()
	{
		return this.#temp[0];
	}
};
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
	bib_entry(db)
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
				this.bib_key();
				db.saveTemp(this);
				break;
			case "submit" :
				this.bib_key();
				db.saveTemp(this);
				break;
		}
	}
	bib_edit()
	{

	}
	get get_author_name()
	{
		console.log(`${this.#authorName}\n`);
	}
	get get_univercity_name()
	{
		console.log(`${this.#univercityName}\n`);
	}
	get get_publication_date()
	{
		console.log(`${this.#publicationDate}\n`);
	}
	get get_paper_name()
	{
		console.log(`${this.#paperName}\n`);
	}
};
let temp = new temporary();
let e = new entry();
e.bib_entry(temp);
console.log(temp.get_length);
let o = temp.get_temp;
o.get_author_name;
o.get_univercity_name;
o.get_publication_date;
o.get_paper_name;

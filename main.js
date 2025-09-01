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
	get_temp(index)
	{
		if (index < 0 && index >= this.#temp.length)
		{
			console.error("ERROR: get get_temp(index) index out of bound\n");
			return undefined;
		}
		return this.#temp[index];
	}
	edit_object(oldName, newName)
	{
		let i;
		for (i = 0; i < this.#temp.length; i++)
		{
			if (this.#temp[i].get_author_name == oldName)
			{
				this.#temp[i].set_name = newName;
				return;
			}
		}
		return undefined;
	}
	find(name)
	{
		let i;
		for (i = 0; i < this.#temp.length; i++)
		{
			if (this.#temp[i].get_author_name == name)
				return this.#temp[i];
		}
		return undefined;
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
			case "submit" :
				this.bib_key();
				db.saveTemp(this);
				break;
			default :
				break;
		}
	}
	bibFind(db, name)
	{
		let object = db.find(name);
		return object;
	}
	set set_name(name)
	{
		this.#authorName = name;
	}
	bib_edit(db, oldName, newName)
	{
		db.edit_object(oldName, newName);
	}
	get get_author_name()
	{
		return this.#authorName;
	}
	get get_univercity_name()
	{
		return this.#univercityName;
	}
	get get_publication_date()
	{
		return this.#publicationDate;
	}
	get get_paper_name()
	{
		return this.#paperName;
	}
};
let temp = new temporary();
let e = new entry();
e.bib_entry(temp);
console.log(temp.get_length);
let o = temp.get_temp(0);
console.log(o.get_author_name);
console.log(o.get_univercity_name);
console.log(o.get_publication_date);
console.log(o.get_paper_name);


e.bib_edit(temp, "king", "Blatty");
console.log('------------------------------\n');
o = temp.get_temp(0);
console.log(o.get_author_name);
console.log(o.get_univercity_name);
console.log(o.get_publication_date);
console.log(o.get_paper_name);

o = e.bibFind(temp, "Blatty");
console.log(o.get_author_name);
console.log(o.get_univercity_name);
console.log(o.get_publication_date);
console.log(o.get_paper_name);


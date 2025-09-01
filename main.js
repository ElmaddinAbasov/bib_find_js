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
		if (index < 0 || index >= this.#temp.length)
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
	print_entry()
	{
		console.log(this.#authorName, "\n", this.#univercityName, "\n", this.#publicationDate, 
		"\n", this.#paperName, "\n");
	}
};
let temp = new temporary();
let i, e;
const number_of_objects = 3;
for (i = 0; i < number_of_objects; i++)
{
	e = new entry();
	e.bib_entry(temp);
	console.log('<--------------------------->\n');
}
let o = temp.get_temp(1);
if (o == undefined)
	process.exit(1);
console.log("print_entry: result\n");
o.print_entry();
console.log("\nfind entry\n");
o = o.bibFind(temp, "blatty");
o.print_entry();

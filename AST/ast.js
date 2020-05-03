function collapse(obj)
{
	item=obj.parentNode;
	var newDisplay='none';
	if(obj.innerText==='-')
	{
		newDisplay='none';
		obj.innerText='+';
	}
	else
	{
		newDisplay='block';
		obj.innerText='-';
	}
	for(var i=0;i<item.children.length;i++)
	{
		var child=item.children[i];
		if(child.className.includes('child'))
		{
				child.style.display=newDisplay;
		}
	}
}

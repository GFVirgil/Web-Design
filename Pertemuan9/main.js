var myImage=document.querySelector('img');

myImage.onclick=function()
{
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'Logo polnep.jpg') 
	{
		myImage.setAttribute('src','Logo Elektro.png');
	} else 
	{
		myImage.setAttribute('src','Logo polnep.jpg');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() 
{
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.innerHTML='Selamat datang, ' +myName;
}

if(!localStorage.getItem('name')) 
{
	setUserName();
} else 
{
	var storedName = localStorage.getItem('name');
	myHeading.innerHTML='Selamat datang, ' +storedName;
}

myButton.onclick=function() 
{
	setUserName();
}
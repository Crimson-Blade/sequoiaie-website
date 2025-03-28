import Link from 'next/link';
import React from 'react';


const WhatMore = () => {
	return (
		<div className='what__more'>
			<h1>What more are you waiting for?</h1>
			<p>Get a Quote from us and let’s get started working!</p>
			<a className='button__red' href='/contactus'>
				Get a Quote
			</a>
		</div>
	);
};

export default WhatMore;

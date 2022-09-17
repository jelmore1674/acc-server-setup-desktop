import React from 'react';
import styled from '@emotion/styled';
import { Input, Select } from './components';

const Container = styled.main({
	maxWidth: '1400px',
	width: '100%',
	padding: '1rem 1rem',
	backgroundColor: '#fafafa',
	height: '100%',
});

function App() {
	return (
		<Container>
			<Input label='Server Name' type='text' />
			<Input label='Server Admin Password' type='text' />
			<Input label='Spectator Password' type='text' />
			<Select />
		</Container>
	);
}

export default App;

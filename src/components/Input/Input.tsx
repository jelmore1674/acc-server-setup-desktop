import React from 'react';
import styled from '@emotion/styled';
import Form from 'react-bootstrap/Form';

const Wrapper = styled(Form.Group)({
	maxWidth: 'calc(100% - 1rem)',
});

export const Input = ({ label, type }: any) => {
	return (
		<Wrapper className='mb-3'>
			<Form.Label>{label}</Form.Label>
			<Form.Control type={type} />
		</Wrapper>
	);
};

import Form from 'react-bootstrap/Form';
import styled from '@emotion/styled';

const Wrapper = styled(Form.Select)({
	maxWidth: 'calc(100% - 1rem)',
});

export const Select = ({ options }: any) => {
	return (
		<Wrapper aria-label='Default select example'>
			<option>Open this select menu</option>
			<option value='1'>One</option>
			<option value='2'>Two</option>
			<option value='3'>Three</option>
		</Wrapper>
	);
};

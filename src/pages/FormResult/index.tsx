import { useNavigate, Link } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { useEffect } from 'react';


export const FormResult = () => {

    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if (state.name === '') {
            navigate('/');
        } else if(state.email === '' || state.github === ''){
            navigate('/step3')
        }else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 4
            });
        }
    }, []);

    return (
        <Theme>
            <C.Container>
                <h1>Parabens {state.name}, cadastro concluído.</h1>
                <p>Revise se os dados estão corretos, se tiver alguma alteração, basta voltar e ajustar.</p>

                <hr />

                <C.InfoArea>
                    <C.Description>
                        <p>Nome:</p>
                        <p>Level:</p>
                        <p>Email:</p>
                        <p>GitHub:</p>
                    </C.Description>

                    <C.Result>
                        <p>{state.name}</p>
                        <p>{state.level === 0 ? 'Sou Iniciante 🤗' : 'Sou Programador 😎'}</p>
                        <p>{state.email}</p>
                        <p>{state.github}</p>
                    </C.Result>
                </C.InfoArea>
                <hr />
                <Link className='backButton' to='/step3'>Voltar</Link>

            </C.Container>
        </Theme>

    );
}
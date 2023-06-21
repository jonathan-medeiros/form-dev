import { useRef, KeyboardEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect } from 'react';


export const FormStep3 = () => {

    const navigate = useNavigate();
    const { state, dispatch } = useForm();
    const inputGithubRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (state.name === '') {
            navigate('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3
            });
        }
    }, []);

    const handleNextStep = () => {
        if (state.email !== '' && state.github !== ''){
            console.log(state);
            navigate('/step4');
        }else{
            alert('Preencha todos os campos');
        }
        
    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        })
    }
    const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value
        })
    }

    const handleKeyUpEmail = (e: KeyboardEvent) =>{
        if (e.code === 'Enter' && state.email !== ''){
            if (inputGithubRef.current !== null){
                inputGithubRef.current.focus();
            }
        }
    }

    const handleKeyUpGithub = (e: KeyboardEvent) =>{
        if (e.code === 'Enter' && state.email !== ''){
            navigate('/step4');
        }
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 3/3 </p>
                <h1>Legal {state.name}, onde te achamos?</h1>
                <p>Preencha os contatos para conseguirmos falar com você.</p>

                <hr/>

                <label>
                    Qual seu e-mail?
                    <input 
                    type='email'
                    autoFocus
                    value={state.email}
                    onChange={handleEmailChange}
                    onKeyUp={handleKeyUpEmail}
                    />
                </label>

                <label>
                    Qual seu GitHub?
                    <input 
                    type='url'
                    value={state.github}
                    onChange={handleGithubChange}
                    ref={inputGithubRef}
                    onKeyUp={handleKeyUpGithub}
                    />
                </label>

                <Link className='backButton' to='/step2'>Voltar</Link>
                <button onClick={handleNextStep}>Finalizar</button>

            </C.Container>
        </Theme>

    );
}
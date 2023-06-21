import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, FormActions } from '../../contexts/FormContext';
import * as C from './styles';
import { Header } from '../Header';
import { SidebarItems } from '../SidebarItems';
import { ReactComponent as ProfileSVG } from '../../svgs/profile.svg';
import { ReactComponent as BookSVG } from '../../svgs/book.svg';
import { ReactComponent as MailSVG } from '../../svgs/mail.svg';
import { ReactComponent as CheckedSVG } from '../../svgs/checked.svg';

type Props = {
    children: ReactNode
}

export const Theme = ({ children }: Props) => {
    
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    const setCurrentStep = (currentStep: number) => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: currentStep
        });

        switch (currentStep){
            case 1:
                navigate('/');
                break;
            case 2:
                navigate('/step2');
                break;
            case 3:
                navigate('/step3');
                break;
            case 4:
                navigate('/step4');
                break;
        }
    }
    
    return (
        <C.Container>
            <C.Area>    
                <Header />
                
                <C.Steps>
                    <C.Sidebar>
                        <SidebarItems
                            title='Pessoal'
                            description='Se identifique'
                            Icon={ProfileSVG}
                            selected={state.currentStep === 1}
                            onClick={() => setCurrentStep(1)}
                        />
                        <SidebarItems
                            title='Profissional'
                            description='Seu nível'
                            Icon={BookSVG}
                            selected={state.currentStep === 2}
                            onClick={() => setCurrentStep(2)}
                        />
                        <SidebarItems
                            title='Contatos'
                            description='Como te achar'
                            Icon={MailSVG}
                            selected={state.currentStep === 3}
                            onClick={() => setCurrentStep(3)}
                        />
                        <SidebarItems
                            title='Revisão'
                            description='Validar os dados'
                            Icon={CheckedSVG}
                            selected={state.currentStep === 4}
                            onClick={() => setCurrentStep(4)}
                        />
                    </C.Sidebar>
                    <C.Page>
                        {children}    
                    </C.Page>
                </C.Steps>
            </C.Area>
        </C.Container>
    )
}
import * as C from './styles';

type Props = {
    title: string;
    description: string;
    Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    selected: boolean;
    onClick: () => void;
}

export const SidebarItems = ({ title, description, Icon, selected, onClick }: Props) => {
    return (
        <C.Container onClick={onClick}>
            <C.Info>
                <C.Title>
                    {title}
                </C.Title >
                <C.Description>
                    {description}
                </C.Description>
            </C.Info>

            <C.IconArea selected={selected}>
                <Icon fill='#FFF' height='25px'/>
            </C.IconArea>

            <C.Dot>
                <C.Mark selected={selected}/>
            </C.Dot>
        </C.Container>
    );
}
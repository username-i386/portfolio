import { FC, ReactElement, createContext, useContext, useState } from "react";


interface IModalContext {
    isOpen: boolean
    onToggle: () => void
    onClose: () => void
}

const ModalContext = createContext<IModalContext>({
    isOpen: false,
    onToggle: () => undefined,
    onClose: () => undefined,
});

export const useModal = (): IModalContext => {
    return useContext(ModalContext);
}


type Props = {
    children: ReactElement
}

export const ModalProvider: FC<Props> = ({ children }): ReactElement => {

    const [modal, setModal] = useState<boolean>(false);

    const onToggle = () => setModal(prev => !prev);

    const onClose = () => setModal(false);

    return (
        <ModalContext.Provider value={{
            isOpen: modal,
            onToggle,
            onClose,
        }}>
            { children }
        </ModalContext.Provider>
    )
}
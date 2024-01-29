import styles from '@/components/navbar/Navbar.module.css';
const Modal=({children, offModel})=>{
    return (
        <>
            <div className={styles.Modal} onClick={offModel} />
                <dialog open className={styles.dialougeModal}>
                {children}
                </dialog>
      
        </>
    )
}

export default Modal;
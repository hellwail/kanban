import { useState } from 'react'
import classNames from 'classnames'
import Logo from '../../assets/logo.svg'
import css from './Header.module.css'

const Header = () => {
    const [windowOpened, setWindowState] = useState(false)
    function seitchProfileWindow() {
        setWindowState(!windowOpened)
    }
    return (
        <header className={css.header}>
            <h1 className={css.title}>Awesome Kanban Board</h1>
            <div className={css.logoBlock}>
                <p className={css.userName}>
                <div className={css.logoImageBlock}>
                    <img className={css.logo} src={Logo} alt='Logo' />
                    <span className={classNames(css.logoArrow, windowOpened?css.reverted:'')}>&or; </span>
                </div>
                <div className={classNames(css.userActions, windowOpened?css.opened:'')}>					
					<div className={classNames(css.profile, css.userActionItem)}>Профиль</div>
					<div className={classNames(css.logout, css.userActionItem)}>Выйти</div>
				</div>
                </p>
            </div>
        </header>
    )
}

export default Header;
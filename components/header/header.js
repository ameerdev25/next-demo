import Link from "next/link";
import { Nav, Navbar } from "rsuite";
import NavItem from "./NavItem";

export default function Header() {

    const aboutItem = {title:'ABOUT', link: '/about'}
    const articleItem = {
        menuTitle: 'ARTICLE',
        items: [
            {title:'Article 1', link: '#'},
            {title:'Article 2', link: '#'},
            {title:'Article 3', link: '#'}
        ]        
    }

    return(
        <Navbar appearance="subtle">
            <Navbar.Brand><Link href='/' className="hover:no-underline text-neutral-600">LOGO</Link></Navbar.Brand>
            <Nav>
                <NavItem type='item' item={aboutItem} />
                <NavItem type='menu' item={articleItem} />
            </Nav>
        </Navbar>
    )
}